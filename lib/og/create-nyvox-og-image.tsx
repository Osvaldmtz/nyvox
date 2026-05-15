import { ImageResponse } from "@vercel/og";
import { loadInterFontsForOg } from "@/lib/og/load-inter-google-fonts";

export async function createNyvoxOgImageResponse(): Promise<ImageResponse> {
  const fonts = await loadInterFontsForOg();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 80,
          backgroundColor: "#FFFFFF",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 16,
              backgroundColor: "#1464F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: 64,
              fontFamily: "Inter",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            n
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <div
            style={{
              maxWidth: 1000,
              fontSize: 96,
              fontFamily: "Inter",
              fontWeight: 700,
              color: "#000000",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Software hecho con visión.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            width: "100%",
          }}
        >
          <span
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: 36,
              color: "#1464F0",
            }}
          >
            nyvox.io
          </span>
          <span
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: 28,
              color: "#737373",
            }}
          >
            Software Studio · Colombia
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts,
    },
  );
}
