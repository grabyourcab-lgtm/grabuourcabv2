export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  thumbnail:string | StaticImageData;
};
import { StaticImageData } from "next/image";
import firstBlogImg from "../images/first-blog.png"
import secondBlogImg from "../images/second-blog.webp"
export const blogs: Blog[] = [
  {
    slug: "self-drive-car-rental-diwali",
    title: "Self-Drive Car Rental for Diwali: A Complete Family Travel Guide",
    excerpt: "Diwali is a time for family gatherings, festive shopping, visiting relatives and taking a short holiday. But travelling during the festive season can be tough with crowded public transport, traffic jams and last-minute changes to travel plans. For the families who want more freedom, diwali self drive car rental would be a viable option.",
    category: "festival",
    date: "19 Oct 2026",
    thumbnail: firstBlogImg,
    readTime: "4 min read",
  },
  {
    slug: "best-places-to-visit-near-delhi-by-cab",
    title: "Best Places to Visit Near Delhi: 15 One-Day Trips and Weekend Getaways",
    excerpt: `Delhi is surrounded by some of North India's most interesting travel destinations, making it easy to plan a refreshing
break from everyday city life. Whether you are looking for a peaceful lakeside outing, a historical monument, a spiritual
journey, a wildlife experience or a weekend escape, there are plenty of places to explore within a few hours of the capital.`,
    category: "Trip",
    date: "04 Nov 2026",
    thumbnail: secondBlogImg,
    readTime: "4 min read",
  },
  
];