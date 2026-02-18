/**
 * Bizzabo Partner API Helper
 * Handles authentication and API calls to Bizzabo using OAuth 2.0 Client Credentials
 */

interface BizzaboTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface BizzaboAccountResponse {
  id: string;
  name: string;
  defaultLocale?: string;
  supportedLocales?: string[];
  [key: string]: unknown;
}

// Token cache to avoid unnecessary API calls
let cachedToken: { token: string; expiresAt: number } | null = null;

/**
 * Get OAuth 2.0 access token using client credentials flow
 * Falls back to API key if OAuth is not available
 */
async function getAccessToken(): Promise<string | null> {
  // Check if we have a valid cached token
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60000) {
    // Return cached token if it has at least 1 minute left
    return cachedToken.token;
  }

  const clientId = process.env.BIZZABO_CLIENT_ID;
  const clientSecret = process.env.BIZZABO_CLIENT_SECRET;

  // If OAuth credentials are not provided, return null to use API key only
  if (!clientId || !clientSecret) {
    console.warn(
      "BIZZABO_CLIENT_ID and BIZZABO_CLIENT_SECRET not set, using API key only authentication"
    );
    return null;
  }

  // Bizzabo OAuth endpoint - correct endpoint from Bizzabo documentation
  const tokenUrl = "https://auth.bizzabo.com/oauth/token";
  const accountId = process.env.BIZZABO_ACCOUNT_ID || "206536";
  
  console.log(`[OAuth] Using account ID: ${accountId} (from ${process.env.BIZZABO_ACCOUNT_ID ? 'env' : 'default'})`);

  try {
    // According to Bizzabo documentation, the token request must be JSON with specific fields
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        audience: "https://api.bizzabo.com/api",
        grant_type: "client_credentials",
        account_id: parseInt(accountId, 10), // account_id should be a number
      }),
    });

    if (!response.ok) {
      let errorText: string;
      let errorMessage: string = "";
      try {
        errorText = await response.text();
        // Try to parse JSON error response for a clearer message
        try {
          const errorJson = JSON.parse(errorText);
          errorMessage = errorJson.message || errorJson.error || errorText;
        } catch {
          errorMessage = errorText;
        }
      } catch (e) {
        errorText = `Unable to read error response: ${e}`;
        errorMessage = errorText;
      }
      
      console.error(
        `Bizzabo token request failed for ${tokenUrl}:`,
        {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          errorBody: errorText,
        }
      );

      // Provide a more helpful error message for common issues
      if (response.status === 401) {
        if (errorMessage.includes("not installed on account")) {
          throw new Error(
            `Bizzabo App Installation Required: The app with client ID '${clientId}' is not installed on account '${accountId}'. Please install the app in the Bizzabo Partner Portal (https://login.bizzabo.com/partners) for account ${accountId}.`
          );
        } else if (errorMessage.includes("invalid_client") || errorMessage.includes("Invalid credentials")) {
          throw new Error(
            `Bizzabo Authentication Failed: Invalid client ID or client secret. Please verify your BIZZABO_CLIENT_ID and BIZZABO_CLIENT_SECRET in .env.local are correct.`
          );
        }
      }

      throw new Error(
        `Failed to get Bizzabo access token: ${response.status} ${response.statusText} - ${errorMessage}`
      );
    }

    const data = (await response.json()) as BizzaboTokenResponse;

    // Cache the token (expires 5 minutes before actual expiry for safety)
    cachedToken = {
      token: data.access_token,
      expiresAt: Date.now() + (data.expires_in - 300) * 1000,
    };

    console.log("Successfully obtained Bizzabo access token");
    return data.access_token;
  } catch (error) {
    console.error(`Error getting Bizzabo access token:`, error);
    throw error instanceof Error ? error : new Error(String(error));
  }

  // This code should never be reached due to the try-catch above, but TypeScript requires it
  return null;
}

/**
 * Get account information from Bizzabo API
 */
export async function getBizzaboAccount(): Promise<BizzaboAccountResponse> {
  const accountId = process.env.BIZZABO_ACCOUNT_ID || "206536";
  const token = await getAccessToken();

  // According to Bizzabo documentation, the base URL is https://api.bizzabo.com/v1
  const apiBaseUrl = "https://api.bizzabo.com/v1";
  const accountUrl = `${apiBaseUrl}/accounts/${accountId}`;

  // Build headers - Bearer token is required
  if (!token) {
    throw new Error(
      "OAuth token is required for Bizzabo API calls. Please ensure BIZZABO_CLIENT_ID, BIZZABO_CLIENT_SECRET, and BIZZABO_ACCOUNT_ID are set correctly."
    );
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    console.log(`Fetching account from: ${accountUrl}`);
    const response = await fetch(accountUrl, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Account endpoint ${accountUrl} failed:`, response.status, errorText.substring(0, 200));
      throw new Error(
        `Failed to fetch Bizzabo account: ${response.status} ${errorText.substring(0, 100)}`
      );
    }

    const account = (await response.json()) as BizzaboAccountResponse;
    console.log(`Successfully fetched account from: ${accountUrl}`);
    return account;
  } catch (error) {
    console.error(`Error fetching account:`, error);
    throw error instanceof Error ? error : new Error(String(error));
  }
}

/**
 * Get event information from Bizzabo API
 */
export async function getBizzaboEvent(
  eventId: string = process.env.BIZZABO_EVENT_ID || "792278"
): Promise<unknown> {
  const token = await getAccessToken();

  // According to Bizzabo documentation, the base URL is https://api.bizzabo.com/v1
  const apiBaseUrl = "https://api.bizzabo.com/v1";
  const eventUrl = `${apiBaseUrl}/events/${eventId}`;

  // Build headers - Bearer token is required
  if (!token) {
    throw new Error(
      "OAuth token is required for Bizzabo API calls. Please ensure BIZZABO_CLIENT_ID, BIZZABO_CLIENT_SECRET, and BIZZABO_ACCOUNT_ID are set correctly."
    );
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    console.log(`Fetching event from: ${eventUrl}`);
    const response = await fetch(eventUrl, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Event endpoint ${eventUrl} failed:`, response.status, errorText.substring(0, 200));
      throw new Error(
        `Failed to fetch Bizzabo event: ${response.status} ${errorText.substring(0, 100)}`
      );
    }

    const event = await response.json();
    console.log(`Successfully fetched event from: ${eventUrl}`);
    return event;
  } catch (error) {
    console.error(`Error fetching event:`, error);
    throw error instanceof Error ? error : new Error(String(error));
  }
}

/**
 * Get events for an account (helper function to discover event IDs)
 */
export async function getBizzaboEvents(): Promise<unknown> {
  const accountId = process.env.BIZZABO_ACCOUNT_ID || "206536";
  const token = await getAccessToken();

  // According to Bizzabo documentation, the base URL is https://api.bizzabo.com/v1
  const apiBaseUrl = "https://api.bizzabo.com/v1";
  
  // Try both account-scoped and general events endpoints
  const possibleEventUrls = [
    `${apiBaseUrl}/accounts/${accountId}/events`,
    `${apiBaseUrl}/events`,
  ];

  // Build headers - Bearer token is required
  if (!token) {
    throw new Error(
      "OAuth token is required for Bizzabo API calls. Please ensure BIZZABO_CLIENT_ID, BIZZABO_CLIENT_SECRET, and BIZZABO_ACCOUNT_ID are set correctly."
    );
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let lastError: Error | null = null;
  
  for (const eventsUrl of possibleEventUrls) {
    try {
      console.log(`Fetching events from: ${eventsUrl}`);
      const response = await fetch(eventsUrl, {
        method: "GET",
        headers,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Events endpoint ${eventsUrl} failed:`, response.status, errorText.substring(0, 200));
        lastError = new Error(
          `Failed to fetch Bizzabo events from ${eventsUrl}: ${response.status} ${errorText.substring(0, 100)}`
        );
        continue;
      }

      const events = await response.json();
      console.log(`Successfully fetched events from: ${eventsUrl}`);
      return events;
    } catch (error) {
      console.error(`Error fetching events from ${eventsUrl}:`, error);
      lastError = error instanceof Error ? error : new Error(String(error));
      continue;
    }
  }
  
  if (lastError) {
    throw lastError;
  }
  
  throw new Error("Failed to fetch Bizzabo events from all endpoints");
}

/**
 * Get ticket types for an event
 * 
 * This function will try v2 API endpoints FIRST (from documentation):
 * - https://api.bizzabo.com/v2/events/{eventId}/registrationTypes
 * 
 * Then falls back to v1 endpoints if v2 doesn't work.
 * 
 * NOTE: Requires OAuth token. If you see "App not installed" error,
 * the app must be installed in Bizzabo Partner Portal first.
 * 
 * @param locale - Optional locale code (e.g., 'fr-CA', 'en-US') for localized content
 */
export async function getBizzaboTickets(
  eventId: string = process.env.BIZZABO_EVENT_ID || "792278",
  isRetry: boolean = false,
  locale?: string
): Promise<unknown> {
  const token = await getAccessToken();
  const accountId = process.env.BIZZABO_ACCOUNT_ID || "206536";
  
  // If eventId matches accountId, it might actually be the account ID
  // Try to fetch events first to discover the actual event ID
  const mightBeAccountId = eventId === accountId;

  // According to Bizzabo documentation, try both v1 and v2 APIs
  // v2 API endpoints (NEW from documentation) - will be tried FIRST
  const possibleBaseUrls = [
    "https://api.bizzabo.com/v2", // v2 API - NEW from documentation (tried first)
    "https://api.bizzabo.com/v1", // Primary base URL from documentation
    "https://api.bizzabo.com/partners/v1", // Fallback
  ];
  
  // Build locale query parameter if provided
  const localeParam = locale ? `?locale=${locale}` : '';
  
  // Build list of all possible ticket endpoint paths
  // Also try treating the eventId as a different identifier
  const possibleTicketUrls: string[] = [];
  for (const apiBaseUrl of possibleBaseUrls) {
    // v2 API endpoints (from documentation: /v2/events/{eventId}/registrationTypes)
    if (apiBaseUrl.includes("/v2")) {
      // Try with locale parameter first if provided
      if (locale) {
        possibleTicketUrls.push(
          `${apiBaseUrl}/events/${eventId}/registrationTypes?locale=${locale}`, // v2 with locale
        );
        console.log(`[v2 API] Added endpoint with locale (${locale}): ${apiBaseUrl}/events/${eventId}/registrationTypes?locale=${locale}`);
      }
      possibleTicketUrls.push(
        `${apiBaseUrl}/events/${eventId}/registrationTypes`, // v2 registration types endpoint (DOCUMENTED)
      );
      console.log(`[v2 API] Added endpoint: ${apiBaseUrl}/events/${eventId}/registrationTypes`);
    }
    
    // v1 API endpoints (fallback)
    possibleTicketUrls.push(
      // Standard event-based paths
      `${apiBaseUrl}/events/${eventId}/tickets`,
      `${apiBaseUrl}/events/${eventId}/ticket-types`,
      `${apiBaseUrl}/events/${eventId}/products`,
      // Account-scoped paths
      `${apiBaseUrl}/accounts/${accountId}/events/${eventId}/tickets`,
      `${apiBaseUrl}/accounts/${accountId}/events/${eventId}/ticket-types`,
      // Registration-based paths
      `${apiBaseUrl}/registrations?eventId=${eventId}`,
      // Alternative: maybe eventId is actually a registration ID or product ID
      `${apiBaseUrl}/tickets?eventId=${eventId}`,
      `${apiBaseUrl}/ticket-types?eventId=${eventId}`,
      `${apiBaseUrl}/products?eventId=${eventId}`,
    );
  }
  
  console.log(`[getBizzaboTickets] Will try ${possibleTicketUrls.length} endpoints, starting with v2 API endpoints`);

  // According to Bizzabo documentation, use Bearer token in Authorization header
  // The token is required for all API calls
  if (!token) {
    throw new Error(
      "OAuth token is required for Bizzabo API calls. Please ensure BIZZABO_CLIENT_ID, BIZZABO_CLIENT_SECRET, and BIZZABO_ACCOUNT_ID are set correctly."
    );
  }

  // Use Bearer token authentication as per Bizzabo documentation
  // Add Accept-Language header for locale support
  const authHeaders: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  
  // Add Accept-Language header if locale is provided
  if (locale) {
    authHeaders["Accept-Language"] = locale;
    console.log(`[getBizzaboTickets] Using locale: ${locale} (Accept-Language header)`);
  }

  let lastError: Error | null = null;

  for (const ticketsUrl of possibleTicketUrls) {
    try {
      const isV2 = ticketsUrl.includes("/v2/");
      console.log(`[${isV2 ? 'v2 API' : 'v1 API'}] Trying endpoint: ${ticketsUrl}`);
      
      const response = await fetch(ticketsUrl, {
        method: "GET",
        headers: authHeaders,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          `[${isV2 ? 'v2 API' : 'v1 API'}] Endpoint ${ticketsUrl} failed:`,
          response.status,
          errorText.substring(0, 200)
        );
        lastError = new Error(
          `Failed to fetch Bizzabo tickets from ${ticketsUrl}: ${response.status} ${errorText.substring(0, 100)}`
        );
        continue; // Try next endpoint
      }

      let tickets = await response.json();
      console.log(`[${isV2 ? 'v2 API' : 'v1 API'}] ✓ Successfully fetched tickets from: ${ticketsUrl}`);
      console.log(`[${isV2 ? 'v2 API' : 'v1 API'}] Response structure:`, {
        isArray: Array.isArray(tickets),
        hasData: tickets && typeof tickets === 'object' && 'data' in tickets,
        hasTickets: tickets && typeof tickets === 'object' && 'tickets' in tickets,
        hasContent: tickets && typeof tickets === 'object' && 'content' in tickets,
        keys: tickets && typeof tickets === 'object' ? Object.keys(tickets) : 'N/A',
        sample: JSON.stringify(tickets).substring(0, 500),
      });
      
      // Transform v2 API response format to match expected structure
      if (isV2 && tickets && typeof tickets === 'object' && 'content' in tickets && Array.isArray(tickets.content)) {
        console.log(`[v2 API] Transforming v2 response format (content array with ${tickets.content.length} items)`);
        // v2 API returns: { links, content: [...], page }
        // Transform registration types to match expected ticket format
        const transformedContent = tickets.content.map((item: any) => ({
          id: String(item.id), // Convert to string
          name: item.name,
          description: item.description,
          price: item.price || 0,
          currency: item.currencyCode || item.currency || 'CAD',
          available: item.quantity > 0, // Available if quantity > 0
          quantity: item.quantity,
          // Include v2-specific fields for reference
          taxRate: item.taxRate,
          taxName: item.taxName,
          perOrderMax: item.perOrderMax,
          perOrderMin: item.perOrderMin,
          saleMethod: item.saleMethod,
        }));
        
        // Return in multiple formats for compatibility
        return {
          ...tickets,
          content: transformedContent,
          tickets: transformedContent, // For compatibility
          data: transformedContent, // For compatibility
        };
      }
      
      return tickets;
    } catch (error) {
      console.error(`Error trying ${ticketsUrl}:`, error);
      lastError = error instanceof Error ? error : new Error(String(error));
      continue; // Try next endpoint
    }
  }

  // If all direct endpoints failed and eventId might be accountId, try fetching events first
  if (lastError && mightBeAccountId) {
    console.log("Direct event ID failed, trying to fetch events from account first...");
    try {
      const events = await getBizzaboEvents();
      console.log("Successfully fetched events, attempting to use first event...");
      
      // Try to extract event ID from events response
      let actualEventId: string | null = null;
      if (Array.isArray(events)) {
        actualEventId = events[0]?.id || events[0]?.eventId || null;
      } else if (events && typeof events === 'object') {
        const eventsData = (events as { data?: unknown[]; events?: unknown[]; items?: unknown[] });
        const eventsList = eventsData.data || eventsData.events || eventsData.items || [];
        if (Array.isArray(eventsList) && eventsList.length > 0) {
          actualEventId = (eventsList[0] as { id?: string; eventId?: string })?.id || 
                          (eventsList[0] as { id?: string; eventId?: string })?.eventId || null;
        }
      }
      
      if (actualEventId && !isRetry) {
        console.log(`Found event ID: ${actualEventId}, retrying ticket fetch...`);
        return getBizzaboTickets(actualEventId, true);
      }
    } catch (eventsError) {
      console.error("Failed to fetch events:", eventsError);
    }
  }

  // If all URLs failed, provide a detailed error message
  if (lastError) {
    const errorMessage = `Failed to fetch Bizzabo tickets from all endpoints. 

Diagnostic Information:
- Event ID used: ${eventId}
- Account ID: ${accountId}
- OAuth token: ${token ? "Available" : "Not available (all OAuth endpoints returned 404)"}
- API Key: Not required (using OAuth token)

Possible Issues:
1. The OAuth endpoints are returning 404, which suggests the OAuth URL structure may be incorrect
2. The /v1 endpoints require OAuth tokens, but OAuth authentication is failing
3. The /public/v1 and /partners/v1 endpoints are returning 404, suggesting they may not exist or use a different path structure
4. The event ID (${eventId}) might be incorrect - it might actually be the account ID

Next Steps:
1. Verify the correct OAuth endpoint URL in the Bizzabo Partner Portal
2. Confirm whether ${eventId} is the event ID or account ID
3. Check if the API key should be used differently (e.g., as a query parameter or in a different header format)
4. Contact Bizzabo support to confirm the correct API base URL and authentication method

Last error: ${lastError.message}`;
    
    throw new Error(errorMessage);
  }

  throw new Error("Failed to fetch Bizzabo tickets from all endpoints");
}

/**
 * Get registration types for an event (v2 API)
 */
export async function getBizzaboRegistrationTypes(
  eventId: string = process.env.BIZZABO_EVENT_ID || "792278"
): Promise<unknown> {
  const token = await getAccessToken();

  if (!token) {
    throw new Error(
      "OAuth token is required for Bizzabo API calls. Please ensure BIZZABO_CLIENT_ID, BIZZABO_CLIENT_SECRET, and BIZZABO_ACCOUNT_ID are set correctly."
    );
  }

  // Try v2 API endpoint first (from documentation)
  const v2Url = `https://api.bizzabo.com/v2/events/${eventId}/registrationTypes`;
  
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    console.log(`Fetching registration types from v2 API: ${v2Url}`);
    const response = await fetch(v2Url, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Registration types endpoint ${v2Url} failed:`, response.status, errorText.substring(0, 200));
      throw new Error(
        `Failed to fetch Bizzabo registration types: ${response.status} ${errorText.substring(0, 100)}`
      );
    }

    const registrationTypes = await response.json();
    console.log(`Successfully fetched registration types from: ${v2Url}`);
    
    // Detailed logging for analysis
    console.log(`[Registration Types Analysis] Full response structure:`, {
      isArray: Array.isArray(registrationTypes),
      type: typeof registrationTypes,
      keys: registrationTypes && typeof registrationTypes === 'object' ? Object.keys(registrationTypes) : null,
      hasContent: registrationTypes && typeof registrationTypes === 'object' ? 'content' in registrationTypes : false,
      contentLength: registrationTypes && typeof registrationTypes === 'object' && 'content' in registrationTypes && Array.isArray(registrationTypes.content)
        ? registrationTypes.content.length
        : 0,
    });
    
    if (registrationTypes && typeof registrationTypes === 'object' && 'content' in registrationTypes && Array.isArray(registrationTypes.content)) {
      console.log(`[Registration Types Analysis] Content array has ${registrationTypes.content.length} items`);
      registrationTypes.content.forEach((item: any, index: number) => {
        console.log(`[Registration Types Analysis] Item ${index + 1}:`, {
          id: item.id,
          name: item.name,
          price: item.price,
          currencyCode: item.currencyCode,
          description: item.description?.substring(0, 100),
          quantity: item.quantity,
          available: item.quantity > 0,
          allKeys: Object.keys(item),
        });
      });
    }
    
    console.log(`[Registration Types Analysis] Full response:`, JSON.stringify(registrationTypes, null, 2));
    return registrationTypes;
  } catch (error) {
    console.error(`Error fetching registration types:`, error);
    throw error instanceof Error ? error : new Error(String(error));
  }
}

/**
 * Create a registration for an event
 * Tries v2 API endpoint first, then falls back to v1
 */
export async function createBizzaboRegistration(
  eventId: string,
  registrationData: {
    firstName: string;
    lastName: string;
    email: string;
    tickets: Array<{ ticketId: string; quantity: number }>;
    locale?: string;
  }
): Promise<unknown> {
  const token = await getAccessToken();

  if (!token) {
    throw new Error(
      "OAuth token is required for Bizzabo API calls. Please ensure BIZZABO_CLIENT_ID, BIZZABO_CLIENT_SECRET, and BIZZABO_ACCOUNT_ID are set correctly."
    );
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  // Try v2 API endpoint first (from documentation)
  // Note: v2 endpoint uses /registrations/{ticketId} - one registration per ticket
  // For multiple tickets, we may need to create multiple registrations
  const possibleUrls: Array<{ url: string; ticket?: { ticketId: string; quantity: number } }> = [];
  
  // For v2, try with each ticket ID (v2 requires one registration per ticket)
  for (const ticket of registrationData.tickets) {
    possibleUrls.push({
      url: `https://api.bizzabo.com/v2/events/${eventId}/registrations/${ticket.ticketId}`,
      ticket: ticket,
    });
  }
  
  // Also try v1 endpoint (supports multiple tickets in one request)
  possibleUrls.push({
    url: `https://api.bizzabo.com/v1/events/${eventId}/registrations`,
  });

  let lastError: Error | null = null;

  for (const { url: registrationsUrl, ticket } of possibleUrls) {
    try {
      console.log(`Trying registration endpoint: ${registrationsUrl}`);
      
      // For v2 endpoint, the body structure might be different
      const isV2 = registrationsUrl.includes("/v2/");
      const requestBody = isV2 && ticket
        ? {
            firstName: registrationData.firstName,
            lastName: registrationData.lastName,
            email: registrationData.email,
            quantity: ticket.quantity,
            locale: registrationData.locale || "en-US",
          }
        : {
            firstName: registrationData.firstName,
            lastName: registrationData.lastName,
            email: registrationData.email,
            tickets: registrationData.tickets,
            locale: registrationData.locale || "en-US",
          };

      const response = await fetch(registrationsUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Registration endpoint ${registrationsUrl} failed:`, response.status, errorText.substring(0, 200));
        lastError = new Error(
          `Failed to create Bizzabo registration at ${registrationsUrl}: ${response.status} ${errorText.substring(0, 100)}`
        );
        continue; // Try next endpoint
      }

      const registration = await response.json();
      console.log(`Successfully created registration at: ${registrationsUrl}`);
      console.log(`Response data:`, JSON.stringify(registration, null, 2));
      return registration;
    } catch (error) {
      console.error(`Error trying ${registrationsUrl}:`, error);
      lastError = error instanceof Error ? error : new Error(String(error));
      continue; // Try next endpoint
    }
  }

  if (lastError) {
    throw lastError;
  }

  throw new Error("Failed to create Bizzabo registration from all endpoints");
}

/**
 * Create an order for an event (v2 API)
 * This endpoint supports multiple registrations, promo codes, and payment processing
 * 
 * @param eventId - The event ID
 * @param orderData - Order data including registrations, promo code, and payment info
 */
export async function createBizzaboOrder(
  eventId: string,
  orderData: {
    registrations: Array<{
      registrationTypeId: number | string;
      quantity: number;
      attendee: {
        firstName: string;
        lastName: string;
        email: string;
        age?: number;
        [key: string]: unknown;
      };
    }>;
    promoCode?: string;
    payment?: {
      method: string;
      cardNumber?: string;
      expiryDate?: string;
      cvv?: string;
      cardholderName?: string;
      [key: string]: unknown;
    };
    locale?: string;
  }
): Promise<unknown> {
  const token = await getAccessToken();

  if (!token) {
    throw new Error(
      "OAuth token is required for Bizzabo API calls. Please ensure BIZZABO_CLIENT_ID, BIZZABO_CLIENT_SECRET, and BIZZABO_ACCOUNT_ID are set correctly."
    );
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  // v2 API Create Order endpoint
  const orderUrl = `https://api.bizzabo.com/v2/events/${eventId}/orders`;

  try {
    console.log(`Creating order at: ${orderUrl}`);
    
    // Transform registrationTypeId to number if it's a string
    const registrations = orderData.registrations.map((reg) => ({
      ...reg,
      registrationTypeId: typeof reg.registrationTypeId === 'string' 
        ? parseInt(reg.registrationTypeId, 10) 
        : reg.registrationTypeId,
    }));

    const requestBody: Record<string, unknown> = {
      registrations,
      locale: orderData.locale || "en-US",
    };

    // Add promo code if provided
    if (orderData.promoCode && orderData.promoCode.trim() !== "") {
      requestBody.promoCode = orderData.promoCode.trim();
    }

    // Add payment information if provided
    if (orderData.payment) {
      requestBody.payment = orderData.payment;
    }

    console.log(`Order request body:`, JSON.stringify(requestBody, null, 2));

    const response = await fetch(orderUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Order endpoint ${orderUrl} failed:`, response.status, errorText.substring(0, 500));
      
      let errorMessage = `Failed to create Bizzabo order: ${response.status}`;
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorJson.error || errorMessage;
      } catch {
        errorMessage = `${errorMessage} - ${errorText.substring(0, 200)}`;
      }
      
      throw new Error(errorMessage);
    }

    const order = await response.json();
    console.log(`Successfully created order at: ${orderUrl}`);
    console.log(`Order response:`, JSON.stringify(order, null, 2));
    return order;
  } catch (error) {
    console.error(`Error creating order:`, error);
    throw error instanceof Error ? error : new Error(String(error));
  }
}
