export interface NearbyPlace {
  name: string;
  type: "restaurant" | "hotel" | "pub" | "attraction" | "transport";
  distance: string;
  priceRange: string;
  rating: number;
  bookingUrl?: string;
}

export interface TravelInfo {
  fromHyderabad: { distance: string; time: string; mode: string };
  fromVisakhapatnam: { distance: string; time: string; mode: string };
  fromVijayawada: { distance: string; time: string; mode: string };
  estimatedDailyCost: { budget: string; mid: string; luxury: string };
  bestTimeToVisit: string;
  idealDuration: string;
}

export interface DestinationDetail {
  id: string;
  history: string;
  culture: string;
  nearbyPlaces: NearbyPlace[];
  travelInfo: TravelInfo;
  cabServices: { name: string; pricePerKm: string; contact: string }[];
}

export const destinationDetails: Record<string, DestinationDetail> = {
  "araku-valley": {
    id: "araku-valley",
    history: "Araku Valley, nestled in the Eastern Ghats at 1300m altitude, has been home to various tribal communities for centuries. The valley was relatively unknown until the British era when it was discovered as a hill station. The indigenous tribes — Konda Dora, Kotia, and Kulia — have preserved their unique traditions, crafts, and agricultural practices. The valley became famous for its coffee plantations introduced during the colonial period, and today Araku coffee is internationally acclaimed.",
    culture: "The tribal culture of Araku is vibrant and unique. The local communities practice Dhimsa dance, a traditional art form recognized by UNESCO. The Tribal Museum showcases artifacts, tools, and lifestyle of 19 different tribal groups. Annual festivals like Ituka Pongal and the Coffee Festival celebrate local heritage. The valley is also known for its handloom weaving and bamboo craft traditions passed down through generations.",
    nearbyPlaces: [
      { name: "Araku Valley Resort", type: "hotel", distance: "0.5 km", priceRange: "₹2,000 - ₹5,000/night", rating: 4.3, bookingUrl: "https://www.makemytrip.com/hotels/araku_valley-hotels.html" },
      { name: "Haritha Valley Resort (APTDC)", type: "hotel", distance: "1 km", priceRange: "₹1,500 - ₹3,500/night", rating: 4.1, bookingUrl: "https://www.booking.com/searchresults.html?ss=Araku+Valley" },
      { name: "Green Valley Restaurant", type: "restaurant", distance: "0.3 km", priceRange: "₹200 - ₹500", rating: 4.2 },
      { name: "Tribal Kitchen", type: "restaurant", distance: "0.8 km", priceRange: "₹150 - ₹400", rating: 4.5 },
      { name: "Coffee Day Café", type: "pub", distance: "0.5 km", priceRange: "₹100 - ₹300", rating: 4.0 },
      { name: "Borra Caves", type: "attraction", distance: "30 km", priceRange: "₹60 entry", rating: 4.4 },
      { name: "Padmapuram Gardens", type: "attraction", distance: "3 km", priceRange: "₹30 entry", rating: 4.1 },
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
    nearbyPlaces: [
      { name: "Godavari Gateway Resort", type: "hotel", distance: "2 km", priceRange: "₹2,500 - ₹6,000/night", rating: 4.4, bookingUrl: "https://www.makemytrip.com/hotels/rajahmundry-hotels.html" },
      { name: "Papikondalu Cruise Stay", type: "hotel", distance: "0 km", priceRange: "₹3,000 - ₹8,000/night", rating: 4.6, bookingUrl: "https://www.booking.com/searchresults.html?ss=Papikondalu" },
      { name: "Godavari Bhojanam", type: "restaurant", distance: "1 km", priceRange: "₹200 - ₹600", rating: 4.5 },
      { name: "River View Restaurant", type: "restaurant", distance: "1.5 km", priceRange: "₹250 - ₹500", rating: 4.2 },
      { name: "Perantalapalli", type: "attraction", distance: "15 km", priceRange: "Free", rating: 4.3 },
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
    nearbyPlaces: [
      { name: "Borra Caves Guest House", type: "hotel", distance: "0.5 km", priceRange: "₹1,000 - ₹2,500/night", rating: 3.8, bookingUrl: "https://www.makemytrip.com/hotels/borra_caves-hotels.html" },
      { name: "Tyda Nature Camp", type: "hotel", distance: "20 km", priceRange: "₹1,500 - ₹3,000/night", rating: 4.2, bookingUrl: "https://www.booking.com/searchresults.html?ss=Borra+Caves" },
      { name: "Hilltop Dhaba", type: "restaurant", distance: "0.3 km", priceRange: "₹100 - ₹300", rating: 3.9 },
      { name: "Katiki Waterfalls", type: "attraction", distance: "18 km", priceRange: "Free", rating: 4.3 },
      { name: "Araku Valley", type: "attraction", distance: "30 km", priceRange: "Free", rating: 4.6 },
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
    history: "Tirupati is home to the Sri Venkateswara Temple (Tirumala), one of the richest and most visited religious sites in the world. The temple's history dates back over 2,000 years, with references in Tamil Sangam literature. Built in the Dravidian architectural style, the main deity Lord Venkateswara (Balaji) attracts over 75,000 pilgrims daily. The temple was patronized by various dynasties including the Pallavas, Cholas, and the Vijayanagara Empire. The famous Tirumala Tirupati Devasthanams (TTD) manages the temple operations.",
    culture: "Tirupati is a spiritual epicenter of Hinduism. The head-tonsuring tradition (offering hair to the deity) is practiced by millions annually. The temple's Brahmotsavam festival, celebrated for 9 days, features grand processions with the deity on different vahanams (vehicles). The prasadam (sacred food), especially the Tirupati Laddu, is world-famous and has a GI tag. The city is also known for its Kalamkari art, a traditional hand-painting technique on cloth.",
    nearbyPlaces: [
      { name: "Fortune Kences Hotel", type: "hotel", distance: "2 km", priceRange: "₹3,000 - ₹8,000/night", rating: 4.5, bookingUrl: "https://www.makemytrip.com/hotels/tirupati-hotels.html" },
      { name: "Hotel Bliss", type: "hotel", distance: "1 km", priceRange: "₹1,200 - ₹3,000/night", rating: 4.0, bookingUrl: "https://www.booking.com/searchresults.html?ss=Tirupati" },
      { name: "TTD Canteen (Annadanam)", type: "restaurant", distance: "0 km", priceRange: "Free", rating: 4.7 },
      { name: "Minerva Grand", type: "restaurant", distance: "3 km", priceRange: "₹300 - ₹800", rating: 4.3 },
      { name: "Maya Restaurant", type: "restaurant", distance: "2 km", priceRange: "₹200 - ₹600", rating: 4.1 },
      { name: "Sri Kalahasteeswara Temple", type: "attraction", distance: "36 km", priceRange: "Free", rating: 4.6 },
      { name: "Chandragiri Fort", type: "attraction", distance: "15 km", priceRange: "₹25 entry", rating: 4.2 },
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
    culture: "The temple walls feature some of the finest examples of Vijayanagara mural paintings depicting scenes from the Ramayana, Mahabharata, and Puranas. The intricate ceiling paintings, executed in the 'fresco secco' technique, cover over 1,000 sq ft. The 70 stone pillars are carved with dancing figures, musicians, and mythological scenes. Lepakshi is also known for its handloom and handicraft traditions, particularly the Lepakshi Handicrafts Emporium chain run by the AP government.",
    nearbyPlaces: [
      { name: "APTDC Haritha Hotel", type: "hotel", distance: "0.5 km", priceRange: "₹1,200 - ₹2,500/night", rating: 3.7, bookingUrl: "https://www.makemytrip.com/hotels/lepakshi-hotels.html" },
      { name: "Lepakshi Guest House", type: "hotel", distance: "0.3 km", priceRange: "₹800 - ₹1,500/night", rating: 3.5, bookingUrl: "https://www.booking.com/searchresults.html?ss=Lepakshi" },
      { name: "Nandi Restaurant", type: "restaurant", distance: "0.2 km", priceRange: "₹100 - ₹300", rating: 3.8 },
      { name: "Penukonda Fort", type: "attraction", distance: "40 km", priceRange: "Free", rating: 4.1 },
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
    history: "Amaravati, located on the banks of the Krishna River in Guntur district, was the capital of the ancient Satavahana dynasty (2nd century BCE). It was a major center of Buddhism, housing the Great Stupa (Mahachaitya), one of the largest Buddhist stupas ever built, rivaling Sanchi and Borobudh. The stupa was adorned with elaborate limestone carvings depicting scenes from Buddha's life. The town is now being developed as the new capital of Andhra Pradesh since the state's bifurcation in 2014.",
    culture: "Amaravati represents a unique blend of Buddhist and Hindu heritage. The Amaravati School of Art, characterized by its dynamic narrative relief sculptures, influenced Buddhist art across Southeast Asia. The archaeological museum houses priceless artifacts from the stupa site. The annual Amaravati Buddhist Festival celebrates this heritage. The nearby Undavalli Caves, carved from solid sandstone in the 4th-5th century, showcase remarkable rock-cut architecture.",
    nearbyPlaces: [
      { name: "Hotel Minerva Grand", type: "hotel", distance: "5 km", priceRange: "₹2,000 - ₹5,000/night", rating: 4.2, bookingUrl: "https://www.makemytrip.com/hotels/amaravati-hotels.html" },
      { name: "Gateway Hotel", type: "hotel", distance: "8 km", priceRange: "₹3,500 - ₹7,000/night", rating: 4.4, bookingUrl: "https://www.booking.com/searchresults.html?ss=Amaravati+Guntur" },
      { name: "Babai Hotel", type: "restaurant", distance: "2 km", priceRange: "₹150 - ₹400", rating: 4.3 },
      { name: "Guntur Biryani House", type: "restaurant", distance: "6 km", priceRange: "₹200 - ₹500", rating: 4.4 },
      { name: "Undavalli Caves", type: "attraction", distance: "10 km", priceRange: "₹25 entry", rating: 4.5 },
      { name: "Prakasam Barrage", type: "attraction", distance: "15 km", priceRange: "Free", rating: 4.2 },
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
    history: "Rishikonda Beach, located 8 km from Visakhapatnam city, has been a popular destination since the 1960s when the APTDC developed it as a beach resort. The name derives from 'Rishi' (sage) and 'Konda' (hill), referring to the sages who once meditated on the rocky hills surrounding the beach. The beach gained prominence after Visakhapatnam developed as a major port city. Today it's known as the 'Jewel of the East Coast' and is one of India's best beaches for water sports.",
    culture: "Rishikonda is at the heart of Vizag's cosmopolitan beach culture. The beach hosts annual surfing competitions, sand sculpture festivals, and beach volleyball tournaments. The nearby fishing villages maintain traditional practices of shore-seine fishing. The beach is part of the larger Vizag coastal tourism circuit that includes Kailasagiri Hill Park and the INS Kurusura Submarine Museum. Local seafood cuisine, particularly the Andhra-style fish curry, is a major cultural draw.",
    nearbyPlaces: [
      { name: "Novotel Visakhapatnam", type: "hotel", distance: "3 km", priceRange: "₹5,000 - ₹12,000/night", rating: 4.6, bookingUrl: "https://www.makemytrip.com/hotels/visakhapatnam-hotels.html" },
      { name: "Haritha Beach Resort", type: "hotel", distance: "0.3 km", priceRange: "₹2,500 - ₹5,000/night", rating: 4.2, bookingUrl: "https://www.booking.com/searchresults.html?ss=Rishikonda+Beach" },
      { name: "Bay 15 Café", type: "pub", distance: "5 km", priceRange: "₹500 - ₹1,500", rating: 4.4 },
      { name: "Sea Inn Restaurant", type: "restaurant", distance: "1 km", priceRange: "₹300 - ₹800", rating: 4.3 },
      { name: "Dharani Restaurant", type: "restaurant", distance: "4 km", priceRange: "₹200 - ₹600", rating: 4.5 },
      { name: "Thotlakonda Buddhist Complex", type: "attraction", distance: "5 km", priceRange: "₹25 entry", rating: 4.4 },
      { name: "Kailasagiri", type: "attraction", distance: "8 km", priceRange: "₹50 entry", rating: 4.5 },
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
    history: "Yarada Beach is one of the most secluded and pristine beaches near Visakhapatnam, surrounded by hills on three sides — making it naturally sheltered and scenic. The area was historically part of the naval and military zone due to its strategic location near the Eastern Naval Command headquarters. The beach remained relatively undiscovered until the early 2000s when eco-tourism initiatives opened it to visitors. Its crystal-clear waters and dolphin sightings have made it increasingly popular among nature enthusiasts.",
    culture: "Yarada represents the unspoiled, raw beauty of Andhra's coastline. The beach is popular among adventure enthusiasts for camping, trekking the surrounding Dolphin's Nose hill, and sunrise watching. The nearby lighthouse and the historic Dolphin's Nose viewpoint offer panoramic views of the Bay of Bengal. Local fishing communities around Yarada still practice traditional net-fishing methods. The beach's isolation makes it a favorite for meditation retreats and yoga camps.",
    nearbyPlaces: [
      { name: "The Park Hotel Vizag", type: "hotel", distance: "10 km", priceRange: "₹4,000 - ₹10,000/night", rating: 4.5, bookingUrl: "https://www.makemytrip.com/hotels/visakhapatnam-hotels.html" },
      { name: "Palm Beach Hotel", type: "hotel", distance: "8 km", priceRange: "₹2,000 - ₹4,500/night", rating: 4.1, bookingUrl: "https://www.booking.com/searchresults.html?ss=Yarada+Beach+Vizag" },
      { name: "Coastal Kitchen", type: "restaurant", distance: "3 km", priceRange: "₹250 - ₹600", rating: 4.2 },
      { name: "Dolphin's Nose Viewpoint", type: "attraction", distance: "2 km", priceRange: "Free", rating: 4.6 },
      { name: "Lighthouse", type: "attraction", distance: "3 km", priceRange: "₹20 entry", rating: 4.3 },
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
