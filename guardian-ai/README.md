# GuardianAI

**GuardianAI** is an AI-powered platform that automatically detects and flags unauthorized use of official sports media (images) across the internet. This repository houses the entire Next.js frontend ecosystem, explicitly designed as a high-fidelity "Dual-App" environment tailored for Hackathon demonstrations.

## ✨ Hackathon Demo Architecture
To provide an impressive pitch to the judges, this frontend operates as **two distinct applications** united under a single routing system:

1. **GuardianAI Command Center (Admin)**: The core product. A premium, glassmorphic dark-theme dashboard where admins monitor real-time AI computer vision alerts and upload official assets to be protected.
2. **Social Apps Simulator (Public)**: A light-theme, simulated ecosystem of 3 fake social networks (Chirp, Nexus, Prism). This acts as a sandbox to "upload" infringing images that magically trigger alerts back on the Command Center!

---

## 🛠️ Tech Stack & Styling
- **Framework**: Next.js 14+ (App Router)
- **Language**: JavaScript (`.js` / `.jsx`)
- **Styling**: Tailwind CSS V4 (Utility-first, no CSS modules)
- **UI Paradigm**: Glassmorphism, dynamic gradients, heavy contrast shifting (Dark vs Light themes), fully responsive grids.

---

## 🧭 Deep Dive: Features & UI Components

### 1. Dual-Toggle Login Engine (`/login`)
A highly stylized authentication gateway.
- Contains a massive segmented toggle switch: `[ Admin Dashboard ] | [ Social Apps Sim ]`.
- Employs a simulated asynchronous loader built with React State.
- Handles standard email/password extraction.
- **Node.js Ready**: Contains commented-out `fetch()` boilerplate to connect to your future Express/Node authentication endpoint.

### 2. GuardianAI Command Center (`/`)
The main dashboard loaded upon Administrator authentication. Designed specifically to look like a cutting-edge cyber-security suite.
- **Theme**: `#070a14` deep navy background, bright cyan/purple accent halos, layered `backdrop-blur-md` cards.
- **Top Stats (`TopStats.jsx`)**: Responsive 3-column metric display tracking total monitored assets, flagged active violations, and total AI system confidence.
- **Upload Panel (`UploadPanel.jsx`)**: The "Safe Zone" where administrators drag-and-drop original, official assets (restricted strictly to JPG, PNG, GIF) to generate the baseline `pHash` identity.
- **Real-Time Alerts Feed (`AlertsFeed.jsx`)**: A live-scrolling timeline that catches violations. Shows side-by-side matches (Original Asset vs Detected Infraction) alongside the system's "Visual Similarity Score".

### 3. The Social Simulator (`/simulator`)
The demo sandbox loaded upon "Simulator" authentication. Designed with a generic white/slate aesthetic to perfectly mimic standard web forums.
- **Platform OS Switcher**: Switch between the timeline feeds of 3 simulated networks: **Chirp** (Blue), **Nexus** (Indigo), and **Prism** (Pink). Switching the platform instantly repaints the simulator's accent colors!
- **Image Creation Node**: A mock "Compose Post" window containing an image uploader module.
- **Dynamic Timeline**: A vertical feed of generic test users. Designed with a gorgeous "Empty State" message indicating it's ready to fetch data.

---

## 🔌 Node.js Backend Integration Guide
The UI is fully mapped and statically typed, waiting for a Database connection. Integrating your backend takes less than 5 minutes:

**Dashboard Hookup:**
1. Open `src/app/page.js`.
2. Locate the massive `useEffect` block containing the asynchronous `fetchDashboardData()` API Hook.
3. Uncomment the block and point the `fetch` to your Node `GET /api/dashboard`. The UI will instantly repaint itself using your live data.

**Login Form Hookup:**
1. Open `src/app/login/page.js`.
2. Locate the `handleLogin` sequence.
3. Uncomment the `fetch("http://localhost:4000/api/auth/login")` block to validate tokens instead of using our `setTimeout` demo wrapper.

**Simulator Post Engine:**
1. Open `src/app/simulator/page.js`.
2. Grab the `handleUploadSubmit()` function and unleash the massive `FormData` API post logic. This intercepts the mock social media post and sends the user's JPG file directly to your Node server.

---

## 🚀 Getting Started Locally

1. Open your terminal in the `guardian-ai` directory.
2. Ensure you have the Next packages installed:
   ```bash
   npm install
   ```
3. Boot the development server:
   ```bash
   npm run dev
   ```
4. Access the platform at **[http://localhost:3000](http://localhost:3000)**.
