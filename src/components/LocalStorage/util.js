export function getExpireTime(milliseconds) {
    const expire_time = new Date();
    const shift = expire_time.getTime() + milliseconds;
    expire_time.setTime(shift);
    return expire_time.toUTCString();
}