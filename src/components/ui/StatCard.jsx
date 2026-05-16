export default function StatCard({ label, value, sub, icon: Icon, color, trend }) {
  return (
    <div className="glow-card" style={{ padding: "20px 22px" }}>
      <div className="flex items-start justify-between">
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "0.65rem", color: "var(--ete-muted)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>
            {label}
          </div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: color || "#e2e8f0", lineHeight: 1, marginBottom: 6, fontFamily: "'DM Mono', monospace" }}>
            {value}
          </div>
          {sub && <div style={{ fontSize: "0.72rem", color: "var(--ete-muted)" }}>{sub}</div>}
          {trend !== undefined && (
            <div style={{ fontSize: "0.7rem", fontWeight: 600, color: trend >= 0 ? "#00c9a7" : "#ff6b35", marginTop: 6 }}>
              {trend >= 0 ? "▲" : "▼"} {Math.abs(trend)}% vs last term
            </div>
          )}
        </div>
        {Icon && (
          <div style={{ width: 42, height: 42, borderRadius: 12, background: `${color || "var(--ete-primary)"}18`, border: `1px solid ${color || "var(--ete-primary)"}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon size={20} color={color || "var(--ete-primary)"} />
          </div>
        )}
      </div>
    </div>
  );
}
