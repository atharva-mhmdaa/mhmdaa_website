"use client";

import { useEffect, useRef } from "react";

export default function BreadcrumbNavScroller() {
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    const nav = document.querySelector<HTMLElement>(".svc-breadcrumb-nav");
    if (!nav) return;

    // ── Centre active tab ──────────────────────────────────
    const active = nav.querySelector<HTMLElement>(".svc-breadcrumb-item.active");
    if (active) {
      nav.scrollLeft =
        active.offsetLeft - nav.offsetWidth / 2 + active.offsetWidth / 2;
    }

    // ── Mouse drag-to-scroll ───────────────────────────────
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - nav.offsetLeft;
      scrollStart = nav.scrollLeft;
      nav.style.cursor = "grabbing";
      nav.style.userSelect = "none";
    };

    const onMouseLeave = () => {
      if (!isDown) return;
      isDown = false;
      nav.style.cursor = "grab";
      nav.style.userSelect = "";
    };

    const onMouseUp = () => {
      isDown = false;
      nav.style.cursor = "grab";
      nav.style.userSelect = "";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - nav.offsetLeft;
      nav.scrollLeft = scrollStart - (x - startX);
    };

    nav.style.cursor = "grab";
    nav.addEventListener("mousedown", onMouseDown);
    nav.addEventListener("mouseleave", onMouseLeave);
    nav.addEventListener("mouseup", onMouseUp);
    nav.addEventListener("mousemove", onMouseMove);

    return () => {
      nav.removeEventListener("mousedown", onMouseDown);
      nav.removeEventListener("mouseleave", onMouseLeave);
      nav.removeEventListener("mouseup", onMouseUp);
      nav.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return null;
}
