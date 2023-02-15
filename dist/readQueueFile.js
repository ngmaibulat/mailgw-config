import fs from 'node:fs';
import path from 'node:path';
export function readQueueFile(file) {
    const data = fs.readFileSync(file);
    const ln = data.readUInt32BE();
    // const newbuff = data.slice(4, ln + 4)
    const newbuff = data.subarray(4, ln + 4);
    const strVal = newbuff.toString();
    const obj = JSON.parse(strVal);
    return obj;
}
export function lsQueueDetails(dir) {
    const arr = fs.readdirSync(dir);
    const res = arr.map((item) => {
        const filepath = path.resolve(dir, item);
        return readQueueFile(filepath);
    });
    return res;
}
const dir = './queue/';
const data = lsQueueDetails(dir);
console.log(data);
