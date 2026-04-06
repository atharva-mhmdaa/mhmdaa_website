"use client";

import { useRef, useEffect, useCallback } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const onTabChangeRef = useRef(onTabChange);
  onTabChangeRef.current = onTabChange;

  const attachListeners = useCallback((container: HTMLDivElement | null) => {
    if (!container) return;
    const buttons = container.querySelectorAll<HTMLButtonElement>("button[data-tab-id]");
    let touchHandled = false;
    const cleanups: Array<() => void> = [];
    buttons.forEach((btn) => {
      const id = btn.getAttribute("data-tab-id");
      if (!id) return;
      const onTouch = (e: Event) => { e.preventDefault(); touchHandled = true; onTabChangeRef.current(id); };
      const onClick = (e: Event) => { if (touchHandled) { touchHandled = false; return; } e.preventDefault(); onTabChangeRef.current(id); };
      btn.addEventListener("touchstart", onTouch, { passive: false });
      btn.addEventListener("click", onClick);
      cleanups.push(() => {
        btn.removeEventListener("touchstart", onTouch);
        btn.removeEventListener("click", onClick);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    return attachListeners(containerRef.current);
  }, [attachListeners]);

  const cls = variant === "approach" ? "appr-tabs" : "pill-toggle";
  const btnCls = variant === "approach" ? "appr-tab" : "pill-btn";

  return (
    <div className={cls} ref={containerRef}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          data-tab-id={tab.id}
          className={`${btnCls}${activeTab === tab.id ? " active" : ""}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
