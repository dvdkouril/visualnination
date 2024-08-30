# visualnination
Repository for visualization of data around Nina. Contains data and some
scripts for processing.

## visualization
Prototyping on ObservableHQ:
[https://observablehq.com/d/463c5dc2bcae4d6e](https://observablehq.com/d/463c5dc2bcae4d6e)

## scripts
Requires [deno](https://docs.deno.com/runtime/) installed.

Convert the `nina.yaml` file to JSON:
```
deno task convert
```
Why? I found YAML to be much easier to write manually than JSON. ObservableHQ
doesn't support loading YAML files directly, which is why I use deno to convert
from YAML to JSON. Also, I plan to do much more processing on the deno side.

## github actions
The actions workflow runs the `convert` script and copies the .json file to
`data/nina.json`
