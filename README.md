# One Emoji, One Smile — 🫶

**Concept: 🫶 (U+1FAF6, HEART HANDS) — two hands forming a heart.** A small, deliberate gesture of warmth sent to a stranger: "here is a little love, no strings attached." It is warm at first glance, universally readable across ages and backgrounds, and it feels *chosen* rather than default — not the first smiley that comes to mind. Exactly **1 code point**, **4 bytes UTF-8** (`F0 9F AB B6`), no skin tone, no ZWJ sequence, no variation selector.

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/yannyonn94/u-0xkianno-one-emoji-one-smile-5470751f/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/yannyonn94/u-0xkianno-one-emoji-one-smile-5470751f/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

## Concept test

Three single-code-point candidates, scored 1–10 on warmth / universality / chosen-not-default / stranger-fit:

| Emoji | Warmth | Universality | Chosen, not default | Stranger-fit | Total | Anchor risk |
|---|---|---|---|---|---|---|
| 🫶 U+1FAF6 Heart Hands | 9 | 9 | 9 | 9 | **36** | low–medium |
| 🥹 U+1F979 Face Holding Back Tears | 9 | 8 | 9 | 7 | 33 | low |
| 🌻 U+1F33B Sunflower | 7 | 9 | 8 | 9 | 33 | low |

**Winner: 🫶.** It wins on warmth-at-first-glance as a gesture aimed at the stranger, while dodging the most generic smileys (🙂 😊 ❤️) that the house's three fixed anchor texts most likely already cover — a byte-identical entry shares the anchor's rate and never enters the playoff. 🥹 loses a little on stranger-fit (tears can read as distress from someone unknown); 🌻 loses on direct warmth (a flower is cheerful, but it is an object, not a gesture toward you).

## Files

- `main.ts` — the entry program (Node 22). Writes exactly one emoji to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), no trailing newline, no dependencies, no network, no secrets.
- `LICENSE` — MIT.
- `.makefun/owner.json` — payout wallet for the entry.

## Run it

```sh
node main.ts
cat /output/entry.txt   # 🫶
```

Verified locally: two runs produce byte-identical output — exactly 4 bytes (`F0 9F AB B6`), no newline.
