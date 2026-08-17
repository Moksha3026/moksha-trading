import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Mirrors the site: near-black canvas, warm and cool glow, vermilion accent.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#08090d",
          backgroundImage:
            "radial-gradient(circle at 88% 6%, rgba(255,90,52,0.42) 0%, rgba(255,90,52,0) 55%)," +
            "radial-gradient(circle at 4% 96%, rgba(124,92,255,0.38) 0%, rgba(124,92,255,0) 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            padding: "12px 22px",
            borderRadius: 999,
            border: "1px solid rgba(244,245,248,0.16)",
            fontSize: 21,
            letterSpacing: 4,
            color: "rgba(244,245,248,0.66)",
          }}
        >
          GARMENT SOURCING · PRINTING · EXPORT
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontSize: 104,
                fontWeight: 700,
                color: "#f4f5f8",
                letterSpacing: -3,
              }}
            >
              MOKSHA
            </span>
            <span
              style={{
                fontSize: 104,
                fontWeight: 400,
                color: "#ff5a34",
                letterSpacing: -3,
                marginLeft: 22,
              }}
            >
              TRADING
            </span>
          </div>

          <div style={{ display: "flex", marginTop: 18, fontSize: 38 }}>
            <span style={{ color: "rgba(244,245,248,0.82)" }}>
              Your specification. Our network.
            </span>
            <span style={{ color: "#ff5a34", marginLeft: 12 }}>Shipped.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 96,
              height: 3,
              backgroundColor: "#ff5a34",
              marginBottom: 22,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 21,
              letterSpacing: 2,
              color: "rgba(244,245,248,0.58)",
            }}
          >
            AHMEDABAD, GUJARAT, INDIA · IEC EXPORT LICENSED · NO MINIMUM ORDER
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
