# Design Document - News Site ACT

## 1. Wireframe & Layout Decisions

### Layout Structure
The application follows a classic news portal layout, optimized for content density and readability.

- **Header (Navbar)**: Sticky top navigation with a "Hamburger" menu on mobile. Red background (#b91c1c) mimics the branding of LiveHindustan.
- **Hero Section**: A large, prominent featured article at the top. This grabs user attention immediately.
- **Main Content Area (Grid)**: A 2-column grid (on desktop) for standard news articles. This allows scanning multiple headlines efficiently.
- **Sidebar**: A "Trending Now" section on the right (desktop). This drives engagement to popular stories.
- **Footer**: Standard footer with links and copyright.

### Responsiveness
- **Mobile**: Single column layout. The Hero takes full width, followed by the news list, then the sidebar content (stacked).
- **Desktop**: 12-column grid system. 8 columns for main content, 4 columns for the sidebar.

## 2. Data-Fetching Strategy

### Next.js App Router (Server Components)
I chose the **Next.js App Router** over the older Pages Router (`getStaticProps`) because it is the current standard for Next.js applications.

- **Home Page (`/`)**: Fetches data directly in the Server Component. This is equivalent to `getServerSideProps` if dynamic, or `getStaticProps` if cached.
    - *Implementation*: `await getArticles()` call in the component.
    - *Trade-off*: Simple data flow, but requires careful caching configuration for performance. I simulated network delay to demonstrate async handling.

- **Article Page (`/news/[id]`)**: Uses **Static Site Generation (SSG)** via `generateStaticParams`.
    - *Why*: News articles are static content. Pre-rendering them ensures instant page loads and better SEO.
    - *Implementation*: `generateStaticParams` fetches all article IDs at build time.

### Mock Data
Instead of a flaky public API, I created a robust mock data layer (`lib/api.ts`) with:
- **Artificial Latency**: `delay()` function to simulate real-world network conditions.
- **Rich Data**: Articles have HTML content, summaries, authors, and categories to test the UI thoroughly.

## 3. Code Structure

### Components
- **`Navbar`**: Client Component (uses `useState` for mobile menu).
- **`Hero`**: Displays the top story with a large image and gradient overlay.
- **`NewsCard`**: Reusable component for standard articles. Handles missing images gracefully.
- **`Sidebar`**: Displays a ranked list of trending articles.

### Data Model
The `Article` interface defines the structure:
```typescript
interface Article {
  id: string;
  title: string;
  summary: string;
  content: string; // HTML support
  imageUrl?: string; // Optional
  category: string;
  publishedAt: string;
  author: string;
}
```

## 4. Challenges & Solutions
- **Image Optimization**: External images from `placehold.co` required configuring `remotePatterns` in `next.config.ts`.
- **Hydration Mismatch**: Ensured that the `Navbar` (Client Component) handles the initial render correctly to avoid layout shifts.
- **Tailwind v4**: The project uses the latest Tailwind v4, which uses CSS variables for theming. I adjusted the `globals.css` to ensure consistent light-mode styling.
