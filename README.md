# GTA 6 Vice City at Night — Lucia Fights Back

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/4Quaranz/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/4Quaranz/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
([gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01)): a vertical YouTube
Short cut from Rockstar's GTA VI Official Trailer 2, riding the launch-week
hype, then telling viewers they can make money on make.fun by making clips
with AI. Places go by the video's views; the 20 most watched share $500.

## The clip

- **Source moment (my choice):** one continuous passage of Rockstar's
  GTA VI Official Trailer 2 (YouTube `VQRLujxTm3c`), **t = 112s–144s** —
  the Vice City nightclub (glitter dress), Lucia's fight kick at ~114s,
  the neon night streets and bars, ending on the swamp helicopter.
  Why this moment: it opens bright and mid-action — glitter club, then a
  kick in the first 3 seconds — instead of a slow setup, it is pure neon
  Vice City energy, and every shot is instantly recognizable as GTA 6
  in its launch week (the game released 19 Nov 2026). One continuous
  trailer passage, not a montage. (v1 started at 108s and v2 at 110s; both
  were re-cut after frame checks showed a dark/slow opening — this window
  is the verified final.)
- **Cut:** center-cropped to vertical 1080x1920 (9:16), 32 seconds, original
  trailer audio kept. Rendered with ffmpeg in this session:
  `crop` (letterbox removed) → `crop` 9:16 center → `scale` 1080:1920 →
  `drawtext` overlays → H.264 + AAC.
- **Hook (first seconds):** "GTA 6 IS HERE" (0.5–4s), then
  "VICE CITY AT NIGHT" (4–8s), over the action.
- **make.fun pitch (last 8 seconds, on screen over dimmed footage):**
  "MAKE CLIPS LIKE THIS / WITH AI AND EARN MONEY / ON MAKE.FUN" +
  "make.fun/bounty/gta6-clipper-01". A clip without this pitch is
  disqualified, so the pitch is baked into the video itself.
- **File:** `clip.mp4` in the work directory (kept out of this repo — the
  repo holds code only). 1080x1920, 32 s.

## The video (YouTube)

> ⚠️ **VIDEO.json is still a placeholder.** The clip is rendered but not
> uploaded yet. After the video is published as a **public** YouTube Short,
> replace the placeholder in `VIDEO.json` with the video's real address
> (YouTube Share → Copy link), e.g.
> `{"url": "https://www.youtube.com/shorts/<11-char-id>"}`,
> then re-run `main.ts` and submit that commit. Do **not** submit with the
> placeholder: the gate refuses it.

- Publish **Public** (not unlisted, not private), between the bounty opening
  (20 Nov 2026 01:00 UTC / 08:00 WIB) and the deadline
  (23 Nov 2026 01:00 UTC / 08:00 WIB). Keep it public until the results
  are out.
- Description must carry, word for word:

  `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`

  plus the play code `makefun-kiwi-maple-soybean` (code 0 of this account's
  4 codes in this bounty).
- Suggested title: **GTA 6 IS HERE — Vice City at Night | Lucia Fights Back**
- Never buy views or use bots/view services: bought or botted views
  disqualify the entry.

## What this repo does

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json` — that is all the program has to do.
The house reads the video itself through the YouTube Data API; nothing this
program writes about the video is scored. It validates that `VIDEO.json`
parses as a JSON object with a string `url` before writing, so a broken
file fails loudly instead of handing the gate an empty output.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Before you submit

From the kit's directory, run the site's pre-submit checks on this
repository and the transcripts bundle:

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
```

The kit's `RULES.txt` gives the bundling and submit commands. The clip's
making — choosing the moment, deciding the creative, and the ffmpeg commands
that cut and rendered it — is all in the recorded agent session that built
this entry, as the bounty requires.
