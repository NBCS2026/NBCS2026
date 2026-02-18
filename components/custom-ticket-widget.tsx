"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const BIZZABO_EVENT_ID = process.env.NEXT_PUBLIC_BIZZABO_EVENT_ID || "792278";

interface Ticket {
  id: string;
  name: string;
  description?: string;
  price: number;
  currency?: string;
  available?: boolean;
  quantity?: number;
}

interface TicketSelection {
  ticketId: string;
  quantity: number;
  ticketName: string;
  price: number;
}

interface CustomTicketWidgetProps {
  locale: string;
  eventId?: string;
}

export function CustomTicketWidget({
  locale,
  eventId = BIZZABO_EVENT_ID,
}: CustomTicketWidgetProps) {
  const ticketTranslations = useTranslations("tickets");
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTickets, setSelectedTickets] = useState<
    Map<string, TicketSelection>
  >(new Map());
  const [showRegistration, setShowRegistration] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Registration form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    company: "",
    jobTitle: "",
    streetAddress: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    dietaryRestrictions: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
  });

  // Promo code state
  const [promoCode, setPromoCode] = useState("");

  // Payment form state (for paid tickets)
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });

  // Check if any selected ticket requires payment
  const hasPaidTickets = Array.from(selectedTickets.values()).some(
    (selection) => selection.price > 0
  );

  const isFrench = locale === "fr";
  
  // Helper function to get translated ticket name/description
  const getTranslatedTicket = (ticket: Ticket): Ticket => {
    const ticketId = ticket.id;
    try {
      // Try to get translation using next-intl
      const translatedName = ticketTranslations(`${ticketId}.name` as any);
      const translatedDescription = ticketTranslations(`${ticketId}.description` as any);
      
      // If translation exists and is different from the key, use it
      if (translatedName && translatedName !== `${ticketId}.name` && typeof translatedName === 'string') {
        return {
          ...ticket,
          name: translatedName,
          description: translatedDescription && 
                       translatedDescription !== `${ticketId}.description` && 
                       typeof translatedDescription === 'string'
            ? translatedDescription 
            : ticket.description,
        };
      }
    } catch (e) {
      // Translation not found, use original
      console.log(`Translation not found for ticket ${ticketId}, using original`);
    }
    return ticket;
  };

  // UI Translations
  const t = {
    loading: isFrench ? "Chargement des billets..." : "Loading tickets...",
    error: isFrench
      ? "Erreur lors du chargement des billets"
      : "Error loading tickets",
    selectTickets: isFrench
      ? "Sélectionnez vos billets"
      : "Select Your Tickets",
    continue: isFrench ? "Continuer" : "Continue",
    registration: isFrench ? "Inscription" : "Registration",
    firstName: isFrench ? "Prénom" : "First Name",
    lastName: isFrench ? "Nom de famille" : "Last Name",
    email: isFrench ? "Courriel" : "Email",
    phone: isFrench ? "Téléphone" : "Phone",
    age: isFrench ? "Âge" : "Age",
    ageRequired: isFrench ? "L'âge est requis pour les billets jeunesse" : "Age is required for youth tickets",
    company: isFrench ? "Organisation / Entreprise" : "Company / Organization",
    jobTitle: isFrench ? "Titre du poste" : "Job Title",
    address: isFrench ? "Adresse" : "Address",
    streetAddress: isFrench ? "Adresse (rue)" : "Street Address",
    city: isFrench ? "Ville" : "City",
    province: isFrench ? "Province / État" : "Province / State",
    postalCode: isFrench ? "Code postal" : "Postal Code",
    country: isFrench ? "Pays" : "Country",
    dietaryRestrictions: isFrench ? "Restrictions alimentaires / Allergies" : "Dietary Restrictions / Allergies",
    emergencyContact: isFrench ? "Contact d'urgence" : "Emergency Contact",
    emergencyContactName: isFrench ? "Nom du contact d'urgence" : "Emergency Contact Name",
    emergencyContactPhone: isFrench ? "Téléphone du contact d'urgence" : "Emergency Contact Phone",
    promoCode: isFrench ? "Code promotionnel" : "Promo Code",
    promoCodePlaceholder: isFrench ? "Entrez votre code (optionnel)" : "Enter your code (optional)",
    payment: isFrench ? "Informations de paiement" : "Payment Information",
    cardNumber: isFrench ? "Numéro de carte" : "Card Number",
    expiryDate: isFrench ? "Date d'expiration (MM/AA)" : "Expiry Date (MM/YY)",
    cvv: isFrench ? "CVV" : "CVV",
    cardholderName: isFrench ? "Nom sur la carte" : "Cardholder Name",
    submit: isFrench ? "Finaliser la commande" : "Complete Order",
    cancel: isFrench ? "Annuler" : "Cancel",
    success: isFrench
      ? "Inscription réussie! Vérifiez votre courriel."
      : "Registration successful! Please check your email.",
    noTickets: isFrench
      ? "Aucun billet disponible"
      : "No tickets available",
    free: isFrench ? "Gratuit" : "Free",
    selectQuantity: isFrench ? "Quantité" : "Quantity",
    total: isFrench ? "Total" : "Total",
    required: isFrench ? "Requis" : "Required",
  };

  // Fetch tickets from API
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        setError(null);
        // Pass locale to API for localized content
        const localeParam = isFrench ? "fr-CA" : "en-US";
        const response = await fetch(`/api/bizzabo/tickets/${eventId}?locale=${localeParam}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch tickets: ${response.status}`);
        }

        const data = await response.json();
        
        // Handle different possible response structures
        // v2 API returns: { links, content: [...], page }
        // v1 API might return: array, { tickets: [...] }, or { data: [...] }
        let ticketsData: Ticket[] = [];
        if (Array.isArray(data)) {
          ticketsData = data;
        } else if (data.content && Array.isArray(data.content)) {
          // v2 API format - content array
          ticketsData = data.content;
        } else if (data.tickets && Array.isArray(data.tickets)) {
          ticketsData = data.tickets;
        } else if (data.data && Array.isArray(data.data)) {
          ticketsData = data.data;
        }

        // Filter to only show the 3 specific ticket types
        // UPDATE THIS ARRAY WITH YOUR TICKET IDs
        const allowedTicketIds = ["689387", "689392", "689393"]; // Youth Pass, Early Bird Summit Only, Early Bird Summit + Gala
        
        // Filter available tickets, apply translations, convert prices from cents to dollars, and set default quantity to 0
        const availableTickets = ticketsData
          .filter((ticket: Ticket) => {
            // Only show tickets that are available AND in our allowed list
            return ticket.available !== false && allowedTicketIds.includes(ticket.id);
          })
          .map((ticket: Ticket) => {
            const translatedTicket = getTranslatedTicket(ticket);
            // Convert price from cents to dollars (API returns prices in cents)
            let finalPrice = translatedTicket.price || 0;
            if (finalPrice > 0) {
              finalPrice = finalPrice / 100; // Convert cents to dollars
            }
            
            return {
              ...translatedTicket,
              price: finalPrice,
              currency: translatedTicket.currency || "CAD", // Use currency from API or default to CAD
              quantity: 0,
            };
          });

        setTickets(availableTickets);
      } catch (err) {
        console.error("Error fetching tickets:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load tickets"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [eventId, isFrench, ticketTranslations]);

  // Handle ticket quantity change
  const handleQuantityChange = (ticketId: string, quantity: number) => {
    const ticket = tickets.find((t) => t.id === ticketId);
    if (!ticket) return;

    const newSelection = new Map(selectedTickets);

    if (quantity === 0) {
      newSelection.delete(ticketId);
    } else {
      newSelection.set(ticketId, {
        ticketId,
        quantity,
        ticketName: ticket.name,
        price: ticket.price || 0,
      });
    }

    setSelectedTickets(newSelection);
  };

  // Calculate total
  const calculateTotal = (): number => {
    let total = 0;
    selectedTickets.forEach((selection) => {
      total += selection.price * selection.quantity;
    });
    return total;
  };

  // Handle continue to registration
  const handleContinue = () => {
    if (selectedTickets.size === 0) {
      alert(isFrench ? "Veuillez sélectionner au moins un billet" : "Please select at least one ticket");
      return;
    }
    setShowRegistration(true);
  };

  // Check if youth ticket is selected (requires age)
  const hasYouthTicket = Array.from(selectedTickets.values()).some((selection) => {
    const ticket = tickets.find((t) => t.id === selection.ticketId);
    return ticket?.name?.toLowerCase().includes("youth") || 
           ticket?.name?.toLowerCase().includes("jeunesse") ||
           ticket?.id === "689387"; // Youth Pass ID - UPDATE IF NEEDED
  });

  // Handle registration submission using Create Order API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert(
        isFrench
          ? "Veuillez remplir tous les champs requis (nom, prénom, courriel, téléphone)"
          : "Please fill in all required fields (first name, last name, email, phone)"
      );
      return;
    }

    // Validate age for youth tickets
    if (hasYouthTicket && (!formData.age || parseInt(formData.age) < 18 || parseInt(formData.age) > 30)) {
      alert(t.ageRequired);
      return;
    }

    // Validate payment for paid tickets
    if (hasPaidTickets) {
      if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.cardholderName) {
        alert(
          isFrench
            ? "Veuillez remplir toutes les informations de paiement"
            : "Please fill in all payment information"
        );
        return;
      }

      // Basic card number validation (16 digits)
      const cardNumberClean = paymentData.cardNumber.replace(/\s/g, "");
      if (cardNumberClean.length < 13 || cardNumberClean.length > 19 || !/^\d+$/.test(cardNumberClean)) {
        alert(
          isFrench
            ? "Numéro de carte invalide"
            : "Invalid card number"
        );
        return;
      }

      // Basic expiry date validation (MM/YY)
      if (!/^\d{2}\/\d{2}$/.test(paymentData.expiryDate)) {
        alert(
          isFrench
            ? "Format de date d'expiration invalide (utilisez MM/AA)"
            : "Invalid expiry date format (use MM/YY)"
        );
        return;
      }

      // CVV validation (3-4 digits)
      if (!/^\d{3,4}$/.test(paymentData.cvv)) {
        alert(
          isFrench
            ? "CVV invalide"
            : "Invalid CVV"
        );
        return;
      }
    }

    setSubmitting(true);

    try {
      // Build registrations array for Create Order API
      const registrations = Array.from(selectedTickets.values()).map((selection) => ({
        registrationTypeId: selection.ticketId,
        quantity: selection.quantity,
        attendee: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          ...(hasYouthTicket && formData.age ? { age: parseInt(formData.age, 10) } : {}),
          ...(formData.company ? { company: formData.company } : {}),
          ...(formData.jobTitle ? { jobTitle: formData.jobTitle } : {}),
          ...(formData.streetAddress ? { streetAddress: formData.streetAddress } : {}),
          ...(formData.city ? { city: formData.city } : {}),
          ...(formData.province ? { province: formData.province } : {}),
          ...(formData.postalCode ? { postalCode: formData.postalCode } : {}),
          ...(formData.country ? { country: formData.country } : {}),
          ...(formData.dietaryRestrictions ? { dietaryRestrictions: formData.dietaryRestrictions } : {}),
          ...(formData.emergencyContactName ? { emergencyContactName: formData.emergencyContactName } : {}),
          ...(formData.emergencyContactPhone ? { emergencyContactPhone: formData.emergencyContactPhone } : {}),
        },
      }));

      // Build payment object if there are paid tickets
      const payment = hasPaidTickets ? {
        method: "credit_card",
        cardNumber: paymentData.cardNumber.replace(/\s/g, ""),
        expiryDate: paymentData.expiryDate,
        cvv: paymentData.cvv,
        cardholderName: paymentData.cardholderName,
      } : undefined;

      const response = await fetch(`/api/bizzabo/order/${eventId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registrations,
          promoCode: promoCode.trim() || undefined,
          payment,
          locale: isFrench ? "fr-CA" : "en-US",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || errorData.error || "Order failed");
      }

      const orderData = await response.json();
      console.log("Order created successfully:", orderData);
      setRegistrationSuccess(true);
    } catch (err) {
      console.error("Order error:", err);
      alert(
        isFrench
          ? `Erreur lors de la commande: ${err instanceof Error ? err.message : "Veuillez réessayer"}`
          : `Order error: ${err instanceof Error ? err.message : "Please try again"}`
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full text-center py-12">
        <p className="text-white text-lg">{t.loading}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-12">
        <p className="text-red-400 text-lg">{t.error}</p>
        <p className="text-white text-sm mt-2">{error}</p>
      </div>
    );
  }

  if (registrationSuccess) {
    return (
      <div className="w-full text-center py-12">
        <div className="bg-green-600 text-white p-6 rounded-lg">
          <p className="text-xl font-semibold mb-2">✓ {t.success}</p>
        </div>
      </div>
    );
  }

  if (showRegistration) {
    return (
      <div className="w-full space-y-6">
        <h3 className="text-white text-2xl font-bold mb-6">{t.registration}</h3>

        {/* Selected tickets summary */}
        <div className="bg-white/10 rounded-lg p-4 mb-6">
          <h4 className="text-white font-semibold mb-3">{t.selectTickets}</h4>
          <div className="space-y-2">
            {Array.from(selectedTickets.values()).map((selection) => (
              <div
                key={selection.ticketId}
                className="flex justify-between text-white text-sm"
              >
                <span>
                  {selection.ticketName} x {selection.quantity}
                </span>
                <span>
                  {selection.price === 0
                    ? t.free
                    : `$${(selection.price * selection.quantity).toFixed(2)}`}
                </span>
              </div>
            ))}
            <div className="border-t border-white/20 pt-2 mt-2 flex justify-between text-white font-semibold">
              <span>{t.total}</span>
              <span>
                ${calculateTotal().toFixed(2)} {tickets[0]?.currency || "CAD"}
              </span>
            </div>
          </div>
        </div>

        {/* Registration form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-2">
              {t.firstName} <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
              placeholder={t.firstName}
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              {t.lastName} <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
              placeholder={t.lastName}
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              {t.email} <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
              placeholder={t.email}
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              {t.phone} <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
              placeholder={isFrench ? "+1 (555) 123-4567" : "+1 (555) 123-4567"}
            />
          </div>

          {/* Age field for youth tickets */}
          {hasYouthTicket && (
            <div>
              <label className="block text-white mb-2">
                {t.age} <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                required
                min="18"
                max="30"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
                placeholder={t.age}
              />
              <p className="text-white/70 text-xs mt-1">
                {isFrench ? "Pour les billets jeunesse (18-30 ans)" : "For youth tickets (ages 18-30)"}
              </p>
            </div>
          )}

          {/* Company/Organization */}
          <div>
            <label className="block text-white mb-2">
              {t.company}
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
              placeholder={t.company}
            />
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-white mb-2">
              {t.jobTitle}
            </label>
            <input
              type="text"
              value={formData.jobTitle}
              onChange={(e) =>
                setFormData({ ...formData, jobTitle: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
              placeholder={t.jobTitle}
            />
          </div>

          {/* Address Section */}
          <div className="pt-4 border-t border-white/20">
            <h4 className="text-white font-semibold mb-4">{t.address}</h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">
                  {t.streetAddress}
                </label>
                <input
                  type="text"
                  value={formData.streetAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, streetAddress: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
                  placeholder={t.streetAddress}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">
                    {t.city}
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
                    placeholder={t.city}
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">
                    {t.province}
                  </label>
                  <input
                    type="text"
                    value={formData.province}
                    onChange={(e) =>
                      setFormData({ ...formData, province: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
                    placeholder={t.province}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">
                    {t.postalCode}
                  </label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) =>
                      setFormData({ ...formData, postalCode: e.target.value.toUpperCase() })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
                    placeholder={isFrench ? "A1B 2C3" : "A1B 2C3"}
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">
                    {t.country}
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
                    placeholder={isFrench ? "Canada" : "Canada"}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Dietary Restrictions */}
          <div>
            <label className="block text-white mb-2">
              {t.dietaryRestrictions}
            </label>
            <textarea
              value={formData.dietaryRestrictions}
              onChange={(e) =>
                setFormData({ ...formData, dietaryRestrictions: e.target.value })
              }
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A] resize-none"
              placeholder={isFrench ? "Veuillez indiquer toute restriction alimentaire ou allergie" : "Please indicate any dietary restrictions or allergies"}
            />
          </div>

          {/* Emergency Contact Section */}
          <div className="pt-4 border-t border-white/20">
            <h4 className="text-white font-semibold mb-4">{t.emergencyContact}</h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">
                  {t.emergencyContactName}
                </label>
                <input
                  type="text"
                  value={formData.emergencyContactName}
                  onChange={(e) =>
                    setFormData({ ...formData, emergencyContactName: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
                  placeholder={t.emergencyContactName}
                />
              </div>

              <div>
                <label className="block text-white mb-2">
                  {t.emergencyContactPhone}
                </label>
                <input
                  type="tel"
                  value={formData.emergencyContactPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, emergencyContactPhone: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
                  placeholder={isFrench ? "+1 (555) 123-4567" : "+1 (555) 123-4567"}
                />
              </div>
            </div>
          </div>

          {/* Payment form for paid tickets */}
          {hasPaidTickets && (
            <div className="pt-4 border-t border-white/20">
              <h4 className="text-white font-semibold mb-4">{t.payment}</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white mb-2">
                    {t.cardholderName} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={paymentData.cardholderName}
                    onChange={(e) =>
                      setPaymentData({ ...paymentData, cardholderName: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
                    placeholder={t.cardholderName}
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">
                    {t.cardNumber} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={19}
                    value={paymentData.cardNumber}
                    onChange={(e) => {
                      // Format card number with spaces
                      const value = e.target.value.replace(/\s/g, "");
                      const formatted = value.match(/.{1,4}/g)?.join(" ") || value;
                      setPaymentData({ ...paymentData, cardNumber: formatted });
                    }}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2">
                      {t.expiryDate} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={5}
                      value={paymentData.expiryDate}
                      onChange={(e) => {
                        // Format expiry date as MM/YY
                        let value = e.target.value.replace(/\D/g, "");
                        if (value.length >= 2) {
                          value = value.substring(0, 2) + "/" + value.substring(2, 4);
                        }
                        setPaymentData({ ...paymentData, expiryDate: value });
                      }}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
                      placeholder="MM/YY"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">
                      {t.cvv} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={4}
                      value={paymentData.cvv}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        setPaymentData({ ...paymentData, cvv: value });
                      }}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              onClick={() => setShowRegistration(false)}
              className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              {t.cancel}
            </Button>
            <Button
              type="submit"
              disabled={submitting}
              className="flex-1 bg-[#8C0C3A] hover:bg-[#5D1831] text-white"
            >
              {submitting
                ? isFrench
                  ? "Envoi..."
                  : "Submitting..."
                : t.submit}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  // Ticket selection view
  if (tickets.length === 0) {
    return (
      <div className="w-full text-center py-12">
        <p className="text-white text-lg">{t.noTickets}</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      <h3 className="text-white text-2xl font-bold mb-6">{t.selectTickets}</h3>

      <div className="space-y-4">
        {tickets.map((ticket) => {
          const selection = selectedTickets.get(ticket.id);
          const quantity = selection?.quantity || 0;

          return (
            <div
              key={ticket.id}
              className={`p-6 rounded-lg border-2 transition-all ${
                quantity > 0
                  ? "bg-[#8C0C3A]/20 border-[#8C0C3A]"
                  : "bg-white/5 border-white/20"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h4 className="text-white text-xl font-semibold mb-2">
                    {ticket.name}
                  </h4>
                  {ticket.description && (
                    <p className="text-white/70 text-sm mb-3">
                      {ticket.description}
                    </p>
                  )}
                  <p className="text-white text-lg font-bold">
                    {ticket.price === 0 || !ticket.price
                      ? t.free
                      : `$${ticket.price.toFixed(2)} ${ticket.currency || "CAD"}`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="text-white text-sm">{t.selectQuantity}:</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(ticket.id, quantity - 1)}
                    disabled={quantity === 0}
                    className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20"
                  >
                    −
                  </button>
                  <span className="text-white font-semibold w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(ticket.id, quantity + 1)}
                    className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedTickets.size > 0 && (
        <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
          {/* Promo Code Field */}
          <div>
            <label className="block text-white mb-2">
              {t.promoCode}
            </label>
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8C0C3A]"
              placeholder={t.promoCodePlaceholder}
            />
          </div>

          {/* Total and Continue Button */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-white text-lg font-semibold">{t.total}</span>
            <span className="text-white text-xl font-bold">
              ${calculateTotal().toFixed(2)} {tickets[0]?.currency || "CAD"}
            </span>
          </div>
          <Button
            onClick={handleContinue}
            className="w-full bg-[#8C0C3A] hover:bg-[#5D1831] text-white py-6 text-lg font-semibold"
          >
            {t.continue}
          </Button>
        </div>
      )}
    </div>
  );
}
