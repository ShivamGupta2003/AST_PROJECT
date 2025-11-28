// import Image from "next/image";
// import Link from "next/link";
// import { Article } from "@/lib/api";

// interface HeroProps {
//     article: Article;
// }

// export default function Hero({ article }: HeroProps) {
//     const imageUrl = article.imageUrl || "https://placehold.co/1200x600/png?text=No+Image";

//     return (
//         <section className="mb-8">
//             <Link href={`/news/${article.id}`} className="group block relative rounded-xl overflow-hidden shadow-lg">
//                 <div className="relative h-64 md:h-96 w-full">
//                     <Image
//                         src={imageUrl}
//                         alt={article.title}
//                         fill
//                         priority
//                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         sizes="100vw"
//                     />
//                     {/* Gradient Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
//                     <span className="inline-block px-3 py-1 bg-red-600 text-xs font-bold uppercase rounded mb-3">
//                         Top Story
//                     </span>
//                     <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight group-hover:text-red-200 transition-colors">
//                         {article.title}
//                     </h1>
//                     <p className="hidden md:block text-gray-200 text-lg max-w-3xl line-clamp-2">
//                         {article.summary}
//                     </p>
//                 </div>
//             </Link>
//         </section>
//     );
// }


import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/api";

interface HeroProps {
    article: Article;
}

export default function Hero({ article }: HeroProps) {
    const imageUrl = article.imageUrl || "https://placehold.co/1200x600/png?text=No+Image";

    return (
        <section className="mb-8">
            <Link href={`/news/${article.id}`} className="group block relative rounded-xl overflow-hidden shadow-2xl">
                <div className="relative h-64 md:h-80 lg:h-96 w-full">
                    <Image
                        src={imageUrl}
                        alt={article.title}
                        fill
                        priority
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="100vw"
                    />
                    {/* Dynamic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                    
                    {/* Animated Red Accent Bar */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-600 to-red-800 group-hover:w-3 transition-all duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 text-white">
                    {/* Category & Metadata Bar */}
                    <div className="flex items-center gap-2 md:gap-3 mb-3 flex-wrap">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg group-hover:bg-red-700 transition-colors">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            Breaking News
                        </span>
                        
                        {article.category && (
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-xs font-semibold uppercase tracking-wide rounded-full border border-white/20">
                                {article.category}
                            </span>
                        )}
                        
                        {article.publishedAt && (
                            <span className="text-xs text-gray-300 font-medium flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {new Date(article.publishedAt).toLocaleDateString('en-US', { 
                                    month: 'short', 
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </span>
                        )}
                    </div>

                    {/* Headline */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 leading-tight tracking-tight drop-shadow-2xl group-hover:text-red-100 transition-colors duration-300">
                        {article.title}
                    </h1>
                    
                    {/* Summary */}
                    <p className="hidden md:block text-gray-100 text-base md:text-lg lg:text-xl max-w-4xl line-clamp-2 leading-relaxed font-medium drop-shadow-lg mb-4">
                        {article.summary}
                    </p>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/20">
                        {article.author && (
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-sm">
                                    {article.author.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">By {article.author}</p>
                                    {article.readTime && (
                                        <p className="text-xs text-gray-300">{article.readTime} min read</p>
                                    )}
                                </div>
                            </div>
                        )}
                        
                        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                            Read Full Story
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-600/20 to-transparent pointer-events-none" />
            </Link>
        </section>
    );
}