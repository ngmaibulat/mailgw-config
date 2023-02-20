export function debug(msg) {
    if (process.env.DEBUG) {
        console.log(msg);
    }
}
