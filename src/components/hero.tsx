import Image from "next/image";
import { BLUR_DATA } from "@/lib/blur-data";
import { HeroGlow } from "@/components/hero-glow";
import { Parallax } from "@/components/parallax";
import { Magnetic } from "@/components/magnetic";

const TITLE_WORDS = [
  { text: "Your" },
  { text: "specification." },
  { text: "Our" },
  { text: "network." },
  { text: "Shipped.", accent: true },
];

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-media">
        <Parallax className="hero-parallax">
          <Image
            src="/images/hero.jpg"
            alt="Finished black T-shirt on a hanger, catching sharp window-light shadows"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={BLUR_DATA["/images/hero.jpg"]}
            priority
          />
        </Parallax>
        <div className="hero-scrim grain" />
        <HeroGlow />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          Garment sourcing · printing · export — Ahmedabad, Gujarat, India
        </div>
        <h1 className="hero-title">
          {TITLE_WORDS.map((word, i) => (
            <span className="word" key={word.text}>
              <span
                className={`word-inner${word.accent ? " word-accent" : ""}`}
                style={{ animationDelay: `${160 + i * 95}ms` }}
              >
                {word.text}
              </span>
            </span>
          ))}
        </h1>
        <p className="hero-lede hero-lede--last">
          You place one order. We source it, print it, check it and deliver
          it to your door — direct relationships with vetted manufacturers
          across cotton and sports T-shirts, jeans, pants and shirts. No
          minimum order quantity.
        </p>
        <div className="hero-actions">
          <Magnetic href="#enquiry" className="btn btn-primary">
            Request a quote
          </Magnetic>
          <Magnetic href="#products" className="btn btn-ghost">
            View the range
          </Magnetic>
        </div>
      </div>

      <div className="hero-scroll-cue">
        <span className="hero-scroll-cue-line" />
        SCROLL
      </div>
    </section>
  );
}
