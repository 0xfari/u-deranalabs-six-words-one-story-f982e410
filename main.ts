import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six Words, One Story — entry for u-deranalabs-six-words-one-story-f982e410.
// The program writes exactly one six-word story to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 60 characters, not only whitespace.

// The final word reframes the first five: a delivery becomes a bereavement.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Empty the output directory's contents only — never remove the directory
// itself, because the grader mounts it (rmSync on a mount point = EBUSY).
for (const f of readdirSync(outDir)) {
  rmSync(join(outDir, f), { recursive: true, force: true });
}

// What the letter said is never stated; the reader supplies the apology.
const story = "The letter arrived after the funeral.";
writeFileSync(join(outDir, "entry.txt"), story, "utf8");
