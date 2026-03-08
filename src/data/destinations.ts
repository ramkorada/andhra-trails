import arakuValley from "@/assets/araku-valley.jpg";
import papikondalu from "@/assets/papikondalu.jpg";
import borraCaves from "@/assets/borra-caves.jpg";
import tirupati from "@/assets/tirupati.jpg";
import lepakshi from "@/assets/lepakshi.jpg";
import amaravati from "@/assets/amaravati.jpg";
import rishikonda from "@/assets/rishikonda.jpg";
import yarada from "@/assets/yarada.jpg";
import srisailam from "@/assets/srisailam.jpg";
import konaseema from "@/assets/konaseema.jpg";
import horsleyHills from "@/assets/horsley-hills.jpg";
import gandikota from "@/assets/gandikota.jpg";

export type Category = "Eco" | "Cultural" | "Coastal";

export interface Destination {
  id: string;
  name: string;
  description: string;
  category: Category;
  district: string;
  image: string;
  mapUrl: string;
  rating: number;
  reviewCount: number;
}

export const destinations: Destination[] = [
  {
    id: "araku-valley",
    name: "Araku Valley",
    description: "A pristine hill station surrounded by lush coffee plantations, waterfalls, and tribal culture nestled in the Eastern Ghats.",
    category: "Eco",
    district: "Alluri Sitharama Raju",
    image: arakuValley,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Araku+Valley+Andhra+Pradesh",
    rating: 4.6,
    reviewCount: 2340,
  },
  {
    id: "papikondalu",
    name: "Papikondalu",
    description: "Majestic hills along the Godavari River offering breathtaking boat cruises through lush green gorges.",
    category: "Eco",
    district: "East Godavari",
    image: papikondalu,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Papikondalu+Andhra+Pradesh",
    rating: 4.7,
    reviewCount: 1890,
  },
  {
    id: "borra-caves",
    name: "Borra Caves",
    description: "Million-year-old limestone caves with spectacular stalactite and stalagmite formations deep within the Ananthagiri Hills.",
    category: "Eco",
    district: "Alluri Sitharama Raju",
    image: borraCaves,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Borra+Caves+Andhra+Pradesh",
    rating: 4.4,
    reviewCount: 3120,
  },
  {
    id: "srisailam",
    name: "Srisailam",
    description: "A sacred Jyotirlinga temple town set amidst the dense Nallamala forests with the majestic Srisailam Dam on the Krishna River.",
    category: "Cultural",
    district: "Nandyal",
    image: srisailam,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Srisailam+Temple+Andhra+Pradesh",
    rating: 4.7,
    reviewCount: 8900,
  },
  {
    id: "tirupati",
    name: "Tirupati",
    description: "Home to the world-renowned Sri Venkateswara Temple, one of the most visited and sacred pilgrimage destinations on earth.",
    category: "Cultural",
    district: "Tirupati",
    image: tirupati,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tirumala+Venkateswara+Temple+Tirupati",
    rating: 4.8,
    reviewCount: 15200,
  },
  {
    id: "lepakshi",
    name: "Lepakshi",
    description: "A 16th-century architectural marvel featuring the famous hanging pillar, exquisite Vijayanagara-era murals, and a monolithic Nandi.",
    category: "Cultural",
    district: "Anantapur",
    image: lepakshi,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lepakshi+Temple+Anantapur+Andhra+Pradesh",
    rating: 4.5,
    reviewCount: 2780,
  },
  {
    id: "amaravati",
    name: "Amaravati",
    description: "An ancient Buddhist center with 2,000-year-old stupa ruins, rich archaeological heritage, and the capital region of Andhra Pradesh.",
    category: "Cultural",
    district: "Guntur",
    image: amaravati,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Amaravati+Stupa+Guntur+Andhra+Pradesh",
    rating: 4.3,
    reviewCount: 1560,
  },
  {
    id: "gandikota",
    name: "Gandikota",
    description: "India's own Grand Canyon — a stunning gorge carved by the Pennar River with a medieval fort perched on dramatic cliff edges.",
    category: "Eco",
    district: "Kadapa",
    image: gandikota,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gandikota+Fort+Kadapa+Andhra+Pradesh",
    rating: 4.6,
    reviewCount: 3450,
  },
  {
    id: "konaseema",
    name: "Konaseema",
    description: "The 'God's Own Creation' — a tropical paradise of coconut groves, Godavari delta backwaters, and serene village life.",
    category: "Eco",
    district: "Konaseema",
    image: konaseema,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Konaseema+Andhra+Pradesh",
    rating: 4.5,
    reviewCount: 2100,
  },
  {
    id: "horsley-hills",
    name: "Horsley Hills",
    description: "A cool, misty hill station at 1265m with panoramic views, ancient trees, and a tranquil escape from Rayalaseema's heat.",
    category: "Eco",
    district: "Chittoor",
    image: horsleyHills,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Horsley+Hills+Chittoor+Andhra+Pradesh",
    rating: 4.4,
    reviewCount: 1780,
  },
  {
    id: "rishikonda",
    name: "Rishikonda Beach",
    description: "Known as the 'Jewel of the East Coast,' this golden sandy beach offers water sports, surfing, and stunning Bay of Bengal sunrises.",
    category: "Coastal",
    district: "Visakhapatnam",
    image: rishikonda,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rishikonda+Beach+Visakhapatnam",
    rating: 4.5,
    reviewCount: 4230,
  },
  {
    id: "yarada",
    name: "Yarada Beach",
    description: "A secluded paradise surrounded by hills on three sides, offering crystal-clear waters and pristine, uncrowded shores.",
    category: "Coastal",
    district: "Visakhapatnam",
    image: yarada,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Yarada+Beach+Visakhapatnam",
    rating: 4.4,
    reviewCount: 1890,
  },
];
