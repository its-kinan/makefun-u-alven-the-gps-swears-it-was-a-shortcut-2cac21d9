import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "The map swore that cul-de-sac was a shortcut to your cousin's wedding, so I took it — nobody told me the reception was at the bottom of a lake.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
