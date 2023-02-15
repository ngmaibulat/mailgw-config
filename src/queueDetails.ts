import fs from 'node:fs'
import path from 'node:path'

import cliTable from 'cli-table3'
import color from '@colors/colors'

import { MailMetadata } from './types.js'

export function readQueueFile(file: string): MailMetadata {
    const data = fs.readFileSync(file)
    const ln = data.readUInt32BE()
    // const newbuff = data.slice(4, ln + 4)
    const newbuff = data.subarray(4, ln + 4)
    const strVal = newbuff.toString()
    const obj = JSON.parse(strVal)

    obj.dtQueue = new Date()
    obj.dtQueue.setTime(obj.queue_time)

    return obj as MailMetadata
}

export function lsQueueDetails(dir: string): MailMetadata[] {
    const arr = fs.readdirSync(dir)
    const res = arr.map((item) => {
        const filepath = path.resolve(dir, item)
        return readQueueFile(filepath)
    })

    return res
}

export function formatDetailsTable(data: MailMetadata[]): string {
    const table = new cliTable({
        head: [
            color.green('Time'),
            color.green('Domain'),
            color.green('Sender'),
            color.green('Recipient #1'),
        ],
        colWidths: [25, 20, 20, 20],
    })

    for (const row of data) {
        const arr = [
            row.dtQueue.toLocaleString(),
            row.domain,
            color.yellow(row.mail_from.original),
            color.yellow(row.rcpt_to[0].original),
        ]
        //@ts-ignore
        table.push(arr)
    }

    return table.toString()
}
