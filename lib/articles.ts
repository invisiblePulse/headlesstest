import type { Article } from "./types"

// Sample article data
const articles: Article[] = [
  {
    id: "1",
    title: "Global Leaders Gather for Climate Summit to Address Rising Temperatures",
    slug: "global-leaders-climate-summit",
    excerpt: "World leaders meet in Geneva to discuss urgent climate action as global temperatures continue to rise.",
    content: [
      "World leaders from over 190 countries gathered in Geneva this week for an emergency climate summit aimed at addressing the alarming rise in global temperatures.",
      "The summit, organized by the United Nations, comes after recent data showed that the past decade was the hottest on record, with average global temperatures rising by 1.5 degrees Celsius above pre-industrial levels.",
      '"We are at a critical juncture in our fight against climate change," said UN Secretary-General in his opening address. "The decisions we make today will determine the future of our planet and the survival of countless species, including our own."',
      "The summit aims to establish more ambitious targets for reducing greenhouse gas emissions, with a particular focus on major polluters like China, the United States, and India.",
      "Environmental activists have set up demonstrations outside the venue, calling for immediate and drastic action rather than incremental changes.",
      '"We\'ve had enough talk," said climate activist Greta Thunberg, who led a march of thousands through Geneva. "What we need now is action."',
      "The summit is expected to conclude with a new agreement that will replace the Paris Climate Accord, with more stringent requirements and enforcement mechanisms.",
    ],
    author: "Jane Smith",
    date: "2023-05-15",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["politics", "health"],
    featured: true,
    trending: true,
  },
  {
    id: "2",
    title: "Tech Giant Unveils Revolutionary AI Assistant That Can Read Human Emotions",
    slug: "tech-giant-ai-assistant-emotions",
    excerpt:
      "A breakthrough in artificial intelligence allows new virtual assistant to detect and respond to human emotions.",
    content: [
      "Silicon Valley tech giant TechCorp unveiled its latest artificial intelligence assistant yesterday, claiming it can accurately detect and respond to human emotions.",
      "The AI, named 'Empathia,' uses advanced facial recognition technology and voice analysis to determine a user's emotional state and adjust its responses accordingly.",
      '"This represents a quantum leap in human-computer interaction," said TechCorp CEO Mark Johnson during the product launch. "Empathia doesn\'t just understand what you\'re saying, but how you\'re feeling when you say it."',
      "Privacy advocates have raised concerns about the technology, questioning how the emotional data will be stored and used.",
      '"We\'re talking about an unprecedented level of personal data collection," said digital rights activist Sarah Chen. "Your device will now know when you\'re sad, angry, or vulnerable—that\'s valuable information for advertisers."',
      "TechCorp has assured users that all emotional data will be processed locally on devices and not stored on company servers.",
      "The technology is expected to be integrated into TechCorp's line of smartphones and smart home devices by the end of the year.",
    ],
    author: "John Doe",
    date: "2023-05-14",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["business", "entertainment"],
    featured: true,
  },
  {
    id: "3",
    title: "Revolutionary Cancer Treatment Shows 90% Success Rate in Clinical Trials",
    slug: "cancer-treatment-success-rate",
    excerpt:
      "A new immunotherapy approach has shown remarkable results in treating previously incurable forms of cancer.",
    content: [
      "A groundbreaking cancer treatment developed by researchers at the National Medical Research Center has shown a 90% success rate in treating previously incurable forms of cancer.",
      "The treatment, a novel form of immunotherapy, works by reprogramming a patient's own immune cells to target and destroy cancer cells with unprecedented precision.",
      '"What makes this approach revolutionary is its ability to adapt to the cancer\'s mutations," explained Dr. Elena Rodriguez, lead researcher on the project. "Traditional treatments often fail because cancer evolves to resist them, but our therapy evolves alongside the cancer."',
      "The clinical trials involved 200 patients with advanced stages of lung, breast, and pancreatic cancer who had not responded to conventional treatments.",
      "After six months of treatment, 180 patients showed complete remission, with no detectable cancer cells in their bodies.",
      '"I had been given three months to live," said trial participant Robert Chen. "That was two years ago. Today, I\'m cancer-free and planning my daughter\'s wedding."',
      "The treatment is now being fast-tracked by health authorities and could be widely available within two years.",
    ],
    author: "Sarah Johnson",
    date: "2023-05-13",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["health", "politics"],
    featured: true,
  },
  {
    id: "4",
    title: "Major Sports League Announces Expansion to International Markets",
    slug: "sports-league-international-expansion",
    excerpt: "The National Basketball Association plans to establish new teams in Europe and Asia by 2025.",
    content: [
      "The National Basketball Association (NBA) announced plans to expand to international markets, with new teams to be established in Europe and Asia by 2025.",
      "The expansion will see teams based in London, Berlin, Tokyo, and Shanghai, marking the first time a major American sports league has established permanent teams outside North America.",
      '"Basketball is a global sport, and this expansion reflects our commitment to growing the game worldwide," said NBA Commissioner Adam Silver at a press conference in New York.',
      "The international teams will play in a newly created division and will travel to the United States for extended road trips, while American teams will do the same when playing in Europe and Asia.",
      "The announcement has been met with enthusiasm from international basketball fans and players.",
      '"This is a dream come true for European basketball players," said German national team captain Franz Wagner. "Now we can play at the highest level without leaving our home countries."',
      "The expansion is expected to increase the NBA's global revenue by an estimated $5 billion annually.",
    ],
    author: "Michael Brown",
    date: "2023-05-12",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["sports", "business"],
    trending: true,
  },
  {
    id: "5",
    title: "Economists Warn of Potential Recession as Inflation Continues to Rise",
    slug: "economists-warn-recession-inflation",
    excerpt: "Leading economists predict economic downturn if central banks continue aggressive interest rate hikes.",
    content: [
      "Leading economists are warning of a potential global recession as inflation rates continue to climb despite aggressive interest rate hikes by central banks.",
      "The Consumer Price Index rose by 7.9% in the last quarter, the highest increase in four decades, putting pressure on central banks to further raise interest rates.",
      '"We\'re walking a tightrope," said economist Dr. Paul Krugman. "Raise rates too much and we trigger a recession; don\'t raise them enough and inflation spirals out of control."',
      "The warning comes as several key economic indicators, including manufacturing output and consumer spending, have begun to show signs of slowing down.",
      "Small businesses are particularly concerned about the economic outlook.",
      '"We\'re already seeing customers cut back on spending," said Sarah Chen, owner of a retail chain in the Midwest. "If things get worse, we\'ll have to start laying off staff."',
      "Governments are considering additional fiscal measures to soften the impact of a potential downturn, including tax relief for lower-income households and subsidies for essential goods.",
    ],
    author: "Robert Wilson",
    date: "2023-05-11",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["business", "politics"],
  },
  {
    id: "6",
    title: "Archaeologists Discover Ancient City Hidden Beneath Amazon Rainforest",
    slug: "archaeologists-ancient-city-amazon",
    excerpt: "Advanced laser technology reveals massive urban settlement dating back 2,000 years.",
    content: [
      "Archaeologists have discovered the remains of a massive ancient city hidden beneath the Amazon rainforest, challenging long-held beliefs about pre-Columbian civilization in South America.",
      "The discovery, made using LiDAR (Light Detection and Ranging) technology, reveals an urban settlement spanning over 80 square miles that was home to an estimated 100,000 people approximately 2,000 years ago.",
      '"This completely rewrites our understanding of Amazonian history," said Dr. Maria Gonzalez, lead archaeologist on the project. "We\'re looking at a civilization as complex and advanced as the Maya or Inca, but one that has remained hidden until now."',
      "The city features an intricate network of roads, canals, plazas, and pyramids, suggesting a highly organized society with advanced engineering capabilities.",
      "Artifacts recovered from initial excavations include ceramics, stone tools, and gold ornaments with designs unlike any previously documented in the region.",
      '"The most remarkable aspect is how they integrated their urban development with the rainforest," noted Dr. Gonzalez. "Rather than clearing the forest entirely, they built around and within it, creating a sustainable city that worked with nature rather than against it."',
      "The research team plans to conduct further excavations over the next five years, with special care being taken to preserve both the archaeological site and the surrounding ecosystem.",
    ],
    author: "Emily Chen",
    date: "2023-05-10",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["entertainment", "blog"],
  },
  {
    id: "7",
    title: "New Study Links Social Media Use to Improved Mental Health in Surprising Finding",
    slug: "study-social-media-mental-health",
    excerpt:
      "Research challenges conventional wisdom, finding that certain types of social media engagement can reduce feelings of isolation.",
    content: [
      "A new study published in the Journal of Psychological Research has challenged the conventional wisdom about social media's impact on mental health, finding that certain types of engagement can actually improve psychological well-being.",
      "The research, conducted over a three-year period with 10,000 participants across different age groups, found that people who used social media primarily to maintain meaningful connections with friends and family showed reduced rates of depression and anxiety.",
      '"What matters isn\'t how much time you spend on social media, but how you use that time," explained Dr. Jonathan Lee, the study\'s lead author. "Active engagement, like having meaningful conversations and sharing authentic experiences, can reduce feelings of isolation and increase a sense of belonging."',
      "The study distinguished between different types of social media use, categorizing them as either 'active' or 'passive.'",
      "Passive use, such as endless scrolling and comparing oneself to others, was still associated with negative mental health outcomes.",
      '"The findings suggest we need a more nuanced approach to social media guidelines," said Dr. Lee. "Rather than recommending people reduce their overall usage, we should be teaching more mindful and intentional ways of engaging online."',
      "The research has implications for how mental health professionals approach social media use in their treatment recommendations, as well as how platforms might be designed to encourage healthier forms of engagement.",
    ],
    author: "David Kim",
    date: "2023-05-09",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["health", "blog"],
  },
  {
    id: "8",
    title: "Renewable Energy Surpasses Fossil Fuels in Global Electricity Production for First Time",
    slug: "renewable-energy-surpasses-fossil-fuels",
    excerpt:
      "Historic milestone reached as solar, wind, and hydroelectric power generate more electricity than coal, oil, and gas combined.",
    content: [
      "In a historic milestone for the global fight against climate change, renewable energy sources have surpassed fossil fuels in worldwide electricity production for the first time.",
      "According to data released by the International Energy Agency (IEA), solar, wind, hydroelectric, and other renewable sources generated 51% of the world's electricity last month, compared to 49% from coal, oil, and natural gas.",
      '"This is a watershed moment in the global energy transition," said IEA Executive Director Fatih Birol. "Just ten years ago, renewables accounted for only 20% of global electricity. The pace of change has been remarkable."',
      "The shift has been driven by massive investments in renewable infrastructure, particularly in China, India, and the European Union, as well as rapidly declining costs of solar panels and wind turbines.",
      "The milestone comes as many countries have accelerated their clean energy transitions in response to both climate concerns and energy security issues highlighted by recent geopolitical conflicts.",
      '"What\'s particularly encouraging is that this transition is now being driven as much by economics as by environmental concerns," noted energy analyst Maria Chen. "In most parts of the world, it\'s simply cheaper to build new renewable capacity than to operate existing fossil fuel plants."',
      "Despite the achievement, experts caution that electricity represents only about 25% of total energy consumption, with transportation, industry, and heating still heavily reliant on fossil fuels.",
    ],
    author: "Thomas Green",
    date: "2023-05-08",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["politics", "business"],
  },
  {
    id: "9",
    title: "Major Film Studio Announces All Future Productions Will Be Carbon-Neutral",
    slug: "film-studio-carbon-neutral",
    excerpt:
      "Hollywood giant commits to sustainable practices across all aspects of film production, setting new industry standard.",
    content: [
      "Universal Pictures announced today that all its future film and television productions will be completely carbon-neutral, setting a new environmental standard for the entertainment industry.",
      "The studio has committed to implementing sustainable practices across all aspects of production, from using renewable energy on sets to minimizing air travel and eliminating single-use plastics.",
      '"The film industry has a significant carbon footprint, and we recognize our responsibility to be part of the solution to the climate crisis," said Universal Pictures CEO in a press statement. "This isn\'t just about offsetting our emissions—it\'s about fundamentally changing how we make movies."',
      "The initiative includes the creation of a $100 million green production fund to develop new technologies and practices that can reduce the environmental impact of filmmaking.",
      "Universal will also require all third-party production companies and vendors to adhere to its new sustainability standards when working on Universal projects.",
      "Environmental groups have welcomed the announcement, though some have expressed skepticism about the reliance on carbon offsets to achieve neutrality.",
      '"This is definitely a step in the right direction," said Greenpeace spokesperson Alex Rivera. "But we\'ll be watching closely to ensure this is about real emissions reductions and not just creative accounting."',
    ],
    author: "Jessica Lee",
    date: "2023-05-07",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["entertainment", "business"],
  },
  {
    id: "10",
    title: "Professional Athletes Increasingly Turning to Plant-Based Diets for Performance Edge",
    slug: "athletes-plant-based-diets",
    excerpt:
      "Top performers across multiple sports report improved recovery times and endurance after switching to vegan nutrition.",
    content: [
      "A growing number of elite professional athletes are adopting plant-based diets, claiming significant improvements in performance, recovery time, and career longevity.",
      "The trend, which spans across football, basketball, tennis, and other high-intensity sports, challenges the long-held belief that animal protein is essential for peak athletic performance.",
      '"I recovered from a career-threatening injury in half the expected time after switching to a plant-based diet," said NFL quarterback Aaron Rodgers. "My inflammation levels dropped dramatically, and my energy levels are more consistent than ever."',
      "Tennis star Venus Williams, who adopted a plant-based diet after being diagnosed with an autoimmune disorder, credits the change with allowing her to continue competing at the highest levels well into her 40s.",
      "Sports nutritionists point to the anti-inflammatory properties of plant foods and their rich micronutrient profiles as key factors in the performance benefits.",
      '"The science is increasingly clear that plant-based diets offer advantages for both recovery and endurance," explained Dr. James Thompson, sports nutrition specialist at the Athletic Performance Institute. "The old paradigm of meat as essential for strength is being thoroughly debunked."',
      "Major sports franchises, including the Los Angeles Lakers and Manchester United, have begun incorporating plant-based options into their team meal programs in response to player demand.",
    ],
    author: "Marcus Johnson",
    date: "2023-05-06",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["sports", "health"],
    trending: true,
  },
  {
    id: "11",
    title: "Virtual Reality Therapy Shows Promising Results for PTSD Treatment",
    slug: "virtual-reality-therapy-ptsd",
    excerpt:
      "New treatment approach using VR technology helps veterans process traumatic memories in controlled environment.",
    content: [
      "A new form of therapy using virtual reality technology is showing remarkable success in treating post-traumatic stress disorder (PTSD) among military veterans.",
      "The treatment, developed by researchers at the National Center for PTSD, uses immersive VR environments to help patients confront and process traumatic memories in a controlled, therapeutic setting.",
      '"Traditional exposure therapy asks patients to imagine traumatic scenarios, which can be difficult for many people," explained Dr. Sarah Martinez, lead researcher on the project. "VR allows us to create realistic environments that trigger the traumatic memories while keeping the patient grounded in a safe space."',
      "In a clinical trial involving 200 veterans with combat-related PTSD, 83% of those who received the VR therapy showed significant reduction in symptoms after just 12 sessions, compared to 27% in a control group receiving standard therapy.",
      "Army veteran Michael Chen, who participated in the trial, described the treatment as transformative. \"For years, I couldn't even talk about what happened in Afghanistan. The VR therapy let me revisit those moments with a therapist right there guiding me through it. I still have the memories, but they don't control me anymore.\"",
      "The therapy involves gradually increasing the intensity of the virtual scenarios as patients develop coping mechanisms, with therapists monitoring physiological responses in real-time.",
      "The Department of Veterans Affairs plans to roll out the treatment at 50 VA medical centers across the country by the end of the year.",
    ],
    author: "Lisa Wong",
    date: "2023-05-05",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["health", "blog"],
  },
  {
    id: "12",
    title: "Historic Peace Agreement Ends Decades-Long Regional Conflict",
    slug: "peace-agreement-regional-conflict",
    excerpt:
      "After years of negotiations, neighboring countries sign comprehensive treaty addressing territorial disputes and resource sharing.",
    content: [
      "A historic peace agreement signed yesterday has formally ended a decades-long conflict between neighboring countries that has claimed over 50,000 lives and displaced millions.",
      "The comprehensive treaty, negotiated over three years with international mediation, addresses long-standing territorial disputes, establishes resource-sharing mechanisms for contested regions, and creates a framework for refugee repatriation.",
      '"This agreement represents not just the end of a conflict, but the beginning of a new era of cooperation and shared prosperity," said United Nations Secretary-General António Guterres, who witnessed the signing ceremony.',
      "The breakthrough came after both countries elected new leadership last year with mandates to prioritize peace and economic development over historical grievances.",
      '"Our people have suffered too long from a conflict inherited from previous generations," said President Aliyev during the signing ceremony. "Today, we choose a different path for our children."',
      "The agreement includes provisions for a joint development zone in resource-rich contested areas, with revenues to be shared equally between both countries.",
      "International observers will monitor the implementation of the treaty, with a phased withdrawal of troops from border regions scheduled to begin next month.",
    ],
    author: "Ahmed Hassan",
    date: "2023-05-04",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["politics", "blog"],
  },
  {
    id: "13",
    title: "New Educational App Uses Augmented Reality to Make Learning Interactive",
    slug: "educational-app-augmented-reality",
    excerpt:
      "Innovative platform transforms traditional textbooks into 3D interactive experiences, boosting student engagement and comprehension.",
    content: [
      "A groundbreaking educational app launched this week is using augmented reality (AR) technology to transform traditional learning materials into interactive 3D experiences.",
      "The app, called LearnAlive, allows students to point their devices at standard textbook pages and watch as diagrams, historical events, and scientific concepts come to life through animated AR overlays.",
      '"We\'re bridging the gap between traditional educational materials and the digital world today\'s students inhabit," said Dr. Maya Patel, educational technologist and co-founder of LearnAlive. "When a student can manipulate a 3D model of a DNA strand or watch the Battle of Gettysburg unfold on their desk, abstract concepts become tangible."',
      "Early trials in 50 schools across the country have shown promising results, with teachers reporting significant increases in student engagement and information retention.",
      '"My students used to dread our cell biology unit, but now they can\'t wait for it," said high school science teacher James Wilson. "Being able to \'pull apart\' a cell and examine its components in 3D space has made a world of difference in their understanding."',
      "The app currently supports materials for K-12 science, history, and mathematics, with plans to expand to more subjects and college-level content next year.",
      "LearnAlive is being offered free to public schools in low-income districts, with a subscription model for other educational institutions.",
    ],
    author: "Priya Sharma",
    date: "2023-05-03",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["entertainment", "blog"],
  },
  {
    id: "14",
    title: "Underdog Team Makes Cinderella Run to Championship Final",
    slug: "underdog-team-championship-final",
    excerpt:
      "Small-market team with lowest payroll in the league defies odds to reach first championship in franchise history.",
    content: [
      "In what sports analysts are calling one of the greatest Cinderella stories in recent memory, the Oklahoma City Thunder have defied all expectations to reach the NBA Finals for the first time in franchise history.",
      "The Thunder, who entered the season with the lowest payroll in the league and were widely predicted to finish last in their conference, completed their improbable run by defeating the top-seeded Los Angeles Lakers in a thrilling seven-game series.",
      '"Nobody believed in us except the guys in this locker room," said Thunder point guard Shai Gilgeous-Alexander, who scored 41 points in the decisive Game 7. "We\'ve been proving people wrong all year, and we\'re not done yet."',
      "The team's success has been attributed to their exceptional team chemistry, innovative coaching strategies, and the breakout performances of several young players who were overlooked in the draft.",
      "The Thunder's playoff run has galvanized their small-market fanbase, with tickets for home games selling out in minutes and viewing parties being organized in parks and arenas throughout Oklahoma.",
      '"This team represents everything we value in Oklahoma—hard work, perseverance, and never giving up no matter what the odds," said Oklahoma City Mayor David Holt. "The entire state is behind them."',
      "The Thunder will face the Boston Celtics in the Finals, beginning next Tuesday.",
    ],
    author: "Jason Williams",
    date: "2023-05-02",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["sports", "entertainment"],
    trending: true,
  },
  {
    id: "15",
    title: "Scientists Develop Biodegradable Alternative to Plastic from Algae",
    slug: "biodegradable-plastic-alternative-algae",
    excerpt:
      "New material decomposes completely in seawater within weeks, offering potential solution to ocean plastic pollution.",
    content: [
      "Scientists at the Marine Biological Institute have developed a biodegradable alternative to plastic made from algae that completely decomposes in seawater within six weeks.",
      "The material, called AlgiPlast, has similar properties to conventional plastics in terms of durability and versatility, but breaks down into non-toxic compounds when exposed to marine environments.",
      '"This could be a game-changer in our fight against ocean plastic pollution," said Dr. Keiko Tanaka, lead researcher on the project. "AlgiPlast can be used for everything from food packaging to shopping bags, but unlike conventional plastics, it actually becomes food for marine organisms rather than killing them."',
      "The production process also has environmental benefits, as the algae used to create the material absorbs carbon dioxide as it grows.",
      "Several major consumer goods companies have already expressed interest in transitioning their packaging to AlgiPlast, with pilot programs expected to launch later this year.",
      '"The challenge now is scaling up production to meet potential demand," explained Dr. Tanaka. "We\'re working on optimizing the cultivation of the specific algae species needed and streamlining the extraction process."',
      "If widely adopted, researchers estimate that AlgiPlast could replace up to 30% of conventional single-use plastics within five years.",
    ],
    author: "Richard Chen",
    date: "2023-05-01",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["health", "business"],
  },
  {
    id: "16",
    title: "Remote Work Trend Leads to Revival of Small Towns as Urban Professionals Relocate",
    slug: "remote-work-small-towns-revival",
    excerpt:
      "Rural communities experiencing economic renaissance as city dwellers seek affordable housing and better quality of life.",
    content: [
      "Small towns across the country are experiencing an unexpected renaissance as remote work policies allow urban professionals to relocate from expensive cities to more affordable rural communities.",
      "The trend, accelerated by the pandemic but continuing even as offices reopen, is bringing new economic life to areas that had been struggling with population decline and business closures for decades.",
      '"Our downtown had five empty storefronts in 2019," said Mayor Susan Williams of Riverdale, a small town in Colorado. "Today, they\'re all filled with new businesses, from coffee shops to co-working spaces, and our housing market is booming."',
      "The influx of remote workers, many with higher incomes than the local average, is creating both opportunities and challenges for these communities.",
      "While local businesses and tax bases are growing, some long-time residents express concern about rising housing costs and changing community dynamics.",
      '"We welcome the growth, but we\'re working to ensure that development happens in a way that preserves what makes our town special," explained Williams. "That means prioritizing affordable housing and maintaining our historic downtown rather than allowing suburban-style development."',
      "Sociologists note that this reverse migration represents a significant shift in American demographic patterns that have favored urbanization for over a century.",
    ],
    author: "Jennifer Adams",
    date: "2023-04-30",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["business", "blog"],
  },
]

// Get all articles
export function getArticles() {
  return articles
}

// Get article by slug
export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug)
}

// Get articles by category
export function getArticlesByCategory(category: string) {
  return articles.filter((article) => article.categories.includes(category))
}

// Get featured articles
export function getFeaturedArticles() {
  return articles.filter((article) => article.featured)
}

// Get trending articles
export function getTrendingArticles() {
  return articles.filter((article) => article.trending).slice(0, 5)
}

// Get latest articles
export function getLatestArticles() {
  return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3)
}

// Get related articles
export function getRelatedArticles(articleId: string, category: string) {
  return articles.filter((article) => article.id !== articleId && article.categories.includes(category)).slice(0, 4)
}
