import Link from "next/link";

interface CTABandProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABand({
  heading = "Start The Conversation With Our Experts",
  description,
  buttonText = "Start The Conversation →",
  buttonHref = "/contact",
}: CTABandProps) {
  return (
    <section className="cta-band">
      <div className="cta-inner">
        <h2>{heading}</h2>
        {description && <p>{description}</p>}
        <div className="cta-btns">
          <Link href={buttonHref} className="btn-p">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
