const fs = require('fs');

const envDirectory = "src/environments";
const fileName = "environment.ts";
const prodFileName = "environment.prod.ts";

const content = `${process.env.SPINBOARD_VARS}`;

fs.access(envDirectory, fs.constants.F_OK, (err) => {
    if (err) {
        console.log('Creating directory !');

        fs.mkdir(envDirectory, { recursive: true }, (err) => {
            if (err) throw err;
        });
    } else {
        try {
            fs.writeFileSync(envDirectory + "/" + fileName, content);
            fs.writeFileSync(envDirectory + "/" + prodFileName, content);
        } catch (err) {
            console.log('Error while creating files !');
        }
    }
});