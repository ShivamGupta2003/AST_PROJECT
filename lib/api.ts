export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl?: string;
  category: string;
  publishedAt: string;
  author: string;
  source?: string;
}

const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "Global Summit Addresses Climate Change Crisis",
    summary: "World leaders gather to discuss urgent measures to combat global warming and reduce carbon emissions.",
    content: "World leaders from over 100 countries have gathered in Geneva for a critical summit on climate change. The agenda focuses on accelerating the transition to renewable energy, protecting biodiversity, and providing financial aid to developing nations most affected by climate disasters. 'The time for action is now,' stated the UN Secretary-General. The summit aims to produce a binding agreement to limit global temperature rise to 1.5 degrees Celsius.",
    imageUrl: "/climate-change.jpg",
    category: "World",
    publishedAt: "2025-11-25T10:00:00Z",
    author: "Sarah Jenkins",
    source: "Global News Wire"
  },
  {
    id: "2",
    title: "Tech Giant Unveils Revolutionary AI Assistant",
    summary: "A leading tech company has launched a new AI assistant capable of complex reasoning and creative tasks.",
    content: "In a highly anticipated event, TechCorp revealed 'Nexus', their latest artificial intelligence model. Nexus promises to revolutionize how we interact with technology, offering capabilities ranging from advanced coding assistance to creative writing and real-time translation. Experts are calling it a significant leap forward in the field of generative AI. The company plans to integrate Nexus into all its consumer products by next year.",
    imageUrl: "/aitech2.jpeg",
    category: "Technology",
    publishedAt: "2025-11-26T09:30:00Z",
    author: "David Chen",
    source: "TechDaily"
  },
  {
    id: "3",
    title: "Local Team Wins Championship in Thrilling Final",
    summary: "The city's beloved underdog team secured a historic victory in the national championship last night.",
    content: "It was a night to remember as the City Hawks defeated the reigning champions, the Titans, in a nail-biting final match. The game went into overtime, with the Hawks scoring the winning point in the final seconds. Fans flooded the streets in celebration, marking the team's first national title in over two decades. The coach praised the team's resilience and dedication throughout the season.",
    imageUrl: "/local3.avif",
    category: "Sports",
    publishedAt: "2025-11-24T20:15:00Z",
    author: "Mike Ross",
    source: "Sports Central"
  },
  {
    id: "4",
    title: "Stock Markets Hit Record Highs Amid Economic Optimism",
    summary: "Global stock markets rallied today, reaching new all-time highs driven by positive economic data.",
    content: "Investors are celebrating as major indices hit record highs today. The surge is attributed to better-than-expected employment numbers and easing inflation rates. Analysts predict this bullish trend could continue into the next quarter, although some caution against potential market corrections. Tech and energy sectors led the gains, showing robust growth.",
    imageUrl: "/stock1.webp",
    category: "Business",
    publishedAt: "2025-11-26T14:00:00Z",
    author: "Jennifer Wu",
    source: "Financial Times"
  },
  {
    id: "5",
    title: "New Mars Rover Sends Back Stunning Panorama",
    summary: "NASA's latest rover has transmitted a breathtaking high-resolution panoramic image of the Martian surface.",
    content: "The 'Explorer' rover, which landed on Mars last week, has successfully sent back its first high-definition panorama. The image reveals a vast, rocky landscape with towering mountains in the distance, providing scientists with crucial data about the planet's geology. 'This is the clearest view of Mars we've ever seen,' said the mission lead. The rover will now begin its search for signs of ancient microbial life.",
    imageUrl: "/rs1.avif",
    category: "Science",
    publishedAt: "2025-11-23T11:45:00Z",
    author: "Dr. Alan Grant",
    source: "Space Today"
  },
  {
    id: "6",
    title: "Breakthrough Study Links Diet to Longevity",
    summary: "Researchers have identified specific dietary patterns that significantly increase life expectancy.",
    content: "A comprehensive study following over 100,000 participants for 30 years has found a strong correlation between a plant-rich diet and increased longevity. The study suggests that reducing processed meat consumption and increasing intake of whole grains, nuts, and vegetables can add up to 10 years to one's life. Nutritionists are hailing this as definitive proof of the power of diet on health.",
    imageUrl: "/food1.jpeg",
    category: "Health",
    publishedAt: "2025-11-25T08:00:00Z",
    author: "Lisa Ray",
    source: "Health Weekly"
  },
  {
    id: "7",
    title: "Government Announces New Infrastructure Plan",
    summary: "The administration has unveiled a massive infrastructure bill aimed at modernizing transportation and energy grids.",
    content: "The President announced a $1 trillion infrastructure plan today, promising to rebuild crumbling bridges, expand public transit, and upgrade the national power grid. The plan also includes significant investments in high-speed internet for rural areas. 'This is a once-in-a-generation investment in our country's future,' the President stated. The bill faces a vote in Congress next month.",
    imageUrl: "/info1.jpeg",
    category: "Politics",
    publishedAt: "2025-11-22T15:30:00Z",
    author: "Robert Stone",
    source: "Capital News"
  },
  {
    id: "8",
    title: "Blockbuster Movie Breaks Box Office Records",
    summary: "The latest superhero film has shattered opening weekend records, grossing over $300 million globally.",
    content: "Fans flocked to theaters this weekend to see 'The Guardian', the latest installment in the popular superhero franchise. The movie has set a new record for the highest-grossing opening weekend, surpassing previous titleholders. Critics have praised the film's visual effects and emotional depth. A sequel has already been greenlit by the studio.",
    imageUrl: "/avatar-barbie-and-top-gun-maverick.avif",
    category: "Entertainment",
    publishedAt: "2025-11-24T12:00:00Z",
    author: "Emily Blunt",
    source: "CinemaScope"
  },
  {
    id: "9",
    title: "Electric Vehicle Sales Surpass Traditional Cars",
    summary: "For the first time, electric vehicles have outsold internal combustion engine cars in a major market.",
    content: "In a historic shift, electric vehicle (EV) sales have surpassed those of traditional gas-powered cars in the Nordic region this quarter. This milestone is attributed to government incentives, improved charging infrastructure, and a wider range of affordable EV models. Industry experts believe this trend will soon spread to other parts of Europe and North America.",
    imageUrl: "/ev1.avif",
    category: "Technology",
    publishedAt: "2025-11-26T11:00:00Z",
    author: "Elon T.",
    source: "AutoTech"
  },
  {
    id: "10",
    title: "Cricket World Cup: India vs Australia Preview",
    summary: "Anticipation builds as the two cricket giants prepare to face off in the World Cup semi-final.",
    content: "The stage is set for an epic clash between India and Australia in the Cricket World Cup semi-final. Both teams have been in formidable form throughout the tournament. Fans are expecting a high-scoring match with star players from both sides looking to make their mark. The match will be played at the iconic Melbourne Cricket Ground.",
    imageUrl: "/icc1.jpg",
    category: "Sports",
    publishedAt: "2025-11-25T16:00:00Z",
    author: "Ravi Shastri",
    source: "CricInfo"
  },
  {
    id: "11",
    title: "New Species of Orchid Discovered in Rainforest",
    summary: "Botanists have identified a rare and beautiful new species of orchid in the Amazon rainforest.",
    content: "A team of scientists exploring a remote section of the Amazon rainforest has discovered a previously unknown species of orchid. The flower, named 'Orchidea Amazonica', features vibrant purple petals and a unique scent. The discovery highlights the incredible biodiversity of the region and the importance of conservation efforts.",
    imageUrl: "/leaf1.jpeg",
    category: "Environment",
    publishedAt: "2025-11-23T09:00:00Z",
    author: "Dr. Rose Petal",
    source: "Nature Journal"
  },
  {
    id: "12",
    title: "Inflation Rates Drop to 2-Year Low",
    summary: "Consumer prices have stabilized, with inflation dropping to its lowest level in two years.",
    content: "Good news for consumers as the latest economic report shows inflation has cooled to 2.5%, the lowest rate in over two years. Lower energy costs and stabilized food prices are the main drivers. The Central Bank has signaled that it may pause interest rate hikes in response to this positive data.",
    imageUrl: "/inflation.jpg",
    category: "Business",
    publishedAt: "2025-11-26T10:30:00Z",
    author: "Alan Greenspan",
    source: "Economy Watch"
  }
];

export async function getArticles(category?: string, query?: string): Promise<Article[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filtered = [...MOCK_ARTICLES];

  if (category) {
    const cat = category.toLowerCase();
    if (cat === "top") {
      // Return all or a subset for "top"
      return filtered;
    }

    // Handle mapping if necessary, or just direct match
    // Our mock data uses capitalized categories, let's match loosely
    filtered = filtered.filter(a =>
      a.category.toLowerCase() === cat ||
      (cat === "politics" && a.category === "Politics") || // Example mapping if needed
      (cat === "nation" && a.category === "Politics") // Map Nation to Politics
    );
  }

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q)
    );
  }

  return filtered;
}

export async function getArticleById(id: string): Promise<Article | null> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_ARTICLES.find(a => a.id === id) || null;
}

export async function getTrendingArticles(): Promise<Article[]> {
  await new Promise(resolve => setTimeout(resolve, 400));
  // Return first 5 as trending
  return MOCK_ARTICLES.slice(0, 5);
}
