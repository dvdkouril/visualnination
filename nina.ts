import { parse } from "jsr:@std/yaml";
import { dayOfYear, parse as dateTimeParse } from "@std/datetime";

const ninaYAML = await Deno.readTextFile("data/nina.yaml");
const ninaData = parse(ninaYAML);

const tdy = new Date();
const d = tdy.getDate();
const m = tdy.getMonth() + 1;
const y = tdy.getFullYear();
const tdyStamp = `${y}-${m}-${d}`;
const ninaDataJson = JSON.stringify(ninaData);
await Deno.writeTextFile(`data/processed/nina-${tdyStamp}.json`, ninaDataJson);
