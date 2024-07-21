import { parse } from "jsr:@std/yaml";
import { dayOfYear, parse as dateTimeParse } from "@std/datetime";

const d = dayOfYear(new Date("2019-03-11T03:24:00")); // 70
console.log(d);
const ninaYAML = await Deno.readTextFile("data/nina.yaml");
const ninaData = parse(ninaYAML);

const ninaDataJson = JSON.stringify(ninaData);
await Deno.writeTextFile("data/nina.json", ninaDataJson);

// for (const day of ninaData.days) {
// 	console.log(day.bedtime);
// 	// const time = dateTimeParse(day.bedtime, "hh:mm");
// 	// console.log(time);
// }

