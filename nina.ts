import { parse } from "jsr:@std/yaml";
import { dayOfYear, parse as dateTimeParse } from "@std/datetime";
import { Temporal } from "@js-temporal/polyfill";

const ninaYAML = await Deno.readTextFile("data/nina.yaml");
const ninaData = parse(ninaYAML);

/** Just testing the Temporal polyfill */
const now = Temporal.Now.instant();
now.toString();

const tdy = new Date();
const d = tdy.getDate();
const m = tdy.getMonth() + 1;
const y = tdy.getFullYear();
const tdyStamp = `${y}-${m}-${d}`;
const ninaDataJson = JSON.stringify(ninaData);

try {
	await Deno.mkdir("data/processed");
} catch (err) {
	if (!(err instanceof Deno.errors.AlreadyExists)) {
		throw err;
	}
}
await Deno.writeTextFile(`data/processed/nina-${tdyStamp}.json`, ninaDataJson);
