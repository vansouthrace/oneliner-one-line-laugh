import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My bank called to say my account is overdrawn, which was news to me, since I thought overdrawn was just a personality trait.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Entry written (${entry.length} chars)`);
