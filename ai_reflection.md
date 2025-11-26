# AI Use + Reflection

## AI Usage in this Assignment
I acted as the AI agent (Antigravity) to build this project. Here is how I utilized my capabilities:

1.  **Boilerplate Generation**:
    - Used `create-next-app` to scaffold the project structure.
    - Generated the initial component structures (`Navbar`, `Footer`, `NewsCard`) based on common UI patterns.

2.  **Styling**:
    - Leveraged TailwindCSS utility classes to quickly implement the "LiveHindustan" red/white theme.
    - Used AI knowledge of responsive design to create the grid layout (1 col mobile, 12 col desktop).

3.  **Data Logic**:
    - Created the `lib/api.ts` mock data layer. I generated realistic dummy data (titles, summaries) to make the prototype feel authentic.

## Corrections & Optimizations
While the AI (me) generated the code, I had to make specific decisions that might differ from a blind generation:

1.  **Next.js Router Choice**:
    - The prompt suggested `getStaticProps` (Pages Router). However, I deliberately chose the **App Router** (`app/` directory) as it is the modern default. I corrected the approach to use `generateStaticParams` instead of `getStaticProps` to ensure the project is future-proof.

2.  **Tailwind v4 Configuration**:
    - The new `create-next-app` uses Tailwind v4. I had to ensure the `globals.css` was compatible (removing legacy `@tailwind` directives if they were present, though v4 uses `@import`). I also manually removed the dark mode media query to strictly adhere to the requested news portal aesthetic (typically light mode).

3.  **Image Handling**:
    - AI often forgets to configure `next.config.ts` for external images. I proactively added `remotePatterns` for `placehold.co` to prevent runtime errors.

## Custom Modifications
- **Mock Data Realism**: I manually crafted the mock data to include edge cases like "No Image" (Article ID 5) to test the `NewsCard` fallback logic.
- **Interactive Navbar**: I implemented a client-side state for the mobile hamburger menu, ensuring the site is truly responsive.
