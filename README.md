# Frontend Assignment – React Components

This project contains two reusable UI components built with **React**, **TypeScript**, **TailwindCSS**, and documented using **Storybook**.

## Components

### 1. InputField
A flexible and accessible input component with validation states.

**Features:**
- Text input with label, placeholder, helper text, error message
- States: `disabled`, `invalid`, `loading`
- Variants: `filled`, `outlined`, `ghost`
- Sizes: `small`, `medium`, `large`
- Optional: clear button, password toggle
- Optional: light & dark theme support
- Accessible with ARIA attributes

### 2. DataTable
A lightweight, generic data table with sorting and selection.

**Features:**
- Display tabular data
- Column sorting (asc/desc)
- Row selection (`single` or `multiple`)
- Loading state
- Empty state with custom message
- Accessible roles (`table`, `row`, `columnheader`, etc.)

---

##  Getting Started

### 1. Clone Repository
```sh
git clone https://github.com/umachittudi2004/-Uzence-Design-Studio-Assignment.git
cd frontend-assignment
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run Locally
Start the app:
```sh
npm run dev
```
Storybook:
```sh
npm run storybook
```

---

## 📖 Storybook Documentation

Each component includes detailed stories covering:
-  Props & API
-  States & variants
-  Interaction behavior
-  Accessibility (ARIA)
-  Dark mode theming
-  Best practices

### Local Storybook
```sh
npm run storybook
```

### Online Preview (Chromatic)
👉 [View Storybook on Chromatic](https://68a1cf11b7250d0332bd87e8-jrdxxtyiup.chromatic.com/)  

---

## 📤 Deployment

### Build App
```sh
npm run build
```

### Build Storybook
```sh
npm run build-storybook
```

---

## 🌐 Chromatic (Storybook Hosting)

I used **Chromatic** to deploy Storybook.

### Publish Storybook
```sh
npm run chromatic
```

This will:
- Build & publish your Storybook
- Provide a unique URL (like above)
- Run visual regression snapshots

> Already live at:  
> [https://68a1cf11b7250d0332bd87e8-jrdxxtyiup.chromatic.com/](https://68a1cf11b7250d0332bd87e8-jrdxxtyiup.chromatic.com/)

---

##  Project Structure

```
frontend-assignment/
├── .storybook/          # Storybook config
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── InputField/  # InputField component + stories
│   │   └── DataTable/   # DataTable component + stories
│   ├── App.tsx          # Demo page
│   └── index.tsx        # Entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

##  Approach

- Built with **scalability** in mind (each component in its own folder).
- Used **TypeScript** for type safety and reusability.
- Styled with **TailwindCSS** for consistency and theming.
- Storybook used for **documentation**, **testing states**, and **preview**.
- Followed **accessibility guidelines** (ARIA roles, error messages, keyboard navigation).
- Dark mode supported via Tailwind’s `dark` class.
