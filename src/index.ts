import fsp from 'node:fs/promises'

import { genConfigs } from './lib.js'
import { helpGenJson } from './gensh.js'

import './init.js'

//mkdir config
await fsp.mkdir('config')

//mkdir queue
await fsp.mkdir('queue')

//mkdir log
await fsp.mkdir('log')

//generate configs
genConfigs()
helpGenJson()
