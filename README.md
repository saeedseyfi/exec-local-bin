# exec-local-bin
A simple helper to execute local node_module bin in node.

## Install
```bash
npm i exec-local-bin
```

## How to use
```node
const execLocalBin = require('exec-local-bin');

execLocalBin('relaxed') // runs: ./node_modules/.bin/relaxed
    .then((stdout) => console.log(stdout))
    .catch((error) => console.log(error));
```

## Arguments
- `bin`(required) = the executable file and the params
- `options`(optional) = can accept [child_process.exec options](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)