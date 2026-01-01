

import { 
  Island, 
  Atoll,
  TransferType, 
  FerryAccess, 
  IslandSize, 
  Atmosphere, 
  Accommodation, 
  BikiniBeach, 
  Watersports, 
  MarineActivity, 
  JungleVegetation, 
  Nightlife 
} from './types';

const MAAFUSHI_COVER_IMAGE = 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Maafushi.webp?v=1763807763';

export const ISLANDS: Island[] = [
  // --- SOUTH MALÉ ATOLL ---
  {
    id: 'maafushi',
    name: 'Maafushi',
    atoll: Atoll.SouthMale,
    description: `One of the most popular local islands in the Maldives, Maafushi is just 30 minutes by speedboat from Malé or reachable by direct public ferry. It’s known for its lively atmosphere, nonstop excursions, and the widest variety of accommodation options among all local islands.

Maafushi doesn’t have much greenery, but it makes up for it with energy. Think: watersports, boat trips, beachfront cafes, music in the evenings, and even beach parties twice a week. If you’re looking for convenience, fun, and lots to do, this is your spot.

**Excursions:**
You’ll find some of the most affordable excursions in the Maldives here, which is a big part of Maafushi’s appeal. You can book reef snorkeling trips with shallow turtle sightings, go to the famous “Fish Tank” spot to snorkel with stingrays (just 30 minutes away), or hop on a half-day dolphin cruise.

Whale shark tours are also offered, but it’s worth knowing the details. Whale sharks are usually found in South Ari or Baa Atoll (depending on the season), which means tours from Maafushi involve a two-hour boat ride each way, and sightings aren’t guaranteed. These trips also don’t run daily; they depend on booking numbers.

Nurse shark tours from Maafushi are run daily and usually head to Vaavu Atoll, about 60 minutes away by boat. Sightings are very reliable, which is why these tours are so popular here. Manta ray excursions are also offered, but keep in mind they are seasonal, typically running from May through September, and also involve traveling to Vaavu or Baa atolls. As with most excursions from Maafushi, boats tend to be larger and more social, so expect group tours rather than small, private experiences.

**Bikini Beach:**
Maafushi’s designated bikini beach is separated by two jetties, which were built to help protect the shoreline from erosion. The beach area in front of Kaani and Arena hotels offers free umbrellas (first come, first served) for their guests only, while the opposite end of the beach has lounges available for rent.

While the sand is soft and white, the water here isn’t the iconic crystal-clear turquoise that many picture when thinking of the Maldives. The ocean floor also has a layer of crushed shells, so water shoes might be a good idea if you’re sensitive to textures. It’s a good beach for relaxing and cooling off between excursions, but not the best for picture-perfect swimming.

**Vibe & Nightlife:**
Maafushi is one of the few islands with some nightlife. Every Saturday, Kaani Hotels host a beach party with DJs, and on Tuesdays, Triton organizes a party on the opposite side of the island. Many restaurants play music at night, and some even offer live music now and then. Buffet dinners by the beach at Arena and Kaani are popular, especially for couples and families.

**Final Thoughts:**
Maafushi is ideal for people who want a social island with easy access from the airport, lots of food options, plenty of excursions, and budget-friendly prices. It’s very commercial and busy, but for many, that’s exactly the charm.`,
    descriptionDe: `Maafushi ist eine der beliebtesten Einheimischen-Inseln der Malediven, nur 30 Minuten mit dem Schnellboot von Malé entfernt oder mit der direkten öffentlichen Fähre erreichbar. Sie ist bekannt für ihre lebhafte Atmosphäre, ununterbrochene Ausflüge und die größte Auswahl an Unterkünften unter allen lokalen Inseln.

Maafushi bietet zwar nicht viel Grün, macht dies aber durch Energie wett. Denken Sie an: Wassersport, Bootsausflüge, Cafés am Strand, Musik am Abend und sogar zweimal wöchentlich Strandpartys. Wenn Sie Komfort, Spaß und viel Abwechslung suchen, ist dies Ihr Ort.

**Ausflüge:**
Hier finden Sie einige der erschwinglichsten Ausflüge auf den Malediven, was einen großen Teil der Attraktivität von Maafushi ausmacht. Sie können Schnorchelausflüge am Riff mit Schildkrötensichtungen buchen, zum berühmten "Fish Tank"-Spot fahren, um mit Stachelrochen zu schnorcheln (nur 30 Minuten entfernt), oder an einer halbtägigen Delfin-Kreuzfahrt teilnehmen.

Walhai-Touren werden ebenfalls angeboten, aber es lohnt sich, die Details zu kennen. Walhaie sind normalerweise im Süd-Ari- oder Baa-Atoll zu finden (je nach Jahreszeit), was bedeutet, dass Touren von Maafushi eine zweistündige Bootsfahrt pro Weg beinhalten und Sichtungen nicht garantiert sind. Diese Ausflüge finden auch nicht täglich statt; sie hängen von den Buchungszahlen ab.

Ammenhai-Touren von Maafushi werden täglich durchgeführt und führen meist zum Vaavu-Atoll, etwa 60 Minuten mit dem Boot entfernt. Sichtungen sind sehr zuverlässig, weshalb diese Touren hier so beliebt sind. Manta-Ausflüge werden ebenfalls angeboten, sind jedoch saisonal (Mai bis September) und beinhalten Reisen zum Vaavu- oder Baa-Atoll. Wie bei den meisten Ausflügen ab Maafushi sind die Boote eher groß und gesellig.

**Bikini-Strand:**
Der ausgewiesene Bikini-Strand von Maafushi ist durch zwei Stege getrennt, die zum Schutz der Küste vor Erosion gebaut wurden. Der Strandbereich vor den Hotels Kaani und Arena bietet kostenlose Sonnenschirme (wer zuerst kommt, mahlt zuerst) nur für deren Gäste an, während am gegenüberliegenden Ende des Strandes Liegen gemietet werden können.

Der Sand ist zwar weich und weiß, aber das Wasser ist hier nicht das ikonische kristallklare Türkis. Der Meeresboden hat eine schicht aus zerstoßenen Muscheln, daher sind Wasserschuhe empfehlenswert. Es ist ein guter Strand zum Entspannen zwischen den Ausflügen, aber nicht der beste für perfektes Schwimmen.

**Vibe & Nachtleben:**
Maafushi ist eine der wenigen Inseln mit Nachtleben. Jeden Samstag veranstalten Kaani Hotels eine Strandparty mit DJs, und dienstags organisiert Triton eine Party auf der gegenüberliegenden Seite der Insel. Viele Restaurants spielen abends Musik, und einige bieten sogar Live-Musik an. Buffet-Abendessen am Strand bei Arena und Kaani sind besonders bei Paaren und Familien beliebt.

**Fazit:**
Maafushi ist ideal für Leute, die eine gesellige Insel mit einfacher Anreise von Malé, vielen Essensmöglichkeiten, reichlich Ausflügen und budgetfreundlichen Preisen suchen. Es ist sehr kommerell und geschäftig, aber genau das macht für viele den Charme aus.`,
    imageUrl: MAAFUSHI_COVER_IMAGE,
    videoUrl: 'https://youtu.be/yNbFQsAqBBI',
    travelGuideUrl: 'https://maldivesonabudget.net/products/maafushi-maldives-travel-guide',
    dimensions: '1.275 km x 0.26 km',
    guestHouseCount: 70,
    transferTypes: [TransferType.SpeedboatUnder1H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Lively],
    accommodations: [Accommodation.AffordableLuxury, Accommodation.Pool, Accommodation.Spa],
    bikiniBeach: BikiniBeach.Medium,
    watersports: Watersports.Extensive,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Lively,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: true
  },
  {
    id: 'guraidhoo',
    name: 'Guraidhoo',
    atoll: Atoll.SouthMale,
    description: `Just 45 minutes by speedboat from Malé, Guraidhoo is a medium-sized local island that offers an authentic, peaceful vibe. It’s one of the few nearby islands with direct public ferry access, which makes it a great option for budget-conscious travelers. The island itself isn’t very green, but it has a growing local community and a laid-back pace. There’s also a small picnic island attached by a short walkway, perfect for sunsets or a quiet stroll. While there is a mental health facility on the island, it does not affect the safety or experience for visitors in any way.

You’ll notice some construction activity near the reclaimed area (which is being developed for the future), but the main part of the island where tourists stay is already finished and calm.

**Bikini Beach:**
Guraidhoo’s Bikini Beach is man-made, but it’s a pleasant spot to relax. The beach has a nice slope into the water with minimal rocks, and the swimming area is mostly clear. Several free cabanas and loungers are available, thanks to the local council. The beach has tall palm trees for that tropical look, although they don’t provide much natural shade. While the beach area itself isn’t lush, new plants have been added around the edges to improve the feel.

**Restaurants & Island Vibe:**
The food scene on Guraidhoo is small but solid. Guraidhoo Beach Hotel has a stylish beachfront restaurant that feels upscale for a local island. You’ll also find a casual café near the beach, and a well-rated spot called Good Bros on the other side of the island. For sunsets, LAVO restaurant by the harbor is a great pick with elevated second-floor views. The island is calm and welcoming, don’t expect nightlife or loud music, just a relaxed local vibe.

**Excursions:**
Guraidhoo is one of the best nearby islands for turtle snorkeling. It’s just a short boat ride (just 2-4 min) to the reef where you can often spot turtles swimming in shallow water. For nurse sharks and manta rays, most excursions go out toward Vaavu Atoll, about 60 minutes by speedboat. Unlike Maafushi, group sizes here are much smaller, which makes the tours feel more personal. Manta excursions are seasonal (typically May through September), while nurse shark tours run year-round.

**Final Thoughts:**
If you’re looking for a quiet, authentic local island with easy access from Malé, affordable beachfront hotels, and peaceful snorkeling tours without the crowds, Guraidhoo is a great choice, especially for couples or families who want a more low-key experience without sacrificing comfort.`,
    descriptionDe: `Nur 45 Minuten mit dem Speedboot von Malé entfernt ist Guraidhoo eine mittelgroße lokale Insel mit einer authentischen und ruhigen Atmosphäre. Sie gehört zu den wenigen nahegelegenen Inseln mit direktem Zugang per öffentlicher Fähre, was sie zu einer sehr guten Option für preisbewusste Reisende macht. Die Insel selbst ist nicht besonders grün, bietet aber eine wachsende lokale Gemeinschaft und ein entspanntes Lebenstempo. Zusätzlich gibt es eine kleine Picknickinsel, die über einen kurzen Steg erreichbar ist und sich perfekt für Sonnenuntergänge oder einen ruhigen Spaziergang eignet. Obwohl sich auf der Insel eine Einrichtung für psychische Gesundheit befindet, hat dies keinerlei Auswirkungen auf die Sicherheit oder das Reiseerlebnis von Besuchern.

In der Nähe des aufgeschütteten Bereichs, der für zukünftige Entwicklungen vorgesehen ist, wirst du etwas Bautätigkeit bemerken. Der Hauptteil der Insel, in dem sich die touristischen Unterkünfte befinden, ist jedoch bereits fertiggestellt und ruhig.

**Bikini-Strand:**
Der Bikini-Strand von Guraidhoo ist künstlich angelegt, bietet aber dennoch einen angenehmen Ort zum Entspannen. Der Strand hat einen sanften Einstieg ins Wasser mit nur wenigen Steinen, und der Schwimmbereich ist größtenteils frei. Dank der lokalen Gemeindeverwaltung stehen mehrere kostenlose Cabanas und Liegen zur Verfügung. Hohe Palmen sorgen für tropisches Flair, spenden jedoch nur begrenzt natürlichen Schatten. Der Strand selbst ist nicht besonders üppig bewachsen, aber entlang der Ränder wurden neue Pflanzen gesetzt, um das Gesamtbild zu verbessern.

**Restaurants & Inselgefühl:**
Die Restaurantszene auf Guraidhoo ist klein, aber solide. Das Guraidhoo Beach Hotel verfügt über ein stilvolles Strandrestaurant, das für eine lokale Insel überraschend gehoben wirkt. In Strandnähe gibt es außerdem ein entspanntes Café sowie einen gut bewerteten Ort namens Good Bros auf der anderen Inselseite. Für Sonnenuntergänge ist das LAVO Restaurant am Hafen eine sehr gute Wahl, mit erhöhtem Blick von der zweiten Etage. Die Insel wirkt ruhig und einladend. Es gibt kein Nachtleben oder laute Musik, stattdessen erwartet dich eine entspannte lokale Atmosphäre.

**Ausflüge:**
Guraidhoo gehört zu den besten nahegelegenen Inseln für Schildkröten-Schnorcheln. Das Riff, an dem man häufig Schildkröten im flachen Wasser beobachten kann, ist nur eine sehr kurze Bootsfahrt entfernt (ca. 2–4 Minuten). Für Ammenhaie und Mantarochen führen die meisten Ausflüge Richtung Vaavu-Atoll, was etwa 60 Minuten mit dem Speedboot dauert. Im Vergleich zu Maafushi sind die Gruppengrößen hier deutlich kleiner, wodurch sich die Touren persönlicher und entspannter anfühlen. Mantarochen-Ausflüge sind saisonal (meist von Mai bis September), während Ammenhai-Touren ganzjährig angeboten werden.

**Fazit:**
Wenn du eine ruhige, authentische lokale Insel mit einfacher Anreise von Malé, bezahlbaren Strandhotels und entspannten Schnorcheltouren ohne große Menschenmengen suchst, ist Guraidhoo eine ausgezeichnete Wahl. Besonders Paare oder Familien, die ein zurückhaltendes Erlebnis mit Komfort bevorzugen, werden sich hier wohlfühlen.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Guraidhoo.webp?v=1763807763',
    videoUrl: 'https://youtu.be/a5fAfYASF_c',
    dimensions: '700m x 500m',
    guestHouseCount: 13,
    transferTypes: [TransferType.SpeedboatUnder1H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Local],
    accommodations: [Accommodation.AffordableLuxury],
    bikiniBeach: BikiniBeach.Medium,
    // Fixed: Removed incorrect and redundant Navigator.userLanguage access
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.MantaRays, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'gulhi',
    name: 'Gulhi',
    atoll: Atoll.SouthMale,
    description: `Just 25–30 minutes by speedboat from Malé, Gulhi is a small but cheerful island with a laid-back energy and beautiful surroundings. It also has direct public ferry access, making it easy for budget travelers to reach. The island is best known for its turquoise lagoon and the famous beach swing that pops up in everyone’s photos. While it has a social, friendly vibe, it never feels too busy or overcrowded, even in high season. Gulhi is growing in popularity and development, with a good mix of affordable luxury stays and budget options. The island has a local feel, but it’s still very welcoming to tourists.

**Bikini Beach:**
Gulhi’s Bikini Beach is pristine and stunning. The water is crystal clear and the ocean floor has very few rocks, which makes it great for swimming. The entrance is shallow and gently sloping during high tide, though you’ll need to walk a little further out for a proper dip. During the monsoon season, the waves can pick up slightly, but they’re still manageable.

There are no free loungers here. All sunbeds and umbrellas are for rent. Natural shade is limited, just a few trees near the back of the beach, and those spots usually get taken early in the day. The Beach Boys who run the watersports area often play loud music, so if you’re into upbeat beach vibes, that might be your scene. They also sell coconuts, but at a steep price (around $7 USD), compared to the typical $1–$4 range on other islands. Occasionally, they even have karaoke right on the beach.

**Restaurants & Island Vibe:**
The restaurant variety is decent for such a small island, though most of them are not beachfront. The one beachside restaurant belongs to a hotel and offers local-style meals. If you’re after something livelier, Aimi Beach Hotel occasionally hosts live music in the evenings, but most places tend to stay pretty quiet. Overall, it’s a relaxed island with touches of fun energy that appeal to both solo travelers and couples.

**Excursions:**
Gulhi is a great jumping-off point for excursions to Vaavu Atoll, especially for nurse shark and manta ray tours. Most trips take about 60 minutes by boat, and the good news is, the group sizes are small, so you won’t be packed onto a boat with 30 people like on some of the more commercial islands. Manta ray tours are seasonal (May through September), but nurse shark tours run all year. Gulhi also offers reef snorkeling tours and other half-day trips just like Maafushi that are easy to join without much planning.

**Final Thoughts:**
If you’re looking for a small, social island close to Malé with clear water, postcard views, and a bit of fun beach energy, but without the Maafushi-level crowds, Gulhi is a great pick. You’ll get a lively atmosphere, the same snorkeling tour options, and just enough variety to keep things interesting.`,
    descriptionDe: `Nur 25–30 Minuten mit dem Schnellboot von Malé entfernt ist Gulhi eine kleine, fröhliche Insel mit entspannter Energie und wunderschöner Umgebung. Die Insel verfügt über einen direkten Zugang zur öffentlichen Fähre, was sie für preisbewusste Reisende leicht erreichbar macht. Gulhi ist vor allem für seine türkisfarbene Lagune und die berühmte Strandschaukel bekannt, die auf den Fotos fast aller Besucher zu sehen ist. Obwohl die Insel eine gesellige und freundliche Atmosphäre bietet, fühlt sie sich selbst in der Hochsaison nie zu geschäftig oder überfüllt an. Gulhi gewinnt an Beliebtheit und Entwicklung, mit einer guten Mischung aus preiswerten Luxusunterkünften und Budget-Optionen. Die Insel hat ein lokales Flair, ist aber dennoch sehr einladend für Touristen.

**Bikini-Strand:**
Gulhis Bikini-Strand ist unberührt und atemberaubend. Das Wasser ist kristallklar und der Meeresboden weist nur sehr wenige Steine auf, was ihn ideal zum Schwimmen macht. Der Einstieg ist bei Flut flach und sanft abfallend, wobei man für ein richtiges Bad etwas weiter hinauslaufen muss. Während der Monsunzeit können die Wellen leicht zunehmen, bleiben aber beherrschbar.

Es gibt hier keine kostenlosen Liegen. Alle Sonnenliegen und Sonnenschirme sind kostenpflichtig. Natürlicher Schatten ist begrenzt, nur ein paar Bäume am hinteren Ende des Strandes bieten Schutz, und diese Plätze sind meist früh am Tag besetzt. Die „Beach Boys“, die den Wassersportbereich betreiben, spielen oft laute Musik – wenn Sie also auf fröhliche Strandstimmung stehen, könnte das genau Ihr Ding sein. Gelegentlich gibt es sogar Karaoke direkt am Strand.

**Restaurants & Inselatmosphäre:**
Die Auswahl an Restaurants ist für eine so kleine Insel ordentlich, auch wenn die meisten nicht direkt am Strand liegen. Das einzige Strandrestaurant gehört zu einem Hotel und bietet Mahlzeiten im lokalen Stil an. Wenn Sie es etwas lebhafter mögen, veranstaltet das Aimi Beach Hotel gelegentlich Live-Musik am Abend, aber die meisten Orte neigen dazu, ziemlich ruhig zu bleiben. Insgesamt ist es eine entspannte Insel mit einem Hauch von fröhlicher Energie.

**Ausflüge:**
Gulhi ist ein großartiger Ausgangspunkt für Ausflüge zum Vaavu-Atoll, insbesondere für Ammenhai- und Mantarochen-Touren. Die meisten Fahrten dauern etwa 60 Minuten mit dem Boot, und das Gute ist, dass die Gruppengrößen klein sind. Manta-Touren sind saisonal (Mai bis September), aber Ammenhai-Touren finden das ganze Jahr über statt.

**Fazit:**
Wenn Sie eine kleine, gesellige Insel in der Nähe von Malé mit klarem Wasser und Postkartenansichten suchen, aber ohne die Menschenmassen von Maafushi, ist Gulhi eine ausgezeichnete Wahl.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Gulhi.webp?v=1763807763',
    videoUrl: 'https://youtu.be/oDSbE6aQEBU',
    travelGuideUrl: 'https://maldivesonabudget.net/products/gulhi-maldives-travel-guide',
    dimensions: '400m x 225m',
    guestHouseCount: 14,
    transferTypes: [TransferType.SpeedboatUnder1H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Small,
    atmosphere: [Atmosphere.Lively],
    accommodations: [Accommodation.AffordableLuxury, Accommodation.Spa],
    bikiniBeach: BikiniBeach.Medium,
    watersports: Watersports.Moderate,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.MantaRays, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Moderate,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },

  // --- NORTH MALÉ ATOLL ---
  {
    id: 'thulusdhoo',
    name: 'Thulusdhoo',
    atoll: Atoll.NorthMale,
    description: `Just 30 minutes by speedboat from Malé, Thulusdhoo is a large and energetic island that’s made a name for itself as the surfing capital of the Maldives. It also has direct public ferry access, making it easy to reach on a budget. This is one of the most popular local islands for both backpackers and surf lovers, thanks to its famous waves, beachside cafés, floating bar, and variety of guesthouses. That said, Thulusdhoo doesn’t have much of a local village vibe. The island is clearly divided between tourist and local zones, with the tourist area located at the far tip. To get there, you’ll need to take a buggy (some hotels offer it for free, but others charge a small fee). The tourist zone is fully developed and feels quite commercial, but it has all the comforts and services you’d expect.

**Bikini Beach:**
The Bikini Beach in Thulusdhoo is long and well-maintained, separated by a jetty that helps protect against erosion. The beach is backed by guesthouses and hotels, many of which offer private loungers, while others can be rented. Shade is limited in the early afternoon, but after 2 pm, hotel buildings cast longer shadows that offer some relief. The water is generally nice for swimming, though some parts of the ocean floor are rocky, especially near the edges. If you walk a bit along the shore, you can usually find clearer patches for easier entry. The beachfront itself has a lively social vibe, with stylish restaurants and colorful beach setups that make it feel upbeat and fun.

**Restaurants & Island Vibe:**
Thulusdhoo is one of the more developed and modern-feeling local islands. You’ll find plenty of beachfront restaurants with trendy decor and a good mix of local and international food. Some venues host occasional live music, adding to the atmosphere.

One unique feature of Thulusdhoo is its floating bar. It is a boat anchored just offshore where you can enjoy alcoholic drinks, which are otherwise not available on local islands. It’s a short boat ride away and a popular outing for visitors looking to socialize.

**Excursions & Surfing:**
Surfing is the main draw here. Thulusdhoo is home to the legendary Cokes surf break, making it a hotspot for international surfers. But even if you’ve never tried surfing, lessons are widely available, and beginners are welcome.

Beyond surfing, you’ll also find classic excursions like reef snorkeling, turtle-watching, dolphin tours, and sandbank trips. It’s not as excursion-heavy as some islands like Maafushi, but there are still plenty of tour options if you’re up for exploring.

**Final Thoughts:**
If you’re looking for a social island with a bit of edge, love the idea of trying surfing, or just want easy access to trendy beach cafés and a floating bar, Thulusdhoo is a strong pick. It’s not the most authentic-feeling island, but it’s fun, active, and close to Malé, perfect for those who want more action and modern vibes.`,
    descriptionDe: `Nur 30 Minuten mit dem Schnellboot von Malé entfernt ist Thulusdhoo eine große und energetische Insel, die sich als Surfhauptstadt der Malediven einen Namen gemacht hat. Dank ihrer berühmten Wellen, Cafés am Strand, einer schwimmenden Bar und einer Vielzahl von Gästehäusern ist sie eine der beliebtesten Einheimischen-Inseln. Thulusdhoo hat weniger dörfliches Flair und ist klar in Touristen- und Einheimischen-Zonen unterteilt. Die Touristenzone ist voll erschlossen und bietet allen Komfort, den man erwartet.

**Bikini-Strand:**
Der Bikini-Strand ist lang und gepflegt. Da er von Hotels und Gästehäusern gesäumt ist, bieten viele private Liegen an. Schatten ist am frühen Nachmittag begrenzt, aber später bieten die Hotelgebäude Schutz. Das Wasser ist ideal zum Schwimmen, auch wenn einige Stellen steinig sein können. Der Strand hat eine lebhafte soziale Atmosphäre mit stilvollen Restaurants.

**Restaurants & Inselatmosphäre:**
Thulusdhoo wirkt modern und entwickelt. Es gibt viele Strandrestaurants mit trendigem Dekor und einer Mischung aus lokaler und internationaler Küche. Eine Besonderheit ist die schwimmende Bar vor der Küste, auf der alkoholische Getränke serviert werden – eine Seltenheit auf Einheimischen-Inseln.

**Ausflüge & Surfen:**
Surfen ist hier die Hauptattraction, insbesondere der legendäre „Cokes“ Surf-Break. Aber auch Anfänger können hier Unterricht nehmen. Darüber hinaus gibt es klassische Ausflüge wie Riffschnorcheln, Delfin-Touren und Sandbank-Trips.

**Fazit:**
Wenn Sie eine gesellige Insel mit modernem Vibe, Surfmöglichkeiten und trendigen Cafés suchen, ist Thulusdhoo eine ausgezeichnete Wahl.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Thulusdhoo.webp?v=1763838452',
    videoUrl: 'https://youtu.be/GQcuPdVHmmQ',
    dimensions: '1.5km x 0.68km',
    guestHouseCount: 57,
    transferTypes: [TransferType.SpeedboatUnder1H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Large,
    atmosphere: [Atmosphere.Lively],
    accommodations: [Accommodation.AffordableLuxury, Accommodation.Pool, Accommodation.Spa],
    bikiniBeach: BikiniBeach.Large,
    watersports: Watersports.Moderate,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Moderate,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: true
  },
  {
    id: 'dhiffushi',
    name: 'Dhiffushi',
    atoll: Atoll.NorthMale,
    description: `Located just 45 minutes by speedboat from Malé, Dhiffushi is the easternmost local island in the Maldives and also has direct public ferry access, which makes it an easy and convenient choice. The island is lively, social, and packed with things to do, often seen as a great alternative to Maafushi for people who want energy and variety without the same level of chaos. Greenery is limited, but what Dhiffushi lacks in jungle, it makes up for with multiple beaches, watersports, and entertainment options.

**Bikini Beaches:**
Dhiffushi offers 3 very different bikini beaches, each with its own vibe.The most popular beach is located near the harbor canal, where boats enter slowly. Swimming is safe closer to shore, but it’s important not to swim too far out. The sand here is powdery soft, with a nice slope into the water. Sunbeds and umbrellas are available for rent, making it the most convenient beach for lounging and swimming. On the opposite side of the harbor, you’ll find a quiet, rocky beach lined with palm trees. This one is better for relaxing and enjoying the view rather than swimming. At the tip of the island, there’s a sunset-facing beach with free loungers. The water stays very shallow, so you’ll need to walk quite far out to swim, but it’s perfect for families with kids and for calm sunset walks.

**Restaurants & Island Vibe:**
Dhiffushi has a great variety of restaurants and cafés, many of them beachfront with string lights, palm trees, and a fun evening atmosphere. Several spots offer live music, giving the island a lively nighttime scene without feeling overwhelming. Accommodation options range from budget guesthouses to affordable luxury stays, which makes it easy to find something that fits your travel style.

**Excursions:**
Excursions from Dhiffushi are well organized and just as diverse as Maafushi’s.Nurse shark tours go to a privately owned island, which makes them slightly more expensive due to per-passenger access fees, but the experience is well managed. Reef snorkeling and turtle spotting trips are just 5 minutes away, making them quick and easy to join. There’s also a dolphin-spotting area about 15 minutes from the island, which is a popular and reliable excursion. Watersports are widely available, adding to the island’s energetic feel.

**Final Thoughts:**
Dhiffushi is a strong choice if you want a fun, social island close to the airport with lots of variety. It works especially well for families, couples, and solo travelers who enjoy entertainment, multiple beach options, and easy excursions, while still keeping travel time short and logistics simple.`,
    descriptionDe: `Nur 45 Minuten mit dem Schnellboot von Malé entfernt ist Dhiffushi die östlichste Einheimischen-Insel der Malediven. Die Insel ist lebhaft, gesellig und voller Aktivitäten – eine großartige Alternative zu Maafushi für alle, die Abwechslung ohne das totale Chaos suchen.

**Bikini-Strände:**
Dhiffushi bietet drei verschiedene Bikini-Strände. Der beliebteste liegt am Hafenkanal mit puderweichem Sand und Miet-Liegen. Ein weiterer, steiniger Strand ist von Palmen gesäumt und ideal zum Entspannen. An der Inselspitze gibt es einen Strand für Sonnenuntergänge mit flachem Wasser, perfekt für Familien.

**Restaurants & Inselatmosphäre:**
Es gibt eine gute Auswahl an Restaurants, viele davon direkt am Strand mit stimmungsvoller Beleuchtung. Einige bieten Live-Musik an. Die Unterkünfte reichen von Budget-Gästehäusern bis zu gehobenen Optionen.

**Ausflüge:**
Die Ausflüge sind vielfältig: Ammenhai-Touren (zu einer Privatinsel), Riffschnorcheln (nur 5 Minuten entfernt) und Delfin-Beobachtungen.

**Fazit:**
Dhiffushi ist eine ausgezeichnete Wahl für alle, die eine abwechslungsreiche und gesellige Insel in der Nähe des Flughafens suchen.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Diffushi.webp?v=1763807763',
    videoUrl: 'https://youtu.be/pxr-jvECmfM',
    dimensions: '900m x 200m',
    guestHouseCount: 42,
    transferTypes: [TransferType.SpeedboatUnder1H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Lively],
    accommodations: [Accommodation.AffordableLuxury],
    bikiniBeach: BikiniBeach.Large,
    watersports: Watersports.Extensive,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Lively,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'himmafushi',
    name: 'Himmafushi',
    atoll: Atoll.NorthMale,
    description: `Only 15 minutes by speedboat from Malé Airport and also reachable by direct public ferry, Himmafushi is a quiet surf island with a strong local feel. It’s medium-sized, easy to walk around, and has that laid-back, low-key vibe that many people love. While it’s best known among surfers, non-surfers appreciate the peaceful atmosphere, uncrowded streets, and a few surprisingly good restaurants. Although it’s a chill destination overall, things can get lively in the high season. Some hotels host beach parties or live music nights, especially when there are more guests. During the low season, it’s much more relaxed and quiet.

**Bikini Beach:**
The bikini beach is separated from the main harbor area and tucked away in a quiet corner. It’s not a long stretch of sand. Instead, it’s shaped more like a square or rectangular area, bordered by a large tree-covered lounging zone that extends inland. The trees offer natural shade, making it a lovely place to just relax, read a book, or take a nap. The water is shallow and calm, with minimal rocks but some areas of seagrass. It’s not a classic turquoise-lagoon type beach, but it’s very comfortable for swimming or wading.

**Restaurants & Island Vibe:**
Himmafushi may feel low-key, but the restaurant scene is surprisingly solid. You’ll find a mix of local Maldivian eats and more upscale international options, all at reasonable prices. Several beachfront spots offer chill vibes, stylish decor, and cozy seating areas perfect for sunset dinners or laid-back lunches. Whether you’re in the mood for grilled seafood, pizza, or a simple curry, there’s something tasty without the tourist trap pricing.

The island has good budget accommodations and a handful of affordable guesthouses. Tourism is low-key here, so you won’t find too much construction, especially in the tourist zone. Some development may happen in the reclaimed area of the island, but it generally doesn’t impact the guest experience.

**Other Notes:**
Like Maafushi, Himmafushi is home to a government prison. But don’t let that scare you, it’s completely safe and discreet. Most visitors wouldn’t even know it was there unless someone pointed it out.

**Excursions & Surfing:**
Himmafushi is best known for its surfing scene, but it’s also incredibly well-located for some standout excursions. In fact, it’s the closest island to one of the most popular trips in the area called the Fish Tank excursion, just 10 minutes by boat. It’s a must-do experience where you can swim with dozens of stingrays in crystal-clear water. It’s so iconic that boats from other islands bring their guests here just for this spot.

Beyond that, you’ll find the usual line-up of day trips: snorkeling with turtles, dolphin cruises, and even sandbank picnics. The groups are smaller than in busier islands like Maafushi, which gives these tours a more personal feel.

**Final Thoughts:**
If you’re after an affordable, local island close to the airport, with a bit of surf, quiet charm, and solid food, Himmafushi is a great pick. It’s ideal for people who want to escape the crowds but still be within easy reach of Malé.`,
    descriptionDe: `Nur 15 Minuten mit dem Schnellboot vom Flughafen Malé entfernt ist Himmafushi eine ruhige Surf-Insel mit starkem lokalem Flair. Sie ist ideal für alle, die eine entspannte Atmosphäre und leere Straßen suchen.

**Bikini-Strand:**
Der Bikini-Strand liegt in einer ruhigen Ecke und ist von Bäumen gesäumt, die natürlichen Schatten spenden. Das Wasser ist flach und ruhig – ideal zum Relaxen.

**Restaurants & Inselatmosphäre:**
Die Gastronomie ist überraschend gut und bietet eine Mischung aus lokaler und internationaler Küche zu fairen Preisen. Die Insel ist weniger touristisch erschlossen, was sie sehr authentisch macht.

**Ausflüge & Surfen:**
Neben dem Surfen ist Himmafushi der ideale Ausgangspunkt für den berühmten „Fish Tank“ Ausflug (nur 10 Minuten entfernt), bei dem man mit Dutzenden von Stachelrochen schnorcheln kann.

**Fazit:**
Himmafushi ist perfekt für preisbewusste Reisende, die eine ruhige Insel in Flughafennähe suchen.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Himmafushi.webp?v=1763838453',
    videoUrl: 'https://youtu.be/ZviLqeQCNfk',
    dimensions: '900m x 750m',
    guestHouseCount: 28,
    transferTypes: [TransferType.SpeedboatUnder1H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet],
    accommodations: [Accommodation.AffordableLuxury],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },

  // --- VAAVU ATOLL ---
  {
    id: 'fulidhoo',
    name: 'Fulidhoo',
    atoll: Atoll.Vaavu,
    description: `Just over an hour from Malé by speedboat, Fulidhoo is a peaceful, medium-sized island with a relaxed, authentic vibe. You can also reach it by direct public ferry, and there are 4 different speedboat companies running daily transfers, so getting here is never a hassle.It is known as a stingray island because you can see stingrays right at the beach. While the island overall has minimal greenery, the back of the island has a beautiful untouched green zone with palm trees and wild plants lining a path that runs parallel to the beach, perfect for a quiet walk or photo session.

**Bikini Beach:**
Fulidhoo’s Bikini Beach is one of our top picks in the Maldives. It’s made up of two large lagoon sections with crystal clear water, a gentle slope, and zero rocks or seaweed. The water stays calm all year round, making it ideal for families and relaxed swimmers. The only minor downside is the lack of shade. It’s a newly constructed beach, so the trees are still growing, but you’ll find palm trees elsewhere around the island. There are a few free loungers and umbrellas, available on a first-come, first-served basis, and some hotels provide loungers for their guests upon request.

**Excursions:**
Fulidhoo is the closest island to Nurse Shark Point, one of the most popular excursions in the Maldives. Boats from all around the atoll bring guests here to swim with dozens of nurse sharks. Manta Point is just 25 minutes away(seasonal May-September), and you’ll also find excursions for stingrays, dolphins, reef snorkeling, and sandbank visits. Stingrays are often visible right on the local beach, especially in the mornings, which is a rare treat. While excursions groups come to the island every day, they don’t overwhelm the peaceful vibe of the island.

**Restaurants & Island Vibe:**
The island has a laid-back, chill feel with a good variety of accommodation, from budget guesthouses to more upscale boutique hotels. A few beachfront restaurants offer scenic dining, including Kinan Boutique, which sets up charming beach buffet dinners under string lights, and Luau Beach Inn, which has a beachfront café and bakery under a stylish bamboo canopy. In terms of nightlife, Fulidhoo stays quiet. Only Kinan Boutique hosts weekly Bodu Beru performances, and there’s no live music or loud entertainment elsewhere on the island. Restaurants keep things mellow, often without background music.

**Final Thoughts:**
Fulidhoo strikes a great balance: peaceful but not boring, scenic but not crowded, and close enough to Malé without feeling overrun. We personally loved it so much we extended our stay and came back again. For people who want calm swimming, stunning marine life, and a mellow local atmosphere, it’s hard to beat.`,
    descriptionDe: `Etwas über eine Stunde mit dem Schnellboot von Malé entfernt ist Fulidhoo eine friedliche Insel mit authentischem Flair. Sie ist als „Stachelrochen-Insel“ bekannt, da man die Tiere oft direkt am Strand sehen kann.

**Bikini-Strand:**
Der Bikini-Strand von Fulidhoo gehört zu den besten auf den Malediven: Kristallklares Wasser, sanft abfallend und ohne Steine. Ideal für Familien. Einziger Nachteil ist der mangelnde Schatten, da der Strand neu angelegt wurde.

**Ausflüge:**
Fulidhoo liegt am nächsten zum Nurse Shark Point, einem der beliebtesten Schnorchelspots. Auch Manta-Touren (saisonal) und Delphin-Beobachtungen werden angeboten. Die Stachelrochen am Dorfstrand sind ein tägliches Highlight.

**Restaurants & Inselatmosphäre:**
Die Insel ist ruhig und entspannt. Es gibt einige schöne Strandrestaurants, aber kein lautes Nachtleben. Die Atmosphäre ist perfekt zum Entschleunigen.

**Fazit:**
Fulidhoo bietet die perfekte Balance aus Ruhe, Schönheit und spektakulärem Meeresleben.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Fulidhoo.webp?v=1763807763',
    videoUrl: 'https://youtu.be/N_uZH6T_nZU',
    travelGuideUrl: 'https://maldivesonabudget.net/products/fulidhoo-maldives-travel-guide',
    dimensions: '700m x 200m',
    guestHouseCount: 27,
    transferTypes: [TransferType.SpeedboatUnder1H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [Accommodation.AffordableLuxury, Accommodation.Pool],
    bikiniBeach: BikiniBeach.Large,
    watersports: Watersports.Moderate,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.MantaRays, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'thinadhoo',
    name: 'Thinadhoo',
    atoll: Atoll.Vaavu,
    description: `This small island feels more like a private resort than a local island, without the price tag. Thinadhoo is reachable in about 1.5 hours by speedboat or by direct public ferry. It has a peaceful, relaxed vibe with very few local residents, which makes it feel extra calm. Most of the island is taken care of by the Plumeria Hotels, and it shows: the island is green, well-maintained, and beautifully landscaped with flowers and jungle paths.

**Bikini Beach:**
Thinadhoo has one of the logest Bikini Beaches among local islands. It stretches almost the full length of one side of the island and is lined with palm trees and jungle greenery. The beach itself is narrow but very long, creating a private and scenic experience. There are plenty of free loungers and shade canopies, making it easy to spend the whole day here comfortably. Some palm trees even extend into the water, giving the beach a picture-perfect look.

**Excursions:**
Thinadhoo offers a great mix of relaxing and adventure-style excursions. You can book snorkeling trips, sandbank visits (just 10-minutes away), and turtle snorkeling tours through most hotels. The island is also just 30 minutes from the famous Nurse Shark Point, making it a perfect base if swimming with nurse sharks is on your list. During the right season, you can also spot manta rays (May-September). Most excursions are run by the hotels, especially Plumeria, and can be arranged on request.

**Restaurants & Island Vibe:**
You’ll find several beachfront restaurants on the island. Plumeria offers buffet dining right on the beach, and other hotels also have seaside setups with great views. The whole island has a resort-like atmosphere: quiet, peaceful, and very tidy. Hotels create their own vibe, especially Plumeria, which offers evening entertainment, games, DJs, and live music depending on the season and guest count. The island stays quiet overall, but still has enough energy to feel active at night.

**Final Thoughts:**
If you’re looking for a relaxed island with a stunning beach, jungle scenery, and a resort feel, Thinadhoo is a solid choice. It’s quiet, scenic, and easy to reach, and we personally had an amazing stay at Plumeria. In our Thinadhoo travel guide, we’ve included full transfer schedules, boat company contacts, and tips on what not to miss.`,
    descriptionDe: `Diese kleine Insel fühlt sich mehr wie ein privates Resort an als eine Einheimischen-Insel – nur ohne den hohen Preis. Sie ist in ca. 1,5 Stunden per Schnellboot erreichbar. Da sie nur wenige Einwohner hat, ist die Atmosphäre extrem ruhig und gepflegt.

**Bikini-Strand:**
Thinadhoo besitzt einen der längsten Bikini-Strände unter den lokalen Inseln. Er ist von Palmen und Dschungel gesäumt. Es gibt viele kostenlose Liegen und Schattenplätze, was ihn ideal für einen ganzen Tag am Meer macht.

**Ausflüge:**
Die Insel ist ein perfekter Ausgangspunkt für Ausflüge zum Nurse Shark Point (30 Minuten entfernt) sowie für Sandbank-Besuche und Schildkröten-Schnorcheln.

**Restaurants & Inselatmosphäre:**
Es gibt mehrere Strandrestaurants, die oft Buffet-Abendessen direkt im Sand anbieten. Die gesamte Insel wirkt wie ein kleines Resort, sehr sauber und ordentlich.

**Fazit:**
Wenn Sie ein Resort-Feeling mit Dschungel-Landschaft und traumhaften Stränden suchen, ist Thinadhoo die ideale Wahl.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/THinadhoo.webp?v=1763807763',
    videoUrl: 'https://youtu.be/u6KzFl-EnAM',
    travelGuideUrl: 'https://maldivesonabudget.net/products/thinadhoo-maldives-travel-guide',
    dimensions: '1.5km x 0.8km',
    guestHouseCount: 10,
    transferTypes: [TransferType.Speedboat1To2H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet],
    accommodations: [Accommodation.AffordableLuxury, Accommodation.Pool],
    bikiniBeach: BikiniBeach.Large,
    watersports: Watersports.Moderate,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.MantaRays, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Large,
    nightlife: Nightlife.Moderate,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: true
  },
  {
    id: 'felidhoo',
    name: 'Felidhoo',
    atoll: Atoll.Vaavu,
    description: `The quiet capital of Vaavu Atoll, Felidhoo is a great choice if you’re craving total peace. It’s reachable by a 1 hour 45 minute speedboat or a direct public ferry. This island offers a truly local, non-touristy atmosphere with moderate greenery and hardly any crowds. A solid pick for travelers who just want to slow down and take it easy.`,
    descriptionDe: `Die ruhige Hauptstadt des Vaavu-Atolls ist ideal für alle, die absolute Stille suchen. Erreichbar in 1 Std. 45 Min. per Schnellboot oder Direktfähre. Felidhoo bietet eine authentische, untouristische Atmosphäre mit mäßiger Vegetation und kaum Menschenmassen. Perfekt zum Entschleunigen.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/felidhoo.webp?v=1763838453',
    dimensions: '700m x 200m',
    guestHouseCount: 9,
    transferTypes: [TransferType.Speedboat1To2H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Local],
    accommodations: [],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.MantaRays, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Medium,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'keyodhoo',
    name: 'Keyodhoo',
    atoll: Atoll.Vaavu,
    description: `A small, authentic fishing island about 2 hours from Malé by speedboat or direct public ferry. It has a quiet, local atmosphere and is best known for its excellent house reef just steps from shore. If you’re looking for simplicity, a friendly local vibe, and great snorkeling without needing tours, Keyodhoo is a great fit. Just keep in mind that dining options are limited, so it’s best to stay at a guesthouse that includes meals.

**Bikini Beach:**
The Bikini Beach here is on the smaller side, but it has a built-in canopy for shade and a peaceful setting. There are a few rocks in the water, especially noticeable at low tide, but you can still find good spots for swimming. The water tends to get quite shallow as the tide goes out, but it’s calm and fine for a relaxing dip.

**Excursions:**
Keyodhoo offers the same types of tours you’ll find across Vaavu Atoll. It’s about 40 minutes by boat to the popular Nurse Shark Point, and seasonal manta ray trips run May through September. One highlight of the area is turtle snorkeling. Keyodhoo’s reef is a known turtle spot, and even tours from other islands bring their guests here for it. There’s also a nearby sandbank about 10–15 minutes away, and dolphin sightings are common in the area.

**Restaurants & Island Vibe:**
This is a quiet, non-touristy island where you can easily walk everywhere without needing any transport. There aren’t many standalone restaurants, so most travelers book a stay that includes meals. The guesthouses are usually welcoming and offer simple but hearty food. It’s a relaxing island if you’re looking for space to unwind without distractions.

**Final Thoughts:**
If you’re looking for a peaceful, snorkel-friendly island with strong local character and an excellent house reef, Keyodhoo might be a great choice. It’s not built for nightlife or upscale dining, but for nature lovers who prefer a walkable island with zero crowds, it’s a lovely escape.`,
    descriptionDe: `Eine kleine, authentische Fischerinsel im Vaavu-Atoll. Sie bietet eine ruhige, lokale Atmosphäre und ist vor allem für ihr hervorragendes Hausriff bekannt, das nur wenige Schritte vom Ufer entfernt liegt. Ideal für alle, die Einfachheit und tolles Schnorcheln suchen.

**Bikini-Strand:**
Der Bikini-Strand hier ist eher klein, bietet aber eine Überdachung für Schatten und eine friedliche Umgebung. Das Wasser ist ruhig und perfekt für ein entspanntes Bad, auch wenn es bei Ebbe sehr flach werden kann.

**Ausflüge:**
Keyodhoo bietet die typischen Touren des Vaavu-Atolls an: Nurse Shark Point (40 Min.), saisonale Mantas und Schnorcheln mit Schildkröten. Eine nahegelegene Sandbank ist in 10-15 Minuten erreichbar.

**Restaurants & Inselatmosphäre:**
Dies ist eine ruhige, untouristische Insel. Es gibt kaum eigenständige Restaurants, daher ist Verpflegung im Gästehaus meist die beste Wahl. Man kann alles bequem zu Fuß erkunden.

**Fazit:**
Ein schöner Rückzugsort für Naturliebhaber, die eine begehbare Insel ohne Menschenmassen und mit exzellentem Hausriff bevorzugen.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Keyodhoo.webp?v=1763809788',
    videoUrl: 'https://youtu.be/hohK5qkh88A',
    dimensions: '1.3km x 0.7km',
    guestHouseCount: 16,
    transferTypes: [TransferType.Speedboat1To2H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Local],
    accommodations: [],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.MantaRays, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },

  // --- NORTH ARI ATOLL (Alif Alif) ---
  {
    id: 'rasdhoo',
    name: 'Rasdhoo',
    atoll: Atoll.NorthAri,
    description: `A compact island just 1 hour from Malé by speedboat or accessible via direct public ferry. Rasdhoo is best known for its world-class diving, with over 20 dive sites just minutes away, but it also offers a wide range of activities for non-divers too. The island is easy to explore on foot, has a friendly local vibe, and there are multiple speedboat companies that service it daily, making it one of the more convenient options for first-time visitors.

**Bikini Beach:**
The Bikini Beach is a great size and one of the highlights of the island. It’s lined with palm trees and has natural greenery for shade, giving it a lush feel even though the rest of the island is not heavily forested. Several beachfront restaurants line the sand, and the water is calm and easy to enter, making it perfect for both relaxing and swimming.

**Excursions:**
Rasdhoo is packed with activity options. It’s only 30 minutes from the Nurse Shark Point, and offers seasonal manta ray snorkeling (typically May through September). The nearest sandbank is less than 5 minutes away, and there’s also a blue lagoon, turtle reef, picnic island, and dolphin tours. Whether you’re here for marine life or chill day trips, you’ll have plenty to choose from.

**Restaurants & Island Vibe:**
You’ll find several beachfront restaurants right on the Bikini Beach, offering local and international options. The overall vibe is authentic and welcoming, with locals who are used to tourists but still keep their island charm. Entertainment depends on where you stay and the season. Some hotels like Shallow Lagoon host Bodu Beru nights when guest numbers are high, other places have beach DJs. The island is small and walkable, with a laid-back but active feel.

**Final Thoughts:**
Rasdhoo is a top pick for divers but also works great for anyone who wants a mix of activities, a swimmable beach, and a local island vibe. It’s easy to get to, packed with excursions, and has enough going on to keep your days full, but still feels peaceful and manageable in size.`,
    descriptionDe: `Eine kompakte Insel, nur 1 Stunde per Schnellboot von Malé entfernt. Rasdhoo ist weltberühmt für das Tauchen mit über 20 Tauchplätzen in der Nähe, bietet aber auch für Nicht-Taucher viel Abwechslung.

**Bikini-Strand:**
Der Bikini-Strand ist großzügig und eines der Highlights. Er ist von Palmen und Grün gesäumt, was ihm ein tropisches Flair verleiht. Strandrestaurants und ruhiges Wasser machen ihn perfekt zum Entspannen.

**Ausflüge:**
Rasdhoo bietet Unmengen an Optionen: Nurse Shark Point (30 Min.), saisonale Mantas, eine Sandbank in 5 Minuten Entfernung, eine blaue Lagune und Delphin-Touren.

**Restaurants & Inselatmosphäre:**
Es gibt mehrere Restaurants direkt am Bikini-Strand. Die Atmosphäre ist authentisch und einladend. Je nach Saison gibt es Abendunterhaltung wie Bodu Beru oder Strand-DJs.

**Fazit:**
Top-Wahl für Taucher und alle, die einen Mix aus Aktivitäten und einem tollen Strand suchen.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Rasdhoo.webp?v=1763807762',
    videoUrl: 'https://youtu.be/6C3gneIoeIM',
    dimensions: '575m x 400m',
    guestHouseCount: 37,
    transferTypes: [TransferType.SpeedboatUnder1H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet],
    accommodations: [Accommodation.Spa],
    bikiniBeach: BikiniBeach.Medium,
    watersports: Watersports.Moderate,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.MantaRays, MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Moderate,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'ukulhas',
    name: 'Ukulhas',
    atoll: Atoll.NorthAri,
    description: `Ukulhas is about 1 hour and 15 minutes from Malé by speedboat, or you can take the direct public ferry. It’s one of the cleanest islands we’ve been to and has a strong local effort toward keeping things eco-friendly. The vibe is social but not crowded, and it has a nice mix of comfort and laid-back island charm.

**Bikini Beach:**
The Bikini Beach is long and wraps around a big chunk of the island. There’s a tree line for natural shade, and in some spots, you’ll find beautiful palm trees right on the beach. No free loungers, so bring a towel. Just a heads up, because of erosion, the size and shape of the beach can look a bit different depending on the season. Still, it’s one of the nicest stretches of sand in this part of the Maldives. Some restaurants are right on the beach, which is always a plus.

**Excursions:**
Ukulhas is a good place for manta snorkeling (May-September). For nurse shark tours, you will be taken to the same spot as tours from Rasdhoo or Thoddoo. There's a healthy house reef you can swim to directly from shore, no tour needed.A section of the reef was covered during land reclamation, but there’s still plenty left to enjoy.

**Restaurants & Island Vibe:**
You’ll find everything from cheap eats to more stylish cafes. Some places even play music at night, which adds a nice touch since a lot of local islands stay super quiet in the evenings. The island is well-developed, though most of the greenery is now around the beach area. There’s a lot of construction going on until at least 2027, not too noisy, just a bit of an eyesore in some areas.

**Final Thoughts:**
Ukulhas is a great choice if you want clean beaches, easy snorkeling, and a good range of food options. It’s not the most scenic inland, but the beachfront and reef make up for it. Just expect some construction zones here and there while the island continues to expand.`,
    descriptionDe: `Ukulhas liegt etwa 1 Stunde und 15 Minuten mit dem Schnellboot von Malé entfernt, oder Sie können die direkte öffentliche Fähre nehmen. Es ist eine der saubersten Inseln, auf denen wir je waren, und es gibt starke lokale Bemühungen, alles umweltfreundlich zu halten. Die Atmosphäre ist gesellig, aber nicht überfüllt, und bietet eine schöne Mischung aus Komfort und entspanntem Inselcharme.

**Bikini-Strand:**
Der Bikini-Strand ist lang und erstreckt sich um einen großen Teil der Insel. Es gibt eine Baumreihe für natürlichen Schatten, und an einigen Stellen finden Sie wunderschöne Palmen direkt am Strand. Es gibt keine kostenlosen Liegen, bringen Sie also ein Handtuch mit. Bitte beachten Sie, dass sich Größe und Form des Strandes aufgrund von Erosion je nach Jahreszeit verändern können. Dennoch ist es einer der schönsten Sandabschnitte in diesem Teil der Malediven. Einige Restaurants liegen direkt am Strand, was immer ein Pluspunkt ist.

**Ausflüge:**
Ukulhas ist ein guter Ort zum Manta-Schnorcheln (Mai-September). Für Ammenhai-Touren werden Sie zum selben Ort gebracht wie bei Touren ab Rasdhoo oder Thoddoo. Es gibt ein gesundes Hausriff, zu dem man direkt vom Ufer aus schwimmen kann, ganz ohne Tour. Ein Teil des Riffs wurde bei der Landgewinnung überbaut, aber es gibt immer noch genug zu genießen.

**Restaurants & Inselatmosphäre:**
Hier finden Sie alles, von günstigen Imbissen bis hin zu stilvollen Cafés. Einige Orte spielen abends Musik, was eine schöne Abwechslung ist, da viele Einheimischen-Inseln abends sehr ruhig bleiben. Die Insel ist gut erschlossen, obwohl das meiste Grün mittlerweile nur noch im Strandbereich zu finden ist. Es gibt viel Bautätigkeit bis mindestens 2027, die zwar nicht zu laut ist, aber in manchen Gegenden optisch stört.

**Fazit:**
Ukulhas ist eine gute Wahl, wenn Sie saubere Strände, einfaches Schnorcheln und eine gute Auswahl an Essensmöglichkeiten suchen. Die Insel im Inneren ist nicht die malerischste, aber der Strandbereich und das Riff machen das wett. Rechnen Sie einfach mit einigen Baustellen hier und da, während die Insel weiter expandiert.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Ukulas.webp?v=1763807763',
    videoUrl: 'https://youtu.be/nJDNic8OF9Y',
    dimensions: '1km x 0.225km',
    guestHouseCount: 45,
    transferTypes: [TransferType.Speedboat1To2H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Lively],
    accommodations: [Accommodation.AffordableLuxury],
    bikiniBeach: BikiniBeach.Large,
    watersports: Watersports.Moderate,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.MantaRays, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Moderate,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'thoddoo',
    name: 'Thoddoo',
    atoll: Atoll.NorthAri,
    description: `Thoddoo is a big, green island about 1 hour 25 minutes by speedboat from Malé. It’s known for its watermelon farms, peaceful vibe, and lush tropical feel. The island is shaped like a perfect circle, and guesthouses are scattered all around, so getting around can take time. Most people rent bicycles or take buggy taxis. 

**Bikini Beach:**
There are two Bikini Beaches on the island: one on the sunrise side near the harbor, and one on the sunset side. The harbor beach doesn’t have much sand or great swimming. It’s rocky and better for relaxing under the trees. Sunset Beach is the one everyone comes for. It has soft sand, tall palm trees growing sideways toward the ocean, and a nice swimming area with minimal rocks. You can often spot turtles while snorkeling right off the beach. During the high season, it gets pretty crowded, and shade is limited. There are a few built-in umbrellas and a small tree line, but not much more. A fresh fruit stand nearby is a great bonus, especially on hot days. Depending on where you stay, walking to the beach can take 15 to 25 minutes.

**Excursions:**
Thoddoo offers the usual local excursions: seasonal manta snorkeling (May to September), nurse shark trips, sandbank visits, diving, and night fishing. The tours are similar to nearby islands like Rasdhoo, though they don’t offer anything unique just to Thoddoo. 

**Restaurants & Island Vibe:**
The island has a peaceful, tropical atmosphere, but restaurant options are limited, especially during high season. Expect longer waits for food and tables. Most visitors here are Russian, and the island gets very busy between December and April. During the low season, it slows down a lot and can feel very quiet. Some guesthouses organize Bodu Beru performances, but that mostly happens only when they’re fully booked.

**Final Thoughts:**
Thoddoo is beautiful and very green, with rows of tall palm trees and wide open farmland. The scenery is gorgeous, especially if you like a tropical, rural feel. But be ready for longer walking distances, limited shade on the beach, and windy conditions during monsoon season. The island sits alone, without protection from other islands, so rough waters can impact transfers and beach time. Still, if you’re looking for a peaceful vibe, nice snorkeling, and affordable boutique stays, Thoddoo is a great choice.`,
    descriptionDe: `Thoddoo ist eine große, grüne Insel, die etwa 1 Stunde und 25 Minuten mit dem Schnellboot von Malé entfernt liegt. Sie ist bekannt für ihre Wassermelonen-Farmen, ihre friedliche Stimmung und ihr üppiges tropisches Flair. Die Insel ist kreisrund geformt, und die Gästehäuser sind über die ganze Insel verteilt, sodass die Wege zeitaufwendig sein können. Die meisten Leute mieten Fahrräder oder nutzen Buggy-Taxis.

**Bikini-Strand:**
Es gibt zwei Bikini-Strände auf der Insel: einen auf der Sunrise-Seite am Hafen und einen auf der Sunset-Seite. Der Hafenstrand bietet nicht viel Sand oder gute Bademöglichkeiten. Er ist steinig und eher zum Entspannen unter den Bäumen geeignet. Der Sunset-Strand ist derjenige, für den alle kommen. Er hat weichen Sand, hohe Palmen, die seitlich zum Ozean wachsen, und einen schönen Schwimmbereich mit nur wenigen Steinen. Beim Schnorcheln direkt am Strand kann man oft Schildkröten entdecken. In der Hochsaison wird es ziemlich voll und Schatten ist begrenzt. Es gibt ein paar fest installierte Sonnenschirme und eine kleine Baumreihe, aber nicht viel mehr. Ein Stand mit frischem Obst in der Nähe ist ein toller Bonus für heiße Tage. Je nachdem, wo Sie wohnen, dauert der Weg zum Strand 15 bis 25 Minuten.

**Ausflüge:**
Thoddoo bietet die üblichen lokalen Ausflüge an: saisonales Manta-Schnorcheln (Mai bis September), Ammenhai-Trips, Sandbank-Besuche, Tauchen und Nachtfischen. Die Touren ähneln denen der Nachbarinseln wie Rasdhoo, bieten aber nichts Einzigartiges, das es nur auf Thoddoo gibt.

**Restaurants & Inselatmosphäre:**
Die Insel hat eine friedliche, tropische Atmosphäre, aber die Restaurantoptionen sind begrenzt, besonders in der Hochsaison. Rechnen Sie mit längeren Wartezeiten auf Essen und Tische. Die meisten Besucher hier sind Russen, und die Insel wird zwischen Dezember und April sehr voll. In der Nebensaison wird es deutlich ruhiger. Einige Gästehäuser organisieren Bodu-Beru-Aufführungen, was jedoch meist nur bei voller Belegung passiert.

**Fazit:**
Thoddoo ist wunderschön und sehr grün, mit Reihen hoher Palmen und weiten Ackerflächen. Die Landschaft ist herrlich, besonders wenn man ein tropisches, ländliches Gefühl mag. Stellen Sie sich jedoch auf längere Fußwege, begrenzten Schatten am Strand und windige Bedingungen während der Monsunzeit ein. Die Insel liegt isoliert ohne Schutz durch andere Inseln, sodass raue See den Transfer und die Strandzeit beeinträchtigen kann. Wer eine friedliche Atmosphäre, schönes Schnorcheln und erschwingliche Boutique-Unterkünfte sucht, ist hier genau richtig.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Thoddhoo.webp?v=1763807763',
    videoUrl: 'https://www.youtube.com/watch?v=Evrsme0VMd8',
    travelGuideUrl: 'https://maldivesonabudget.net/products/thoddhoo-maldives-travel-guide',
    dimensions: '2km x 1km',
    guestHouseCount: 93,
    transferTypes: [TransferType.Speedboat1To2H],
    ferryAccess: FerryAccess.Transfer,
    size: IslandSize.Large,
    atmosphere: [Atmosphere.Lively],
    accommodations: [Accommodation.AffordableLuxury],
    bikiniBeach: BikiniBeach.Medium,
    watersports: Watersports.Moderate,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.MantaRays, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays],
    jungle: JungleVegetation.Large,
    nightlife: Nightlife.Moderate,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'bodufolhudhoo',
    name: 'Bodufolhudhoo',
    atoll: Atoll.NorthAri,
    description: `Tucked away in North Ari Atoll, Bodufolhudhoo is a small, peaceful island about 1.5 hours from Malé by speedboat. You can also get there via public ferry, but it requires a transfer at Ukulhas, which adds time. The island is quiet, local, and charming, great if you’re looking to unplug and slow down.

**Bikini Beach:**
The Bikini Beach here is small but lovely. It rarely feels crowded since the island doesn’t get many tourists. There’s natural shade from the tree line, and a few guesthouses are located directly beachfront, so the beach feels like an extension of your stay. The house reef is just a few steps from shore and great for snorkeling, though it’s very small. The island recently went through land reclamation, and unfortunately, part of the reef was distroyed because of it.

**Excursions:**
Most guesthouses offer simple excursions like sandbank visits, dolphin cruises, and seasonal manta snorkeling(May-September). They usually take you to nearby Mathiveri for the sandbank. One of the more unique trips they offer is octopus hunting, which you won’t find on every island. Just don’t expect a huge list of excursions, things here are more low-key. 

**Restaurants & Island Vibe:**
There’s one small local restaurant near the harbor, but most guesthouses include a meal plan and you’ll definitely want one. The island has around five guesthouses in total, two of which are right on Bikini Beach. There aren’t many cafes or outside dining options, so booking half or full board is the way to go. Entertainment is almost nonexistent unless your guesthouse organizes something during high season. The overall vibe is quiet, slow-paced, and very local.

**Final Thoughts:**
We really love Bodufolhudhoo. It’s cozy, calm, and full of charm. There’s not much to do, and that’s kind of the point. It’s ideal if you want a peaceful escape with just the basics: beach, food, sleep, snorkel, repeat.`,
    descriptionDe: `Versteckt im Nord-Ari-Atoll liegt Bodufolhudhoo, eine kleine, friedliche Insel, etwa 1,5 Stunden mit dem Schnellboot von Malé entfernt. Sie ist auch mit der öffentlichen Fähre erreichbar, was jedoch einen Umstieg in Ukulhas erfordert und entsprechend länger dauert. Die Insel ist ruhig, lokal und charmant – ideal, wenn man abschalten und das Tempo drosseln möchte.

**Bikini-Strand:**
Der Bikini-Strand hier ist klein, aber herrlich. Er fühlt sich selten überfüllt an, da es nicht viele Touristen gibt. Die Baumreihe bietet natürlichen Schatten, und einige Gästehäuser liegen direkt am Strand, sodass dieser sich wie eine Erweiterung Ihres Aufenthalts anfühlt. Das Hausriff ist nur wenige Schritte vom Ufer entfernt und eignet sich hervorragend zum Schnorcheln, auch wenn es sehr klein ist. Durch Landgewinnung wurde vor kurzem leider ein Teil des Riffs zerstört.

**Ausflüge:**
Die meisten Gästehäuser bieten einfache Ausflüge wie Sandbank-Besuche, Delfin-Touren und saisonales Manta-Schnorcheln (Mai-September) an. Für die Sandbank fährt man meist zum nahegelegenen Mathiveri. Eine der einzigartigeren Touren ist die Oktopusjagd, die man nicht auf jeder Insel findet. Erwarten Sie jedoch keine riesige Auswahl, hier geht es eher entspannt zu.

**Restaurants & Inselatmosphäre:**
Es gibt ein kleines lokales Restaurant am Hafen, aber die meisten Gästehäuser bieten Verpflegung an, was definitiv empfehlenswert ist. Die Insel hat insgesamt etwa fünf Gästehäuser, von denen zwei direkt am Bikini-Strand liegen. Cafés oder andere Essensmöglichkeiten außerhalb sind rar, daher ist die Buchung von Halb- oder Vollpension sinnvoll. Unterhaltung gibt es kaum, außer das Gästehaus organisiert in der Hochsaison etwas. Die Atmosphäre ist ruhig, entschleunigt und sehr authentisch.

**Fazit:**
Wir lieben Bodufolhudhoo wirklich. Es ist gemütlich, ruhig und voller Charme. Es gibt nicht viel zu tun, und genau das ist der Punkt. Ideal für eine friedliche Flucht mit den Grundlagen: Strand, Essen, Schlafen, Schnorcheln, Wiederholen.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Bodufolhudhoo.webp?v=1763807763',
    videoUrl: 'https://youtu.be/DsJ1x8zDfog',
    dimensions: '300m x 300m',
    guestHouseCount: 3,
    transferTypes: [TransferType.Speedboat1To2H],
    ferryAccess: FerryAccess.Transfer,
    size: IslandSize.Small,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'mathiveri',
    name: 'Mathiveri',
    atoll: Atoll.NorthAri,
    description: `A peaceful, medium-sized island in North Ari Atoll, Mathiveri is about 1.5 hours from Malé by speedboat. Public ferry access is possible, though it requires a transfer at Ukulhas. The island has a calm, friendly vibe and is known for its stunning natural sandbank just offshore. On one side of the island, there’s a stretch of tall palm trees perfectly lined up, making it a favorite photo spot and a beautiful place for a walk.

**Bikini Beach:**
The Bikini Beach here is quite small and doesn't offer much natural shade. While it’s still swimmable, many people actually prefer heading to the nearby sandbank, which feels more spacious and tropical. In low tide you can even walk across the canal to the sandbank. Often times there is a local boat shuttle available for a small fee. 

**Excursions:**
Mathiveri offers a laid-back excursion scene, but it still covers the highlights. You can swim with seasonal mantas (May-September), visit a nearby nurse shark point, or enjoy relaxed sandbank trips and snorkeling tours. Everything is close by, so the vibe stays low-key while still delivering that classic Maldives experience.

**Restaurants & Island Vibe:**
While there aren’t any true beachfront restaurants, you’ll find a few stylish cafes and guesthouse restaurants scattered around the island. The food is solid, with both local and international options. The overall atmosphere is chill and local, ideal for people who want to slow down and enjoy island life without a big tourist crowd.

**Final Thoughts:**
Mathiveri is a great choice and actually underrated. If you're looking for a peaceful island with a beautiful sandbank, good excursion access, and a cozy, local vibe. It’s not flashy, but it's easy to fall in love with and perfect if you want to relax without overplanning your days.`,
    descriptionDe: `Eine friedliche, mittelgroße Insel im Nord-Ari-Atoll, ca. 1,5 Stunden von Malé entfernt. Bekannt für ihre wunderschöne Sandbank direkt vor der Küste. Auf einer Seite der Insel gibt es eine Reihe perfekt ausgerichteter hoher Palmen – ein beliebter Fotospot und ein schöner Ort für einen Spaziergang.

**Bikini-Strand:**
Der Bikini-Strand hier ist recht klein und bietet wenig natürlichen Schatten. Viele Besucher bevorzugen die nahegeeleitete Sandbank, die bei Ebbe sogar zu Fuß erreichbar ist. Oft gibt es einen Bootstransfer für eine kleine Gebühr.

**Ausflüge:**
Mathiveri bietet eine entspannte Ausflugsszene: saisonale Mantas (Mai-September), Nurse Shark Point und klassische Schnorcheltouren. Alles liegt nah beieinander.

**Restaurants & Inselatmosphäre:**
Es gibt keine direkten Strandrestaurants, aber einige stilvolle Cafés im Dorf. Die Atmosphäre ist sehr entspannt und lokal – ideal für alle, die das Inselleben ohne große Touristenmassen genießen wollen.

**Fazit:**
Mathiveri ist eine großartige Wahl und wird oft unterschätzt. Perfekt für alle, die eine friedliche Insel mit einer traumhaften Sandbank und gemütlichem Flair suchen.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Mathiveri.webp?v=1763809813',
    videoUrl: 'https://youtu.be/pwqYbW3hMHc',
    dimensions: '0.775km x 0.475km',
    guestHouseCount: 28,
    transferTypes: [TransferType.Speedboat1To2H],
    ferryAccess: FerryAccess.Transfer,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [Accommodation.AffordableLuxury],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.MantaRays, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'feridhoo',
    name: 'Feridhoo',
    atoll: Atoll.NorthAri,
    description: `A large, peaceful island in North Ari Atoll, Feridhoo is reachable by 1.5 to 2 hour speedboat from Malé. Public ferry access is also possible, but requires a transfer at Ukulhas. Covered in lush tropical forest and still new to tourism, this quiet island offers a laid-back, authentic vibe with minimal crowds, even in high season.

**Bikini Beach:**
Feridhoo has one of the most scenic and relaxing Bikini Beaches in the area. The sand is soft and powdery, and the beach is long with a gentle slope into the water. It’s protected by the reef, so the water stays calm even during monsoon season, great for swimming year-round. There’s a small area with loungers and some manmade shade, but most of the tree line is dense bush, so natural shade is limited. While you won’t find many palm trees directly on the Bikini Beach, the rest of the island has plenty of beautiful palm-lined local beaches for photos and walks.

**Excursions:**
This island offers the best of both worlds. Even though it’s in North Ari, it’s close enough to reach South Ari for whale shark and manta excursions. These trips are a bit longer and more expensive than from South Ari islands, but still very doable. For nurse shark tours, boats typically head toward Mathiveri, slightly pricier than from islands closer to the site, but still an option. You’ll also find typical tours like dolphin watching, sandbanks, and vibrant reef snorkeling. Bonus: Feridhoo has a small but lively house reef you can swim to directly from shore, no boat needed.

**Restaurants & Island Vibe:**
The island is still new to tourism, so guesthouses and restaurants are simple and authentic. It’s not a spot for affordable luxury or trendy cafés, but that’s part of its charm. Most accommodations are small and family-run, and meals are usually included in your stay. What makes Feridhoo special is the peaceful, untouched jungle feel and the sense that you’ve really escaped.

**Final Thoughts:**
Feridhoo is perfect if you’re looking for peace, nature, and a true local vibe without the buzz of tourism. If you don’t need fancy restaurants or modern hotels and just want to relax, snorkel, and enjoy lush forest walks, this is a solid choice, especially if you want to explore both North and South Ari from one base.`,
    descriptionDe: `Eine große, friedliche Insel im Nord-Ari-Atoll, ca. 1,5 bis 2 Stunden per Schnellboot entfernt. Bedeckt von üppigem Tropenwald und noch relativ neu im Tourismus, bietet sie eine sehr authentische Atmosphäre ohne Menschenmassen.

**Bikini-Strand:**
Feridhoo hat einen der schönsten Strände der Region: puderweicher Sand, sanfter Einstieg und ganzjährig ruhiges Wasser, geschützt durch das Riff. Natürlicher Schatten ist begrenzt, aber die Insel hat viele andere fotogene Palmenstrände für Spaziergänge.

**Ausflüge:**
Man kann sowohl die Highlights von Nord- als auch von Süd-Ari erreichen (Walhaie, Mantas). Ein besonderer Bonus ist das lebendige Hausriff, das man direkt vom Strand aus erschwimmen kann – kein Boot nötig.

**Restaurants & Inselatmosphäre:**
Die Insel ist noch ursprünglich, Gästehäuser und Restaurants sind einfach und authentisch. Perfekt für ein echtes „Escape“-Gefül im Dschungel. Die meisten Gäste essen in ihren familiengeführten Unterkünften.

**Fazit:**
Ideal für Natur- und Ruhesuchende, die den Malediven-Urlaub abseits des Trubels genießen wollen.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Feridhoo.webp?v=1763838453',
    videoUrl: 'https://youtu.be/b6HW6sKqMl4',
    dimensions: 'Approx 1.3km long',
    guestHouseCount: 12,
    transferTypes: [TransferType.Speedboat1To2H],
    ferryAccess: FerryAccess.Transfer,
    size: IslandSize.Medium, 
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [],
    bikiniBeach: BikiniBeach.Large, 
    watersports: Watersports.Minimal, 
    marineActivities: [MarineActivity.NurseSharks, MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.HouseReef],
    seasonalActivities: [MarineActivity.MantaRays],
    jungle: JungleVegetation.Large, 
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'himandhoo',
    name: 'Himandhoo',
    atoll: Atoll.NorthAri,
    description: `A small, traditional island in North Ari Atoll, reachable by speedboat in 1.5 to 2 hours. Public ferry access requires a transfer at Ukulhas. The island has a quiet, local vibe and minimal greenery. Some guesthouses organize full-day tours to South Ari, where you can snorkel with whale sharks and manta rays year-round.`,
    descriptionDe: `Eine kleine, traditionelle Insel im Nord-Ari-Atoll, 1,5–2 Std. per Schnellboot. Fähre mit Umstieg in Ukulhas. Ruhige, lokale Atmosphäre und wenig Grün. Manche Gästehäuser bieten Ganztagestouren ins Süd-Ari-Atoll an, um ganzjährig mit Walhaien und Mantas zu schnorcheln.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Himandhoo.webp?v=1763838453',
    videoUrl: 'https://youtu.be/z3RP_wtPJ3c',
    dimensions: 'Approx 900m long',
    guestHouseCount: 11,
    transferTypes: [TransferType.Speedboat1To2H],
    ferryAccess: FerryAccess.Transfer,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },

  // --- SOUTH ARI ATOLL (Alif Dhaalu) ---
  {
    id: 'dhigurah',
    name: 'Dhigurah',
    atoll: Atoll.SouthAri,
    description: `Located in South Ari Atoll, Dhigurah is about 2 hours by speedboat from Malé or reachable via a domestic flight to Maamigili, followed by a short speedboat ride. It’s a long, peaceful island with a quiet village, lush greenery, and no overdevelopment, offering a great balance between nature and comfort.

**Bikini Beach:**
The Bikini Beach stretches far along the western side of the island and is one of the longest in the Maldives. It’s lined with natural greenery but has no loungers or shaded seating. Most visitors just lay out on towels. The shoreline varies: some sections are smooth and sandy, while others have a rocky ocean floor. During monsoon season, strong winds blow directly toward this beach, making the water rough and often unswimmable.

**Excursions:**
Dhigurah is famous for year-round whale shark and manta sightings. These excursions are the main draw, but there’s a catch: guesthouses only allow their own guests on their tours. If your guesthouse cancels due to low signups, you won’t be able to join a different group. There is a house reef, but it’s not accessible from shore. You'll need to take a boat. The island’s sandbank is also a highlight. It connects to the southern tip during dry season and makes for beautiful sunset walks, but it disappears completely during monsoon due to high waves. It’s a long walk to get there, either through the jungle or along the shore, and while you can rent a buggy, there are no facilities, bring water and snacks.

**Restaurants & Island Vibe:**
Dining options are limited but decent, with a few quality restaurants offering both local and international food. None are beachfront, though some places offer romantic setups on the sand by request. There’s also a small snack cart by the beach, but no casual sit-down dining right on the shoreline. The island has no nightlife, no live music, performances, or evening entertainment (we visited 4 times). The vibe is quiet and local, best suited for nature-focused travelers who don’t need much stimulation after dark.

**Final Thoughts:**
Dhigurah is ideal for those chasing whale sharks, mantas, and long, scenic walks. It’s not built for social nightlife, but for marine life and nature, it’s one of the best picks in the country. Just be prepared for seasonal limitations and tour booking restrictions.`,
    descriptionDe: `Dhigurah liegt im Süd-Ari-Atoll und ist bekannt als „Long Island“. Eine üppig grüne, lange Insel, die eine perfekte Balance zwischen Natur und Komfort bietet.

**Bikini-Strand:**
Einer der längsten Strände der Malediven, gesäumt von Natur. Es gibt keine Liegen, man liegt direkt im Sand. Während der Monsunzeit kann das Wasser hier sehr rau sein.

**Ausflüge:**
Berühmt für ganzjährige Walhai- und Manta-Begegnungen. Wichtig: Touren werden meist nur für eigene Gäste des jeweiligen Gästehauses angeboten. Die Sandbank am Südende ist ein Highlight für Sonnenuntergänge.

**Restaurants & Inselatmosphäre:**
Die Auswahl ist begrenzt, aber gut. Es gibt keine direkten Strandrestaurants und kein Nachtleben oder Abendunterhaltung. Die Atmosphäre ist sehr ruhig und naturverbunden.

**Fazit:**
Ideal für Meeresliebhaber und Ruhesuchende. Einer der besten Orte für Walhaie weltweit.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Dhigurah.webp?v=1763807762',
    videoUrl: 'https://youtu.be/b_-fU8CPVks',
    travelGuideUrl: 'https://maldivesonabudget.net/products/dhigurah-maldives-travel-guide',
    dimensions: '3km x 250m',
    guestHouseCount: 43,
    transferTypes: [TransferType.Speedboat1To2H, TransferType.DomesticFlightSpeedboat],
    ferryAccess: FerryAccess.Transfer, 
    size: IslandSize.Large,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [Accommodation.AffordableLuxury],
    bikiniBeach: BikiniBeach.Large,
    watersports: Watersports.Moderate,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Dolphins],
    seasonalActivities: [],
    jungle: JungleVegetation.Large,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: true,
    isSandbankSeasonal: true,
    hasFloatingBar: false
  },
  {
    id: 'dhangethi',
    name: 'Dhangethi',
    atoll: Atoll.SouthAri,
    description: `Located in South Ari Atoll, Dhangethi is a medium-sized local island about 1 hour 45 minutes from Malé by speedboat. It’s easygoing, full of local charm. It is honestly underrated. If you’re after whale sharks and mantas, this is one of the best launch points in the Maldives, with year-round tours heading straight from the island.

**Bikini Beach:**
The Bikini Beach is a decent size, though some areas have seaweed. Still, there are spots with calm, swimmable water, and the beach never feels too crowded. It’s not the most picturesque beach in South Ari, but for a budget-friendly island, it does the job, especially considering how much else there is to enjoy on Dhangethi.

**Excursions:**
This is where Dhangethi shines. Tours here cover all the South Ari highlights: whale sharks, manta rays, turtles, dolphins, and snorkeling reefs, and they’re usually more affordable than the ones from Dhigurah. While Dhigurah is often hyped for whale shark tours, in reality, all nearby islands share access to the same tour zones. The only difference is that Dhangethi has cheaper stays and better restaurant vibes. Sandbanks aren’t part of the regular offerings here, but Dhigurah’s sandbanks disappear during monsoon season anyway, so you’re not missing much. If you really want to visit Dhigurah, it’s close enough for a day trip.

**Restaurants & Island Vibe:**
We really liked the vibe here. It feels local but has touches that give you a resort-style experience, without resort prices. Several restaurants are built overwater or right on the jetties, which makes for a great sunset dinner spot (and some social media worthy photos). The main public jetty lights up in the evening and becomes a favorite hangout for both locals and tourists. There are quite a few guesthouses, most offering comfortable, budget-friendly stays. And yes, there’s even a fun island legend about “the moon in a pot” that gives the island some extra character.

**Final Thoughts:**
Dhangethi is a great alternative to Dhigurah, especially if you’re on a budget but still want access to top-tier marine life, solid food options, and a bit of a resort feel. It’s relaxed, affordable, and full of personality, a smart pick for people who want more than just a beach.`,
    descriptionDe: `Dhangethi liegt im Süd-Ari-Atoll und ist eine mittelgroße, authentische Einheimischen-Insel, etwa 1 Stunde und 45 Minuten mit dem Schnellboot von Malé entfernt. Sie ist unkompliziert und voller lokalem Charme – ehrlich gesagt wird sie oft unterschätzt. Wenn Sie Walhaie und Mantas sehen wollen, ist dies einer der besten Ausgangspunkte auf den Malediven, mit ganzjährigen Touren direkt ab der Insel.

**Bikini-Strand:**
Der Bikini-Strand hat eine ordentliche Größe, obwohl es in einigen Bereichen Seegras gibt. Dennoch gibt es Stellen mit ruhigem, schwimmbarem Wasser, und der Strand fühlt sich nie zu überfüllt an. Er ist nicht der malerischste Strand im Süd-Ari-Atoll, aber für eine preiswerte Insel erfüllt er seinen Zweck, besonders wenn man bedenkt, was Dhangethi sonst noch zu bieten hat.

**Ausflüge:**
Hier glänzt Dhangethi. Die Touren decken alle Highlights des Süd-Ari-Atolls ab: Walhaie, Mantarochen, Schildkröten, Delfine und Schnorchelriffs – und sie sind meist erschwinglicher als die Touren ab Dhigurah. Während Dhigurah oft für Walhai-Touren gehypt wird, haben in Wahrheit alle nahegelegenen Inseln Zugang zu denselben Zonen. Der einzige Unterschied ist, dass Dhangethi günstigere Unterkünfte und eine bessere Restaurant-Atmosphäre bietet. Sandbänke gehören hier nicht zum Standardangebot, aber die Sandbänke von Dhigurah verschwinden während der Monsunzeit sowieso, sodass man nicht viel verpasst. Wenn Sie Dhigurah unbedingt besuchen wollen, ist es nah genug für einen Tagesausflug.

**Restaurants & Inselatmosphäre:**
Uns hat die Stimmung hier wirklich gefallen. Es fühlt sich lokal an, bietet aber Details, die an ein Resort-Erlebnis erinnern, ohne Resort-Preise. Mehrere Restaurants sind über dem Wasser oder direkt auf den Stegen gebaut, was sie zu tollen Orten für ein Abendessen bei Sonnenuntergang macht (und für Fotos, die sich auf Social Media gut machen). Der öffentliche Hauptsteg ist abends beleuchtet und ein beliebter Treffpunkt für Einheimische und Touristen. Es gibt etliche Gästehäuser, die meisten bieten komfortable, preiswerte Unterkünfte. Und ja, es gibt sogar eine lustige Insellegende über „den Mond in einem Topf“, die der Insel zusätzlichen Charakter verleiht.

**Fazit:**
Dhangethi ist eine großartige Alternative zu Dhigurah, besonders wenn Sie ein begrenztes Budget haben, aber dennoch Zugang zu erstklassigem Meeresleben, soliden Essensmöglichkeiten und ein wenig Resort-Feeling wünschen. Es ist entspannt, erschwürlich und voller Persönlichkeit – eine kluge Wahl für Leute, die mehr als nur einen Strand wollen.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Dhangeti.webp?v=1763838452',
    videoUrl: 'https://youtu.be/FtZjpqsp9VA',
    dimensions: '925m x 350m',
    guestHouseCount: 28,
    transferTypes: [TransferType.Speedboat1To2H, TransferType.DomesticFlightSpeedboat],
    ferryAccess: FerryAccess.Transfer,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Local],
    accommodations: [Accommodation.AffordableLuxury],
    bikiniBeach: BikiniBeach.Medium,
    watersports: Watersports.Moderate,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'mahibadhoo',
    name: 'Mahibadhoo',
    atoll: Atoll.SouthAri,
    description: `The capital of South Ari Atoll, reachable in about 1 hour 25 minutes by speedboat. While not a typical tourist island, it’s one of the busiest local hubs, like a small island city. You’ll find paved roads, government offices, and lots of day-to-day activity, with locals from nearby islands often coming here for services. Public ferry access is available directly from Malé. It’s also a solid base for year-round whale shark and manta ray excursions in South Ari.`,
    descriptionDe: `Die Hauptstadt des Süd-Ari-Atolls, ca. 1 Std. 25 Min. per Schnellboot. Keine typische Touristeninsel, sondern ein geschäftiges lokales Zentrum, fast wie eine kleine Inselstadt. Gepflasterte Straßen, Ämter und reges Alltagsleben. Direktfähre von Malé verfügbar. Solide Basis für ganzjährige Walhai- und Manta-Ausflüge.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Mahibadhoo.webp?v=1763838452',
    videoUrl: 'https://youtu.be/DD7ehj7zFvs',
    dimensions: '2.4km x 1.2km',
    guestHouseCount: 11,
    transferTypes: [TransferType.Speedboat1To2H],
    ferryAccess: FerryAccess.Direct,
    size: IslandSize.Large,
    atmosphere: [Atmosphere.Local],
    accommodations: [],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'omadhoo',
    name: 'Omadhoo',
    atoll: Atoll.SouthAri,
    description: `Omadhoo is a small island in South Ari Atoll, about 1 hour 30 minutes from Malé by speedboat. It’s quiet, friendly, and has a local feel that makes it easy to settle in. The greenery is limited, but what it lacks in trees, it makes up for in charm and laid-back atmosphere.

**Bikini Beach:**
The beach here is simple but peaceful. You’ll find some loungers and shade, and while it’s not the widest stretch of sand, it’s usually not too crowded. The real highlight is the house reef. It’s right off the beach and great for quick, easy snorkeling.

**Excursions:**
Omadhoo is well-placed for year-round manta and whale shark tours. You’ll find all the same trips offered across South Ari, including snorkeling, dolphin cruises, and sandbank visits. Some guesthouses also offer trips to Vaavu Atoll for nurse shark snorkeling, but keep in mind, it’s a two-hour boat ride, and they usually need a full group before confirming the trip.

**Restaurants & Island Vibe:**
The island is small, and most people stick with their guesthouse meal plans. A few places offer local food, but don’t expect a big restaurant scene. Still, it’s the kind of place where you’ll meet locals, enjoy the quiet, and really unplug. It’s a great fit for people who want simple comforts, nature, and access to amazing marine life without crowds.

**Final Thoughts:**
If you’re looking for an easygoing island with a strong reef, access to top excursions, and a chill local vibe, Omadhoo is a good choice. It’s not flashy, but it delivers where it counts.`,
    descriptionDe: `Omadhoo ist eine kleine Insel im Süd-Ari-Atoll, etwa 1 Stunde und 30 Minuten mit dem Schnellboot von Malé entfernt. Sie ist ruhig, freundlich und hat ein lokales Flair, das es einem leicht macht, sich einzuleben. Das Grün ist begrenzt, aber was an Bäumen fehlt, macht die Insel durch Charme und eine entspannte Atmosphäre wett.

**Bikini-Strand:**
Der Strand hier ist einfach, aber friedlich. Sie finden einige Liegen und Schatten, und obwohl es nicht der breiteste Sandabschnitt ist, ist es meist nicht zu voll. Das eigentliche Highlight ist das Hausriff. Es liegt direkt am Strand und ist ideal für schnelles, einfaches Schnorcheln.

**Ausflüge:**
Omadhoo ist ideal gelegen für ganzjährige Manta- und Walhai-Touren. Es werden dieselben Ausflüge wie im gesamten Süd-Ari-Atoll angeboten, einschließlich Schnorcheln, Delfin-Touren und Sandbank-Besuchen. Einige Gästehäuser bieten auch Touren zum Vaavu-Atoll zum Ammenhai-Schnorcheln an, aber bedenken Sie, dass dies eine zweistündige Bootsfahrt ist und meist eine volle Gruppe benötigt wird, bevor die Tour bestätigt wird.

**Restaurants & Inselatmosphäre:**
Die Insel ist klein und die meisten Leute bleiben bei der Verpflegung ihrer Gästehäuser. Es gibt ein paar Orte mit lokalem Essen, aber erwarten Sie keine große Restaurantszene. Dennoch ist es die Art von Ort, an dem man Einheimische trifft, die Ruhe genießt und wirklich abschalten kann. Perfekt für Leute, die einfachen Komfort, Natur und Zugang zu fantastischem Meeresleben ohne Menschenmassen suchen.

**Fazit:**
Wenn Sie eine unkomplizierte Insel mit einem starken Riff, Zugang zu erstklassigen Ausflügen und einer entspannten lokalen Stimmung suchen, ist Omadhoo eine gute Wahl. Sie ist nicht prunkvoll, liefert aber dort ab, wo es zählt.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Omadoo.webp?v=1763838452',
    videoUrl: 'https://youtu.be/CFmm2lQfbJ8',
    dimensions: '0.95km x 0.3km',
    guestHouseCount: 20,
    transferTypes: [TransferType.Speedboat1To2H],
    ferryAccess: FerryAccess.Transfer,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },

  // --- BAA ATOLL ---
  {
    id: 'dharavandhoo',
    name: 'Dharavandhoo',
    atoll: Atoll.Baa,
    description: `A small but lively island in Baa Atoll, Dharavandhoo is best known as the gateway to Hanifaru Bay, one of the most famous places in the Maldives for manta ray and whale shark encounters. You can get here by domestic flight from Malé in about 25 minutes, or take a longer (but scenic) speedboat ride that takes roughly 2 to 2.5 hours depending on sea conditions. There’s no direct ferry from Malé, but you can connect from nearby islands using inter-atoll ferries.

**Bikini Beach:**
The Bikini Beach is large, with a few different lagoons and plenty of space to spread out. Some spots have a rocky ocean floor, but there are also clear areas for swimming. You’ll find natural palm shade, loungers available at some properties, and even a few photo spots with leaning palm trees & Maldivian chairs.

**Excursions:**
If you’re here between May and October, this is the best time to see manta rays in Hanifaru Bay (sometimes even by the hundreds). You might also get lucky and see whale sharks, especially in August and September. There’s even a nighttime whale shark snorkeling tour, which is something most islands don’t offer. Since Dharavandhoo is just 5 to 10 minutes from Hanifaru Bay, tour boats don’t waste time, and you’re right in the heart of the action. You can also visit other nearby islands for short day trips.

**Restaurants & Island Vibe:**
The island has a mix of budget and affordable luxury guesthouses, many with really good food options. It’s got a local charm, easygoing energy, and a bonus for anyone missing a drink: a floating bar is moored offshore for sundowners and a bit of nightlife. It’s not a party island, but it has just enough going on to keep things interesting while staying peaceful.

**Final Thoughts:**
Dharavandhoo is one of the easiest ways to experience Hanifaru Bay without needing a private resort. With its airport, solid house reef, and access to rare excursions like nighttime whale shark tours, it’s a fantastic base for anyone focused on marine life. Just come during the right season, and cross your fingers for a magical encounter.`,
    descriptionDe: `Dharavandhoo ist eine kleine, aber lebhafte Insel im Baa-Atoll und vor allem als Tor zur Hanifaru-Bucht bekannt – einem der berühmtesten Orte der Malediven für Begegnungen mit Mantarochen und Walhaien. Sie erreichen die Insel mit einem Inlandsflug von Malé in etwa 25 Minuten oder mit einem längeren (aber malerischen) Schnellboot, das je nach Seegang etwa 2 bis 2,5 Stunden braucht. Es gibt keine direkte Fähre von Malé, aber Sie können von Nachbarinseln mit Fähren zwischen den Atollen anreisen.

**Bikini-Strand:**
Der Bikini-Strand ist groß, mit verschiedenen Lagunen und viel Platz. Einige Stellen haben einen steinigen Meeresboden, aber es gibt auch klare Bereiche zum Schwimmen. Sie finden natürlichen Schatten durch Palmen, Liegestühle bei einigen Unterkünften und sogar ein paar Fotospots mit schrägen Palmen und maledivischen Stühlen.

**Ausflüge:**
Wenn Sie zwischen Mai und Oktober hier sind, ist dies die beste Zeit, um Mantarochen in der Hanifaru-Bucht zu sehen (manchmal sogar zu Hunderten). Mit etwas Glück sehen Sie auch Walhaie, besonders im August und September. Es gibt sogar eine nächtliche Walhai-Schnorcheltour, was die meisten Inseln nicht anbieten. Da Dharavandhoo nur 5 bis 10 Minuten von der Hanifaru-Bucht entfernt ist, verlieren die Boote keine Zeit und Sie sind direkt im Geschehen. Sie können auch andere nahegelegene Inseln für kurze Tagesausflüge besuchen.

**Restaurants & Inselatmosphäre:**
Die Insel bietet eine Mischung aus preiswerten und gehobenen Gästehäusern, viele davon mit wirklich guten Essensmöglichkeiten. Sie hat lokalen Charme, entspannte Energie und einen Bonus für alle, die einen Drink vermissen: Vor der Küste liegt eine schwimmende Bar für den Sundowner und ein wenig Nachtleben. Es ist keine Partyinsel, aber es ist gerade genug los, um es interessant zu halten, während es friedlich bleibt.

**Fazit:**
Dharavandhoo ist einer der einfachsten Wege, die Hanifaru-Bucht zu erleben, ohne ein privates Resort zu benötigen. Mit eigenem Flughafen, einem soliden Hausriff und Zugang zu seltenen Ausflügen wie Nacht-Schnorcheln mit Walhaien ist es ein fantastischer Ausgangspunkt für alle, die sich auf das Meeresleben konzentrieren. Kommen Sie einfach zur richtigen Jahreszeit und drücken Sie die Daumen für eine magische Begegnung.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Dharavandhoo.webp?v=1763838452',
    videoUrl: 'https://youtu.be/OOhZ5cPLWUw',
    dimensions: '1.33km x 0.48km',
    guestHouseCount: 23,
    transferTypes: [TransferType.Speedboat2To3H, TransferType.DomesticFlight],
    ferryAccess: FerryAccess.None,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [Accommodation.AffordableLuxury, Accommodation.Pool, Accommodation.Spa],
    bikiniBeach: BikiniBeach.Large,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks],
    jungle: JungleVegetation.Medium,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: true
  },
  {
    id: 'dhonfanu',
    name: 'Dhonfanu',
    atoll: Atoll.Baa,
    description: `A small, quiet island right next to Hanifaru Bay. Literally just a 2-minute speedboat ride away, making it the closest island to this world-famous marine protected area. Sometimes you’ll even spot manta rays right off the shore (though it’s not guaranteed). It’s often called the Turtle Island for a reason, you’re almost always guaranteed sightings while snorkeling. The island has minimal greenery, but offers a raw, local charm. While the popular floating bar is technically located near Dharavandhoo, you can still visit it easily from Dhonfanu for a small transfer fee. There’s currently only one guesthouse, and it specializes in diving trips, so if diving is on your list, this is a great base. Access is best via domestic flight to Dharavandhoo, followed by a short speedboat ride. No direct ferry from Malé.`,
    descriptionDe: `Eine kleine, ruhige Insel direkt neben der Hanifaru Bay, nur 2 Minuten mit dem Boot entfernt – näher geht es nicht. Manchmal sieht man Mantas direkt vom Ufer aus. Oft „Schildkröteninsel“ genannt, da Sichtungen beim Schnorcheln fast garantiert sind. Wenig Grün, aber rauer, lokaler Charme. Die schwimmende Bar bei Dharavandhoo ist per kurzem Transfer erreichbar. Es gibt nur ein Gästehaus, spezialisiert auf Tauchen. Anreise am besten per Flug nach Dharavandhoo + kurzes Boot. Keine Direktfähre.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Dhonfanu.webp?v=1763807763',
    videoUrl: 'https://youtu.be/WIgaPRyQ5z0',
    dimensions: '700m x 500m',
    guestHouseCount: 2,
    transferTypes: [TransferType.Speedboat2To3H, TransferType.DomesticFlightSpeedboat],
    ferryAccess: FerryAccess.None,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: true
  },
  {
    id: 'kendhoo',
    name: 'Kendhoo',
    atoll: Atoll.Baa,
    description: `Tucked away in Baa Atoll, Kendhoo is a quiet island with a strong local vibe and a touch of history. The easiest way to get here is by flying to Dharavandhoo and hopping on a short speedboat ride. There’s also a direct speedboat from Malé, but it stops at other islands along the way.

**Bikini Beach:**
The Bikini Beach is small and simple, but cozy. There’s a nice tree line that offers natural shade, and the atmosphere is peaceful with hardly any crowds. It’s not a place for long beach walks, but perfect if you’re after a quiet swim and some sun under the palms.

**Excursions:**
Kendhoo is just 30 minutes from Hanifaru Bay, so during manta season (May to November), you’ll have access to one of the best spots in the Maldives for snorkeling with mantas and whale sharks(August-September). Guesthouses also offer trips to sandbanks, dolphin watching, big game fishing, and even day visits to uninhabited islands for private picnics. It’s a great mix of chill and adventure, depending on what you’re in the mood for.

**Restaurants & Island Vibe:**
There are only a few guesthouses on the island, which keeps the vibe very relaxed and local. Most places offer meal plans since there aren’t many dining options around. You won’t find entertainment or nightlife here, but if you’re looking to disconnect and enjoy a slower pace, this island delivers.

**Final Thoughts:**
Kendhoo is an underrated gem for anyone who wants a quiet, authentic stay near Hanifaru Bay without the crowds. It’s not flashy, but that’s exactly the charm, peaceful, personal, and full of real island character.`,
    descriptionDe: `Versteckt im Baa-Atoll liegt Kendhoo, eine ruhige Insel mit starkem lokalen Flair und einem Hauch Geschichte. Am einfachsten erreicht man sie mit einem Flug nach Dharavandhoo und einer kurzen Fahrt mit dem Schnellboot. Es gibt auch ein direktes Schnellboot von Malé, das jedoch unterwegs an anderen Inseln hält.

**Bikini-Strand:**
Der Bikini-Strand ist klein und einfach, aber gemütlich. Es gibt eine schöne Baumreihe, die natürlichen Schatten spendet, und die Atmosphäre ist friedliche und kaum überlaufen. Es ist kein Ort für lange Strandspaziergänge, aber perfekt für ein ruhiges Bad und etwas Sonne unter den Palmen.

**Ausflüge:**
Kendhoo ist nur 30 Minuten von der Hanifaru-Bucht entfernt. Während der Manta-Saison (Mai bis November) haben Sie also Zugang zu einem der besten Orte der Malediven zum Schnorcheln mit Mantas und Walhaien (August-September). Gästehäuser bieten zudem Ausflüge zu Sandbänken, Delfinbeobachtung, Hochseefischen und sogar Tagesbesuche auf unbewohnten Inseln für private Picknicks an. Es ist eine tolle Mischung aus Entspannung und Abenteuer.

**Restaurants & Inselatmosphäre:**
Es gibt nur wenige Gästehäuser auf der Insel, was die Stimmung sehr entspannt und authentisch hält. Die meisten Orte bieten Verpflegung an, da es nicht viele Restaurants in der Umgebung gibt. Unterhaltung oder Nachtleben finden Sie hier nicht, aber wenn Sie abschalten und ein langsameres Tempo genießen wollen, ist diese Insel genau richtig.

**Fazit:**
Kendhoo ist ein unterschätztes Juwel für alle, die einen ruhigen, authentischen Aufenthalt in der Nähe der Hanifaru-Bucht ohne die Massen suchen. Die Insel ist nicht prunkvoll, aber genau das macht ihren Charme aus – friedlich, persönlich und voller echtem Inselcharakter.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Kendhoo.webp?v=1763807762',
    videoUrl: 'https://youtu.be/2cmRWUcgh4s',
    dimensions: '600m x 350m',
    guestHouseCount: 4,
    transferTypes: [TransferType.Speedboat2To3H, TransferType.DomesticFlightSpeedboat],
    ferryAccess: FerryAccess.None,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks],
    jungle: JungleVegetation.Minimal,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'kudarikilu',
    name: 'Kudarikilu',
    atoll: Atoll.Baa,
    description: `A small and peaceful island in Baa Atoll, Kudarikilu has that traditional Maldivian charm with just a few guesthouses and a relaxed, no-rush feel. You can reach it by speedboat from Malé (about 2,5 - 3 hours depending on weather), but the easier option is flying to Dharavandhoo and taking a short boat transfer from there.

**Bikini Beach:**
The beach here is small but cozy, with calm water and a simple setup. It’s secluded, which actually makes it feel more personal. There’s a nice reef nearby, and if you’re lucky, you might even spot sea turtles swimming around the jetty area.

**Excursions:**
This is a great base for exploring Hanifaru Bay, which is about 30 minutes away. During the manta season (October–November), snorkeling trips give you a chance to see them up close, and August–September is best for spotting whale sharks. Guesthouses also offer day trips to nearby sandbanks, uninhabited islands for picnics, dolphin watching, and fishing. There’s enough variety without overwhelming you with options.

**Restaurants & Island Vibe:**
There are only a handful of guesthouses on the island, so it never feels crowded or touristy. Most places include meals, and the overall vibe is very local and welcoming. One of the guesthouses offers a more luxurious stay with upgraded amenities, while others are simpler but still comfortable and well-kept.

**Final Thoughts:**
If you’re after a low-key island with a local feel and great access to Hanifaru Bay, Kudarikilu is worth a look. It’s peaceful, not flashy, and perfect if you want to relax without a schedule.`,
    descriptionDe: `Kudarikilu ist eine kleine und friedliche Insel im Baa-Atoll. Sie hat diesen traditionellen maledivischen Charme mit nur wenigen Gästehäusern und einem entspannten Gefühl ohne Eile. Sie erreichen sie mit dem Schnellboot von Malé (ca. 2,5 - 3 Stunden je nach Wetter) oder einfacher mit einem Flug nach Dharavandhoo und einem kurzen Bootstransfer von dort.

**Bikini-Strand:**
Der Strand hier ist klein, aber gemütlich, mit ruhigem Wasser und einer einfachen Ausstattung. Er ist abgelegen, was ihn tatsächlich persönlicher wirken lässt. Es gibt ein schönes Riff in der Nähe, und mit etwas Glück können Sie sogar Meeresschildkröten im Bereich des Stegs beobachten.

**Ausflüge:**
Dies ist ein großartiger Ausgangspunkt zur Erkundung der Hanifaru-Bucht, die etwa 30 Minuten entfernt liegt. Während der Manta-Saison (Oktober–November) bieten Schnorcheltouren die Chance, die Tiere aus der Nähe zu sehen, und August–September ist die beste Zeit für Walhaie. Gästehäuser bieten auch Tagesausflüge zu nahegelegenen Sandbänken, unbewohnten Inseln für Picknicks, Delfinbeobachtungen und Angeln an. Es gibt genug Abwechslung, ohne einen mit Optionen zu überfordern.

**Restaurants & Inselatmosphäre:**
Da es nur eine Handvoll Gästehäuser auf der Insel gibt, fühlt es sich nie überfüllt oder touristisch an. Die meisten Unterkünfte bieten Verpflegung an, und die allgemeine Stimmung ist sehr lokal und einladend. Eines der Gästehäuser bietet einen luxuriöseren Aufenthalt mit gehobener Ausstattung, während andere einfacher, aber immer noch komfortabel und gepflegt sind.

**Fazit:**
Wenn Sie eine unaufgeregte Insel mit lokalem Flair und gutem Zugang zur Hanifaru-Bucht suchen, ist Kudarikilu einen Blick wert. Es ist friedlich, nicht protzig und perfekt, wenn Sie ohne festen Zeitplan entspannen möchten.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Kudariclu.webp?v=1763807763',
    videoUrl: 'https://youtu.be/qHrHi1RTP6s',
    dimensions: '600m x 300m',
    guestHouseCount: 2,
    transferTypes: [TransferType.Speedboat2To3H, TransferType.DomesticFlightSpeedboat],
    ferryAccess: FerryAccess.None,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [Accommodation.AffordableLuxury],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks],
    jungle: JungleVegetation.Medium,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'kamadhoo',
    name: 'Kamadhoo',
    atoll: Atoll.Baa,
    description: `This underrated island in Baa Atoll feels like a little sanctuary, tucked away from the busier tourist spots. You can get here by speedboat from Malé in about 2.5 to 3 hours (depending on the sea), or fly to Dharavandhoo and take a quick transfer from there. Kamadhoo stands out for its lush greenery, flowers blooming everywhere, and a relaxed, welcoming atmosphere. It’s got charm and personality, without trying too hard.

**Bikini Beach:**
The beach is a decent size with soft sand and a clean shoreline. Most of the ocean floor is smooth, with a few rocky spots that are easy to avoid. Shade is limited, but there’s one nice area where you can relax under the trees. The rest of the tree line is more dense and bushy, so not ideal for sitting under, but still adds to that wild, tropical feel.

**Excursions:**
Kamadhoo offers access to all the Baa Atoll favorites: snorkeling with mantas at Hanifaru Bay ( May to November), and whale shark sightings during peak months like August and September. Guesthouses also organize sandbank trips, visits to nearby uninhabited islands, dolphin cruises, and fishing excursions. You’re close to everything but still get to enjoy the island’s slower pace.

**Restaurants & Island Vibe:**
There’s a nice mix of guesthouses here: from simple and budget-friendly to more stylish options with upgraded amenities. A few restaurants serve local and Western dishes, and everything feels thoughtfully done, from the garden paths to the beach seating. Yoga retreats are also hosted here occasionally, adding to the calm, feel-good energy.

**Final Thoughts:**
Kamadhoo is ideal if you’re looking for a peaceful island with real personality, tropical greenery, and easy access to marine life adventures. It’s quiet, cozy, and full of little details that make it memorable, without the crowds or chaos.`,
    descriptionDe: `Diese unterschätzte Insel im Baa-Atoll fühlt sich an wie ein kleines Refugium, versteckt vor den belebteren Touristenorten. Sie erreichen sie mit dem Schnellboot von Malé in etwa 2,5 bis 3 Stunden (je nach Seegang) oder mit einem Flug nach Dharavandhoo und einem kurzen Transfer. Kamadhoo besticht durch üppiges Tropengrün, überall blühende Blumen und eine entspannte, einladende Atmosphäre. Sie hat Charme und Persönlichkeit, ohne sich zu sehr anstrengen zu müssen.

**Bikini-Strand:**
Der Strand hat eine ordentliche Größe mit weichem Sand und einer sauberen Küstenlinie. Der Meeresboden ist größtenteils glatt, mit einigen steinigen Stellen, denen man leicht ausweichen kann. Schatten ist begrenzt, aber es gibt einen schönen Bereich, in dem man sich unter Bäumen entspannen kann. Der Rest der Baumreihe ist dichter und buschiger, also nicht ideal zum darunter Sitzen, trägt aber zum wilden, tropischen Gefühl bei.

**Ausflüge:**
Kamadhoo bietet Zugang zu allen Favoriten des Baa-Atolls: Schnorcheln mit Mantas in der Hanifaru-Bucht (Mai bis November) und Walhai-Sichtungen während der Spitzenmonate August und September. Gästehäuser organisieren zudem Sandbank-Trips, Besuche unbewohnter Inseln, Delfin-Touren und Angelausflüge. Sie sind nah an allem dran, können aber trotzdem das langsamere Tempo der Insel genießen.

**Restaurants & Inselatmosphäre:**
Es gibt eine schöne Mischung aus Gästehäusern: von einfach und preiswert bis hin zu stilvolleren Optionen mit gehobener Ausstattung. Ein paar Restaurants servieren lokale und westliche Gerichte, und alles wirkt durchdacht, von den Gartenpfaden bis zu den Sitzgelegenheiten am Strand. Gelegentlich werden hier Yoga-Retreats veranstaltet, was zur ruhigen Wohlfühlenergie beiträgt.

**Fazit:**
Kamadhoo ist ideal, wenn Sie eine friedliche Insel mit echter Persönlichkeit, tropischem Grün und einfachem Zugang zu Abenteuern im Meer suchen. Sie ist ruhig, gemütlich und voller kleiner Details, die sie unvergesslich machen – ohne Massen oder Chaos.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Kamadhoo.webp?v=1763807763',
    videoUrl: 'https://youtu.be/tjJtWHzx2Us',
    dimensions: '550m x 480m',
    guestHouseCount: 13,
    transferTypes: [TransferType.Speedboat2To3H, TransferType.DomesticFlightSpeedboat],
    ferryAccess: FerryAccess.None,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [Accommodation.AffordableLuxury, Accommodation.Pool],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks],
    jungle: JungleVegetation.Large,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'kihaadhoo',
    name: 'Kihaadhoo',
    atoll: Atoll.Baa,
    description: `A small, authentic island with a truly local feel. You can reach it by speedboat from Malé (around 2.5 to 3 hours, depending on sea conditions) or more easily by taking a domestic flight to Dharavandhoo, followed by a short speedboat ride. The island is covered in a large tropical forest and has a calm, quiet vibe, ideal for disconnecting. There’s currently only one guesthouse, which makes the experience feel even more untouched and genuine. Great base for seasonal Manta and Whale Shark encounters in nearby waters.`,
    descriptionDe: `Kleine, authentische Insel mit echtem lokalen Gefühl. Schnellboot 2,5–3 Std., einfacher per Flug nach Dharavandhoo + Boot. Bedeckt von großem Tropenwald, ruhig und ideal zum Abschalten. Derzeit nur ein Gästehaus, was das Erlebnis noch unberührter macht. Tolle Basis für saisonale Manta- und Walhai-Begegnungen.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Kihadhoo.webp?v=1763838452',
    videoUrl: 'https://youtu.be/XqMAT0cy_dY',
    dimensions: '840m x 490m',
    guestHouseCount: 2,
    transferTypes: [TransferType.Speedboat2To3H, TransferType.DomesticFlightSpeedboat],
    ferryAccess: FerryAccess.None,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks],
    jungle: JungleVegetation.Large,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'maalhos',
    name: 'Maalhos',
    atoll: Atoll.Baa,
    description: `A medium-sized local island known for its clean streets and peaceful vibe. There are two islands named Maalhos in the Maldives, so make sure you’re looking at the one in Baa Atoll, not the one in North Ari! This one offers medium greenery, a few cozy guesthouses, and easy access to Hanifaru Bay for seasonal Manta and Whale Shark snorkeling. It’s a great choice for a quiet, comfortable retreat that still puts you close to adventure. There’s no direct ferry from Malé. You can reach it by a domestic flight to Dharavandhoo, followed by a short 15-min speedboat ride. By direct speedboat from Malé Airport, which takes around 2.5 depending on sea conditions.`,
    descriptionDe: `Mittelgroße Insel, bekannt für saubere Straßen und friedliche Atmosphäre. Achtung: Es gibt zwei Maalhos auf den Malediven – dies ist das im Baa-Atoll! Es bietet mäßiges Grün, gemütliche Gästehäuser und leichten Zugang zur Hanifaru Bay (saisonale Mantas/Walhaie). Tolle Wahl für einen ruhigen Rückzugsort nah am Abenteuer. Keine Direktfähre. Flug nach Dharavandhoo + 15 Min. Boot. Direktes Schnellboot ab Malé ca. 2,5 Std.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Maalos.webp?v=1763807763',
    videoUrl: 'https://youtu.be/kdwlvF60Ip4',
    dimensions: '1km x 0.5km',
    guestHouseCount: 10,
    transferTypes: [TransferType.Speedboat2To3H, TransferType.DomesticFlightSpeedboat],
    ferryAccess: FerryAccess.None,
    size: IslandSize.Medium,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [],
    bikiniBeach: BikiniBeach.Small,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Turtles, MarineActivity.Dolphins, MarineActivity.HouseReef, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks],
    jungle: JungleVegetation.Medium,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: false,
    isSandbankSeasonal: false,
    hasFloatingBar: false
  },
  {
    id: 'fehendhoo',
    name: 'Fehendhoo',
    atoll: Atoll.Baa,
    description: `Fehendhoo is one of those rare islands that still feels completely untouched. Tucked into the southern part of Baa Atoll, it’s large, full of greenery, and incredibly quiet. Most people haven’t even heard of it, which makes it perfect if you’re looking for true peace and privacy. You can get here by direct speedboat from Malé (about 2 hours), or take a domestic flight to Dharavandhoo and hop on a short transfer. There’s also an RTL ferry running now, which is a fast local ferry but more budget-friendly way to reach the island.

**Bikini Beach:**
The beach is located away from the village, so you’ll enjoy a calming walk through a jungle path just to reach it. The bikini beach is simple but peaceful, with soft sand during the dry season and more waves during monsoon. Shade is no issue, thanks to plenty of palm trees. If you’re visiting in the dry season, there’s also a connected sandbank that you can walk to at low tide. It’s definitely a highlight and a perfect spot for quiet afternoons.

**Excursions:**
Fehendhoo is home to the only official freediving center in the Maldives, run by a national champion. This makes it a great pick if freediving is on your list. Guesthouses can also arrange typical excursions like sandbank visits, snorkeling trips, and dolphin cruises, but the vibe here is really about slowing down and soaking in nature, not chasing a packed excursion schedule. There is a seasonal manta point near by May though November. Hanifaru bay is only 40 min away where you can also take tours to see even more mantas (if you are lucky even a few hundred at a time), and seasonal Whalesharks (August-September). 

**Restaurants & Island Vibe:**
There aren’t standalone restaurants on the island, so most guests choose meal plans through their guesthouses. One standout is Isla Retreat Boutique Hotel, which serves high-quality meals and feels like a full-on resort while staying in the affordable luxury range. The rest of the guesthouses are smaller and simpler, but all share the same peaceful, unplugged vibe.

**Final Thoughts:**
If you’re looking for something quiet, slow, and surrounded by nature, Fehendhoo is one of the best picks in the Baa Atoll. It’s perfect for disconnecting, taking long jungle walks, watching the tide change, and just doing… absolutely nothing.`,
    descriptionDe: `Fehendhoo ist eine dieser seltenen Inseln, die sich noch völlig unberührt anfühlen. Versteckt im südlichen Teil des Baa-Atolls, ist sie groß, voller Grün und unglaublich ruhig. Die meisten Leute haben noch nie von ihr gehört, was sie perfekt macht, wenn man echte Ruhe und Privatsphäre sucht. Sie erreichen sie mit dem direkten Schnellboot von Malé (ca. 2 Stunden) oder mit einem Inlandsflug nach Dharavandhoo und einem kurzen Transfer. Es gibt jetzt auch eine RTL-Fähre, eine schnelle lokale Fähre, die eine budgetfreundlichere Art ist, die Insel zu erreichen.

**Bikini-Strand:**
Der Strand liegt abseits des Dorfes, sodass Sie einen beruhigenden Spaziergang durch einen Dschungelpfad genießen können, nur um ihn zu erreichen. Der Bikini-Strand ist einfach, aber friedlich, mit weichem Sand in der Trockenzeit und mehr Wellen während des Monsuns. Schatten ist dank zahlreicher Palmen kein Problem. Wenn Sie in der Trockenzeit zu Besuch sind, gibt es auch eine angeschlossene Sandbank, zu der man bei Ebbe laufen kann. Sie ist definitiv ein Highlight und ein perfekter Ort für ruhige Nachmittage.

**Ausflüge:**
Fehendhoo beherbergt das einzige offizielle Freitauchzentrum auf den Malediven, das von einem nationalen Champion geleitet wird. Das macht die Insel zu einer großartigen Wahl, wenn Freitauchen auf Ihrer Liste steht. Gästehäuser können auch typische Ausflüge wie Sandbank-Besuche, Schnorcheltrips und Delfin-Touren arrangieren, aber der Vibe hier ist wirklich darauf ausgelegt, das Tempo zu drosseln und die Natur zu genießen, nicht einem vollgepackten Ausflugsplan hinterherzujagen. Es gibt einen saisonalen Manta-Punkt in der Nähe von Mai bis November. Die Hanifaru-Bucht ist nur 40 Minuten entfernt, wo Sie ebenfalls Touren unternehmen können, um noch mehr Mantas (mit Glück sogar Hunderte auf einmal) und saisonale Walhaie (August-September) zu sehen.

**Restaurants & Inselatmosphäre:**
Es gibt keine eigenständigen Restaurants auf der Insel, daher wählen die meisten Gäste Verpflegungspakete über ihre Gästehäuser. Ein Highlight ist das Isla Retreat Boutique Hotel, das hochwertige Mahlzeiten serviert und sich wie ein richtiges Resort anfühlt, während es im bezahlbaren Luxusbereich bleibt. Die übrigen Gästehäuser sind kleiner und einfacher, teilen aber alle dieselbe friedliche Atmosphäre zum Abschalten.

**Fazit:**
Wenn Sie etwas Ruhiges, Langsames und von Natur Umgebenes suchen, ist Fehendhoo eine der besten Wahlen im Baa-Atoll. Es ist perfekt zum Abschalten, für lange Dschungelspaziergänge, zum Beobachten der Gezeiten und um… absolut nichts zu tun.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Fehendhoo.webp?v=1763807763',
    videoUrl: 'https://youtu.be/nTXceVmnGz4',
    dimensions: 'Long and narrow',
    guestHouseCount: 8,
    transferTypes: [TransferType.Speedboat1To2H, TransferType.DomesticFlightSpeedboat],
    ferryAccess: FerryAccess.Transfer,
    size: IslandSize.Large,
    atmosphere: [Atmosphere.Quiet],
    accommodations: [Accommodation.AffordableLuxury],
    bikiniBeach: BikiniBeach.Medium,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Dolphins, MarineActivity.SandbankTours],
    seasonalActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks],
    jungle: JungleVegetation.Large,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: true,
    isSandbankSeasonal: true,
    hasFloatingBar: false
  },
  {
    id: 'fuladhoo',
    name: 'Fulhadhoo',
    atoll: Atoll.Baa,
    description: `Fulhadhoo is one of those islands that actually lives up to the hype. It’s quiet, peaceful, and wrapped in thick tropical jungle, but the real showstopper is the beach. It’s consistently ranked among the most beautiful in the Maldives, and once you see it, you’ll get why. You can reach Fulhadhoo by direct speedboat from Malé (about 2 hours), or fly to Dharavandhoo and take a 40-minute boat ride. There’s also the RTL ferry, which is a fast local ferry and more affordable.

**Bikini Beach:**
The beach here is stunning. Powdery soft sand, turquoise water, and a natural sandbank that stretches right off the island, it’s postcard material. During the dry season, the sandbank gets even bigger. During the monsoon, the beach shrinks a bit, but it’s still gorgeous. Shade is limited, though. There’s one small tree line where everyone tends to gather, but the council has added a few shaded huts to help. The beach is about 30 minutes from the village by foot, so if you’re not in the mood to walk, you can rent a bike or catch a buggy. Just keep in mind there’s nothing out there, so bring water and snacks.

**Excursions:**
Fulhadhoo has its own local Manta Point, with the best chances to see mantas from May through November. For even more marine action, it’s only 40 minutes from Hanifaru Bay, where you can swim with mantas and, if you’re lucky, even spot whale sharks in August and September. Other excursions include snorkeling, sandbanks, but this island is really about beach time.

**Restaurants & Island Vibe:**
The island is super quiet and never feels crowded. You’ll find a range of guesthouses from basic to boutique-style affordable luxury. There are a few good restaurants, but many guests choose a meal plan through their accommodation. Every now and then, guesthouses organize traditional drumming (boduberu) or beach parties when they’re fully booked, but otherwise, things stay low-key.

**Final Thoughts:**
Fulhadhoo is perfect if you want soft sand, unreal water, and total tranquility. It’s a dream for nature lovers who don’t need nightlife but want a truly beautiful, off-the-radar experience.`,
    descriptionDe: `Fulhadhoo ist eine dieser Inseln, die dem Hype tatsächlich gerecht werden. Sie ist ruhig, friedlich und in dichten Tropendschungel gehüllt, aber der eigentliche Star ist der Strand. Er wird regelmäßig zu einem der schönsten der Malediven gewählt, und wenn man ihn sieht, versteht man warum. Sie erreichen Fulhadhoo mit dem direkten Schnellboot von Malé (ca. 2 Stunden) oder fliegen nach Dharavandhoo und nehmen eine 40-minütige Bootsfahrt. Es gibt auch die RTL-Fähre, eine schnelle lokale Fähre, die erschwinglicher ist.

**Bikini-Strand:**
Der Strand hier ist atemberaubend. Puderweicher Sand, türkisfarbenes Wasser und eine natürliche Sandbank, die sich direkt von der Insel aus erstreckt – das ist Postkartenmotiv pur. In der Trockenzeit wird die Sandbank noch größer. Während des Monsuns schrumpft der Strand ein wenig, ist aber immer noch herrlich. Schatten ist jedoch begrenzt. Es gibt eine kleine Baumreihe, wo sich alle sammeln, aber die Gemeinde hat ein paar schattige Hütten hinzugefügt. Der Strand liegt etwa 30 Gehminuten vom Dorf entfernt. Wenn Sie also keine Lust zum Laufen haben, können Sie ein Fahrrad mieten oder einen Buggy nehmen. Denken Sie nur daran, dass es dort draußen nichts gibt, bringen Sie also Wasser und Snacks mit.

**Ausflüge:**
Fulhadhoo hat seinen eigenen lokalen Manta-Punkt mit den besten Chancen, Mantas von Mai bis November zu sehen. Für noch mehr Meeres-Action ist man in nur 40 Minuten in der Hanifaru-Bucht, wo man mit Mantas schwimmen und mit Glück sogar Walhaie im August und September entdecken kann. Andere Ausflüge umfassen Schnorcheln und Sandbänke, aber auf dieser Insel geht es wirklich um die Zeit am Strand.

**Restaurants & Inselatmosphäre:**
Die Insel ist extrem ruhig und fühlt sich nie überfüllt an. Sie finden eine Auswahl an Gästehäusern von einfach bis hin zum erschwinglichen Luxus im Boutique-Stil. Es gibt ein paar gute Restaurants, aber viele Gäste wählen einen Verpflegungsplan über ihre Unterkunft. Hin und wieder organisieren Gästehäuser traditionelles Trommeln (Boduberu) oder Strandpartys, wenn sie voll belegt sind, aber ansonsten geht es eher entspannt zu.

**Fazit:**
Fulhadhoo ist perfekt bei weichem Sand, unglaublichem Wasser und totaler Ruhe. Ein Traum für Naturliebhaber, die kein Nachtleben brauchen, aber ein wirklich schönes Erlebnis abseits der Massen suchen.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0942/5666/0784/files/Fulhadhoo.webp?v=1763838453',
    videoUrl: 'https://youtu.be/FaUbGMyDZXA',
    dimensions: '1.9km x 270m',
    guestHouseCount: 14,
    transferTypes: [TransferType.Speedboat1To2H, TransferType.DomesticFlightSpeedboat],
    ferryAccess: FerryAccess.Transfer,
    size: IslandSize.Large,
    atmosphere: [Atmosphere.Quiet, Atmosphere.Local],
    accommodations: [Accommodation.AffordableLuxury, Accommodation.Pool],
    bikiniBeach: BikiniBeach.Large,
    watersports: Watersports.Minimal,
    marineActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks, MarineActivity.Dolphins, MarineActivity.HouseReef],
    seasonalActivities: [MarineActivity.MantaRays, MarineActivity.WhaleSharks],
    jungle: JungleVegetation.Large,
    nightlife: Nightlife.Minimal,
    hasSandbankAttached: true,
    isSandbankSeasonal: false, 
    hasFloatingBar: false
  }
];
