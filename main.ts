import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Sorry, the bug shipped because I reviewed my own code and, frankly, I was too polite to say no to myself.";

if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry.txt (${entry.length} chars)`);
