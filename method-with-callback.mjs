import * as fs from "node:fs";

const data = "Content file text"

fs.writeFile('./message.txt', data, (error)=>{
    if (error) throw new Error;
    console.log('File creato con successo');
})

fs.readFile('./message.txt', 'utf-8', (err, data)=>{
    if (err) throw err;
    console.log(data);
})