import { CREDENTIALS } from "@/lib/content";

export function CredentialStrip() {
  return (
    <div className="trust-strip">
      <div className="trust-strip-inner">
        {CREDENTIALS.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
