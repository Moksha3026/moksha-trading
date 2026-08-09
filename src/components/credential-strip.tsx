import { CREDENTIALS } from "@/lib/content";

export function CredentialStrip() {
  return (
    <div className="credential-strip">
      {CREDENTIALS.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
