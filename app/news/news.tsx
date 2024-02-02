import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.locale("ja")
dayjs.extend(utc)
dayjs.extend(timezone)

import style from "./news.module.css"

export const NewsList = (props: any) => {
    return (
        <div>
            {props.data.map((e: any, idx: number) => {
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