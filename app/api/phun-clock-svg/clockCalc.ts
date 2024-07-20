import { EikyuDate } from "eikyu-clock"

export const getClockParams = () => {
    const eikyu = new EikyuDate()
    const pf = eikyu.getPhunFormat()
    const f = eikyu.getFormat()

    return {
        year: `${pf.yea}年`,
        date: `${pf.sea}季${pf.poi}旬${pf.day}日`,
        time: `${pf.hou}時${pf.per}刻${pf.min}分`,
        minDeg: f.min * 30 + f.sec / 72 * 30,
        perDeg: f.per * 30 + f.min / 12 * 30 + f.sec / 72 / 12 * 30,
        houDeg: f.hou * 30 + f.per / 12 * 30 + f.min / 12 / 12 * 30 + f.sec / 72 / 12 / 12 * 30,
    }
}
