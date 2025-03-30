import { EikyuDate } from "eikyu-clock"

export const getClockParams = () => {
    const eikyu = new EikyuDate()
    const pf = eikyu.getPhunFormat()
    const f = eikyu.getFormat()

    return {
        year: `${pf.yea}年`,
        date: `${pf.poi}旬${pf.day}日`,
        time: `${pf.per}刻${pf.min}分`,
        minDeg: 0, //いつか修正、取り敢えず機能停止
        perDeg: 0,
        houDeg: 0,
    }
}
