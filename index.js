const exec = require('child_process').exec;

const execLocalBin = async function (bin) {
    return new Promise(resolve => {
        exec(`./node_modules/.bin/${bin}`, (...args) => {
            resolve(...args);
        });
    });
};

module.exports = execLocalBin;