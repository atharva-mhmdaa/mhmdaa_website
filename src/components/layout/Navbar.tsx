"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services for Providers" },
  { href: "/payor-services", label: "Services for Payors" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blogs", label: "Blogs" },
  { href: "/careers", label: "Careers" },
];

const FONT_BASE = 17;
const FONT_MIN = 13;
const FONT_MAX = 22;

const LinkedInIcon = () => (
  <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

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
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "10px",
              padding: "6px 14px",
              boxShadow: "0 2px 8px rgba(0,0,0,.08)",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Michael Hill, MD & Associates"
              width={210}
              height={87}
              priority
              style={{ height: "87px", width: "auto" }}
            />
          </span>
        </Link>

        <div
          style={{
            position: "absolute",
            right: "70px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <a
            href="https://www.linkedin.com/company/michaelhillmdandassociates/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              background: "rgba(255,255,255,.12)",
              borderRadius: "8px",
              transition: "background .2s",
              textDecoration: "none",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,.22)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,.12)")
            }
          >
            <LinkedInIcon />
          </a>
        </div>

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
