# FitTrack — Workout Library & Training Planner

A modern, dark-themed fitness web application designed to help users explore workouts, view exercise details, organize daily training plans, and save their favorite workouts in one place.

## 📸 Project Overview

FitTrack provides a clean and responsive interface for browsing a workout library and managing personal training plans.

The application includes multiple pages and sections to make workout discovery and planning simple and convenient.

## ✨ Features

### 1. Home Page
- Modern dark-themed landing page.
- Hero section introducing the training experience.
- Workout library displaying workout cards in a grid layout.
- Workout previews with images, titles, and relevant information.
- Navigation to individual workout details.

### 2. Workout Details Page
- Displays detailed information about a selected workout.
- Workout image, title, and description.
- Additional workout information and statistics.
- Option to add a workout to today's training plan.
- Option to save a workout for later.

### 3. My Plan — Empty State
- Displays an overview of the user's training plan.
- Shows plan statistics, such as the number of workouts and related metrics.
- Provides an empty state when no workouts have been added.
- Encourages users to explore the library and build their plan.

### 4. Today's Plan
- Displays workouts added to the daily training plan.
- Allows users to review their selected workouts.
- Provides controls for managing workouts in the plan.
- Keeps daily training selections organized in one place.

### 5. Saved Workouts
- Displays workouts saved by the user.
- Makes it easy to revisit favorite workouts.
- Separates saved workouts from the daily training plan.
- Supports managing saved workout selections.

## 🛠️ Technologies Used

- **Next.js** — Application framework and page routing.
- **React.js** — Component-based user interface.
- **TypeScript** — Type safety and maintainable code.
- **Tailwind CSS** — Styling and responsive layouts.
- **REST API** — Retrieving workout and library data.
- **React Hooks** — Managing interactive UI state.

## 📂 Main Application Sections

```text
FitTrack/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Library/
│   │   │   └── LibraryDetails/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── library/
│   │   ├── my-plan/
│   │   └── saved/
│   └── types/
├── public/
├── package.json
└── README.md
```

*Note: This is a suggested project structure; adjust the folder names to match your actual codebase.*

## 🚀 Getting Started

### Prerequisites

- Node.js installed.
- npm, yarn, pnpm, or bun.
- A code editor such as Visual Studio Code.

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd fittrack
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Project Goals

- Build a user-friendly workout discovery experience.
- Practice reusable React components and TypeScript interfaces.
- Implement dynamic routing and workout detail pages with Next.js.
- Manage daily plans and saved workouts using React state.
- Develop a consistent, responsive dark-themed UI.
- Improve practical frontend development skills through a real-world project.

## 🔮 Future Improvements

- User authentication and personal profiles.
- Persistent storage for saved workouts and daily plans.
- Workout completion tracking.
- Weekly and monthly training statistics.
- Search, filtering, and sorting functionality.
- Improved mobile and tablet responsiveness.

## 👨‍💻 Author

**Rahat**

Aspiring Full Stack Engineer

---

*Built with Next.js, React, TypeScript, and Tailwind CSS.*
