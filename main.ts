// Have You Tried Turning It Off? — one funny tech-support line.
// Writes the entry text to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I know — let's turn it off and on again. It's the only tool I have left, and frankly, it's the only one that's never left me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
