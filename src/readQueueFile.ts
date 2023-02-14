import fs from 'node:fs'

export function readQueueFile(file: string) {
    const tl_reader = fs.createReadStream(file, {
        start: 0,
        end: 3,
    })
    tl_reader.on('error', (err) => {
        console.error(`Error reading queue file: ${file}:`, err)
    })
    tl_reader.once('data', (buf) => {
        // I'm making the assumption here we won't ever read less than 4 bytes
        // as no filesystem on the planet should be that dumb...
        tl_reader.destroy()
        const todo_len =
            (buf[0] << 24) + (buf[1] << 16) + (buf[2] << 8) + buf[3]

        const td_reader = fs.createReadStream(file, {
            encoding: 'utf8',
            start: 4,
            end: todo_len + 3,
        })
        let todo = ''
        td_reader.on('data', (str) => {
            todo += str
            if (Buffer.byteLength(todo) === todo_len) {
                // we read everything
                const todo_struct = JSON.parse(todo)
                todo_struct.file = file
                todo_struct.full_path = file
            }
        })
        td_reader.on('end', () => {
            if (Buffer.byteLength(todo) !== todo_len) {
                console.error(
                    "Didn't find right amount of data in todo for file:",
                    file
                )
                return null
            }
        })
    })
}

const file = ''
readQueueFile(file)
