import Weather from "~/components/Weather";
import Beliefs from "~/components/Beliefs";
import UHaulToUtah from "~/components/UHaulToUtah";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
};

export const posts: BlogPost[] = [
  {
    slug: "weather",
    title: "Why the Weather?",
    date: "August 18, 2024",
  },
  {
    slug: "beliefs",
    title: "What do I believe?",
    date: "August 18, 2024",
  },
  {
    slug: "uHaulToUtah",
    title: "UHaul to Utah: Navigating the Roads of Work Culture Evolution",
    date: "March 1, 2024",
  },
];

export const mapping = new Map<string, React.FC>();
mapping.set("weather", Weather);
mapping.set("beliefs", Beliefs);
mapping.set("uHaulToUtah", UHaulToUtah);
