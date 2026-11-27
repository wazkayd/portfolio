import { ImageResponse } from "next/og";

export const shareImageSize = { width: 1200, height: 630 };
export const shareImageContentType = "image/png";
export const shareImageAlt = "Wazka — Product-minded Software Engineer";

export function createShareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f6f2",
          color: "#202725",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              background: "#174b49",
              color: "#fffefa",
              fontSize: 42,
            }}
          >
            W
          </div>
          <div style={{ display: "flex", marginLeft: 20, fontSize: 36 }}>Wazka</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", maxWidth: 980, fontSize: 64, lineHeight: 1.05 }}>
            I build digital products that solve real business problems.
          </div>
          <div style={{ display: "flex", marginTop: 24, color: "#4c5753", fontSize: 28 }}>
            Product-minded software engineering
          </div>
        </div>
      </div>
    ),
    shareImageSize,
  );
}
