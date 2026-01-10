import { Atoll, TransferType, FerryAccess, IslandSize, Atmosphere, Accommodation, BikiniBeach, Watersports, MarineActivity, JungleVegetation, Nightlife } from './types';

export type Language = 'en' | 'de';

export const UI_TEXT = {
  en: {
    filters: "Filters",
    reset: "Reset All",
    resetShort: "Reset",
    resetBtn: "Reset All Filters",
    readMore: "Read More",
    readLess: "Read Less",
    getGuide: "GET TRAVEL GUIDE",
    getSpecificGuide: "Get {island} Guide",
    watchTour: "WATCH WALKING TOUR",
    promoTitle: "Complete Maldives Budget Travel Guide",
    promoDesc: "Your starting point for planning any Maldives local island, plus exclusive hotel discounts.",
    promoButton: "Learn More",
    exploreTitle: "Maldives Local Island Finder",
    showingResults: "Found {count} islands based on your preferences",
    chooseFrom: "Choose from {count} local islands",
    noResultsTitle: "No islands match your criteria",
    noResultsDesc: "Try adjusting your filters or resetting them to explore more options.",
    selectFilters: "Select Filters",
    
    // Labels for card stats
    labels: {
      atmosphere: "Atmosphere",
      size: "Size",
      beach: "Beach",
      nightlife: "Nightlife",
      greenery: "Greenery",
      sports: "Sports",
    },
    
    // Filter Sidebar Headers
    filterHeaders: {
      atoll: "Atoll",
      transferType: "Transfer Type",
      islandSize: "Island Size",
      accommodation: "Accommodation",
      bikiniBeachSize: "Bikini Beach Size",
      atmosphere: "Atmosphere",
      greenery: "Greenery / Jungle",
      nightlife: "Nightlife",
      marineActivities: "Marine Activities",
      watersports: "Watersports",
      features: "Features",
    },
    
    // Boolean Features
    booleans: {
      sandbank: "Has Sandbank",
      floatingBar: "Floating Bar"
    }
  },
  de: {
    filters: "Filter",
    reset: "Alle zurücksetzen",
    resetShort: "Zurücksetzen",
    resetBtn: "Alle Filter zurücksetzen",
    readMore: "Mehr lesen",
    readLess: "Weniger lesen",
    getGuide: "REISEFÜHRER HOLEN",
    getSpecificGuide: "{island} Guide holen",
    watchTour: "RUNDGANG ANSEHEN",
    promoTitle: "Kompletter Malediven Budget-Reiseführer",
    promoDesc: "Ihr Ausgangspunkt für die Planung Ihres Urlaubs auf einer der Malediven-Inseln, inklusive exklusiver Hotelrabatte.",
    promoButton: "Mehr erfahren",
    exploreTitle: "Malediven Insel-Finder",
    showingResults: "{count} Inseln basierend auf Ihren Vorlieben gefunden",
    chooseFrom: "Wählen Sie aus {count} Einheimischen-Inseln",
    noResultsTitle: "Keine Inseln entsprechen Ihren Kriterien",
    noResultsDesc: "Versuchen Sie, Ihre Filter anzupassen oder zurückzusetzen.",
    selectFilters: "Filter auswählen",
    
    labels: {
      atmosphere: "Atmosphäre",
      size: "Größe",
      beach: "Strand",
      nightlife: "Nachtleben",
      greenery: "Vegetation",
      sports: "Sport",
    },
    
    filterHeaders: {
      atoll: "Atoll",
      transferType: "Transferart",
      islandSize: "Inselgröße",
      accommodation: "Unterkunft",
      bikiniBeachSize: "Bikini-Strand Größe",
      atmosphere: "Atmosphäre",
      greenery: "Grünflächen / Dschungel",
      nightlife: "Nachtleben",
      marineActivities: "Meeresaktivitäten",
      watersports: "Wassersport",
      features: "Besonderheiten",
    },
    
    booleans: {
      sandbank: "Mit Sandbank",
      floatingBar: "Schwimmende Bar"
    }
  }
};

// Map original English Enum values to German
export const DATA_TRANSLATIONS: Record<string, string> = {
  // Atolls
  [Atoll.SouthMale]: 'Süd-Malé (Süd-Kaafu)',
  [Atoll.NorthMale]: 'Nord-Malé (Nord-Kaafu)',
  [Atoll.Vaavu]: 'Vaavu',
  [Atoll.NorthAri]: 'Nord-Ari (Alif Alif)',
  [Atoll.SouthAri]: 'Süd-Ari (Alif Dhaalu)',
  [Atoll.Baa]: 'Baa',

  // Transfer
  [TransferType.SpeedboatUnder1H]: 'Schnellboot (<1 Std.)',
  [TransferType.Speedboat1To2H]: 'Schnellboot (1–2 Std.)',
  [TransferType.Speedboat2To3H]: 'Schnellboot (2–3 Std.)',
  [TransferType.DomesticFlight]: 'Inlandsflug',
  [TransferType.DomesticFlightSpeedboat]: 'Inlandsflug + Schnellboot',

  // Ferry
  [FerryAccess.Direct]: 'Direkte öffentliche Fähre',
  [FerryAccess.Transfer]: '2 öffentliche Fähren (Umstieg)',
  [FerryAccess.None]: 'Keine öffentliche Fähre',

  // Size
  [IslandSize.Small]: 'Klein',
  [IslandSize.Medium]: 'Mittel',
  [IslandSize.Large]: 'Groß',

  // Atmosphere
  [Atmosphere.Lively]: 'Lebhaft',
  [Atmosphere.Quiet]: 'Ruhig',
  [Atmosphere.Local]: 'Authentisch/Lokal',

  // Accommodation
  [Accommodation.AffordableLuxury]: 'Bezahlbarer Luxus',
  [Accommodation.Pool]: 'Pool',
  [Accommodation.Spa]: 'Spa',

  // Beach (Removed duplicates of IslandSize)
  // [BikiniBeach.Small]: 'Klein', 
  // [BikiniBeach.Medium]: 'Mittel',
  // [BikiniBeach.Large]: 'Groß',

  // Watersports
  [Watersports.Minimal]: 'Minimal',
  [Watersports.Moderate]: 'Mäßig',
  [Watersports.Extensive]: 'Umfangreich',

  // Marine
  [MarineActivity.NurseSharks]: 'Ammenhaie',
  [MarineActivity.MantaRays]: 'Mantarochen',
  [MarineActivity.WhaleSharks]: 'Walhaie',
  [MarineActivity.Turtles]: 'Schildkröten',
  [MarineActivity.Dolphins]: 'Delfine',
  [MarineActivity.SandbankTours]: 'Sandbank-Touren',
  [MarineActivity.HouseReef]: 'Hausriff',

  // Jungle
  // [JungleVegetation.Minimal]: 'Minimal', // Duplicate of Watersports.Minimal
  // [JungleVegetation.Medium]: 'Mittel', // Duplicate of IslandSize.Medium
  [JungleVegetation.Large]: 'Dicht/Groß', // Unique (Dense)

  // Nightlife
  // [Nightlife.Minimal]: 'Minimal', // Duplicate of Watersports.Minimal
  // [Nightlife.Moderate]: 'Mäßig', // Duplicate of Watersports.Moderate
  // [Nightlife.Lively]: 'Lebhaft', // Duplicate of Atmosphere.Lively
  
  // Custom Boolean labels handled in UI_TEXT, but matched here if used as tags
  'Sandbank': 'Sandbank',
  'Floating Bar': 'Schwimmende Bar',
  'FloatingBar': 'Schwimmende Bar'
};

export const translate = (text: string, lang: Language): string => {
  if (lang === 'en') return text;
  return DATA_TRANSLATIONS[text] || text;
};
