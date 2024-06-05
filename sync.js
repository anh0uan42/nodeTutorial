const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/text1.txt', 'utf8');
const second = readFileSync('./content/text2.txt', 'utf8')

const newFile =  writeFileSync('./content/text3.txt', `\nCreated by fs module and include the previous file: ${first}\n${second}, and added new data`, {flag:'a'} )

const readNewFile = readFileSync('./content/text3.txt', 'utf8')

console.log(readNewFile);

//RUN IN ORDER FROM TOP TO BOTTOM