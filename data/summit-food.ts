export const FOOD_MAP_ID = "1dmY8LUvIQe2jIBVCn9D5S2AFIGiusM0";
export const SUMMIT_FOOD_ORIGIN = "RBC Convention Centre Winnipeg, 375 York Ave, Winnipeg";

export const SUMMIT_FOOD_BUSINESSES = [
  { id: "pastry-castle", name: "Pastry Castle / Dan’s Café & Lounge", address: "254 Edmonton St, Winnipeg, MB", typeEn: "Bakery, café, desserts, coffee and light food", typeFr: "Boulangerie-pâtisserie, café, desserts, boissons et repas légers", walkMinutes: 10, website: "https://pastrycastle.ca/" },
  { id: "kokeb", name: "Kokeb Restaurant", address: "266 Edmonton St, Winnipeg, MB", typeEn: "Ethiopian / East African cuisine", typeFr: "Cuisine éthiopienne / est-africaine", walkMinutes: 10 },
  { id: "jollof-life", name: "Jollof Life Restaurant", address: "600 Portage Ave, Winnipeg, MB", typeEn: "Nigerian / West African cuisine", typeFr: "Cuisine nigériane / ouest-africaine", walkMinutes: 15, website: "https://jolloflife.ca/" },
  { id: "merkato", name: "Merkato Restaurant", address: "352 Cumberland Ave, Winnipeg, MB", typeEn: "Ethiopian / Eritrean cuisine", typeFr: "Cuisine éthiopienne / érythréenne", walkMinutes: 20, website: "https://merkatorestaurantwpg.ca/" },
  { id: "atiga", name: "Atiga Restaurant", address: "329 William Ave, Winnipeg, MB", typeEn: "Nigerian / West African cuisine", typeFr: "Cuisine nigériane / ouest-africaine", walkMinutes: 20, website: "https://www.atigarestaurant.ca/" },
  { id: "gojo", name: "Gojo Ethiopian Restaurant", address: "533 Sargent Ave, Winnipeg, MB", typeEn: "Ethiopian cuisine", typeFr: "Cuisine éthiopienne", walkMinutes: null, website: "https://gojoethiopianrestaurant.ca/" },
];

export function foodDirectionsUrl(business: typeof SUMMIT_FOOD_BUSINESSES[number]) {
  return `https://www.google.com/maps/dir/?${new URLSearchParams({
    api: "1",
    origin: SUMMIT_FOOD_ORIGIN,
    destination: `${business.name}, ${business.address}`,
    travelmode: business.walkMinutes ? "walking" : "driving",
  })}`;
}
