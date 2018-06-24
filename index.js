const exec = require('child_process').execFile;

module.exports = async function (bin, oprions = {timeout: 5000}) {
    return new Promise((resolve, reject) => {
        exec(`./node_modules/.bin/${bin}`, oprions, (error, stdout) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(stdout);
        });
    });
};
