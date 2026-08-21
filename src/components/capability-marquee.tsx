import { CAPABILITY_ROWS } from "@/lib/content";

/**
 * Two ribbons travelling in opposite directions. Each row's items are
 * rendered twice so the track can loop seamlessly; the duplicate is hidden
 * from assistive tech. Pure CSS — hovering pauses via animation-play-state.
 */
export function CapabilityMarquee() {
  return (
    <section className="marquee-band" aria-label="What we make and how we print">
      {CAPABILITY_ROWS.map((row, i) => (
        <div className="marquee" key={i}>
          <div className={`marquee-track${i % 2 ? " marquee-track--reverse" : ""}`}>
            {[0, 1].map((copy) => (
              <ul className="marquee-list" key={copy} aria-hidden={copy === 1}>
                {row.map((item) => (
                  <li className="marquee-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
