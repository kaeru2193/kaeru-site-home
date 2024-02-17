import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.locale("ja")
dayjs.extend(utc)
dayjs.extend(timezone)

import style from "./news.module.css"

export const NewsList = (props: any) => {
    let sorted = props.data
        .sort((a: any, b: any) => { //日付順にお知らせをソート
            const aDate = dayjs(`${a.date}T00:00:00+09:00`).unix()
            const bDate = dayjs(`${b.date}T00:00:00+09:00`).unix()
            return bDate - aDate
        })
    if (props.limit) {sorted = sorted.slice(0, props.limit)}

    return (
        <div>
            {sorted.map((e: any, idx: number) => {
                const postDate = dayjs(`${e.date}T00:00:00+09:00`)
                const viewdate = postDate.tz('Asia/Tokyo').format('YYYY/MM/DD')

                return (
                    <div className={style.entry} key={idx}>
                        <div className={style.date}>{viewdate}</div>
                        <div className={style.title}>{e.name}</div>
                        <div>{e.desc}</div>
                    </div>
                )
            })}
        </div>
    )
}