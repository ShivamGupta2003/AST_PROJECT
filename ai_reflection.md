# AI Use + Reflection

## AI Usage in this Assignment

AI was used to assist in building this project. The main contributions were:

1. **Boilerplate Generation**

   - Generated page/view scaffolding.
   - Produced card background styling following common UI patterns.

2. **Styling**

   - Applied Tailwind CSS utility classes to implement the LiveHindustan red/white theme.
   - Used AI guidance for responsive layout (single-column mobile, 12-column desktop).

3. **Data Logic**
   - Created realistic mock content (titles, summaries) to make the prototype feel authentic.

## Corrections & Optimizations

Although AI produced much of the code, manual adjustments were made:

1. **Next.js Router Choice**

   - The original prompt referenced `getStaticProps` (Pages Router). The project uses the App Router (`app/`) and was adapted to `generateStaticParams` for SSG.

2. **Tailwind v4 Configuration**

   - Ensured `globals.css` is compatible with Tailwind v4 (removed legacy directives where needed) and disabled dark-mode media queries to keep a consistent light presentation.

3. **Image Handling**
   - Added `remotePatterns` in `next.config.ts` for `placehold.co` to avoid external image runtime issues.

## Custom Modifications

- **Mock Data Realism**: Manually added edge cases (e.g., an article with no image) to validate fallback behavior.
- **Interactive Navbar**: Implemented client-side state for the mobile hamburger menu to ensure proper responsiveness.
