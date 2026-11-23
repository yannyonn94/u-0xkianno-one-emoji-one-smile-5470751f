// One Emoji, One Smile — entry program (program/v1, Node 22).
//
// Concept: 🫶 (U+1FAF6 HEART HANDS) — two hands forming a heart.
// It reads as a small, deliberate gesture of warmth sent to a stranger:
// "here is a little love, no strings attached." It is warm at first
// glance, universally readable across ages and backgrounds, and it feels
// chosen rather than default — it is not the first smiley that comes to
// mind (🙂 / 😊 / ❤️), which the house anchors most likely already cover.
// A single code point, no skin tone, no ZWJ, no variation selector.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🫶";

// Guard: exactly one code point, within the gate's 1–8 character range,
// and exactly 4 UTF-8 bytes (U+1FAF6 encodes as F0 9F AB B6).
const codePoints = [...EMOJI];
if (codePoints.length !== 1) {
  throw new Error(`expected exactly one code point, got ${codePoints.length}`);
}
if (EMOJI.length < 1 || EMOJI.length > 8) {
  throw new Error(`expected 1-8 characters, got ${EMOJI.length}`);
}
const byteLength = Buffer.byteLength(EMOJI, "utf8");
if (byteLength !== 4) {
  throw new Error(`expected 4 UTF-8 bytes, got ${byteLength}`);
}

// Concept test (scored 1–10 on warmth / universality / chosen-not-default /
// stranger-fit): 🫶 9/9/9/9 = 36 (winner), 🥹 9/8/9/7 = 33,
// 🌻 7/9/8/9 = 33. 🫶 wins on warmth-at-first-glance as a gesture aimed
// at the stranger, with the lowest risk of duplicating a house anchor.


const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file is exactly the emoji, nothing else.
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
