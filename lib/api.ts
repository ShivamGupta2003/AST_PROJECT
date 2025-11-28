

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
   readTime?: number;
}

const MOCK_ARTICLES: Article[] = [
  // --- WORLD & POLITICS ---
  {
    id: "1",
    title: "Global Summit Addresses Climate Change Crisis",
    summary: "World leaders gather to discuss urgent measures to combat global warming.",
    content: "World leaders from over 100 countries have gathered in Geneva for a critical summit on climate change. The agenda focuses on accelerating the transition to renewable energy and protecting biodiversity. 'The time for action is now,' stated the UN Secretary-General. The summit aims to produce a binding agreement to limit global temperature rise to 1.5 degrees Celsius.",
    imageUrl: "https://picsum.photos/seed/climate/800/600",
    category: "World",
    publishedAt: "2025-11-25T10:00:00Z",
    author: "Sarah Jenkins",
    source: "Global News Wire"
  },
  {
    id: "7",
    title: "Government Announces New Infrastructure Plan",
    summary: "The administration has unveiled a massive infrastructure bill aimed at modernizing transportation.",
    content: "The President announced a $1 trillion infrastructure plan today, promising to rebuild crumbling bridges, expand public transit, and upgrade the national power grid. The plan also includes significant investments in high-speed internet for rural areas. This bill is expected to create thousands of jobs across the nation.",
    imageUrl: "https://picsum.photos/seed/bridge/800/600",
    category: "Politics",
    publishedAt: "2025-11-22T15:30:00Z",
    author: "Robert Stone",
    source: "Capital News"
  },
  {
    id: "13",
    title: "Peace Treaty Signed in Historic Ceremony",
    summary: "Two long-standing rival nations have officially signed a peace treaty today.",
    content: "In a ceremony watched by millions, leaders of the two nations shook hands and signed a document ending decades of conflict. The treaty outlines new trade agreements and border demilitarization zones. International observers have hailed this as a victory for diplomacy.",
    imageUrl: "https://picsum.photos/seed/treaty/800/600",
    category: "World",
    publishedAt: "2025-11-27T09:00:00Z",
    author: "Amanda Wallis",
    source: "World Peace Watch"
  },
  {
    id: "14",
    title: "Elections scheduled for Next Month",
    summary: "The national electoral commission has finalized dates for the upcoming general election.",
    content: "Citizens are preparing to head to the polls next month as the election dates were officially announced. Key issues on the ballot include healthcare reform, taxation, and education funding. Campaigning is expected to intensify in the coming weeks.",
    imageUrl: "https://picsum.photos/seed/vote/800/600",
    category: "Politics",
    publishedAt: "2025-11-20T11:00:00Z",
    author: "Tom Baker",
    source: "Daily Politic"
  },
  {
    id: "15",
    title: "UN Launches Clean Water Initiative",
    summary: "A new global initiative aims to provide clean drinking water to remote regions.",
    content: "The United Nations has launched a bold new initiative targeting water scarcity in arid regions. By utilizing new desalination technologies and solar-powered pumps, the project hopes to bring safe drinking water to over 5 million people by 2030.",
    imageUrl: "https://picsum.photos/seed/water/800/600",
    category: "World",
    publishedAt: "2025-11-26T14:45:00Z",
    author: "Priya Patel",
    source: "UN Press"
  },

  // --- TECHNOLOGY ---
  {
    id: "2",
    title: "Tech Giant Unveils Revolutionary AI Assistant",
    summary: "A leading tech company has launched a new AI assistant capable of complex reasoning.",
    content: "In a highly anticipated event, TechCorp revealed 'Nexus', their latest artificial intelligence model. Nexus promises to revolutionize how we interact with technology, offering capabilities ranging from advanced coding assistance to creative writing. Experts are calling it a significant leap forward in generative AI.",
    imageUrl: "https://picsum.photos/seed/robot/800/600",
    category: "Technology",
    publishedAt: "2025-11-26T09:30:00Z",
    author: "David Chen",
    source: "TechDaily"
  },
  {
    id: "9",
    title: "Electric Vehicle Sales Surpass Traditional Cars",
    summary: "For the first time, electric vehicles have outsold gas cars in a major market.",
    content: "In a historic shift, electric vehicle (EV) sales have surpassed those of traditional gas-powered cars in the Nordic region. This milestone is attributed to government incentives, improved charging infrastructure, and a wider range of affordable EV models.",
    imageUrl: "https://picsum.photos/seed/car/800/600",
    category: "Technology",
    publishedAt: "2025-11-26T11:00:00Z",
    author: "Elon T.",
    source: "AutoTech"
  },
  {
    id: "16",
    title: "Quantum Computing Breakthrough Announced",
    summary: "Scientists have achieved a stable quantum state for record time.",
    content: "Researchers at QuantumLeap Labs have maintained a qubit in a stable superposition for over an hour, shattering previous records. This stability is a crucial step towards building commercially viable quantum computers that can solve complex problems in seconds.",
    imageUrl: "https://picsum.photos/seed/chip/800/600",
    category: "Technology",
    publishedAt: "2025-11-24T08:15:00Z",
    author: "Dr. Ken Liu",
    source: "Science Daily"
  },
  {
    id: "17",
    title: "New VR Headset Offers Haptic Feedback Suit",
    summary: "Gaming just got more real with a full-body haptic suit integration.",
    content: "The new 'Immersion X' VR system comes with a lightweight haptic suit that allows players to feel rain, wind, and impact within the game. Early reviews suggest it is the most immersive home entertainment device ever created.",
    imageUrl: "https://picsum.photos/seed/vr/800/600",
    category: "Technology",
    publishedAt: "2025-11-23T16:20:00Z",
    author: "GamerPro",
    source: "IGN"
  },
  {
    id: "18",
    title: "Smartphone Battery Life Doubled with New Tech",
    summary: "A new graphene-based battery promises 3-day life for smartphones.",
    content: "Mobile phones may soon last three days on a single charge thanks to a new graphene composite battery. The technology also supports ultra-fast charging, reaching 100% in just 10 minutes. Mass production is set to begin early 2026.",
    imageUrl: "https://picsum.photos/seed/phone/800/600",
    category: "Technology",
    publishedAt: "2025-11-27T10:00:00Z",
    author: "Tech Insider",
    source: "Gadget World"
  },

  // --- SPORTS ---
  {
    id: "3",
    title: "Local Team Wins Championship in Thrilling Final",
    summary: "The City Hawks secured a historic victory in the national championship.",
    content: "It was a night to remember as the City Hawks defeated the reigning champions, the Titans, in a nail-biting final. The game went into overtime, with the Hawks scoring the winning point in the final seconds. Fans flooded the streets in celebration.",
    imageUrl: "https://picsum.photos/seed/stadium/800/600",
    category: "Sports",
    publishedAt: "2025-11-24T20:15:00Z",
    author: "Mike Ross",
    source: "Sports Central"
  },
  {
    id: "10",
    title: "Cricket World Cup: India vs Australia Preview",
    summary: "Anticipation builds as the two cricket giants prepare to face off.",
    content: "The stage is set for an epic clash between India and Australia in the World Cup semi-final. Both teams have been in formidable form. Fans are expecting a high-scoring match at the Melbourne Cricket Ground.",
    imageUrl: "https://picsum.photos/seed/cricket/800/600",
    category: "Sports",
    publishedAt: "2025-11-25T16:00:00Z",
    author: "Ravi Shastri",
    source: "CricInfo"
  },
  {
    id: "19",
    title: "Olympics 2028: New Sports Added",
    summary: "The Olympic committee has approved three new sports for the upcoming games.",
    content: "Cricket, Flag Football, and Squash have been officially added to the roster for the 2028 Olympics. This move aims to appeal to a broader global audience and modernize the games. Athletes around the world have expressed excitement at the opportunity.",
    imageUrl: "https://picsum.photos/seed/run/800/600",
    category: "Sports",
    publishedAt: "2025-11-21T12:00:00Z",
    author: "Sarah Lewis",
    source: "Olympic News"
  },
  {
    id: "20",
    title: "Tennis Star Announces Retirement",
    summary: "The 20-time Grand Slam winner has announced this season will be their last.",
    content: "In an emotional press conference, the tennis legend confirmed their retirement citing physical toll and a desire to spend time with family. Tributes have poured in from rivals and fans alike, celebrating a career that defined a generation.",
    imageUrl: "https://picsum.photos/seed/tennis/800/600",
    category: "Sports",
    publishedAt: "2025-11-22T09:00:00Z",
    author: "John McEnroe",
    source: "Tennis Weekly"
  },
  {
    id: "21",
    title: "Formula 1: Season Finale Drama",
    summary: "The championship title will be decided in the final lap of the final race.",
    content: "With only 2 points separating the top drivers, the Abu Dhabi Grand Prix is set to be the most watched race in history. Team strategies and tire choices will be critical as the drivers battle for the ultimate prize in motorsport.",
    imageUrl: "https://picsum.photos/seed/racecar/800/600",
    category: "Sports",
    publishedAt: "2025-11-27T14:30:00Z",
    author: "David Croft",
    source: "F1 TV"
  },

  // --- BUSINESS & FINANCE ---
  {
    id: "4",
    title: "Stock Markets Hit Record Highs",
    summary: "Global stock markets rallied today, driven by positive economic data.",
    content: "Investors are celebrating as major indices hit record highs today. The surge is attributed to better-than-expected employment numbers and easing inflation rates. Tech and energy sectors led the gains, showing robust growth.",
    imageUrl: "https://picsum.photos/seed/chart/800/600",
    category: "Business",
    publishedAt: "2025-11-26T14:00:00Z",
    author: "Jennifer Wu",
    source: "Financial Times"
  },
  {
    id: "12",
    title: "Inflation Rates Drop to 2-Year Low",
    summary: "Consumer prices have stabilized, with inflation dropping to 2.5%.",
    content: "Good news for consumers as the latest economic report shows inflation has cooled. Lower energy costs and stabilized food prices are the main drivers. The Central Bank has signaled that it may pause interest rate hikes.",
    imageUrl: "https://picsum.photos/seed/money/800/600",
    category: "Business",
    publishedAt: "2025-11-26T10:30:00Z",
    author: "Alan Greenspan",
    source: "Economy Watch"
  },
  {
    id: "22",
    title: "Crypto Regulation Bill Passed",
    summary: "Parliament has passed a comprehensive bill regulating digital assets.",
    content: "The new legislation provides a clear legal framework for cryptocurrency trading and ownership. While some enthusiasts worry about privacy, institutional investors have welcomed the move, stating it brings much-needed legitimacy and stability to the market.",
    imageUrl: "https://picsum.photos/seed/bitcoin/800/600",
    category: "Business",
    publishedAt: "2025-11-23T11:00:00Z",
    author: "Satoshi N.",
    source: "BlockChain Daily"
  },
  {
    id: "23",
    title: "Major Merger: Airline Giants Combine",
    summary: "Two of the largest international airlines have agreed to merge.",
    content: "AirTravel and GlobalFly have announced a $20 billion merger deal. The new entity will serve over 300 destinations worldwide. Analysts warn that this could reduce competition and potentially raise ticket prices, though the airlines promise better efficiency.",
    imageUrl: "https://picsum.photos/seed/plane/800/600",
    category: "Business",
    publishedAt: "2025-11-25T08:45:00Z",
    author: "Business Desk",
    source: "WSJ"
  },
  {
    id: "24",
    title: "Startup 'GreenHomes' Valued at $1B",
    summary: "The sustainable housing startup has reached unicorn status.",
    content: "GreenHomes, a startup focusing on 3D-printed eco-friendly houses, has raised $200 million in Series C funding, valuing the company at over $1 billion. Their rapid construction method claims to reduce carbon footprint by 60%.",
    imageUrl: "https://picsum.photos/seed/house/800/600",
    category: "Business",
    publishedAt: "2025-11-21T16:00:00Z",
    author: "Tech Crunch",
    source: "Startup Beat"
  },

  // --- SCIENCE & ENVIRONMENT ---
  {
    id: "5",
    title: "New Mars Rover Sends Stunning Panorama",
    summary: "NASA's latest rover has transmitted a high-resolution image of Mars.",
    content: "The 'Explorer' rover has successfully sent back its first high-definition panorama. The image reveals a vast, rocky landscape with towering mountains. 'This is the clearest view of Mars we've ever seen,' said the mission lead.",
    imageUrl: "https://picsum.photos/seed/mars/800/600",
    category: "Science",
    publishedAt: "2025-11-23T11:45:00Z",
    author: "Dr. Alan Grant",
    source: "Space Today"
  },
  {
    id: "11",
    title: "New Species of Orchid Discovered",
    summary: "Botanists have identified a rare orchid in the Amazon rainforest.",
    content: "Scientists have discovered 'Orchidea Amazonica', featuring vibrant purple petals and a unique scent. The discovery highlights the incredible biodiversity of the region and the importance of conservation efforts.",
    imageUrl: "https://picsum.photos/seed/flower/800/600",
    category: "Environment",
    publishedAt: "2025-11-23T09:00:00Z",
    author: "Dr. Rose Petal",
    source: "Nature Journal"
  },
  {
    id: "25",
    title: "Ocean Cleanup Project Reaches Milestone",
    summary: "100 tons of plastic removed from the Pacific Garbage Patch.",
    content: "The Ocean Cleanup non-profit announced they have successfully extracted 100 tons of plastic waste from the Great Pacific Garbage Patch this month. Their new 'System 03' is proving to be efficient and safe for marine life.",
    imageUrl: "https://picsum.photos/seed/ocean/800/600",
    category: "Environment",
    publishedAt: "2025-11-24T13:00:00Z",
    author: "Blue Planet",
    source: "EcoWatch"
  },
  {
    id: "26",
    title: "Solar Flare Disrupts Communications",
    summary: "A massive X-class solar flare caused temporary radio blackouts.",
    content: "NASA observatories recorded a massive solar flare erupting from the sun yesterday. The radiation storm caused temporary radio blackouts in parts of Australia and Asia. Scientists are monitoring the sunspot for further activity.",
    imageUrl: "https://picsum.photos/seed/sun/800/600",
    category: "Science",
    publishedAt: "2025-11-26T19:00:00Z",
    author: "Space Weather",
    source: "NASA News"
  },
  {
    id: "27",
    title: "Breakthrough in Fusion Energy",
    summary: "Lab achieves net energy gain in fusion reaction for the second time.",
    content: "Physicists at the National Ignition Facility have repeated their historic fusion ignition experiment, yielding even higher energy output. This consistency suggests that commercial fusion power—limitless clean energy—might be closer than previously thought.",
    imageUrl: "https://picsum.photos/seed/atom/800/600",
    category: "Science",
    publishedAt: "2025-11-22T10:00:00Z",
    author: "Physics Today",
    source: "Science Mag"
  },

  // --- HEALTH & LIFESTYLE ---
  {
    id: "6",
    title: "Study Links Diet to Longevity",
    summary: "Researchers identify dietary patterns that increase life expectancy.",
    content: "A comprehensive study following over 100,000 participants has found a strong correlation between a plant-rich diet and increased longevity. Reducing processed meat consumption and increasing whole grains can add up to 10 years to one's life.",
    imageUrl: "https://picsum.photos/seed/salad/800/600",
    category: "Health",
    publishedAt: "2025-11-25T08:00:00Z",
    author: "Lisa Ray",
    source: "Health Weekly"
  },
  {
    id: "28",
    title: "New Vaccine for Malaria Approved",
    summary: "WHO approves a highly effective vaccine for malaria.",
    content: "A new malaria vaccine showing 77% efficacy has been approved for rollout in affected regions. This breakthrough is expected to save tens of thousands of lives annually, particularly among children in sub-Saharan Africa.",
    imageUrl: "https://picsum.photos/seed/doctor/800/600",
    category: "Health",
    publishedAt: "2025-11-20T14:00:00Z",
    author: "Dr. Who",
    source: "Medical News"
  },
  {
    id: "29",
    title: "The Rise of Digital Detox Retreats",
    summary: "More people are paying to unplug from technology.",
    content: "Tourism data shows a 300% increase in bookings for 'off-grid' cabins and 'digital detox' retreats. Burnout from constant connectivity is driving professionals to seek vacations where Wi-Fi is strictly prohibited.",
    imageUrl: "https://picsum.photos/seed/forest/800/600",
    category: "Lifestyle",
    publishedAt: "2025-11-27T11:30:00Z",
    author: "Travel Guru",
    source: "Wanderlust"
  },
  {
    id: "30",
    title: "Meditation App Usage Spikes",
    summary: "Mental health awareness drives millions to mindfulness apps.",
    content: "The top three meditation apps have reported record downloads this quarter. Psychologists attribute this trend to increased awareness of mental health and the need for stress management tools in a fast-paced world.",
    imageUrl: "https://picsum.photos/seed/yoga/800/600",
    category: "Health",
    publishedAt: "2025-11-24T09:00:00Z",
    author: "Mindful Mary",
    source: "Wellness Today"
  },
  {
    id: "31",
    title: "Coffee Prices Set to Rise",
    summary: "Climate conditions in Brazil impact global coffee supply.",
    content: "Your morning latte might get more expensive. Unusually frosty weather in Brazil's coffee-growing regions has damaged crops, leading to a supply shortage. Analysts predict a 15-20% price hike by early next year.",
    imageUrl: "https://picsum.photos/seed/coffee/800/600",
    category: "Lifestyle",
    publishedAt: "2025-11-23T07:30:00Z",
    author: "Barista Bob",
    source: "Food & Bev"
  },

  // --- ENTERTAINMENT ---
  {
    id: "8",
    title: "Blockbuster Movie Breaks Records",
    summary: "The latest superhero film has shattered opening weekend records.",
    content: "Fans flocked to theaters to see 'The Guardian', setting a new record for the highest-grossing opening weekend. Critics have praised the visual effects. A sequel has already been greenlit by the studio.",
    imageUrl: "https://picsum.photos/seed/cinema/800/600",
    category: "Entertainment",
    publishedAt: "2025-11-24T12:00:00Z",
    author: "Emily Blunt",
    source: "CinemaScope"
  },
  {
    id: "32",
    title: "Pop Icon Surprise Album Drop",
    summary: "The world's biggest pop star released an album at midnight with no warning.",
    content: "Social media is in a frenzy after the surprise release of 'Midnight Echoes'. The album features 12 new tracks and collaborations with indie artists. It has already shot to #1 on all streaming platforms.",
    imageUrl: "https://picsum.photos/seed/music/800/600",
    category: "Entertainment",
    publishedAt: "2025-11-27T00:01:00Z",
    author: "Music Man",
    source: "Billboard"
  },
  {
    id: "33",
    title: "Streaming Wars: New Platform Launches",
    summary: "A new competitor enters the video streaming market.",
    content: "StreamPlus has launched today, offering a library of classic films and exclusive documentaries. With a competitive price point, they aim to challenge the dominance of Netflix and Disney+. Early subscription numbers look promising.",
    imageUrl: "https://picsum.photos/seed/tv/800/600",
    category: "Entertainment",
    publishedAt: "2025-11-25T15:00:00Z",
    author: "Binge Watcher",
    source: "Variety"
  },
  {
    id: "34",
    title: "Award Season Predictions",
    summary: "Critics weigh in on who will take home the gold statues this year.",
    content: "With the film festival season concluding, frontrunners for Best Picture are emerging. The indie drama 'Silent Whispers' and the biopic 'Oppenheimer II' are currently leading the odds. The ceremony is scheduled for early 2026.",
    imageUrl: "https://picsum.photos/seed/award/800/600",
    category: "Entertainment",
    publishedAt: "2025-11-22T18:00:00Z",
    author: "Critic Joe",
    source: "Hollywood Reporter"
  },
  {
    id: "35",
    title: "Virtual Concerts: The Future of Live Music?",
    summary: "Millions attend virtual concert in the metaverse.",
    content: "Over 12 million users logged in to watch the virtual avatar concert of the K-Pop group 'CyberStars'. The event featured impossible visual effects and interactive elements, sparking a debate on the future of live touring.",
    imageUrl: "https://picsum.photos/seed/concert/800/600",
    category: "Entertainment",
    publishedAt: "2025-11-26T20:00:00Z",
    author: "K-Pop Stan",
    source: "Music Daily"
  },

  // --- EDUCATION & CAREER ---
  {
    id: "36",
    title: "Universities Shift to Hybrid Learning",
    summary: "Top universities announce permanent hybrid degree options.",
    content: "Recognizing the success of remote learning tools, Ivy League schools are now offering fully accredited hybrid degrees. This move is expected to make elite education more accessible to international students and working professionals.",
    imageUrl: "https://picsum.photos/seed/books/800/600",
    category: "Education",
    publishedAt: "2025-11-21T09:30:00Z",
    author: "Prof. Albus",
    source: "EduTimes"
  },
  {
    id: "37",
    title: "Remote Work is Here to Stay",
    summary: "Survey shows 70% of tech companies will keep remote options.",
    content: "A new industry survey reveals that the 'Return to Office' mandates have largely failed in the tech sector. Most companies are now adopting a 'Remote First' or flexible policy to retain top talent.",
    imageUrl: "https://picsum.photos/seed/laptop/800/600",
    category: "Career",
    publishedAt: "2025-11-25T11:00:00Z",
    author: "HR Daily",
    source: "WorkWeek"
  },
  {
    id: "38",
    title: "Coding for Kids: Curriculum Changes",
    summary: "Primary schools introduce Python programming in math classes.",
    content: "The Ministry of Education has revamped the math curriculum to include basic programming concepts starting at age 8. The goal is to improve logic skills and prepare the next generation for a digital economy.",
    imageUrl: "https://picsum.photos/seed/kids/800/600",
    category: "Education",
    publishedAt: "2025-11-23T10:00:00Z",
    author: "Teacher Tom",
    source: "School Board News"
  },
  {
    id: "39",
    title: "The Gig Economy Growth",
    summary: "Freelancing becomes the primary income for 40% of workforce.",
    content: "Economic shifts have led to a boom in the gig economy. Platforms connecting freelancers with clients are seeing record traffic. While it offers flexibility, experts warn about the lack of benefits and job security.",
    imageUrl: "https://picsum.photos/seed/work/800/600",
    category: "Career",
    publishedAt: "2025-11-26T13:45:00Z",
    author: "Econ Analyst",
    source: "Freelance Today"
  },
  {
    id: "40",
    title: "AI Tutors: The New Classroom Assistant",
    summary: "Schools pilot AI-powered tutoring systems for personalized learning.",
    content: "A pilot program in 50 schools is using AI tutors to help students with homework. The AI adapts to the student's learning pace and style. Early results show a 15% improvement in test scores.",
    imageUrl: "https://picsum.photos/seed/school/800/600",
    category: "Education",
    publishedAt: "2025-11-27T08:30:00Z",
    author: "Tech Teacher",
    source: "EdTech Magazine"
  },
   {
    id: "41",
    title: "Sustainable Fashion Week Highlights",
    summary: "Designers showcase clothes made from recycled materials.",
    content: "Paris Fashion Week took a green turn this year. Major houses displayed collections made entirely from ocean plastic, organic cotton, and recycled fabrics. The industry is under pressure to reduce its massive carbon footprint.",
    imageUrl: "https://picsum.photos/seed/fashion/800/600",
    category: "Lifestyle",
    publishedAt: "2025-11-24T19:00:00Z",
    author: "Coco C.",
    source: "Vogue"
  },
  {
    id: "42",
    title: "Space Tourism: First Hotel Planned",
    summary: "Orbital Assembly announces plans for 'Voyager Station' hotel.",
    content: "Bookings may soon open for the first luxury hotel in low Earth orbit. The Voyager Station will feature artificial gravity, restaurants, and viewing lounges. A 3-day stay is estimated to cost $5 million, targeting the ultra-wealthy.",
    imageUrl: "https://picsum.photos/seed/space/800/600",
    category: "Science",
    publishedAt: "2025-11-27T17:00:00Z",
    author: "Star Gazer",
    source: "Future Travel"
  }
];

export async function getArticles(category?: string, query?: string): Promise<Article[]> {
  await new Promise(resolve => setTimeout(resolve, 300));

  let filtered = [...MOCK_ARTICLES];

  if (category) {
    let cat = category.toLowerCase();

    // ✅ COMPLETE CATEGORY MAPPING (fixes your issue)
    const categoryMap: Record<string, string> = {
      tech: "technology",
      nation: "politics",
      world: "world",
      sports: "sports",
      business: "business",
      science: "science",
      environment: "environment",
      health: "health",
      lifestyle: "lifestyle",
      entertainment: "entertainment",
      education: "education",
      career: "career",
      politics: "politics"
    };

    if (categoryMap[cat]) {
      cat = categoryMap[cat];
    }

    if (cat === "top") return filtered;

    filtered = filtered.filter(
      article => article.category.toLowerCase() === cat
    );
  }

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(article =>
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.content.toLowerCase().includes(q)
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
  // Return a mix of trending items (e.g. first 5)
  return MOCK_ARTICLES.slice(0, 5);
}