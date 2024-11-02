import style from "./components.module.css"

import Link from "next/link";

import { FaRegClock } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";

import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.locale("ja")
dayjs.extend(utc)
dayjs.extend(timezone)

export const ArticleList = (props: {list: any[]}) => props.list.map(a => 
    <div className={style.articleCardContainer} key={a.id}>
        <Link className={style.articleLink} href={`/ikenolog/${a.id}`}>
            <div className={style.articleCard}>
                <div className={style.articleTitle}>{a.data.title}</div>
                <TopInfo date={a.data.date} tags={a.data.tags} disableLink/>
                <div className={style.articleDesc}>{a.data.outline}</div>
            </div>
        </Link>
    </div>
)

export const TopInfo = (props: {date: string, tags: string[], disableLink?: boolean}) => {
    const postDate = dayjs(props.date)
    const viewdate = postDate.tz('Asia/Tokyo').format('YYYY.MM.DD')

    return (
    <div className={style.topInfo}>
        <span className={style.date}><FaRegClock /> <span>{viewdate}</span></span>
        {props.tags?.map(t => 
            <span className={style.tagContainer} key={t}>
                {props.disableLink
                    ?<span className={style.tag}><FaHashtag/> <span>{t}</span></span>
                    :<Link className={style.tagLink} href={encodeURI(`/ikenolog/tags/${t}`)}>
                        <span className={style.tag}><FaHashtag/> <span>{t}</span></span>
                    </Link>
                }
            </span>
        )}
    </div>
    )
}

export const tagSearch = (articles: any[], tag: string) => articles.filter(a => 
    a.data.tags.includes(tag)
)

export const yearSearch = (articles: any[], year: string) => articles.filter(a => 
    String(new Date(a.data.date).getFullYear()) == year
)

export const monthSearch = (articles: any[], month: string) => articles.filter(a => 
    String(new Date(a.data.date).getMonth() + 1) == month
)

export const TagList = (props: {list: any[]}) => {
    const tags: any[] = []
    props.list.forEach(a => a.data.tags.forEach((t: string) => { //タグを収集
        if (tags.some(n => n.name == t)) {
            tags.find(n => n.name == t).count += 1
        } else {
            tags.push({
                name: t,
                count: 1
            })
        }
    }))

    const sorted = tags.sort((a, b) => b.count - a.count) //記事数順で降順ソート

    return <div className={style.tagList}>
        {sorted.map(t => 
            <Link className={style.tagLink} href={encodeURI(`/ikenolog/tags/${t.name}`)} key={t.name}>
                <span className={style.tagListTag}><FaHashtag/><span>{t.name} ({t.count})</span></span>
            </Link>
        )}
    </div>
}

export const ArchiveList = (props: {list: any[]}) => {
    const archives: any[] = []
    props.list.forEach(a => { //年月を各記事から収集し記録
        const aDate = new Date(a.data.date)
        const year = aDate.getFullYear()
        const month = aDate.getMonth() + 1
        if (archives.some(y => y.name == year)) {
            const yearList = archives.find(n => n.name == year)
            
            if (yearList.list.some((m: any) => m.name == month)) {
                yearList.list.find((m: any) => m.name == month).count += 1
            } else {
                yearList.list.push({
                    name: month,
                    count: 1
                })
            }

            yearList.count += 1
        } else {
            archives.push({
                name: year,
                count: 1,
                list: [{
                    name: month,
                    count: 1
                }]
            })
        }
    })

    const sorted = archives //日時順で昇順ソート
        .map(y => {
                return {
                    ...y,
                    list: y.list.sort((a: any, b: any) => 
                        a.name - b.name
                    )
                }
            })
        .sort((a: any, b: any) =>
            a.name - b.name
        )

    return <div className={style.archiveList}>
        {sorted.map(y =>
            <>
            <div className={style.yearArchive}><Link href={`/ikenolog/archives/${y.name}`} key={y.name}>
                <div>{y.name} ({y.count})</div>
            </Link></div>
            {y.list.map((m: any) =>
                <div className={style.monthArchive}><Link href={`/ikenolog/archives/${y.name}/${m.name}`} key={`${y.name}/${m.name}`}>
                    <div>{`${y.name}/${m.name}`} ({m.count})</div>
                </Link></div>
            )}
            </>
        )}
    </div>
}