# ETE Department Dashboard — Frontend

> React + Vite dashboard for the Electronics & Telecommunication Engineering Department. Visualizes student attendance, marks, and academic performance across all series.

---
## Links

- Client Live: [Visit](https://ete-dashboard-client.vercel.app/)
- Client Repository: [GitHub](https://github.com/IM-Tamim/ETE-Dashboard-client)

- Server Live: [Visit](https://ete-dashboard-server.vercel.app/api/health)
- Server Repository: [GitHub](https://github.com/IM-Tamim/ETE-Dashboard-server)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 7 | Build tool & dev server |
| React Router DOM | Client-side routing |
| Tailwind CSS + DaisyUI | Styling |
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
│   │   └── ChartWrapper.jsx    # Chart.js wrapper
│   ├── layout/
│   │   ├── Layout.jsx          # Root layout + global series filter
│   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   └── Header.jsx
│   └── ui/
│       ├── StatCard.jsx        # Stat summary cards
│       └── States.jsx          # Loading / empty states
├── context/
│   └── SeriesContext.jsx       # Global series filter state
├── hooks/
│   └── useFetch.js
├── pages/
│   ├── Dashboard.jsx           # Overview with charts & stats
│   ├── Attendance.jsx          # Attendance records & breakdown
│   ├── Marks.jsx               # Marks, grades & GPA
│   ├── Students.jsx            # Student registry
│   └── Reports.jsx             # Full department reports
├── utils/
│   ├── api.js                  # All Axios API calls
│   └── helpers.js              # Constants, formatters, grade logic
├── App.jsx
├── main.jsx
└── index.css
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
- Backend server running (see backend README)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/ete-dashboard-frontend.git
cd ete-dashboard-frontend

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
   VITE_API_URL = https://your-backend.vercel.app/api
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

- **Global Series Filter** — header pill buttons filter all pages simultaneously (Dashboard, Attendance, Marks, Reports)
- **Sidebar Focus Star** — ★ dynamically highlights the currently selected series
- **Expandable Table Rows** — click any student row to see full subject breakdown with charts
- **Search by Roll/Name** — instant client-side search inside Attendance and Marks tables without re-rendering charts
- **Offline Fallback** — all pages fall back to demo data if the backend is unreachable, with a visible warning banner
- **Fully Responsive** — sidebar collapses to a slide-in drawer on mobile (≤900px)

---

## Environment Variables Reference

| Variable | Description | Default |
|---|---|---|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000/api` |

---

## License

IMT