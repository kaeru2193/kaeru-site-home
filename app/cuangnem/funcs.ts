import { EikyuDate } from "eikyu-clock"

export const convertDate = (earthDate: string) => {
    const date = new Date(earthDate)
    const eikyuDate = new EikyuDate(EikyuDate.toEikyu(date.getTime())).getPhunFormat()
    const dateString = `${eikyuDate.yea}年${eikyuDate.poi}旬${eikyuDate.day}日`
    return dateString
}