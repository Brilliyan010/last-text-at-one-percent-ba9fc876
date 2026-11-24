// Last Text at One Percent — the dying phone's final text.
//
// One line, written verbatim to /output/entry.txt. No trailing newline:
// the file is exactly the text message, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "1%. You plugged in the lamp instead of me. I watched you do it. I have four seconds left and I'm spending them judging you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} chars)`);
