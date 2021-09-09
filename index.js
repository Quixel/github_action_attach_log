const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
    // `who-to-greet` input defined in action metadata file
    const path = core.getInput('path');

    const data = fs.readFileSync(path, {encoding:'utf8', flag:'r'});

    console.log(`Log file contents: ${path}`);
    console.log(data);
    // const time = (new Date()).toTimeString();
    // core.setOutput("time", time);
    // // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`);
} 
catch (error) {
    core.setFailed(error.message);
}