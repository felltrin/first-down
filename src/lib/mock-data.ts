export interface Profile {
  id: number;
  name: string;
  age: number;
  bio: string;
  distance: number;
  image: string;
}

export const mockProfiles: Profile[] = [
  {
    id: 1,
    name: "Sarah",
    age: 28,
    bio: "Adventure seeker 🏔️ | Coffee enthusiast ☕ | Love hiking and trying new restaurants",
    distance: 3,
    image: "/attractive-woman-smiling.png",
  },
  {
    id: 2,
    name: "Emma",
    age: 26,
    bio: "Artist and designer 🎨 | Dog mom 🐕 | Looking for someone to explore the city with",
    distance: 5,
    image: "/creative-woman-with-artistic-style.jpg",
  },
  {
    id: 3,
    name: "Jessica",
    age: 30,
    bio: "Yoga instructor 🧘‍♀️ | Plant lover 🌿 | Foodie who loves cooking and baking",
    distance: 2,
    image: "/woman-doing-yoga-outdoors.jpg",
  },
  {
    id: 4,
    name: "Olivia",
    age: 27,
    bio: "Travel blogger ✈️ | Beach lover 🏖️ | Always planning my next adventure",
    distance: 7,
    image: "/woman-beach-sunset.png",
  },
  {
    id: 5,
    name: "Mia",
    age: 25,
    bio: "Software engineer 💻 | Gamer 🎮 | Love sci-fi movies and board game nights",
    distance: 4,
    image: "/tech-savvy-woman-with-glasses.jpg",
  },
  {
    id: 6,
    name: "Sophia",
    age: 29,
    bio: "Photographer 📸 | Music festival enthusiast 🎵 | Always up for spontaneous road trips",
    distance: 6,
    image: "/woman-with-camera-at-music-festival.jpg",
  },
  {
    id: 7,
    name: "Isabella",
    age: 24,
    bio: "Dancer 💃 | Fitness enthusiast 💪 | Love trying new workout classes and healthy recipes",
    distance: 3,
    image: "/young-woman-dancing-fitness.jpg",
  },
  {
    id: 8,
    name: "Ava",
    age: 31,
    bio: "Marketing manager 📱 | Wine lover 🍷 | Enjoy live music and comedy shows",
    distance: 8,
    image: "/professional-woman-at-wine-bar.jpg",
  },
  {
    id: 9,
    name: "Charlotte",
    age: 27,
    bio: "Veterinarian 🐾 | Animal rescue volunteer 🐈 | Looking for a fellow animal lover",
    distance: 5,
    image: "/woman-with-pets-veterinarian.jpg",
  },
  {
    id: 10,
    name: "Amelia",
    age: 26,
    bio: "Chef 👩‍🍳 | Foodie at heart 🍜 | Love experimenting with new cuisines",
    distance: 4,
    image: "/woman-chef-cooking-kitchen.jpg",
  },
  {
    id: 11,
    name: "Harper",
    age: 29,
    bio: "Book editor 📚 | Avid reader 📖 | Coffee shop hopper and poetry lover",
    distance: 6,
    image: "/woman-reading-book-coffee-shop.jpg",
  },
  {
    id: 12,
    name: "Evelyn",
    age: 28,
    bio: "Environmental scientist 🌍 | Sustainability advocate ♻️ | Love camping and stargazing",
    distance: 9,
    image: "/woman-outdoors-nature-camping.jpg",
  },
];
