const { readFile, writeFile } = require('fs').promises;
/*const util = require('util');

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)*/

/*const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        });
    })
}*/


//getText('./content/text1.txt').then((result) => console.log(result)).catch((err) => console.log(err));

const start = async() => {
    try {
        const first = await readFile('./content/text1.txt', 'utf8')
        const second = await readFile('./content/text2.txt', 'utf8');
        await writeFile('./content/text5.txt', `This is the combine file:\n${first}\n${second}`)
        const newFile = await readFile('./content/text5.txt', 'utf8')
        console.log(`${first}\n${second}`)
        console.log(newFile);
    } catch (error) {
        console.log(error);
    }
}

start()

//THERE ARE A FEW WAY TO PROMISFIED A FUNCTION!!!
//ACCESSING DIFFERENT MODULE CAN GRANT U THE ABILITY TO PROMISFY A FEW BUILT IN FUNCTION