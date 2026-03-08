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
      mustVisitSpots: ["Padmapuram Gardens", "Tribal Museum", "Coffee Plantations", "Chaparai Waterfalls", "Galikonda View Point", "Ananthagiri Hills", "Katiki Waterfalls"],
      localTips: ["Buy fresh Araku coffee directly from tribal cooperatives", "Visit on weekdays to avoid crowds", "Try bamboo chicken — a tribal delicacy cooked inside bamboo", "Hire a local tribal guide for plantation walks", "Take the Vizag-Araku train for one of India's most scenic railway journeys"],
      safetyTips: ["Roads are hilly with sharp curves — drive cautiously", "Carry warm clothes even in summer as evenings are cold", "Mobile network is patchy in deep valleys"],
      whatToCarry: ["Warm jacket", "Comfortable trekking shoes", "Rain gear (Jun-Sep)", "Mosquito repellent", "Cash (limited ATMs)"],
    },
    nearbyPlaces: [
      { name: "Araku Valley Resort", type: "hotel", distance: "0.5 km", priceRange: "₹2,000 - ₹5,000/night", rating: 4.3, bookingUrl: "https://www.makemytrip.com/hotels/araku_valley-hotels.html", mapUrl: "https://www.google.com/maps/search/Araku+Valley+Resort/@18.3274,82.8756,14z" },
      { name: "Haritha Valley Resort (APTDC)", type: "hotel", distance: "1 km", priceRange: "₹1,500 - ₹3,500/night", rating: 4.1, bookingUrl: "https://www.booking.com/searchresults.html?ss=Araku+Valley", mapUrl: "https://www.google.com/maps/search/Haritha+Valley+Resort+Araku/@18.3274,82.8756,14z" },
      { name: "Junglewood Resort", type: "hotel", distance: "2 km", priceRange: "₹3,000 - ₹7,000/night", rating: 4.5, bookingUrl: "https://www.makemytrip.com/hotels/araku_valley-hotels.html", mapUrl: "https://www.google.com/maps/search/Junglewood+Resort+Araku/@18.3274,82.8756,14z" },
      { name: "Green Valley Restaurant", type: "restaurant", distance: "0.3 km", priceRange: "₹200 - ₹500", rating: 4.2, mapUrl: "https://www.google.com/maps/search/Green+Valley+Restaurant+Araku/@18.3274,82.8756,14z" },
      { name: "Tribal Kitchen", type: "restaurant", distance: "0.8 km", priceRange: "₹150 - ₹400", rating: 4.5, mapUrl: "https://www.google.com/maps/search/Tribal+Kitchen+Araku+Valley/@18.3274,82.8756,14z" },
      { name: "Bamboo Chicken Corner", type: "restaurant", distance: "1.2 km", priceRange: "₹200 - ₹500", rating: 4.6, mapUrl: "https://www.google.com/maps/search/Bamboo+Chicken+Araku/@18.3274,82.8756,14z" },
      { name: "Coffee Day Café", type: "pub", distance: "0.5 km", priceRange: "₹100 - ₹300", rating: 4.0, mapUrl: "https://www.google.com/maps/search/Coffee+Day+Araku+Valley/@18.3274,82.8756,14z" },
      { name: "Borra Caves", type: "attraction", distance: "30 km", priceRange: "₹60 entry", rating: 4.4, mapUrl: "https://www.google.com/maps/place/Borra+Caves/@18.2821,83.0367,15z" },
      { name: "Padmapuram Gardens", type: "attraction", distance: "3 km", priceRange: "₹30 entry", rating: 4.1, mapUrl: "https://www.google.com/maps/search/Padmapuram+Gardens+Araku/@18.3274,82.8756,14z" },
      { name: "Tribal Museum", type: "attraction", distance: "1 km", priceRange: "₹50 entry", rating: 4.3, mapUrl: "https://www.google.com/maps/search/Tribal+Museum+Araku/@18.3274,82.8756,14z" },
      { name: "Chaparai Waterfalls", type: "attraction", distance: "15 km", priceRange: "Free", rating: 4.2, mapUrl: "https://www.google.com/maps/search/Chaparai+Waterfalls+Araku/@18.3274,82.8756,14z" },
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
      { name: "Godavari Gateway Resort", type: "hotel", distance: "2 km", priceRange: "₹2,500 - ₹6,000/night", rating: 4.4, bookingUrl: "https://www.makemytrip.com/hotels/rajahmundry-hotels.html", mapUrl: "https://www.google.com/maps/search/Godavari+Gateway+Resort+Rajahmundry/@17.0005,81.8040,14z" },
      { name: "Papikondalu Cruise Stay", type: "hotel", distance: "0 km", priceRange: "₹3,000 - ₹8,000/night", rating: 4.6, bookingUrl: "https://www.booking.com/searchresults.html?ss=Papikondalu", mapUrl: "https://www.google.com/maps/search/Papikondalu+Cruise+Rajahmundry/@17.0005,81.8040,14z" },
      { name: "Hotel Manasa", type: "hotel", distance: "3 km", priceRange: "₹1,500 - ₹3,000/night", rating: 4.0, bookingUrl: "https://www.makemytrip.com/hotels/rajahmundry-hotels.html", mapUrl: "https://www.google.com/maps/search/Hotel+Manasa+Rajahmundry/@17.0005,81.8040,14z" },
      { name: "Godavari Bhojanam", type: "restaurant", distance: "1 km", priceRange: "₹200 - ₹600", rating: 4.5, mapUrl: "https://www.google.com/maps/search/Godavari+Bhojanam+Rajahmundry/@17.0005,81.8040,14z" },
      { name: "River View Restaurant", type: "restaurant", distance: "1.5 km", priceRange: "₹250 - ₹500", rating: 4.2, mapUrl: "https://www.google.com/maps/search/River+View+Restaurant+Rajahmundry/@17.0005,81.8040,14z" },
      { name: "Perantalapalli", type: "attraction", distance: "15 km", priceRange: "Free", rating: 4.3, mapUrl: "https://www.google.com/maps/place/Perantalapalli/@17.3458,81.4756,14z" },
      { name: "ISKCON Temple Rajahmundry", type: "attraction", distance: "5 km", priceRange: "Free", rating: 4.5, mapUrl: "https://www.google.com/maps/search/ISKCON+Temple+Rajahmundry/@17.0005,81.8040,14z" },
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
      { name: "Borra Caves Guest House", type: "hotel", distance: "0.5 km", priceRange: "₹1,000 - ₹2,500/night", rating: 3.8, bookingUrl: "https://www.makemytrip.com/hotels/borra_caves-hotels.html", mapUrl: "https://www.google.com/maps/search/Borra+Caves+Guest+House/@18.2821,83.0367,14z" },
      { name: "Tyda Nature Camp", type: "hotel", distance: "20 km", priceRange: "₹1,500 - ₹3,000/night", rating: 4.2, bookingUrl: "https://www.booking.com/searchresults.html?ss=Borra+Caves", mapUrl: "https://www.google.com/maps/search/Tyda+Nature+Camp/@18.2821,83.0367,14z" },
      { name: "Hilltop Dhaba", type: "restaurant", distance: "0.3 km", priceRange: "₹100 - ₹300", rating: 3.9, mapUrl: "https://www.google.com/maps/search/Hilltop+Dhaba+Borra+Caves/@18.2821,83.0367,14z" },
      { name: "Katiki Waterfalls", type: "attraction", distance: "18 km", priceRange: "Free", rating: 4.3, mapUrl: "https://www.google.com/maps/search/Katiki+Waterfalls/@18.2821,83.0367,14z" },
      { name: "Araku Valley", type: "attraction", distance: "30 km", priceRange: "Free", rating: 4.6, mapUrl: "https://www.google.com/maps/place/Araku+Valley/@18.3274,82.8756,13z" },
      { name: "Galikonda View Point", type: "attraction", distance: "25 km", priceRange: "Free", rating: 4.4, mapUrl: "https://www.google.com/maps/search/Galikonda+View+Point/@18.3274,82.8756,14z" },
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
  "srisailam": {
    id: "srisailam",
    history: "Srisailam is one of the twelve Jyotirlingas and one of the eighteen Maha Shakti Peethas, making it one of the most sacred sites in Hinduism. The Mallikarjuna Swamy Temple dates back to the 2nd century CE and was expanded by the Vijayanagara kings. The Srisailam Dam on the Krishna River, built in 1981, is one of India's largest hydroelectric projects. The surrounding Nallamala Hills are home to the Nagarjunasagar-Srisailam Tiger Reserve, India's largest tiger reserve.",
    culture: "Srisailam blends deep spiritual significance with breathtaking natural beauty. The annual Maha Shivaratri festival attracts lakhs of devotees. The temple's Brahmotsavam features grand processions. The Nallamala forests are home to the Chenchu tribe, one of India's oldest tribal communities. The Patala Ganga cable car offers unique views of the Krishna River gorge.",
    guideInfo: {
      bestFor: ["Pilgrims & devotees", "Nature lovers", "Trekkers", "Wildlife enthusiasts", "Families"],
      mustVisitSpots: ["Mallikarjuna Swamy Temple", "Srisailam Dam", "Patala Ganga (cable car)", "Akka Mahadevi Caves", "Sakshi Ganapathi Temple", "Nallamala Forest Safari", "Octopus View Point"],
      localTips: ["Visit the temple early morning (5-6 AM) for peaceful darshan", "Patala Ganga cable car ride is a must — ₹100 per person", "Book APTDC accommodation 2 weeks in advance", "Try the temple prasadam — divine taste", "Night views of the illuminated dam are spectacular"],
      safetyTips: ["Ghat roads are steep with 72 hairpin bends — drive carefully", "Carry motion sickness medicine for the ghat road", "Don't venture into forests without a guide — wildlife area", "Keep distance from monkeys near the temple"],
      whatToCarry: ["Traditional clothing for temple", "Comfortable shoes for ghat walking", "Water & snacks", "Camera", "Warm clothes (nights are cool)"],
    },
    nearbyPlaces: [
      { name: "Haritha Hotel (APTDC)", type: "hotel", distance: "0.5 km", priceRange: "₹1,500 - ₹3,500/night", rating: 4.0, bookingUrl: "https://www.makemytrip.com/hotels/srisailam-hotels.html", mapUrl: "https://www.google.com/maps/search/Haritha+Hotel+Srisailam/@16.0736,78.8688,14z" },
      { name: "Temple Accommodation (Devasthanam)", type: "hotel", distance: "0.2 km", priceRange: "₹200 - ₹1,000/night", rating: 3.8, mapUrl: "https://www.google.com/maps/search/Srisailam+Temple+Accommodation/@16.0736,78.8688,14z" },
      { name: "Hotel Sai Srisailam", type: "hotel", distance: "1 km", priceRange: "₹1,200 - ₹3,000/night", rating: 4.1, bookingUrl: "https://www.booking.com/searchresults.html?ss=Srisailam", mapUrl: "https://www.google.com/maps/search/Hotel+Sai+Srisailam/@16.0736,78.8688,14z" },
      { name: "Srisailam Bhojanalayam", type: "restaurant", distance: "0.3 km", priceRange: "₹100 - ₹300", rating: 4.3, mapUrl: "https://www.google.com/maps/search/Srisailam+Bhojanalayam/@16.0736,78.8688,14z" },
      { name: "Sree Lakshmi Restaurant", type: "restaurant", distance: "0.5 km", priceRange: "₹150 - ₹400", rating: 4.0, mapUrl: "https://www.google.com/maps/search/Sree+Lakshmi+Restaurant+Srisailam/@16.0736,78.8688,14z" },
      { name: "Srisailam Dam View Point", type: "attraction", distance: "3 km", priceRange: "Free", rating: 4.6, mapUrl: "https://www.google.com/maps/search/Srisailam+Dam/@16.0736,78.8688,14z" },
      { name: "Patala Ganga", type: "attraction", distance: "2 km", priceRange: "₹100 cable car", rating: 4.5, mapUrl: "https://www.google.com/maps/search/Patala+Ganga+Srisailam/@16.0736,78.8688,14z" },
      { name: "Akka Mahadevi Caves", type: "attraction", distance: "5 km", priceRange: "Free", rating: 4.2, mapUrl: "https://www.google.com/maps/search/Akka+Mahadevi+Caves+Srisailam/@16.0736,78.8688,14z" },
      { name: "Nagarjunasagar Dam", type: "attraction", distance: "150 km", priceRange: "₹20 entry", rating: 4.5, mapUrl: "https://www.google.com/maps/place/Nagarjuna+Sagar+Dam/@16.5740,79.3120,14z" },
    ],
    travelInfo: {
      fromHyderabad: { distance: "230 km", time: "5 hours", mode: "Road" },
      fromVisakhapatnam: { distance: "540 km", time: "10 hours", mode: "Road" },
      fromVijayawada: { distance: "230 km", time: "5 hours", mode: "Road" },
      estimatedDailyCost: { budget: "₹1,000 - ₹2,000", mid: "₹2,500 - ₹5,000", luxury: "₹5,000 - ₹10,000" },
      bestTimeToVisit: "October to March (Shivaratri in Feb/Mar is special)",
      idealDuration: "2 days",
    },
    cabServices: [
      { name: "Hyderabad Outstation Cabs", pricePerKm: "₹11/km", contact: "+91 98765 44444" },
      { name: "Srisailam Local Autos", pricePerKm: "₹15/km", contact: "Available at bus stand" },
      { name: "Ola / Uber (from Hyderabad)", pricePerKm: "₹10-14/km", contact: "App based" },
    ],
  },
  "tirupati": {
    id: "tirupati",
    history: "Tirupati is home to the Sri Venkateswara Temple (Tirumala), one of the richest and most visited religious sites in the world. The temple's history dates back over 2,000 years, with references in Tamil Sangam literature. Built in the Dravidian architectural style, the main deity Lord Venkateswara (Balaji) attracts over 75,000 pilgrims daily. The temple was patronized by various dynasties including the Pallavas, Cholas, and the Vijayanagara Empire.",
    culture: "Tirupati is a spiritual epicenter of Hinduism. The head-tonsuring tradition (offering hair to the deity) is practiced by millions annually. The temple's Brahmotsavam festival, celebrated for 9 days, features grand processions with the deity on different vahanams (vehicles). The prasadam (sacred food), especially the Tirupati Laddu, is world-famous and has a GI tag.",
    guideInfo: {
      bestFor: ["Pilgrims & devotees", "Families", "History enthusiasts", "Solo travelers", "Everyone"],
      mustVisitSpots: ["Sri Venkateswara Temple (Tirumala)", "Chandragiri Fort", "Sri Kalahasti Temple", "Talakona Waterfalls", "Tirupati Deer Park", "Silathoranam (Natural Rock Arch)", "Kapila Theertham"],
      localTips: ["Book darshan tickets online 2-3 weeks in advance via TTD website", "₹300 special darshan saves 8-10 hours of waiting", "Free accommodation available through TTD — book early", "Try the famous Tirupati Laddu (₹50 for 2)", "Tonsuring is free at designated halls"],
      safetyTips: ["Beware of middlemen selling 'fast darshan' — use only official TTD services", "Keep valuables in lockers provided at the temple", "Wear modest clothing for temple entry", "Stay hydrated — summer temperatures exceed 40°C"],
      whatToCarry: ["Comfortable walking shoes (lots of walking)", "Traditional clothes for temple", "Water bottle", "ID proof for darshan", "Cash for prasadam & offerings"],
    },
    nearbyPlaces: [
      { name: "Fortune Kences Hotel", type: "hotel", distance: "2 km", priceRange: "₹3,000 - ₹8,000/night", rating: 4.5, bookingUrl: "https://www.makemytrip.com/hotels/tirupati-hotels.html", mapUrl: "https://www.google.com/maps/search/Fortune+Kences+Hotel+Tirupati/@13.6288,79.4192,14z" },
      { name: "Hotel Bliss", type: "hotel", distance: "1 km", priceRange: "₹1,200 - ₹3,000/night", rating: 4.0, bookingUrl: "https://www.booking.com/searchresults.html?ss=Tirupati", mapUrl: "https://www.google.com/maps/search/Hotel+Bliss+Tirupati/@13.6288,79.4192,14z" },
      { name: "Marasa Sarovar Premiere", type: "hotel", distance: "3 km", priceRange: "₹4,000 - ₹10,000/night", rating: 4.6, bookingUrl: "https://www.makemytrip.com/hotels/tirupati-hotels.html", mapUrl: "https://www.google.com/maps/search/Marasa+Sarovar+Premiere+Tirupati/@13.6288,79.4192,14z" },
      { name: "TTD Canteen (Annadanam)", type: "restaurant", distance: "0 km", priceRange: "Free", rating: 4.7, mapUrl: "https://www.google.com/maps/search/TTD+Annadanam+Tirumala/@13.6833,79.3472,14z" },
      { name: "Minerva Grand", type: "restaurant", distance: "3 km", priceRange: "₹300 - ₹800", rating: 4.3, mapUrl: "https://www.google.com/maps/search/Minerva+Grand+Tirupati/@13.6288,79.4192,14z" },
      { name: "Maya Restaurant", type: "restaurant", distance: "2 km", priceRange: "₹200 - ₹600", rating: 4.1, mapUrl: "https://www.google.com/maps/search/Maya+Restaurant+Tirupati/@13.6288,79.4192,14z" },
      { name: "Rayalaseema Ruchulu", type: "restaurant", distance: "4 km", priceRange: "₹200 - ₹500", rating: 4.4, mapUrl: "https://www.google.com/maps/search/Rayalaseema+Ruchulu+Tirupati/@13.6288,79.4192,14z" },
      { name: "Sri Kalahasteeswara Temple", type: "attraction", distance: "36 km", priceRange: "Free", rating: 4.6, mapUrl: "https://www.google.com/maps/place/Sri+Kalahasteeswara+Temple/@13.7497,79.6981,15z" },
      { name: "Chandragiri Fort", type: "attraction", distance: "15 km", priceRange: "₹25 entry", rating: 4.2, mapUrl: "https://www.google.com/maps/search/Chandragiri+Fort+Tirupati/@13.5833,79.3167,14z" },
      { name: "Talakona Waterfalls", type: "attraction", distance: "49 km", priceRange: "₹50 entry", rating: 4.4, mapUrl: "https://www.google.com/maps/search/Talakona+Waterfalls/@13.6667,79.1167,14z" },
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
      { name: "APTDC Haritha Hotel", type: "hotel", distance: "0.5 km", priceRange: "₹1,200 - ₹2,500/night", rating: 3.7, bookingUrl: "https://www.makemytrip.com/hotels/lepakshi-hotels.html", mapUrl: "https://www.google.com/maps/search/APTDC+Haritha+Hotel+Lepakshi/@15.5833,77.6067,14z" },
      { name: "Lepakshi Guest House", type: "hotel", distance: "0.3 km", priceRange: "₹800 - ₹1,500/night", rating: 3.5, bookingUrl: "https://www.booking.com/searchresults.html?ss=Lepakshi", mapUrl: "https://www.google.com/maps/search/Lepakshi+Guest+House/@15.5833,77.6067,14z" },
      { name: "Nandi Restaurant", type: "restaurant", distance: "0.2 km", priceRange: "₹100 - ₹300", rating: 3.8, mapUrl: "https://www.google.com/maps/search/Nandi+Restaurant+Lepakshi/@15.5833,77.6067,14z" },
      { name: "Penukonda Fort", type: "attraction", distance: "40 km", priceRange: "Free", rating: 4.1, mapUrl: "https://www.google.com/maps/search/Penukonda+Fort/@14.0833,77.5917,14z" },
      { name: "Lepakshi Handicrafts Emporium", type: "attraction", distance: "0.5 km", priceRange: "Free", rating: 4.0, mapUrl: "https://www.google.com/maps/search/Lepakshi+Handicrafts+Emporium/@15.5833,77.6067,14z" },
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
    history: "Amaravati, located on the banks of the Krishna River in Guntur district, was the capital of the ancient Satavahana dynasty (2nd century BCE). It was a major center of Buddhism, housing the Great Stupa (Mahachaitya), one of the largest Buddhist stupas ever built, rivaling Sanchi and Borobudur. The stupa was adorned with elaborate limestone carvings depicting scenes from Buddha's life.",
    culture: "Amaravati represents a unique blend of Buddhist and Hindu heritage. The Amaravati School of Art, characterized by its dynamic narrative relief sculptures, influenced Buddhist art across Southeast Asia. The archaeological museum houses priceless artifacts from the stupa site.",
    guideInfo: {
      bestFor: ["History enthusiasts", "Buddhist pilgrims", "Architecture students", "Families"],
      mustVisitSpots: ["Amaravati Stupa Ruins", "Archaeological Museum", "Undavalli Caves", "Prakasam Barrage", "Dhyana Buddha Statue", "Mangalagiri Temple"],
      localTips: ["Combine with Vijayawada visit (just 30 km away)", "The museum closes at 5 PM — plan accordingly", "Try Guntur-style biryani and mirchi bajji", "Visit Undavalli Caves for stunning rock-cut architecture"],
      safetyTips: ["Summer temperatures are extreme — carry water", "Limited shade at archaeological sites", "Construction activity in the new capital area — follow marked paths"],
      whatToCarry: ["Sun protection", "Comfortable walking shoes", "Water & snacks", "Camera"],
    },
    nearbyPlaces: [
      { name: "Hotel Minerva Grand", type: "hotel", distance: "5 km", priceRange: "₹2,000 - ₹5,000/night", rating: 4.2, bookingUrl: "https://www.makemytrip.com/hotels/vijayawada-hotels.html", mapUrl: "https://www.google.com/maps/search/Hotel+Minerva+Grand+Vijayawada/@16.5062,80.6480,14z" },
      { name: "Gateway Hotel", type: "hotel", distance: "8 km", priceRange: "₹3,500 - ₹7,000/night", rating: 4.4, bookingUrl: "https://www.booking.com/searchresults.html?ss=Vijayawada", mapUrl: "https://www.google.com/maps/search/Gateway+Hotel+Vijayawada/@16.5062,80.6480,14z" },
      { name: "Babai Hotel", type: "restaurant", distance: "2 km", priceRange: "₹150 - ₹400", rating: 4.3, mapUrl: "https://www.google.com/maps/search/Babai+Hotel+Guntur/@16.3067,80.4365,14z" },
      { name: "Guntur Biryani House", type: "restaurant", distance: "6 km", priceRange: "₹200 - ₹500", rating: 4.4, mapUrl: "https://www.google.com/maps/search/Guntur+Biryani+House/@16.3067,80.4365,14z" },
      { name: "Undavalli Caves", type: "attraction", distance: "10 km", priceRange: "₹25 entry", rating: 4.5, mapUrl: "https://www.google.com/maps/place/Undavalli+Caves/@16.4960,80.5783,15z" },
      { name: "Prakasam Barrage", type: "attraction", distance: "15 km", priceRange: "Free", rating: 4.2, mapUrl: "https://www.google.com/maps/search/Prakasam+Barrage+Vijayawada/@16.5062,80.6480,14z" },
      { name: "Mangalagiri Temple", type: "attraction", distance: "12 km", priceRange: "Free", rating: 4.4, mapUrl: "https://www.google.com/maps/search/Mangalagiri+Temple/@16.4333,80.5500,14z" },
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
  "gandikota": {
    id: "gandikota",
    history: "Gandikota, known as the 'Grand Canyon of India', is a village in Kadapa district featuring a spectacular gorge formed by the Pennar River cutting through the Erramala hills. The Gandikota Fort, built by the Kalyani Chalukyas in the 12th century, sits dramatically on the edge of a 300-foot deep gorge. The fort changed hands between the Chalukyas, Vijayanagara Empire, and the Qutb Shahis over centuries. Inside the fort are the Madhava Raya Temple, the Ranganatha Temple, and a Jamia Masjid — showcasing the region's multi-cultural history.",
    culture: "Gandikota is a hidden gem that has recently gained attention as India's answer to the Grand Canyon. The fort walls span nearly 5 km and contain remnants of a once-thriving medieval town. The Mylavaram Dam nearby adds to the scenic beauty. The region's Rayalaseema culture is known for its warrior traditions, spicy cuisine, and vibrant folk arts like Burra Katha.",
    guideInfo: {
      bestFor: ["Adventure seekers", "Photographers", "History buffs", "Camping enthusiasts", "Trekkers"],
      mustVisitSpots: ["Gandikota Gorge (Grand Canyon)", "Gandikota Fort", "Madhava Raya Temple", "Ranganatha Temple", "Mylavaram Dam", "Jamia Masjid inside Fort", "Belum Caves (nearby)"],
      localTips: ["Camp overnight at the gorge edge for a stunning sunrise — it's life-changing", "APTDC has camping facilities — book in advance", "Combine with Belum Caves (60 km away) for a 2-day trip", "Carry your own food — limited restaurants", "Visit on full moon nights for a magical experience"],
      safetyTips: ["Stay away from cliff edges — no railings in many areas", "Don't trek down the gorge without a guide", "Roads to Gandikota are narrow — drive carefully at night", "Limited mobile network coverage"],
      whatToCarry: ["Camping gear (tent, sleeping bag)", "Food & water (essential)", "Torch/flashlight", "Trekking shoes", "Camera with wide-angle lens", "Power bank (no charging points)"],
    },
    nearbyPlaces: [
      { name: "APTDC Haritha Resort", type: "hotel", distance: "0.5 km", priceRange: "₹1,200 - ₹2,500/night", rating: 3.9, bookingUrl: "https://www.makemytrip.com/hotels/gandikota-hotels.html", mapUrl: "https://www.google.com/maps/search/APTDC+Haritha+Resort+Gandikota/@15.2486,78.2869,14z" },
      { name: "Gandikota Camping Tents", type: "hotel", distance: "0.3 km", priceRange: "₹800 - ₹2,000/night", rating: 4.3, mapUrl: "https://www.google.com/maps/search/Gandikota+Camping/@15.2486,78.2869,14z" },
      { name: "Local Dhaba", type: "restaurant", distance: "1 km", priceRange: "₹100 - ₹250", rating: 3.5, mapUrl: "https://www.google.com/maps/search/Restaurant+Gandikota/@15.2486,78.2869,14z" },
      { name: "Gandikota Fort", type: "attraction", distance: "0.2 km", priceRange: "Free", rating: 4.6, mapUrl: "https://www.google.com/maps/place/Gandikota+Fort/@15.2486,78.2869,15z" },
      { name: "Mylavaram Dam", type: "attraction", distance: "5 km", priceRange: "Free", rating: 4.3, mapUrl: "https://www.google.com/maps/search/Mylavaram+Dam+Gandikota/@15.2486,78.2869,14z" },
      { name: "Belum Caves", type: "attraction", distance: "60 km", priceRange: "₹65 entry", rating: 4.5, mapUrl: "https://www.google.com/maps/place/Belum+Caves/@15.1045,78.1077,15z" },
      { name: "Owk Reservoir", type: "attraction", distance: "30 km", priceRange: "Free", rating: 4.0, mapUrl: "https://www.google.com/maps/search/Owk+Reservoir+Kadapa/@15.2486,78.2869,14z" },
    ],
    travelInfo: {
      fromHyderabad: { distance: "380 km", time: "6.5 hours", mode: "Road" },
      fromVisakhapatnam: { distance: "600 km", time: "11 hours", mode: "Road" },
      fromVijayawada: { distance: "340 km", time: "6 hours", mode: "Road" },
      estimatedDailyCost: { budget: "₹800 - ₹1,500", mid: "₹2,000 - ₹4,000", luxury: "₹4,000 - ₹8,000" },
      bestTimeToVisit: "October to February",
      idealDuration: "1-2 days",
    },
    cabServices: [
      { name: "Kadapa Cabs", pricePerKm: "₹10/km", contact: "+91 98765 33333" },
      { name: "Hyderabad Outstation", pricePerKm: "₹12/km", contact: "+91 87654 44444" },
    ],
  },
  "konaseema": {
    id: "konaseema",
    history: "Konaseema, the 'God's Own Creation', is a lush deltaic region where the Godavari River splits into multiple tributaries before emptying into the Bay of Bengal. The region has been a rice bowl and coconut paradise for centuries. Ancient references in Telugu literature describe Konaseema as 'Andhra's Kerala'. The region was integral to the Vengi Chalukya and Eastern Chalukya kingdoms. The Antarvedi Temple, where the Godavari meets the sea, has been a pilgrimage site for over 1,000 years.",
    culture: "Konaseema's culture revolves around the Godavari — fishing, boat festivals, and riverside temples define daily life. The region produces India's finest coconut oil and is famous for its unique 'Konaseema' cuisine featuring prawn curries, crab preparations, and sweet pongal. The annual boat race festival (Teppotsavam) at Antarvedi is a grand spectacle. Traditional Telugu drama (Harikatha, Burra Katha) thrives here.",
    guideInfo: {
      bestFor: ["Nature lovers", "Foodies", "Couples", "Photographers", "Anyone seeking peace & tranquility"],
      mustVisitSpots: ["Antarvedi Temple & Beach", "Coringa Wildlife Sanctuary", "Dindi Resorts (backwaters)", "Coconut Groves Walk", "Godavari River Boat Ride", "Draksharamam Temple", "Amalapuram Town"],
      localTips: ["Stay at Dindi resort for the ultimate backwater experience", "Try Konaseema special prawn curry — it's legendary", "Take a country boat ride through coconut groves at sunset", "Visit Antarvedi on full moon for the river-sea confluence view", "Buy authentic Konaseema coconut oil directly from farmers"],
      safetyTips: ["Monsoon can cause flooding — avoid Jul-Aug", "Mosquitoes are common near backwaters — use repellent", "Boat rides should be taken only with life jackets"],
      whatToCarry: ["Mosquito repellent", "Light cotton clothes", "Camera", "Sunscreen", "Cash (limited ATMs in villages)"],
    },
    nearbyPlaces: [
      { name: "Dindi Resorts", type: "hotel", distance: "0 km", priceRange: "₹3,500 - ₹8,000/night", rating: 4.5, bookingUrl: "https://www.makemytrip.com/hotels/konaseema-hotels.html", mapUrl: "https://www.google.com/maps/search/Dindi+Resorts+Konaseema/@16.5833,81.7500,14z" },
      { name: "Sterling Konaseema", type: "hotel", distance: "2 km", priceRange: "₹4,000 - ₹9,000/night", rating: 4.4, bookingUrl: "https://www.booking.com/searchresults.html?ss=Konaseema", mapUrl: "https://www.google.com/maps/search/Sterling+Konaseema/@16.5833,81.7500,14z" },
      { name: "Coconut Country Resort", type: "hotel", distance: "5 km", priceRange: "₹2,000 - ₹5,000/night", rating: 4.2, bookingUrl: "https://www.makemytrip.com/hotels/konaseema-hotels.html", mapUrl: "https://www.google.com/maps/search/Coconut+Country+Resort+Konaseema/@16.5833,81.7500,14z" },
      { name: "Konaseema Kitchen", type: "restaurant", distance: "1 km", priceRange: "₹200 - ₹600", rating: 4.6, mapUrl: "https://www.google.com/maps/search/Konaseema+Kitchen/@16.5833,81.7500,14z" },
      { name: "Godavari Fish Point", type: "restaurant", distance: "3 km", priceRange: "₹150 - ₹500", rating: 4.4, mapUrl: "https://www.google.com/maps/search/Godavari+Fish+Point+Konaseema/@16.5833,81.7500,14z" },
      { name: "Antarvedi Temple", type: "attraction", distance: "30 km", priceRange: "Free", rating: 4.5, mapUrl: "https://www.google.com/maps/search/Antarvedi+Temple/@16.3333,81.7333,14z" },
      { name: "Coringa Wildlife Sanctuary", type: "attraction", distance: "40 km", priceRange: "₹50 entry", rating: 4.3, mapUrl: "https://www.google.com/maps/search/Coringa+Wildlife+Sanctuary/@16.8000,82.3000,14z" },
      { name: "Draksharamam Temple", type: "attraction", distance: "25 km", priceRange: "Free", rating: 4.6, mapUrl: "https://www.google.com/maps/search/Draksharamam+Temple/@16.7917,82.0667,14z" },
    ],
    travelInfo: {
      fromHyderabad: { distance: "480 km", time: "8 hours", mode: "Road / Train to Rajahmundry" },
      fromVisakhapatnam: { distance: "250 km", time: "5 hours", mode: "Road" },
      fromVijayawada: { distance: "200 km", time: "4 hours", mode: "Road" },
      estimatedDailyCost: { budget: "₹1,500 - ₹2,500", mid: "₹3,500 - ₹6,000", luxury: "₹7,000 - ₹15,000" },
      bestTimeToVisit: "October to March",
      idealDuration: "2-3 days",
    },
    cabServices: [
      { name: "Rajahmundry Cabs", pricePerKm: "₹11/km", contact: "+91 98765 55555" },
      { name: "Konaseema Local Autos", pricePerKm: "₹14/km", contact: "Available at bus stand" },
    ],
  },
  "horsley-hills": {
    id: "horsley-hills",
    history: "Horsley Hills (Yenugu Mallama Konda) is a serene hill station in Chittoor district at an altitude of 1265m. Named after W.D. Horsley, the British collector who discovered its potential in 1870, it served as a summer retreat during the colonial era. The hills are part of the southernmost extension of the Eastern Ghats. A 1500-year-old Sampangi tree (the 'Tree of Life'), believed to be the oldest tree in South India, still stands here. The area's unique ecology supports rare species of flora and fauna.",
    culture: "Horsley Hills represents Rayalaseema's natural heritage. The hill is sacred to local Sugali (Lambadi) tribes. The region's culture blends Rayalaseema warrior traditions with pastoral tranquility. The nearby Madanapalle town is famous for Jiddu Krishnamurti's birthplace. Local handicrafts include Kalamkari prints and Kondapalli toys from the broader Andhra tradition.",
    guideInfo: {
      bestFor: ["Families with kids", "Couples", "Nature lovers", "Weekend getaway seekers", "Cyclists"],
      mustVisitSpots: ["1500-year-old Sampangi Tree", "Horsley Hills View Point", "Environmental Park", "Gali Bandalu (Wind Rocks)", "Gangothri Lake", "Madanapalle Krishnamurti Centre"],
      localTips: ["Perfect weekend getaway from Bangalore (150 km) or Tirupati (140 km)", "Cycling to the hilltop is popular — bikes available for rent", "Try the local ragi mudde and Rayalaseema chicken curry", "Evenings are misty and beautiful — carry a jacket", "Visit the 1500-year-old tree at sunrise for magical light"],
      safetyTips: ["Roads are steep with sharp curves", "Fog can reduce visibility — drive slowly", "Limited medical facilities — carry basic first aid", "No petrol pumps on the hill — fuel up before ascending"],
      whatToCarry: ["Warm clothes (surprisingly cold)", "Cycling gear (optional)", "Torch/flashlight", "Snacks & water", "Camera"],
    },
    nearbyPlaces: [
      { name: "Haritha Hill Resort (APTDC)", type: "hotel", distance: "0.5 km", priceRange: "₹1,500 - ₹3,500/night", rating: 4.0, bookingUrl: "https://www.makemytrip.com/hotels/horsley_hills-hotels.html", mapUrl: "https://www.google.com/maps/search/Haritha+Hill+Resort+Horsley+Hills/@13.6603,78.3997,14z" },
      { name: "Horsley Hills Guest House", type: "hotel", distance: "0.3 km", priceRange: "₹1,000 - ₹2,500/night", rating: 3.8, mapUrl: "https://www.google.com/maps/search/Horsley+Hills+Guest+House/@13.6603,78.3997,14z" },
      { name: "Hilltop Café", type: "restaurant", distance: "0.5 km", priceRange: "₹100 - ₹300", rating: 3.7, mapUrl: "https://www.google.com/maps/search/Cafe+Horsley+Hills/@13.6603,78.3997,14z" },
      { name: "Rayalaseema Mess", type: "restaurant", distance: "3 km", priceRange: "₹100 - ₹250", rating: 4.2, mapUrl: "https://www.google.com/maps/search/Rayalaseema+Mess+Madanapalle/@13.5500,78.5000,14z" },
      { name: "1500-year-old Sampangi Tree", type: "attraction", distance: "1 km", priceRange: "Free", rating: 4.5, mapUrl: "https://www.google.com/maps/search/Sampangi+Tree+Horsley+Hills/@13.6603,78.3997,14z" },
      { name: "Gali Bandalu (Wind Rocks)", type: "attraction", distance: "2 km", priceRange: "Free", rating: 4.2, mapUrl: "https://www.google.com/maps/search/Gali+Bandalu+Horsley+Hills/@13.6603,78.3997,14z" },
      { name: "Gangothri Lake", type: "attraction", distance: "3 km", priceRange: "Free", rating: 4.0, mapUrl: "https://www.google.com/maps/search/Gangothri+Lake+Horsley+Hills/@13.6603,78.3997,14z" },
    ],
    travelInfo: {
      fromHyderabad: { distance: "380 km", time: "7 hours", mode: "Road" },
      fromVisakhapatnam: { distance: "820 km", time: "14 hours", mode: "Train + Road" },
      fromVijayawada: { distance: "450 km", time: "8 hours", mode: "Road" },
      estimatedDailyCost: { budget: "₹1,000 - ₹2,000", mid: "₹2,500 - ₹4,500", luxury: "₹5,000 - ₹9,000" },
      bestTimeToVisit: "September to February",
      idealDuration: "1-2 days",
    },
    cabServices: [
      { name: "Madanapalle Cabs", pricePerKm: "₹10/km", contact: "+91 98765 66666" },
      { name: "Tirupati Outstation", pricePerKm: "₹12/km", contact: "+91 87654 77777" },
    ],
  },
  "rishikonda": {
    id: "rishikonda",
    history: "Rishikonda Beach, located 8 km from Visakhapatnam city, has been a popular destination since the 1960s when the APTDC developed it as a beach resort. The name derives from 'Rishi' (sage) and 'Konda' (hill), referring to the sages who once meditated on the rocky hills surrounding the beach. Today it's known as the 'Jewel of the East Coast' and is one of India's best beaches for water sports.",
    culture: "Rishikonda is at the heart of Vizag's cosmopolitan beach culture. The beach hosts annual surfing competitions, sand sculpture festivals, and beach volleyball tournaments. Local seafood cuisine, particularly the Andhra-style fish curry, is a major cultural draw.",
    guideInfo: {
      bestFor: ["Beach lovers", "Water sports enthusiasts", "Couples", "Families", "Solo travelers"],
      mustVisitSpots: ["Rishikonda Beach (water sports)", "Thotlakonda Buddhist Complex", "Kailasagiri Hill Park", "INS Kurusura Submarine Museum", "Dolphin's Nose", "RK Beach Promenade"],
      localTips: ["Water sports are best from 8-11 AM when waves are perfect", "Surfing lessons available for ₹500-1000 per session", "Sunset views from Kailasagiri are spectacular", "Try the local seafood at beachside shacks — fish fry is a must"],
      safetyTips: ["Swim only in designated areas with lifeguards", "Strong undercurrents — don't go too deep", "Apply sunscreen generously", "Don't swim after dark"],
      whatToCarry: ["Swimwear & towel", "Sunscreen (SPF 50+)", "Sunglasses & hat", "Waterproof phone pouch", "Change of clothes"],
    },
    nearbyPlaces: [
      { name: "Novotel Visakhapatnam", type: "hotel", distance: "3 km", priceRange: "₹5,000 - ₹12,000/night", rating: 4.6, bookingUrl: "https://www.makemytrip.com/hotels/visakhapatnam-hotels.html", mapUrl: "https://www.google.com/maps/search/Novotel+Visakhapatnam/@17.7200,83.3167,14z" },
      { name: "Haritha Beach Resort", type: "hotel", distance: "0.3 km", priceRange: "₹2,500 - ₹5,000/night", rating: 4.2, bookingUrl: "https://www.booking.com/searchresults.html?ss=Rishikonda+Beach", mapUrl: "https://www.google.com/maps/search/Haritha+Beach+Resort+Rishikonda/@17.7869,83.3836,14z" },
      { name: "The Park Visakhapatnam", type: "hotel", distance: "5 km", priceRange: "₹4,000 - ₹10,000/night", rating: 4.5, bookingUrl: "https://www.makemytrip.com/hotels/visakhapatnam-hotels.html", mapUrl: "https://www.google.com/maps/search/The+Park+Hotel+Visakhapatnam/@17.7200,83.3167,14z" },
      { name: "Bay 15 Café", type: "pub", distance: "5 km", priceRange: "₹500 - ₹1,500", rating: 4.4, mapUrl: "https://www.google.com/maps/search/Bay+15+Cafe+Visakhapatnam/@17.7200,83.3167,14z" },
      { name: "Sea Inn Restaurant", type: "restaurant", distance: "1 km", priceRange: "₹300 - ₹800", rating: 4.3, mapUrl: "https://www.google.com/maps/search/Sea+Inn+Restaurant+Rishikonda/@17.7869,83.3836,14z" },
      { name: "Dharani Restaurant", type: "restaurant", distance: "4 km", priceRange: "₹200 - ₹600", rating: 4.5, mapUrl: "https://www.google.com/maps/search/Dharani+Restaurant+Visakhapatnam/@17.7200,83.3167,14z" },
      { name: "Coastal Kitchen", type: "restaurant", distance: "3 km", priceRange: "₹300 - ₹700", rating: 4.3, mapUrl: "https://www.google.com/maps/search/Coastal+Kitchen+Visakhapatnam/@17.7200,83.3167,14z" },
      { name: "Thotlakonda Buddhist Complex", type: "attraction", distance: "5 km", priceRange: "₹25 entry", rating: 4.4, mapUrl: "https://www.google.com/maps/place/Thotlakonda+Buddhist+Complex/@17.7633,83.3883,15z" },
      { name: "Kailasagiri", type: "attraction", distance: "8 km", priceRange: "₹50 entry", rating: 4.5, mapUrl: "https://www.google.com/maps/place/Kailasagiri/@17.7567,83.3700,15z" },
      { name: "INS Kurusura Submarine Museum", type: "attraction", distance: "10 km", priceRange: "₹40 entry", rating: 4.5, mapUrl: "https://www.google.com/maps/search/INS+Kurusura+Submarine+Museum/@17.7200,83.3167,14z" },
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
      { name: "The Park Hotel Vizag", type: "hotel", distance: "10 km", priceRange: "₹4,000 - ₹10,000/night", rating: 4.5, bookingUrl: "https://www.makemytrip.com/hotels/visakhapatnam-hotels.html", mapUrl: "https://www.google.com/maps/search/The+Park+Hotel+Visakhapatnam/@17.7200,83.3167,14z" },
      { name: "Palm Beach Hotel", type: "hotel", distance: "8 km", priceRange: "₹2,000 - ₹4,500/night", rating: 4.1, bookingUrl: "https://www.booking.com/searchresults.html?ss=Visakhapatnam", mapUrl: "https://www.google.com/maps/search/Palm+Beach+Hotel+Visakhapatnam/@17.7200,83.3167,14z" },
      { name: "Coastal Kitchen", type: "restaurant", distance: "3 km", priceRange: "₹250 - ₹600", rating: 4.2, mapUrl: "https://www.google.com/maps/search/Coastal+Kitchen+Visakhapatnam/@17.7200,83.3167,14z" },
      { name: "Dolphin's Nose Viewpoint", type: "attraction", distance: "2 km", priceRange: "Free", rating: 4.6, mapUrl: "https://www.google.com/maps/place/Dolphin's+Nose/@17.6867,83.2733,15z" },
      { name: "Lighthouse", type: "attraction", distance: "3 km", priceRange: "₹20 entry", rating: 4.3, mapUrl: "https://www.google.com/maps/search/Lighthouse+Visakhapatnam/@17.6867,83.2733,14z" },
      { name: "Ross Hill Church", type: "attraction", distance: "5 km", priceRange: "Free", rating: 4.2, mapUrl: "https://www.google.com/maps/search/Ross+Hill+Church+Visakhapatnam/@17.7200,83.3167,14z" },
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
