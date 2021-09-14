const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
    const path = core.getInput('path');

    const data = fs.readFileSync(path, {encoding:'utf8', flag:'r'});

    console.log(`Log file contents: ${path}`);
    console.log(data);
} 
catch (error) {
    core.setFailed(error.message);
}
