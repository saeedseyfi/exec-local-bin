const exec = require('child_process').execFile;
const parent = require('parent-package-json');

const pathToParent = parent().path;

module.exports = async function (bin, options = {timeout: 5000}) {
    return new Promise((resolve, reject) => {
        exec(`${pathToParent}/node_modules/.bin/${bin}`, options, (error, stdout) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(stdout);
        });
    });
};
