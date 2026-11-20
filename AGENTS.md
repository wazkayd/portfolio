# Portfolio Engineering Standards

## Product and audience

This repository builds a premium personal software engineering and product development portfolio. The site should communicate professional engineering capability, product thinking, and business value to recruiters, hiring managers, founders, business owners, agencies, and technical partners. Core positioning: “I build digital products that solve real business problems.” Do not invent project outcomes, customer names, or metrics.

## Approved stack

- Next.js App Router, React, and strict TypeScript.
- CSS Modules for component styles and CSS custom properties for shared tokens.
- Framer Motion for purposeful motion and Lucide React for icons.
- npm, GitHub, and Vercel.
- Tailwind CSS and other utility-first styling frameworks are prohibited.
- Prefer Server Components. Add client boundaries only for interaction or browser APIs.

## Structure and architecture

- `app/`: routes, layouts, metadata, and route error handling. Keep route-specific composition here.
- `components/`: reusable UI grouped by responsibility (`layout/`, `ui/`).
- `data/`: content data, independent of presentation.
- `lib/`: shared pure utilities.
- `hooks/`: reusable hooks that require client behavior.
- `styles/`: global styles, tokens, typography, and shared utilities.
- `types/`: shared domain types.
- `public/`: static assets.
- Keep components focused, typed, reusable where useful, and avoid abstractions without a concrete use.
- Keep project content and business-independent data separate from presentation. Architecture must support typed project data and future dynamic case study routes.

## Styling and components

- Use CSS Modules for component-level styling; global CSS is for resets, tokens, typography, and truly global behavior.
- Consume semantic CSS custom properties; do not scatter arbitrary colors, spacing, or shadows through modules.
- Components should expose small, typed props and semantic HTML. Avoid inline styles as the primary styling approach.
- Use native elements before custom abstractions. Buttons perform actions; links navigate.

## Accessibility and responsive behavior

- Use semantic landmarks, logical heading order, visible keyboard focus, descriptive labels, and accessible names for icon-only controls.
- Maintain readable contrast in both themes. Do not communicate state by color alone.
- Support keyboard operation and Escape/appropriate focus behavior for menus and dialogs.
- Build mobile-first layouts with comfortable touch targets; validate narrow, medium, and wide viewport behavior.
- Respect `prefers-reduced-motion`, and ensure content remains available without animation.

## Theme and motion

- Theme behavior must use semantic light/dark tokens, persist explicit user preference, honor system preference when no preference is stored, and initialize without hydration mismatch or a noticeable flash.
- Motion should be subtle, short, and purposeful. Centralize reusable variants/utilities; use Framer Motion only where it improves feedback or hierarchy.
- Disable or simplify nonessential motion for reduced-motion users.

## TypeScript and code quality

- Keep strict TypeScript enabled. Avoid `any`, unsafe casts, and ignored errors unless documented and justified.
- Use the `@/*` import alias for root-relative imports.
- Keep dependencies minimal and compatible with the existing lockfile. Do not add packages for functionality already available in the stack.
- Keep lint clean and remove dead code and unused styles.

## Verification commands

Run the relevant checks before committing and before opening a pull request:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm audit`
- For UI changes, run the app and inspect routes and responsive/theme behavior at narrow and wide viewports.

Report actual results. Do not claim a check passed unless it completed successfully.

## Git and delivery workflow

- Use milestone branches named `feat/M##-short-description` from the updated `main` branch.
- Keep commits focused and descriptive, using conventional prefixes such as `feat:`, `fix:`, and `chore:`.
- Do not rewrite shared history or discard user changes. Never merge to `main` without project owner review.
- Push verified work to its milestone branch and open a pull request into `main` with a concise summary and verification results.
- Leave final review and merge approval to the project owner.

## Milestone boundaries

- Implement only the active milestone's scope. Do not add homepage sections, project catalogues, or case study content before their planned milestone.
- Preserve existing architecture and functionality. Complete related work coherently; avoid fragmenting a milestone into unnecessary micro-commits.
- If a genuine blocker prevents completion, preserve the work and report the exact blocker and next action.
