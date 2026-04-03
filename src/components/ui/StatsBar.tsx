import AnimatedCounter from "./AnimatedCounter";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  className?: string;
}

export default function StatsBar({ stats, className = "" }: StatsBarProps) {
  return (
    <section className={`stats-bar${className ? ` ${className}` : ""}`}>
      <div className="stats-hdr">
        <span className="stats-hdr-lbl">Proven Impact</span>
      </div>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-box">
            <div className="stat-num">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <div className="stat-lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
