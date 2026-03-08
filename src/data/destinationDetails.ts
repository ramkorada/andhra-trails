export interface NearbyPlace {
  name: string;
  type: "restaurant" | "hotel" | "pub" | "attraction" | "transport";
  distance: string;
  priceRange: string;
  rating: number;
  bookingUrl?: string;
  mapUrl?: string;
}

export interface TravelInfo {
  fromHyderabad: { distance: string; time: string; mode: string };
  fromVisakhapatnam: { distance: string; time: string; mode: string };
  fromVijayawada: { distance: string; time: string; mode: string };
  estimatedDailyCost: { budget: string; mid: string; luxury: string };
  bestTimeToVisit: string;
  idealDuration: string;
}

export interface GuideInfo {
  bestFor: string[];
  mustVisitSpots: string[];
  localTips: string[];
  safetyTips: string[];
  whatToCarry: string[];
}

export interface DestinationDetail {
  id: string;
  history: string;
  culture: string;
  nearbyPlaces: NearbyPlace[];
  travelInfo: TravelInfo;
  cabServices: { name: string; pricePerKm: string; contact: string }[];
  guideInfo: GuideInfo;
}

export const destinationDetails: Record<string, DestinationDetail> = {
  "araku-valley": {
    id: "araku-valley",
    history: "Araku Valley, nestled in the Eastern Ghats at 1300m altitude, has been home to various tribal communities for centuries. The valley was relatively unknown until the British era when it was discovered as a hill station. The indigenous tribes — Konda Dora, Kotia, and Kulia — have preserved their unique traditions, crafts, and agricultural practices. The valley became famous for its coffee plantations introduced during the colonial period, and today Araku coffee is internationally acclaimed.",
    culture: "The tribal culture of Araku is vibrant and unique. The local communities practice Dhimsa dance, a traditional art form recognized by UNESCO. The Tribal Museum showcases artifacts, tools, and lifestyle of 19 different tribal groups. Annual festivals like Ituka Pongal and the Coffee Festival celebrate local heritage. The valley is also known for its handloom weaving and bamboo craft traditions passed down through generations.",
    guideInfo: {
      bestFor: ["Families", "Nature lovers", "Coffee enthusiasts", "Photographers", "Trekkers"],
      mustVisitSpots: ["Padmapuram Gardens", "Tribal Museum", "Coffee Plantations", "Chaparai Waterfalls", "Galikonda View Point"],
      localTips: ["Buy fresh Araku coffee directly from tribal cooperatives", "Visit on weekdays to avoid crowds", "Try bamboo chicken — a tribal delicacy cooked inside bamboo", "Hire a local tribal guide for plantation walks"],
      safetyTips: ["Roads are hilly with sharp curves — drive cautiously", "Carry warm clothes even in summer as evenings are cold", "Mobile network is patchy in deep valleys"],
      whatToCarry: ["Warm jacket", "Comfortable trekking shoes", "Rain gear (Jun-Sep)", "Mosquito repellent", "Cash (limited ATMs)"],
    },
    nearbyPlaces: [
      { name: "Araku Valley Resort", type: "hotel", distance: "0.5 km", priceRange: "₹2,000 - ₹5,000/night", rating: 4.3, bookingUrl: "https://www.makemytrip.com/hotels/araku_valley-hotels.html", mapUrl: "https://maps.google.com/?q=Araku+Valley+Resort" },
      { name: "Haritha Valley Resort (APTDC)", type: "hotel", distance: "1 km", priceRange: "₹1,500 - ₹3,500/night", rating: 4.1, bookingUrl: "https://www.booking.com/searchresults.html?ss=Araku+Valley", mapUrl: "https://maps.google.com/?q=Haritha+Valley+Resort+Araku" },
      { name: "Green Valley Restaurant", type: "restaurant", distance: "0.3 km", priceRange: "₹200 - ₹500", rating: 4.2, mapUrl: "https://maps.google.com/?q=Green+Valley+Restaurant+Araku" },
      { name: "Tribal Kitchen", type: "restaurant", distance: "0.8 km", priceRange: "₹150 - ₹400", rating: 4.5, mapUrl: "https://maps.google.com/?q=Tribal+Kitchen+Araku+Valley" },
      { name: "Coffee Day Café", type: "pub", distance: "0.5 km", priceRange: "₹100 - ₹300", rating: 4.0, mapUrl: "https://maps.google.com/?q=Coffee+Day+Araku+Valley" },
      { name: "Borra Caves", type: "attraction", distance: "30 km", priceRange: "₹60 entry", rating: 4.4, mapUrl: "https://maps.google.com/?q=Borra+Caves+Andhra+Pradesh" },
      { name: "Padmapuram Gardens", type: "attraction", distance: "3 km", priceRange: "₹30 entry", rating: 4.1, mapUrl: "https://maps.google.com/?q=Padmapuram+Gardens+Araku" },
    ],
    travelInfo: {
      fromHyderabad: { distance: "690 km", time: "12 hours", mode: "Train + Road" },
      fromVisakhapatnam: { distance: "115 km", time: "3.5 hours", mode: "Road / Train" },
      fromVijayawada: { distance: "480 km", time: "9 hours", mode: "Road" },
      estimatedDailyCost: { budget: "₹1,500 - ₹2,500", mid: "₹3,000 - ₹5,000", luxury: "₹6,000 - ₹12,000" },
      bestTimeToVisit: "October to March",
      idealDuration: "2-3 days",
    },
    cabServices: [
      { name: "Vizag Cabs", pricePerKm: "₹12/km", contact: "+91 98765 43210" },
      { name: "AP Tourism Cabs", pricePerKm: "₹14/km", contact: "+91 87654 32109" },
      { name: "Ola / Uber", pricePerKm: "₹10-15/km", contact: "App based" },
    ],
  },
  "papikondalu": {
    id: "papikondalu",
    history: "Papikondalu, meaning 'Papiki's Hills', are a range of hills along the Godavari River in the East and West Godavari districts. These hills have been significant in Telugu literature and folklore for centuries. The legendary boat journey through the gorges has been a pilgrimage route since ancient times. The region witnessed significant historical events during the Chalukya and Kakatiya dynasties.",
    culture: "The region is home to the Koya and Konda Reddi tribal communities who have lived in harmony with nature for centuries. Traditional fishing, bamboo craft, and forest produce collection form their livelihood. The annual Sammakka Saralamma Jatara, one of Asia's largest tribal festivals, draws millions. The boat cruise through Papikondalu offers glimpses into tribal village life along the riverbanks.",
    guideInfo: {
      bestFor: ["Adventure seekers", "Couples", "Photography lovers", "Nature enthusiasts"],
      mustVisitSpots: ["Papi Hills Boat Cruise", "Perantalapalli Village", "Godavari River Confluence", "Tribal Hamlets", "Kolluru Village"],
      localTips: ["Book the overnight cruise for the best experience", "Early morning cruises have the best lighting for photography", "Carry your own snacks as options are limited on the boat", "Visit during monsoon for the most dramatic gorge views"],
      safetyTips: ["Life jackets are provided — always wear them", "Don't lean over the boat railings", "Avoid visiting during heavy flood seasons (Aug-Sep)"],
      whatToCarry: ["Sunscreen & hat", "Motion sickness medicine", "Waterproof bags for electronics", "Light snacks and water"],
    },
    nearbyPlaces: [
      { name: "Godavari Gateway Resort", type: "hotel", distance: "2 km", priceRange: "₹2,500 - ₹6,000/night", rating: 4.4, bookingUrl: "https://www.makemytrip.com/hotels/rajahmundry-hotels.html", mapUrl: "https://maps.google.com/?q=Godavari+Gateway+Resort+Rajahmundry" },
      { name: "Papikondalu Cruise Stay", type: "hotel", distance: "0 km", priceRange: "₹3,000 - ₹8,000/night", rating: 4.6, bookingUrl: "https://www.booking.com/searchresults.html?ss=Papikondalu", mapUrl: "https://maps.google.com/?q=Papikondalu+Cruise+Rajahmundry" },
      { name: "Godavari Bhojanam", type: "restaurant", distance: "1 km", priceRange: "₹200 - ₹600", rating: 4.5, mapUrl: "https://maps.google.com/?q=Godavari+Bhojanam+Rajahmundry" },
      { name: "River View Restaurant", type: "restaurant", distance: "1.5 km", priceRange: "₹250 - ₹500", rating: 4.2, mapUrl: "https://maps.google.com/?q=River+View+Restaurant+Rajahmundry" },
      { name: "Perantalapalli", type: "attraction", distance: "15 km", priceRange: "Free", rating: 4.3, mapUrl: "https://maps.google.com/?q=Perantalapalli+Andhra+Pradesh" },
    ],
    travelInfo: {
      fromHyderabad: { distance: "450 km", time: "8 hours", mode: "Road / Train to Rajahmundry" },
      fromVisakhapatnam: { distance: "200 km", time: "4 hours", mode: "Road" },
      fromVijayawada: { distance: "200 km", time: "4 hours", mode: "Road" },
      estimatedDailyCost: { budget: "₹2,000 - ₹3,000", mid: "₹4,000 - ₹7,000", luxury: "₹8,000 - ₹15,000" },
      bestTimeToVisit: "September to February",
      idealDuration: "2 days",
    },
    cabServices: [
      { name: "Rajahmundry Cabs", pricePerKm: "₹11/km", contact: "+91 98765 11111" },
      { name: "Godavari Tours", pricePerKm: "₹13/km", contact: "+91 87654 22222" },
    ],
  },
  "borra-caves": {
    id: "borra-caves",
    history: "Borra Caves, discovered in 1807 by British geologist William King, are the largest caves in India. These karstic limestone caves are estimated to be 150 million years old, formed by the Gosthani River flowing through the limestone area. The caves hold religious significance for local tribes who worship the Shivalinga-shaped stalagmite formation inside. Archaeological surveys have found Stone Age tools, suggesting human habitation dating back millions of years.",
    culture: "The caves are sacred to the local Valmiki tribal community who consider them the abode of Lord Shiva. The unique stalactite and stalagmite formations resemble a Shiva Linga, a cow's udder, human brain, and other shapes that have inspired local legends. The tribal communities hold annual rituals at the cave entrance. The nearby villages showcase traditional Dhimsa dance performances for visitors.",
    guideInfo: {
      bestFor: ["Families with kids", "Geology enthusiasts", "History buffs", "Everyone — one of AP's must-visits"],
      mustVisitSpots: ["Main Cave Chamber", "Shiva Linga Formation", "Katiki Waterfalls (nearby)", "Araku Valley (combine trip)", "Galikonda View Point"],
      localTips: ["Visit early morning (9-10 AM) to avoid crowds", "Combine with Araku Valley for a 2-day trip", "The cave is well-lit with walkways — suitable for all ages", "Local guides at the entrance explain formations well"],
      safetyTips: ["Wear non-slip footwear — cave floors can be slippery", "Watch your head in low ceiling areas", "Hold the railings while descending steps", "Not recommended for claustrophobic visitors"],
      whatToCarry: ["Non-slip shoes", "Light jacket (cave is cool inside)", "Camera with flash", "Water bottle"],
    },
    nearbyPlaces: [
      { name: "Borra Caves Guest House", type: "hotel", distance: "0.5 km", priceRange: "₹1,000 - ₹2,500/night", rating: 3.8, bookingUrl: "https://www.makemytrip.com/hotels/borra_caves-hotels.html", mapUrl: "https://maps.google.com/?q=Borra+Caves+Guest+House" },
      { name: "Tyda Nature Camp", type: "hotel", distance: "20 km", priceRange: "₹1,500 - ₹3,000/night", rating: 4.2, bookingUrl: "https://www.booking.com/searchresults.html?ss=Borra+Caves", mapUrl: "https://maps.google.com/?q=Tyda+Nature+Camp+Araku" },
      { name: "Hilltop Dhaba", type: "restaurant", distance: "0.3 km", priceRange: "₹100 - ₹300", rating: 3.9, mapUrl: "https://maps.google.com/?q=Hilltop+Dhaba+Borra+Caves" },
      { name: "Katiki Waterfalls", type: "attraction", distance: "18 km", priceRange: "Free", rating: 4.3, mapUrl: "https://maps.google.com/?q=Katiki+Waterfalls+Andhra+Pradesh" },
      { name: "Araku Valley", type: "attraction", distance: "30 km", priceRange: "Free", rating: 4.6, mapUrl: "https://maps.google.com/?q=Araku+Valley+Andhra+Pradesh" },
    ],
    travelInfo: {
      fromHyderabad: { distance: "660 km", time: "11 hours", mode: "Train + Road" },
      fromVisakhapatnam: { distance: "92 km", time: "3 hours", mode: "Road / Train" },
      fromVijayawada: { distance: "450 km", time: "8 hours", mode: "Road" },
      estimatedDailyCost: { budget: "₹1,000 - ₹2,000", mid: "₹2,500 - ₹4,000", luxury: "₹5,000 - ₹8,000" },
      bestTimeToVisit: "October to March",
      idealDuration: "1 day (combine with Araku)",
    },
    cabServices: [
      { name: "Vizag Cabs", pricePerKm: "₹12/km", contact: "+91 98765 43210" },
      { name: "Araku Tours", pricePerKm: "₹14/km", contact: "+91 87654 33333" },
    ],
  },
  "tirupati": {
    id: "tirupati",
    history: "Tirupati is home to the Sri Venkateswara Temple (Tirumala), one of the richest and most visited religious sites in the world. The temple's history dates back over 2,000 years, with references in Tamil Sangam literature. Built in the Dravidian architectural style, the main deity Lord Venkateswara (Balaji) attracts over 75,000 pilgrims daily. The temple was patronized by various dynasties including the Pallavas, Cholas, and the Vijayanagara Empire.",
    culture: "Tirupati is a spiritual epicenter of Hinduism. The head-tonsuring tradition (offering hair to the deity) is practiced by millions annually. The temple's Brahmotsavam festival, celebrated for 9 days, features grand processions with the deity on different vahanams (vehicles). The prasadam (sacred food), especially the Tirupati Laddu, is world-famous and has a GI tag.",
    guideInfo: {
      bestFor: ["Pilgrims & devotees", "Families", "History enthusiasts", "Solo travelers", "Everyone"],
      mustVisitSpots: ["Sri Venkateswara Temple (Tirumala)", "Chandragiri Fort", "Sri Kalahasti Temple", "Talakona Waterfalls", "Tirupati Deer Park"],
      localTips: ["Book darshan tickets online 2-3 weeks in advance via TTD website", "₹300 special darshan saves 8-10 hours of waiting", "Free accommodation available through TTD — book early", "Try the famous Tirupati Laddu (₹50 for 2)", "Tonsuring is free at designated halls"],
      safetyTips: ["Beware of middlemen selling 'fast darshan' — use only official TTD services", "Keep valuables in lockers provided at the temple", "Wear modest clothing for temple entry", "Stay hydrated — summer temperatures exceed 40°C"],
      whatToCarry: ["Comfortable walking shoes (lots of walking)", "Traditional clothes for temple", "Water bottle", "ID proof for darshan", "Cash for prasadam & offerings"],
    },
    nearbyPlaces: [
      { name: "Fortune Kences Hotel", type: "hotel", distance: "2 km", priceRange: "₹3,000 - ₹8,000/night", rating: 4.5, bookingUrl: "https://www.makemytrip.com/hotels/tirupati-hotels.html", mapUrl: "https://maps.google.com/?q=Fortune+Kences+Hotel+Tirupati" },
      { name: "Hotel Bliss", type: "hotel", distance: "1 km", priceRange: "₹1,200 - ₹3,000/night", rating: 4.0, bookingUrl: "https://www.booking.com/searchresults.html?ss=Tirupati", mapUrl: "https://maps.google.com/?q=Hotel+Bliss+Tirupati" },
      { name: "TTD Canteen (Annadanam)", type: "restaurant", distance: "0 km", priceRange: "Free", rating: 4.7, mapUrl: "https://maps.google.com/?q=TTD+Annadanam+Tirumala" },
      { name: "Minerva Grand", type: "restaurant", distance: "3 km", priceRange: "₹300 - ₹800", rating: 4.3, mapUrl: "https://maps.google.com/?q=Minerva+Grand+Tirupati" },
      { name: "Maya Restaurant", type: "restaurant", distance: "2 km", priceRange: "₹200 - ₹600", rating: 4.1, mapUrl: "https://maps.google.com/?q=Maya+Restaurant+Tirupati" },
      { name: "Sri Kalahasteeswara Temple", type: "attraction", distance: "36 km", priceRange: "Free", rating: 4.6, mapUrl: "https://maps.google.com/?q=Sri+Kalahasteeswara+Temple" },
      { name: "Chandragiri Fort", type: "attraction", distance: "15 km", priceRange: "₹25 entry", rating: 4.2, mapUrl: "https://maps.google.com/?q=Chandragiri+Fort+Tirupati" },
    ],
    travelInfo: {
      fromHyderabad: { distance: "580 km", time: "8 hours", mode: "Train / Flight" },
      fromVisakhapatnam: { distance: "680 km", time: "12 hours", mode: "Train" },
      fromVijayawada: { distance: "390 km", time: "6 hours", mode: "Road / Train" },
      estimatedDailyCost: { budget: "₹1,000 - ₹2,000", mid: "₹3,000 - ₹6,000", luxury: "₹7,000 - ₹15,000" },
      bestTimeToVisit: "Year-round (Sep-Feb ideal)",
      idealDuration: "2-3 days",
    },
    cabServices: [
      { name: "Tirupati Cabs", pricePerKm: "₹10/km", contact: "+91 98765 55555" },
      { name: "TTD Transport", pricePerKm: "₹12/km", contact: "+91 87654 66666" },
      { name: "Ola / Uber", pricePerKm: "₹9-13/km", contact: "App based" },
    ],
  },
  "lepakshi": {
    id: "lepakshi",
    history: "Lepakshi, a small historical village in Anantapur district, houses the famous Veerabhadra Temple built in 1530 AD by Virupanna, a governor under the Vijayanagara Empire. The name 'Lepakshi' translates to 'Rise, Bird' — a reference to the legend of Lord Rama asking the wounded bird Jatayu to rise. The temple is an architectural masterpiece with the largest monolithic Nandi (bull) in India, measuring 27 feet long and 15 feet high. The famous 'Hanging Pillar' that doesn't fully touch the ground remains an engineering mystery.",
    culture: "The temple walls feature some of the finest examples of Vijayanagara mural paintings depicting scenes from the Ramayana, Mahabharata, and Puranas. The intricate ceiling paintings, executed in the 'fresco secco' technique, cover over 1,000 sq ft. The 70 stone pillars are carved with dancing figures, musicians, and mythological scenes.",
    guideInfo: {
      bestFor: ["History buffs", "Architecture lovers", "Photographers", "Day trippers from Hyderabad/Bangalore"],
      mustVisitSpots: ["Hanging Pillar", "Monolithic Nandi Bull", "Veerabhadra Temple Murals", "Nagalinga Sculpture", "Jatayu Park"],
      localTips: ["Best visited as a day trip from Hyderabad (2.5 hrs drive)", "Hire a guide at the temple for ₹200-300 — the stories are worth it", "Early morning light is best for photography of the Nandi", "Visit the Lepakshi Handicrafts Emporium for authentic souvenirs"],
      safetyTips: ["Sun can be intense — carry sunscreen and hat", "Limited food options — eat before coming", "Temple floors can be hot in summer — carry socks"],
      whatToCarry: ["Sun hat & sunscreen", "Water & snacks", "Camera", "Socks for temple", "Cash for guide & souvenirs"],
    },
    nearbyPlaces: [
      { name: "APTDC Haritha Hotel", type: "hotel", distance: "0.5 km", priceRange: "₹1,200 - ₹2,500/night", rating: 3.7, bookingUrl: "https://www.makemytrip.com/hotels/lepakshi-hotels.html", mapUrl: "https://maps.google.com/?q=APTDC+Haritha+Hotel+Lepakshi" },
      { name: "Lepakshi Guest House", type: "hotel", distance: "0.3 km", priceRange: "₹800 - ₹1,500/night", rating: 3.5, bookingUrl: "https://www.booking.com/searchresults.html?ss=Lepakshi", mapUrl: "https://maps.google.com/?q=Lepakshi+Guest+House" },
      { name: "Nandi Restaurant", type: "restaurant", distance: "0.2 km", priceRange: "₹100 - ₹300", rating: 3.8, mapUrl: "https://maps.google.com/?q=Nandi+Restaurant+Lepakshi" },
      { name: "Penukonda Fort", type: "attraction", distance: "40 km", priceRange: "Free", rating: 4.1, mapUrl: "https://maps.google.com/?q=Penukonda+Fort+Andhra+Pradesh" },
    ],
    travelInfo: {
      fromHyderabad: { distance: "120 km", time: "2.5 hours", mode: "Road" },
      fromVisakhapatnam: { distance: "750 km", time: "13 hours", mode: "Train + Road" },
      fromVijayawada: { distance: "350 km", time: "6 hours", mode: "Road" },
      estimatedDailyCost: { budget: "₹800 - ₹1,500", mid: "₹2,000 - ₹3,500", luxury: "₹4,000 - ₹8,000" },
      bestTimeToVisit: "October to March",
      idealDuration: "1 day (day trip from Hyderabad)",
    },
    cabServices: [
      { name: "Hindupur Cabs", pricePerKm: "₹10/km", contact: "+91 98765 77777" },
      { name: "Hyderabad Outstation", pricePerKm: "₹12/km", contact: "+91 87654 88888" },
    ],
  },
  "amaravati": {
    id: "amaravati",
    history: "Amaravati, located on the banks of the Krishna River in Guntur district, was the capital of the ancient Satavahana dynasty (2nd century BCE). It was a major center of Buddhism, housing the Great Stupa (Mahachaitya), one of the largest Buddhist stupas ever built, rivaling Sanchi and Borobudh. The stupa was adorned with elaborate limestone carvings depicting scenes from Buddha's life.",
    culture: "Amaravati represents a unique blend of Buddhist and Hindu heritage. The Amaravati School of Art, characterized by its dynamic narrative relief sculptures, influenced Buddhist art across Southeast Asia. The archaeological museum houses priceless artifacts from the stupa site.",
    guideInfo: {
      bestFor: ["History enthusiasts", "Buddhist pilgrims", "Architecture students", "Families"],
      mustVisitSpots: ["Amaravati Stupa Ruins", "Archaeological Museum", "Undavalli Caves", "Prakasam Barrage", "Dhyana Buddha Statue"],
      localTips: ["Combine with Vijayawada visit (just 30 km away)", "The museum closes at 5 PM — plan accordingly", "Try Guntur-style biryani and mirchi bajji", "Visit Undavalli Caves for stunning rock-cut architecture"],
      safetyTips: ["Summer temperatures are extreme — carry water", "Limited shade at archaeological sites", "Construction activity in the new capital area — follow marked paths"],
      whatToCarry: ["Sun protection", "Comfortable walking shoes", "Water & snacks", "Camera"],
    },
    nearbyPlaces: [
      { name: "Hotel Minerva Grand", type: "hotel", distance: "5 km", priceRange: "₹2,000 - ₹5,000/night", rating: 4.2, bookingUrl: "https://www.makemytrip.com/hotels/amaravati-hotels.html", mapUrl: "https://maps.google.com/?q=Hotel+Minerva+Grand+Vijayawada" },
      { name: "Gateway Hotel", type: "hotel", distance: "8 km", priceRange: "₹3,500 - ₹7,000/night", rating: 4.4, bookingUrl: "https://www.booking.com/searchresults.html?ss=Amaravati+Guntur", mapUrl: "https://maps.google.com/?q=Gateway+Hotel+Vijayawada" },
      { name: "Babai Hotel", type: "restaurant", distance: "2 km", priceRange: "₹150 - ₹400", rating: 4.3, mapUrl: "https://maps.google.com/?q=Babai+Hotel+Guntur" },
      { name: "Guntur Biryani House", type: "restaurant", distance: "6 km", priceRange: "₹200 - ₹500", rating: 4.4, mapUrl: "https://maps.google.com/?q=Guntur+Biryani+House" },
      { name: "Undavalli Caves", type: "attraction", distance: "10 km", priceRange: "₹25 entry", rating: 4.5, mapUrl: "https://maps.google.com/?q=Undavalli+Caves+Andhra+Pradesh" },
      { name: "Prakasam Barrage", type: "attraction", distance: "15 km", priceRange: "Free", rating: 4.2, mapUrl: "https://maps.google.com/?q=Prakasam+Barrage+Vijayawada" },
    ],
    travelInfo: {
      fromHyderabad: { distance: "370 km", time: "5.5 hours", mode: "Road" },
      fromVisakhapatnam: { distance: "380 km", time: "7 hours", mode: "Train / Road" },
      fromVijayawada: { distance: "30 km", time: "45 mins", mode: "Road" },
      estimatedDailyCost: { budget: "₹1,000 - ₹2,000", mid: "₹2,500 - ₹4,500", luxury: "₹5,000 - ₹10,000" },
      bestTimeToVisit: "October to March",
      idealDuration: "1-2 days",
    },
    cabServices: [
      { name: "Vijayawada Cabs", pricePerKm: "₹10/km", contact: "+91 98765 99999" },
      { name: "AP Travels", pricePerKm: "₹11/km", contact: "+91 87654 00000" },
    ],
  },
  "rishikonda": {
    id: "rishikonda",
    history: "Rishikonda Beach, located 8 km from Visakhapatnam city, has been a popular destination since the 1960s when the APTDC developed it as a beach resort. The name derives from 'Rishi' (sage) and 'Konda' (hill), referring to the sages who once meditated on the rocky hills surrounding the beach. Today it's known as the 'Jewel of the East Coast' and is one of India's best beaches for water sports.",
    culture: "Rishikonda is at the heart of Vizag's cosmopolitan beach culture. The beach hosts annual surfing competitions, sand sculpture festivals, and beach volleyball tournaments. Local seafood cuisine, particularly the Andhra-style fish curry, is a major cultural draw.",
    guideInfo: {
      bestFor: ["Beach lovers", "Water sports enthusiasts", "Couples", "Families", "Solo travelers"],
      mustVisitSpots: ["Rishikonda Beach (water sports)", "Thotlakonda Buddhist Complex", "Kailasagiri Hill Park", "INS Kurusura Submarine Museum", "Dolphin's Nose"],
      localTips: ["Water sports are best from 8-11 AM when waves are perfect", "Surfing lessons available for ₹500-1000 per session", "Sunset views from Kailasagiri are spectacular", "Try the local seafood at beachside shacks — fish fry is a must"],
      safetyTips: ["Swim only in designated areas with lifeguards", "Strong undercurrents — don't go too deep", "Apply sunscreen generously", "Don't swim after dark"],
      whatToCarry: ["Swimwear & towel", "Sunscreen (SPF 50+)", "Sunglasses & hat", "Waterproof phone pouch", "Change of clothes"],
    },
    nearbyPlaces: [
      { name: "Novotel Visakhapatnam", type: "hotel", distance: "3 km", priceRange: "₹5,000 - ₹12,000/night", rating: 4.6, bookingUrl: "https://www.makemytrip.com/hotels/visakhapatnam-hotels.html", mapUrl: "https://maps.google.com/?q=Novotel+Visakhapatnam" },
      { name: "Haritha Beach Resort", type: "hotel", distance: "0.3 km", priceRange: "₹2,500 - ₹5,000/night", rating: 4.2, bookingUrl: "https://www.booking.com/searchresults.html?ss=Rishikonda+Beach", mapUrl: "https://maps.google.com/?q=Haritha+Beach+Resort+Rishikonda" },
      { name: "Bay 15 Café", type: "pub", distance: "5 km", priceRange: "₹500 - ₹1,500", rating: 4.4, mapUrl: "https://maps.google.com/?q=Bay+15+Cafe+Visakhapatnam" },
      { name: "Sea Inn Restaurant", type: "restaurant", distance: "1 km", priceRange: "₹300 - ₹800", rating: 4.3, mapUrl: "https://maps.google.com/?q=Sea+Inn+Restaurant+Rishikonda" },
      { name: "Dharani Restaurant", type: "restaurant", distance: "4 km", priceRange: "₹200 - ₹600", rating: 4.5, mapUrl: "https://maps.google.com/?q=Dharani+Restaurant+Visakhapatnam" },
      { name: "Thotlakonda Buddhist Complex", type: "attraction", distance: "5 km", priceRange: "₹25 entry", rating: 4.4, mapUrl: "https://maps.google.com/?q=Thotlakonda+Buddhist+Complex" },
      { name: "Kailasagiri", type: "attraction", distance: "8 km", priceRange: "₹50 entry", rating: 4.5, mapUrl: "https://maps.google.com/?q=Kailasagiri+Visakhapatnam" },
    ],
    travelInfo: {
      fromHyderabad: { distance: "620 km", time: "10 hours", mode: "Flight (1.5h) / Train" },
      fromVisakhapatnam: { distance: "8 km", time: "20 mins", mode: "Road" },
      fromVijayawada: { distance: "350 km", time: "6 hours", mode: "Train / Road" },
      estimatedDailyCost: { budget: "₹1,500 - ₹2,500", mid: "₹3,500 - ₹6,000", luxury: "₹7,000 - ₹15,000" },
      bestTimeToVisit: "October to March",
      idealDuration: "1-2 days",
    },
    cabServices: [
      { name: "Vizag Yellow Cabs", pricePerKm: "₹10/km", contact: "+91 98765 12345" },
      { name: "Ola / Uber", pricePerKm: "₹8-12/km", contact: "App based" },
    ],
  },
  "yarada": {
    id: "yarada",
    history: "Yarada Beach is one of the most secluded and pristine beaches near Visakhapatnam, surrounded by hills on three sides — making it naturally sheltered and scenic. The area was historically part of the naval and military zone. The beach remained relatively undiscovered until the early 2000s when eco-tourism initiatives opened it to visitors.",
    culture: "Yarada represents the unspoiled, raw beauty of Andhra's coastline. The beach is popular among adventure enthusiasts for camping, trekking the surrounding Dolphin's Nose hill, and sunrise watching. Local fishing communities around Yarada still practice traditional net-fishing methods.",
    guideInfo: {
      bestFor: ["Nature lovers", "Adventure seekers", "Couples seeking privacy", "Photographers", "Meditation & yoga practitioners"],
      mustVisitSpots: ["Yarada Beach", "Dolphin's Nose Viewpoint", "Lighthouse", "Mangamaripeta Beach (nearby)", "Ross Hill Church"],
      localTips: ["Best visited early morning for sunrise — it's magical", "Carry your own food and water — no shops at the beach", "Great for camping — but get permission from locals", "Combine with Dolphin's Nose trek for a full-day adventure"],
      safetyTips: ["No lifeguards — swim with caution", "Beach is secluded — avoid visiting alone after dark", "Roads to the beach are narrow — drive carefully", "Check tide timings before planning"],
      whatToCarry: ["Food & water (essential)", "Camping gear if staying", "Comfortable trekking shoes", "Torch/flashlight", "Sunscreen"],
    },
    nearbyPlaces: [
      { name: "The Park Hotel Vizag", type: "hotel", distance: "10 km", priceRange: "₹4,000 - ₹10,000/night", rating: 4.5, bookingUrl: "https://www.makemytrip.com/hotels/visakhapatnam-hotels.html", mapUrl: "https://maps.google.com/?q=The+Park+Hotel+Visakhapatnam" },
      { name: "Palm Beach Hotel", type: "hotel", distance: "8 km", priceRange: "₹2,000 - ₹4,500/night", rating: 4.1, bookingUrl: "https://www.booking.com/searchresults.html?ss=Yarada+Beach+Vizag", mapUrl: "https://maps.google.com/?q=Palm+Beach+Hotel+Visakhapatnam" },
      { name: "Coastal Kitchen", type: "restaurant", distance: "3 km", priceRange: "₹250 - ₹600", rating: 4.2, mapUrl: "https://maps.google.com/?q=Coastal+Kitchen+Visakhapatnam" },
      { name: "Dolphin's Nose Viewpoint", type: "attraction", distance: "2 km", priceRange: "Free", rating: 4.6, mapUrl: "https://maps.google.com/?q=Dolphins+Nose+Visakhapatnam" },
      { name: "Lighthouse", type: "attraction", distance: "3 km", priceRange: "₹20 entry", rating: 4.3, mapUrl: "https://maps.google.com/?q=Lighthouse+Visakhapatnam" },
    ],
    travelInfo: {
      fromHyderabad: { distance: "630 km", time: "10 hours", mode: "Flight (1.5h) / Train" },
      fromVisakhapatnam: { distance: "15 km", time: "35 mins", mode: "Road" },
      fromVijayawada: { distance: "360 km", time: "6.5 hours", mode: "Train / Road" },
      estimatedDailyCost: { budget: "₹1,200 - ₹2,000", mid: "₹3,000 - ₹5,000", luxury: "₹6,000 - ₹12,000" },
      bestTimeToVisit: "November to March",
      idealDuration: "1 day",
    },
    cabServices: [
      { name: "Vizag Yellow Cabs", pricePerKm: "₹10/km", contact: "+91 98765 12345" },
      { name: "Ola / Uber", pricePerKm: "₹8-12/km", contact: "App based" },
    ],
  },
};
