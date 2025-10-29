import articles from './articles.json'
import style from "@/(layout)/(ja)/ikenolog/page.module.css"
import enStyle from "./page.module.css"

import { ArticleList } from '@/(layout)/(ja)/ikenolog/components'
import { TagList } from '@/(layout)/(ja)/ikenolog/components'
import { ArchiveList } from '@/(layout)/(ja)/ikenolog/components'

const Page = () => {
    return (
        <>
            <h1>Ikenolog</h1>
            <div className={style.mainContainer}>
                <div className={style.navigationContainer}>
                    <div className={style.navigateTitle}>Tags</div>
                    <TagList list={articles}/>
                    <div className={style.navigateTitle}>Archives</div>
                    <ArchiveList list={articles}/>
                </div>
                <div className={style.articleContainer}>
                    <ArticleList list={articles}/>
                </div>
            </div>
        </>
    )
}

export default Page
