"use client";

import { useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import NewsCard from "@/components/NewsCard";
import Sidebar from "@/components/Sidebar";


const advertisements = [
  {
    id: 1,
    title: "Summer Sale 2024",
    description: "Up to 50% off on all products",
    buttonText: "Shop Now",
    bg: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    title: "Tech Mega Deal",
    description: "Latest gadgets at unbelievable prices",
    buttonText: "Explore",
    bg: "from-purple-500 to-purple-700",
  },
  {
    id: 3,
    title: "Travel Bonanza",
    description: "Book holidays & get instant discounts",
    buttonText: "Book Now",
    bg: "from-green-500 to-green-700",
  },
];

export default function HomePage({ articles, trendingArticles }: any) {
  const [visibleCount, setVisibleCount] = useState(8);

  const sliderArticles = articles.slice(0, 5);
  const gridArticles = articles.slice(5);
  const visibleArticles = gridArticles.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSlider articles={sliderArticles} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">


        <div className="lg:col-span-8">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-red-600 pb-2 inline-block">
            Latest News
          </h2>

          {visibleArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visibleArticles.map((article: any) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>

              {visibleCount < gridArticles.length && (
                <div className="text-center mt-8">
                  <button
                    onClick={loadMore}
                    className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="p-8 text-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">No more articles found.</p>
            </div>
          )}
        </div>

      
        <div className="lg:col-span-4 space-y-8">
          <Sidebar articles={trendingArticles} />

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Sponsored
            </h3>

            <div className="space-y-6">
              {advertisements.map((ad) => (
                <div
                  key={ad.id}
                  className={`bg-gradient-to-br ${ad.bg} flex flex-col items-center justify-center rounded-xl shadow-lg p-6 text-white h-56`}
                >
                  <span className="text-xs uppercase tracking-wider opacity-80 mb-2">
                    Advertisement
                  </span>

                  <h3 className="text-xl font-bold mb-2 text-center">
                    {ad.title}
                  </h3>

                  <p className="text-center mb-4 opacity-90">
                    {ad.description}
                  </p>

                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:scale-105 transition duration-300">
                    {ad.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
