import { parse, stringify } from "jsr:@std/yaml";

const ninaYAML = await Deno.readTextFile("data/nina.yaml");
const ninaData = parse(ninaYAML);

console.log(ninaData);
