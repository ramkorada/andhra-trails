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
    mapUrl: "https://www.google.com/maps/place/Araku+Valley,+Andhra+Pradesh/@18.3274,82.8756,13z",
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
    mapUrl: "https://www.google.com/maps/place/Papikondalu,+Andhra+Pradesh/@17.3458,81.4756,12z",
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
    mapUrl: "https://www.google.com/maps/place/Borra+Caves/@18.2821,83.0367,15z",
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
    mapUrl: "https://www.google.com/maps/place/Srisailam,+Andhra+Pradesh/@16.0736,78.8688,14z",
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
    mapUrl: "https://www.google.com/maps/place/Tirumala+Venkateswara+Temple/@13.6833,79.3472,15z",
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
    mapUrl: "https://www.google.com/maps/place/Lepakshi+Temple/@15.5833,77.6067,15z",
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
    mapUrl: "https://www.google.com/maps/place/Amaravati,+Andhra+Pradesh/@16.5733,80.3572,14z",
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
    mapUrl: "https://www.google.com/maps/place/Gandikota+Fort/@15.2486,78.2869,14z",
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
    mapUrl: "https://www.google.com/maps/place/Konaseema+District,+Andhra+Pradesh/@16.9167,81.7500,11z",
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
    mapUrl: "https://www.google.com/maps/place/Horsley+Hills/@13.6603,78.3997,14z",
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
    mapUrl: "https://www.google.com/maps/place/Rishikonda+Beach/@17.7869,83.3836,15z",
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
    mapUrl: "https://www.google.com/maps/place/Yarada+Beach/@17.6533,83.2742,15z",
    rating: 4.4,
    reviewCount: 1890,
  },
];
