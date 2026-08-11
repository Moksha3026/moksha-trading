import { PROCESS_STEPS } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function ProcessSection() {
  return (
    <section id="process" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">How it works</span>
            <h2 className="section-title">One point of contact.</h2>
          </div>
        </Reveal>

        <div className="process-list">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.label} delay={i * 60}>
              <div className="process-row">
                <div className="num">0{i + 1}</div>
                <div className="title">{step.title}</div>
                <div className="desc">{step.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
