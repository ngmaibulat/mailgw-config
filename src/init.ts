import fs from 'node:fs'
import isFile from '@aibulat/isfile'
import chalk from 'chalk'
import dotenv from 'dotenv'

const res = await isFile('.env')

if (!res) {
    const msg = chalk.red('File not found: .env\nExiting...')
    console.error(msg)
    process.exit(1)
}

dotenv.config()

//exit if config dir exists
if (fs.existsSync('config')) {
    const msg = chalk.red('\n\t config folder exists\n\t exiting')
    console.error(msg)
    process.exit(1)
}
