const { readFile, writeFile } = require('fs');


readFile('./content/text1.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    } else {
        const first = result
        readFile('./content/text2.txt', 'utf8', (err, result) => {
            if (err) {
                console.log(err);
                return
            }
                const second = result
            writeFile('./content/text4.txt', `Another way to write file by combine 2 file: ${first}\n${second}`,
                (err, result) => {
                    if (err) {
                        console.log(err);
                        return
                    }
                    console.log(`This is done`);
                }
            )
            
        })
    }
})


//RUN THE MAJOR FUNCTION FISRT AND THEN RUN THE ASYNC BLOCK!!

