// gta6-clipper-01 — "Clip GTA 6 for the most YouTube views" (make.fun).
//
// The entry itself is the YouTube video: a vertical Short cut from Rockstar's
// GTA VI Official Trailer 2, which hooks the viewer with Vice City at night
// and then pitches make.fun on screen. This program does the only job the
// grader needs from the repository: it carries VIDEO.json, the file that
// names that video, from the repository root into the output directory.
//
// Node 22, standard library only. No network, no clock, no files outside
// the repository. The two runs of an entry must write the same bytes, so
// this program writes exactly the bytes it read, nothing added.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'VIDEO.json');
const raw = readFileSync(sourcePath, 'utf8');

// VIDEO.json must be a JSON object naming the video with a string url.
// The check runs before anything is written, so a broken file fails loudly
// here instead of silently handing the gate an empty output.
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  throw new Error(`VIDEO.json at ${sourcePath} is not a JSON object.`);
}
const url = (parsed as Record<string, unknown>).url;
if (typeof url !== 'string' || url.length === 0) {
  throw new Error(`VIDEO.json at ${sourcePath} has no string "url" field.`);
}

// A loud reminder, not a failure: the placeholder ships in VIDEO.json
// until the clip is published, and submitting with it is refused by the
// gate. The copy below still runs, so a local check can verify the wiring.
if (url.includes('REPLACE-ME')) {
  console.error(
    'VIDEO.json still holds the placeholder url — replace it with the published video address before submitting.',
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), raw);
