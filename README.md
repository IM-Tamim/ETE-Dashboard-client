# ETE Department Dashboard — Frontend

> React + Vite dashboard for the Electronics & Telecommunication Engineering Department. Visualizes student attendance, marks, and academic performance across all series.

---

## Links

| | |
|---|---|
| 🌐 Client Live | [ete-dashboard-client.vercel.app](https://ete-dashboard-client.vercel.app/) |
| 📦 Client Repository | [github.com/IM-Tamim/ETE-Dashboard-client](https://github.com/IM-Tamim/ETE-Dashboard-client) |
| 🚀 Server Live | [ete-dashboard-server.onrender.com/api/health](https://ete-dashboard-server.onrender.com/api/health) |
| 📦 Server Repository | [github.com/IM-Tamim/ETE-Dashboard-server](https://github.com/IM-Tamim/ETE-Dashboard-server) |

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 7 | Build tool & dev server |
| React Router DOM | Client-side routing |
| Tailwind CSS + DaisyUI | Styling & theming |
| Chart.js | Data visualization |
| Axios | HTTP client |
| Lucide React | Icons |

---

## Project Structure

```
src/
├── components/
│   ├── charts/
│   │   ├── Charts.jsx          # All chart components
│   │   └── ChartWrapper.jsx    # Chart.js wrapper (theme-aware)
│   ├── layout/
│   │   ├── Layout.jsx          # Root layout + global series filter + theme toggle
│   │   ├── Sidebar.jsx         # Navigation sidebar with focus star
│   │   └── Header.jsx
│   └── ui/
│       ├── StatCard.jsx        # Stat summary cards
│       └── States.jsx          # Loading / empty states
├── context/
│   ├── SeriesContext.jsx       # Global series filter state
│   └── ThemeContext.jsx        # Global dark / light theme state
├── hooks/
│   └── useFetch.js
├── pages/
│   ├── Dashboard.jsx           # Overview with charts & stats
│   ├── Attendance.jsx          # Attendance records & breakdown
│   ├── Marks.jsx               # Marks, grades & GPA
│   ├── Students.jsx            # Student registry
│   └── Reports.jsx             # Full department reports
├── utils/
│   ├── api.js                  # All Axios API calls + retry interceptor
│   └── helpers.js              # Constants, formatters, grade logic
├── App.jsx
├── main.jsx
└── index.css                   # DaisyUI theme vars (dark + light)
```

---

## Pages

| Page | Route | Description |
|---|---|---|
| Dashboard | `/` | Overview stats, charts, low attendance alerts |
| Students | `/students` | Full student registry with add/delete |
| Attendance | `/attendance` | Per-student subject-wise attendance, date records |
| Marks & Grades | `/marks` | CT, Assignment, Attendance, Semester breakdown + GPA |
| Reports | `/reports` | Full analytics, export buttons, insight cards |

---

## Series & Subjects Mapping

| Series | Semester | Subjects |
|---|---|---|
| 22 | 5th | ETE-3111, ETE-3113, ETE-3115, CSE-3154, EEE-3153 |
| 23 | 3rd | ETE-2111, ETE-2113, CSE-2153, HUM-2115, ETE-2117 |
| 24 | 2nd | ETE-1110, ETE-1113, HUM-1115, ETE-1111, EEE-1153 |
| 21 | 7th | ETE-4110, ETE-4111, ETE-4112, ETE-4113, CSE-4153 |
| 20 | 8th | ETE-4210, ETE-4211, ETE-4213, ETE-4215, ETE-4217 |

> Series 25 is not used anywhere in the application.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Backend server running (see [server repo](https://github.com/IM-Tamim/ETE-Dashboard-server))

### Installation

```bash
# Clone the repo
git clone https://github.com/IM-Tamim/ETE-Dashboard-client.git
cd ETE-Dashboard-client

# Install dependencies
npm install react react-dom react-router-dom axios chart.js lucide-react
npm install -D vite @vitejs/plugin-react tailwindcss daisyui postcss autoprefixer
```

### Environment Variables

Create a `.env` file in the project root:

```dotenv
VITE_API_URL=http://localhost:5000/api
```

### Run Locally

```bash
npm run dev
```

Frontend runs at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## Deployment (Vercel)

1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Add environment variable in Vercel dashboard:
   ```
   VITE_API_URL = https://ete-dashboard-server.onrender.com/api
   ```
4. Add `vercel.json` in project root for React Router support:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```
5. Deploy

---

## Key Features

- **Global Series Filter** — header pill buttons (`All`, `20`–`24`) filter all pages simultaneously; Dashboard, Attendance, Marks, and Reports all respond to the selection
- **Sidebar Focus Star** — ★ dynamically highlights the currently selected series; no star shown when "All" is selected or on the Students page
- **Dark / Light Theme Toggle** — Sun/Moon button in the header switches between dark (default) and light palettes; preference is saved in `localStorage`
- **DaisyUI Theming** — all colors use CSS variables, zero hardcoded hex values in components; Chart.js charts read theme vars dynamically and adapt on toggle
- **Expandable Table Rows** — click any student row in Attendance or Marks to expand a full subject breakdown with charts
- **Search by Roll / Name** — instant client-side search inside Attendance and Marks tables; search state is isolated so charts never re-render on keystroke
- **Offline Fallback** — all pages fall back to series-specific demo data if the backend is unreachable, with a visible ⚠️ warning banner
- **Retry Interceptor** — Axios automatically retries once after a 3-second wait on timeout or no-response errors, handling cold starts on free-tier hosting
- **Fully Responsive** — sidebar collapses to a slide-in drawer on mobile (≤900px); two-column grids stack to one column; header adapts on small screens

---

## Theme System

The app supports **dark** (default) and **light** themes via DaisyUI's `data-theme` attribute system.

All UI colors are defined as CSS custom properties in `index.css`:

```css
[data-theme="dark"]  { --ete-primary: #00c9a7; --ete-bg: #060f1e; ... }
[data-theme="light"] { --ete-primary: #009e83; --ete-bg: #f0f4f8; ... }
```

Toggle is persisted in `localStorage` under the key `ete-theme`.

---

## Environment Variables Reference

| Variable | Description | Default |
|---|---|---|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000/api` |

---

## License

IMT — [IM-Tamim](https://github.com/IM-Tamim)