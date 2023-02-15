export type QueueElement = {
    dtArrival: Date
    dtNextAttempt: Date
    attempts: Number
    pid: Number
    uniq: string
    counter: Number
    host: string
    ageSeconds: Number
    ageHours: Number
}

export type MailFrom = {
    original: string
    original_host: string
    host: string
    user: string
}

export type Rcpt = {
    original: string
    original_host: string
    host: string
    user: string
}

export type MailMetadata = {
    queue_time: Number
    dtQueue: Date
    domain: string
    rcpt_to: Rcpt[]
    mail_from: MailFrom
    notes: any
    uuid: string
}
