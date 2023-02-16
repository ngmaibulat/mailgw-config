export function tstampToDate(tm) {
    const dt = new Date();
    dt.setTime(tm);
    return dt;
}
export function getTimeDiffSeconds(past) {
    const now = new Date().getTime();
    const diff = now - past;
    const seconds = diff / 1000;
    return Math.floor(seconds);
}
export function getTimeDiffHours(past) {
    const now = new Date().getTime();
    const diff = now - past;
    const hours = diff / (3600 * 1000);
    return Math.floor(hours);
}
