const exec = require('child_process').execFile;
const parentPackagePath = require('parent-package-json').path;

module.exports = async function (bin, options = {timeout: 5000}) {
    return new Promise((resolve, reject) => {
        exec(`${parentPackagePath}/node_modules/.bin/${bin}`, options, (error, stdout) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(stdout);
        });
    });
};
