import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          backgroundColor: "#fbfbf9",
          padding: "72px",
          border: "3px solid #101010",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            color: "rgba(0,0,0,0.5)",
          }}
        >
          GARMENT SOURCING · PRINTING · EXPORT
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontSize: 108,
                fontWeight: 700,
                color: "#101010",
                letterSpacing: -2,
              }}
            >
              MOKSHA
            </span>
            <span
              style={{
                fontSize: 108,
                fontWeight: 400,
                color: "#b5451b",
                marginLeft: 24,
              }}
            >
              TRADING
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "rgba(0,0,0,0.62)",
              marginTop: 16,
            }}
          >
            Your spec. Our network. Shipped.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 2,
            color: "rgba(0,0,0,0.5)",
          }}
        >
          AHMEDABAD, GUJARAT, INDIA · GST &amp; IEC REGISTERED
        </div>
      </div>
    ),
    { ...size },
  );
}
