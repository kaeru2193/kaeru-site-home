import style from "./news.module.css"

export const NewsList = (props: any) => {
    return (
        <div>
            {props.data.map((e: any, idx: number) => {
                const postDate = new Date(`${e.date}T00:00:00+09:00`)
                const viewdate = `${postDate.getFullYear()}/${postDate.getMonth() + 1}/${postDate.getDate()}`

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