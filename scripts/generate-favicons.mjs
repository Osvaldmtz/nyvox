import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const pub = join(root, "public");
const svg = readFileSync(join(pub, "icon-source.svg"));

async function main() {
  await sharp(svg).resize(32, 32).png().toFile(join(pub, "icon.png"));
  await sharp(svg).resize(192, 192).png().toFile(join(pub, "icon-192.png"));
  await sharp(svg).resize(180, 180).png().toFile(join(pub, "apple-touch-icon.png"));

  const sizes = [16, 32, 48];
  const buffers = await Promise.all(
    sizes.map((s) => sharp(svg).resize(s, s).png().toBuffer()),
  );
  writeFileSync(join(pub, "favicon.ico"), await toIco(buffers));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
