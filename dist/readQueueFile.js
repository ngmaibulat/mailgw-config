import fs from 'node:fs';
export async function readQueueFile(file) {
    const data = fs.readFileSync(file);
    const ln = data.readUInt32BE();
    // const newbuff = data.slice(4, ln + 4)
    const newbuff = data.subarray(4, ln + 4);
    const strVal = newbuff.toString();
    const obj = JSON.parse(strVal);
    console.log(obj);
    return obj;
}
const file = './queue/1676349832351_1676369986649_7_35_fl96Rc_8_c21194a1a5c3';
await readQueueFile(file);
