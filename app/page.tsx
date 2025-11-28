

import { getArticles, getTrendingArticles } from "@/lib/api";
import HomePage from "@/components/HomePage";

export const metadata = {
  title: "News Site ACT - Latest News",
  description: "Breaking news, latest updates, and trending stories from India and the world.",
};

export default async function Page() {
  const articles = await getArticles();
  const trendingArticles = await getTrendingArticles();

  return <HomePage articles={articles} trendingArticles={trendingArticles} />;
}
