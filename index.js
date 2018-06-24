const exec = require('child_process').exec;

module.exports = async function (bin, options) {
    return new Promise((resolve, reject) => {
            const cmd = `${process.cwd()}/node_modules/.bin/${bin}`;

            console.log(`Running \`${cmd}\``);

            exec(cmd, options, (error, stdout) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(stdout);
            });
        }
    );
};
