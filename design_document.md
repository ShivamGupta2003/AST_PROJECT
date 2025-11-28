# Design Document - News Site ACT

## 1. Wireframe & Layout Decisions

### Layout Structure

The app adopts a traditional news-portal layout focused on dense content presentation and clear readability.

- **Header (Navbar)**: A sticky top navigation bar with a mobile "Hamburger" menu. The red color (#b91c1c) reflects LiveHindustan's brand.
- **Hero Section**: A prominent featured story displayed at the top to capture user attention.
- **Main Content Area (Grid)**: A two-column grid on desktop for standard news items, enabling quick scanning of headlines.
- **Sidebar**: A right-side "Trending Now" area on desktop to highlight popular stories.
- **Footer**: Typical footer with navigation links and copyright.

### Responsiveness

- **Mobile**: Single-column stacking. The Hero spans full width, followed by the article list, then sidebar elements stacked below.
- **Desktop**: A 12-column grid layout: 8 columns dedicated to main content and 4 columns for the sidebar.

## 2. Data-Fetching Strategy

### Next.js App Router (Server Components)

The project uses the **Next.js App Router** instead of the older Pages Router (`getStaticProps`) to align with current Next.js patterns.

- **Home Page (`/`)**: Data is retrieved directly inside the Server Component. This mirrors the behavior of `getServerSideProps` if dynamic or `getStaticProps` when cached.

  - _Implementation_: `await getArticles()` within the component.
  - _Trade-off_: Simplifies data flow but requires mindful caching for performance. An artificial network delay is included to demonstrate async handling.

- **Article Page (`/news/[id]`)**: Built using **Static Site Generation (SSG)** with `generateStaticParams`.
  - _Why_: Articles are treated as static content; pre-rendering improves load speed and SEO.
  - _Implementation_: `generateStaticParams` gathers article IDs at build time.

### Mock Data

To avoid relying on an unstable public API, a mock data layer (`lib/api.ts`) was implemented with:

- **Artificial Latency**: A `delay()` helper simulates network timing.
- **Comprehensive Data**: Articles include HTML content, summaries, authors, and categories to validate the UI.

## 3. Code Structure

### Components

- **`Navbar`**: A Client Component (uses `useState` for the mobile menu).
- **`Hero`**: Renders the top story with a large image and gradient overlay.
- **`NewsCard`**: Reusable component for regular articles; gracefully handles missing images.
- **`Sidebar`**: Shows a ranked list of trending articles.

### Data Model

The `Article` interface defines the shape:

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

- **Image Optimization**: External images from `placehold.co` required updating `remotePatterns` in `next.config.ts`.
- **Hydration Mismatch**: The `Navbar` is a Client Component and is implemented to avoid initial render differences and layout shifts.
- **Tailwind v4**: The project uses Tailwind v4, which relies on CSS variables for theming; `globals.css` was adjusted to maintain consistent light-mode styling.
