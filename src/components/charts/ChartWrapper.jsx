import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function deepMerge(target, source) {
  const out = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      out[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      out[key] = source[key];
    }
  }
  return out;
}

const noScales = ["pie", "doughnut", "polarArea", "radar"];

export default function ChartWrapper({ type, data, options = {}, height = 260 }) {
  const canvasRef = useRef(null);
  const chartRef  = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) chartRef.current.destroy();

    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: "#7a8fa6", font: { family: "'Syne', sans-serif", size: 11 }, boxWidth: 12, padding: 16 },
        },
        tooltip: {
          backgroundColor: "#0d1f35",
          borderColor: "rgba(0,201,167,0.3)",
          borderWidth: 1,
          titleColor: "#e2e8f0",
          bodyColor: "#7a8fa6",
          titleFont: { family: "'Syne', sans-serif", size: 12, weight: "700" },
          bodyFont:  { family: "'DM Mono', monospace", size: 11 },
          padding: 12,
          cornerRadius: 8,
        },
      },
      scales: noScales.includes(type) ? undefined : {
        x: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#7a8fa6", font: { family: "'DM Mono', monospace", size: 10 } } },
        y: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#7a8fa6", font: { family: "'DM Mono', monospace", size: 10 } } },
      },
    };

    chartRef.current = new Chart(canvasRef.current.getContext("2d"), {
      type,
      data,
      options: deepMerge(defaultOptions, options),
    });

    return () => { if (chartRef.current) chartRef.current.destroy(); };
  }, [type, data, options]);

  return (
    <div style={{ position: "relative", height }}>
      <canvas ref={canvasRef} />
    </div>
  );
}
