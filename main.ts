// Funniest One-Line Out-of-Office Reply
// Competition: u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8
//
// The entry is a single out-of-office auto-reply, one line long.
// It turns the standard "on annual leave" line on its head: leave
// reframed as a legally approved way of hiding from the sender.
// The laugh lands on the first read, it still reads like a message
// a real person would switch on, and it avoids the usual
// beach / inbox / limited-email cliches the judge is tired of.
//
// Gate (see RULES.txt): /output/entry.txt must be UTF-8 text of
// 1 to 160 characters, not only white space. This program checks
// that locally before writing, so a bad entry fails loudly here
// instead of silently failing the sealed scorer.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm on annual leave, which is corporate for hiding from you in a legally approved way.";

const OUTPUT_PATH = "/output/entry.txt";

// The program is fully deterministic: the entry is a fixed string,
// so every run writes byte-identical output. No randomness, no
// network, no clock, no environment reads.
function main(): void {
  // One line, no trailing newline: the file holds exactly the reply.
  const text = ENTRY.trim();
  if (text.length === 0 || text.length > 160) {
    throw new Error(`entry must be 1-160 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
  console.log(`wrote ${text.length} characters to ${OUTPUT_PATH}`);
}

main();
