import logo1 from "./images/tour-1.jpeg";
import logo2 from "./images/tour-2.jpeg";
import logo3 from "./images/tour-3.jpeg";
import logo4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, to: "/", text: "home" },
  { id: 2, to: "/about", text: "about" },
  { id: 3, to: "services/", text: "services" },
  { id: 4, to: "/tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, to: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, to: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, to: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const toursData = [
  {
    id: 1,
    img: logo1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    destination: "china",
    days: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    img: logo2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    destination: "indonesia",
    days: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    img: logo3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    destination: "hong kong",
    days: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    img: logo4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    destination: "kenya",
    days: "20 days",
    price: "from $3300",
  },
];
