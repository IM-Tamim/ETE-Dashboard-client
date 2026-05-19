import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, Sun, Moon, ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";
import { useSeriesFilter } from "../../context/SeriesContext";
import { useTheme } from "../../context/ThemeContext";
import { SERIES } from "../../utils/helpers";

const pageMeta = {
  "/":           { title: "Overview Dashboard",   desc: "ETE Department — Real-time analytics & statistics" },
  "/students":   { title: "Student Registry",      desc: "All enrolled ETE department students by series" },
  "/attendance": { title: "Attendance Management", desc: "Track and manage student attendance records" },
  "/marks":      { title: "Marks & Grades",        desc: "Academic performance data and subject-wise analysis" },
  "/reports":    { title: "Reports & Analytics",   desc: "Detailed reports and exportable data" },
};

const NO_FILTER_PAGES = ["/students"];

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const meta = pageMeta[pathname] || { title: "ETE Dashboard", desc: "" };
  const { seriesFilter, setSeriesFilter } = useSeriesFilter();
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const showFilter = !NO_FILTER_PAGES.includes(pathname);

  return (
    <div className="layout-root grid-bg">
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <div className={`sidebar-wrapper${sidebarOpen ? " open" : ""}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      <div className="main-wrapper">
        <header className="top-header">
          <button className="hamburger-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>

          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 className="page-title">{meta.title}</h1>
            <p className="page-desc">{meta.desc}</p>
          </div>

          <div className="header-right">
            {showFilter && (
              <>
                <div className="series-filter-mobile" style={{ position: "relative" }}>
                  <select
                    value={seriesFilter}
                    onChange={(e) => setSeriesFilter(e.target.value)}
                    style={{
                      appearance: "none",
                      WebkitAppearance: "none",
                      background: "var(--ete-surface)",
                      border: "1px solid var(--ete-border)",
                      color: "var(--ete-primary)",
                      borderRadius: 8,
                      padding: "4px 28px 4px 10px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      fontFamily: "'DM Mono', monospace",
                      cursor: "pointer",
                      outline: "none",
                    }}
                  >
                    <option value="All">All Series</option>
                    {SERIES.map((s) => (
                      <option key={s} value={s}>{s}-Series</option>
                    ))}
                  </select>
                  <ChevronDown
                    size={12}
                    style={{
                      position: "absolute",
                      right: 8,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--ete-primary)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </>
            )}

            <div className="flex items-center gap-2">
              <span className="pulse-dot" />
              <span style={{ fontSize: "0.72rem", color: "var(--ete-primary)", fontWeight: 600 }}>Live</span>
            </div>

            {/* Theme toggle */}
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <div className="text-error font-bold text-2xl">IMT</div>
          </div>
        </header>

        <main className="main-content">
          <div className="fade-in">{children}</div>
        </main>
      </div>
    </div>
  );
}