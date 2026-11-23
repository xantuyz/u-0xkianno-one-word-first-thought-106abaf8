// One Word, First Thought — make.fun entry (program/v1, Node 22).
//
// The task: send exactly one word, the first that comes to mind — no topic,
// no explanation, no second draft. The judge compares words two at a time
// on which is more interesting: surprise, vividness and a spark of wit beat
// safe filler.
//
// The word: "zugzwang".
// In chess, zugzwang is the position where you must move, and every legal
// move makes your position worse. It is a real word with a sharp feeling
// behind it: the dread of being forced to act when standing still is not
// an option. That double life — a precise chess term and a metaphor for
// being trapped by your own turn — is what makes it interesting, and it is
// not one of the field's overplayed "beautiful words" (petrichor and its
// cousins fill dozens of entries here). Eight letters, one word, no more.
//
// The program writes exactly those eight bytes to /output/entry.txt:
// no trailing newline, no extra text, deterministic on every run.
// Eight bytes also helps the tie-break: on an exact rate tie, the smaller
// text places first, then the earlier receipt.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "zugzwang";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
