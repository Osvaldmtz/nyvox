/** Headers típicos de navegador para obtener CSS con URLs de fuentes (woff2). */
const GOOGLE_FONTS_CSS_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
};

function extractLatinInterWoff2Url(css: string): string {
  const latinIdx = css.indexOf("/* latin */");
  if (latinIdx === -1) {
    throw new Error("Inter: bloque latin no encontrado en CSS de Google Fonts");
  }
  const slice = css.slice(latinIdx);
  const match = slice.match(
    /url\((https:\/\/fonts\.gstatic\.com[^)]+)\)\s+format\(['"]woff2['"]\)/,
  );
  if (!match?.[1]) {
    throw new Error("Inter: URL woff2 latin no encontrada");
  }
  return match[1];
}

export async function fetchInterLatinWoff2(
  weight: 400 | 500 | 700,
): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&display=swap`;
  const css = await fetch(cssUrl, { headers: GOOGLE_FONTS_CSS_HEADERS }).then(
    (res) => res.text(),
  );
  const fontUrl = extractLatinInterWoff2Url(css);
  const res = await fetch(fontUrl);
  if (!res.ok) {
    throw new Error(`Inter ${weight}: fallo al descargar ${fontUrl}`);
  }
  return res.arrayBuffer();
}

export async function loadInterFontsForOg(): Promise<
  Array<{
    name: string;
    data: ArrayBuffer;
    weight: 400 | 500 | 700;
    style: "normal";
  }>
> {
  const [w400, w500, w700] = await Promise.all([
    fetchInterLatinWoff2(400),
    fetchInterLatinWoff2(500),
    fetchInterLatinWoff2(700),
  ]);

  return [
    { name: "Inter", data: w400, weight: 400, style: "normal" },
    { name: "Inter", data: w500, weight: 500, style: "normal" },
    { name: "Inter", data: w700, weight: 700, style: "normal" },
  ];
}
