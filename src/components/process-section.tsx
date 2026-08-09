import { PROCESS_STEPS } from "@/lib/content";

export function ProcessSection() {
  return (
    <section id="process" className="section">
      <div className="section-head">
        <h2>03 / HOW IT WORKS — ONE POINT OF CONTACT</h2>
      </div>
      <div className="process-grid">
        {PROCESS_STEPS.map((step) => (
          <div className="process-step" key={step.label}>
            <div className="step-label">{step.label}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
