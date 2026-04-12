import Link from "next/link";

interface CTABandProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  showButton?: boolean;
  noBorder?: boolean;
}

export default function CTABand({
  heading = "Start a Conversation With Our Experts",
  description,
  buttonText = "Get in touch",
  buttonHref = "/contact",
  showButton = true,
  noBorder = false,
}: CTABandProps) {
  return (
    <section
      className="cta-band"
      style={noBorder ? { borderTop: "none", borderBottom: "none" } : undefined}
    >
      <div className="cta-inner">
        <h2>{heading}</h2>
        {description && <p>{description}</p>}
        {showButton && (
          <div className="cta-btns">
            <Link href={buttonHref} className="btn-p">
              {buttonText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
