import { createNyvoxOgImageResponse } from "@/lib/og/create-nyvox-og-image";

export const runtime = "edge";

export const alt = "Nyvox - Software hecho con visión.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return createNyvoxOgImageResponse();
}
