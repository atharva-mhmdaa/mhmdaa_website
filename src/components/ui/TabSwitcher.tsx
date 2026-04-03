"use client";

interface Tab {
  id: string;
  label: string;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
  variant?: "pill" | "approach";
}

export default function TabSwitcher({
  tabs,
  activeTab,
  onTabChange,
  variant = "pill",
}: TabSwitcherProps) {
  if (variant === "approach") {
    return (
      <div className="appr-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`appr-tab${activeTab === tab.id ? " active" : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="pill-toggle">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`pill-btn${activeTab === tab.id ? " active" : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
