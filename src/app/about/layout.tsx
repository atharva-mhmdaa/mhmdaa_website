import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Michael Hill, MD & Associates — a physician-led healthcare revenue cycle consulting firm with 25+ years experience and 190+ national clients.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
