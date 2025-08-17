
# React + TypeScript + TailwindCSS + Storybook — Frontend Assignment

This repo contains two reusable UI components documented in Storybook:

- **InputField** — label, helper/error text, disabled/invalid/loading states, sizes (sm/md/lg), variants (filled/outlined/ghost), optional clear button & password toggle, dark mode support.
- **DataTable** — tabular display with column sorting, single/multiple row selection, loading and empty states.

## Quick Start

```bash
npm install
npm run dev         # App on http://localhost:5173
npm run storybook   # Storybook on http://localhost:6006
```

## Tech Stack
- React 18 + TypeScript
- Vite
- TailwindCSS (dark mode class)
- Storybook 8 (React + Vite)

## Project Structure
```
src/
  components/
    InputField/
      InputField.tsx
      InputField.stories.tsx
    DataTable/
      DataTable.tsx
      DataTable.stories.tsx
  App.tsx
  main.tsx
  index.css
.storybook/
  main.ts
  preview.ts
```

## Accessibility
- Inputs include `aria-invalid`, `aria-describedby` for helper text.
- Table headers are interactive buttons for sorting with ▲/▼ indicators.
- Selection controls support radio/checkbox based on selection mode.

## Theming / Responsiveness
- Uses Tailwind's `dark` class toggle (see the button in `App.tsx`).
- Components rely on responsive typography/spacings.

## Deployment
- **Chromatic:** `npx chromatic --project-token=<token>` (after `npm run build-storybook`).
- **Vercel:** import the repo and select `npm run build` with output `dist` (Vite) and/or deploy Storybook using `npm run build-storybook` and serve `storybook-static`.

## Submission Checklist
- [x] GitHub repository with clean structure
- [x] README with setup instructions & approach
- [x] Storybook with props, variants, and states
- [x] Components implement the requested features
