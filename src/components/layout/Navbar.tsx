"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  // { href: "/provider-services", label: "Services for Providers" }, // HIDDEN — re-enable when page is reactivated
  { href: "/services", label: "Services" },
  { href: "/healthcare-fraud-analysis", label: "Healthcare Fraud Analysis" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blogs", label: "Blogs" },
  { href: "/careers", label: "Careers" },
];

const FONT_BASE = 17;
const FONT_MIN = 13;
const FONT_MAX = 22;


export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fontSize, setFontSize] = useState(FONT_BASE);
  const [navHeight, setNavHeight] = useState(60);
  const hamRef = useRef<HTMLButtonElement>(null);
  const navElRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("mhm_fs");
    if (stored) {
      const val = parseInt(stored, 10);
      if (!isNaN(val)) {
        setFontSize(val);
        document.documentElement.style.fontSize = val + "px";
      }
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const btn = hamRef.current;
    if (!btn) return;
    let touchHandled = false;
    const toggle = () => {
      if (navElRef.current) setNavHeight(navElRef.current.getBoundingClientRect().height);
      setMobileOpen((o) => !o);
    };
    const onTouch = (e: Event) => {
      e.preventDefault();
      touchHandled = true;
      toggle();
    };
    const onClick = (e: Event) => {
      if (touchHandled) { touchHandled = false; return; }
      e.preventDefault();
      toggle();
    };
    btn.addEventListener("touchstart", onTouch, { passive: false });
    btn.addEventListener("click", onClick);
    return () => {
      btn.removeEventListener("touchstart", onTouch);
      btn.removeEventListener("click", onClick);
    };
  }, []);

  const adjFont = useCallback(
    (d: number) => {
      const next = Math.max(FONT_MIN, Math.min(FONT_MAX, fontSize + d));
      setFontSize(next);
      document.documentElement.style.fontSize = next + "px";
      try {
        localStorage.setItem("mhm_fs", String(next));
      } catch {}
    },
    [fontSize]
  );

  const navbarRef = useCallback((node: HTMLElement | null) => {
    navElRef.current = node;
    if (node) setNavHeight(node.getBoundingClientRect().height);
  }, []);

  useEffect(() => {
    const update = () => {
      if (navElRef.current) setNavHeight(navElRef.current.getBoundingClientRect().height);
    };
    window.addEventListener("resize", update);
    update();
    return () => window.removeEventListener("resize", update);
  }, [scrolled]);

  const mobileStyle: React.CSSProperties | undefined = mobileOpen
    ? {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: `${navHeight}px`,
        right: 0,
        left: 0,
        width: "100%",
        background: "rgba(10,20,55,.97)",
        padding: "16px 24px 28px",
        gap: "4px",
        zIndex: 999,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderTop: "1px solid rgba(255,255,255,.12)",
        boxShadow: "0 16px 48px rgba(0,0,0,.5)",
        maxHeight: `calc(100vh - ${navHeight}px)`,
        overflowY: "auto",
        borderRadius: "0 0 18px 18px",
      }
    : undefined;

  const mobileLinkStyle: React.CSSProperties | undefined = mobileOpen
    ? {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "2px",
        alignItems: "stretch",
      }
    : undefined;

  return (
    <>
      {mobileOpen && (
        <div
          className="nav-backdrop"
          style={{ top: `${navHeight}px` }}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    <nav
      className={`navbar${scrolled ? " scrolled" : ""}`}
      id="nb"
      ref={navbarRef}
    >
      <div className="nav-top">
        <Link href="/" className="nav-logo">
          <Image
            src="/images/logo.png"
            alt="Michael Hill, MD & Associates"
            width={1024}
            height={285}
            priority
            style={{ height: "87px", width: "auto" }}
          />
        </Link>


        <button
          ref={hamRef}
          className="ham"
          aria-label="Toggle navigation"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="nav-bottom" style={mobileStyle}>
        <div className="nav-links" style={mobileLinkStyle}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`nav-cta${pathname === "/contact" ? " active" : ""}`}
          >
            Contact Us
          </Link>
        </div>
        <div className="font-toggle" title="Adjust text size">
          <button
            onClick={() => adjFont(-1)}
            aria-label="Decrease font size"
            type="button"
          >
            A&#8722;
          </button>
          <span
            className="font-toggle-track"
            title="Current text size"
          >
            <span
              className="font-toggle-fill"
              style={{
                width: `${((fontSize - FONT_MIN) / (FONT_MAX - FONT_MIN)) * 100}%`,
                background: fontSize === FONT_BASE ? "rgba(255,255,255,0.5)" : "#C8102E",
              }}
            />
          </span>
          <button
            onClick={() => adjFont(1)}
            aria-label="Increase font size"
            type="button"
          >
            A+
          </button>
        </div>
      </div>
    </nav>
    </>
  );
}
