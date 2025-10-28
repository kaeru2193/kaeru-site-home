import articles from './articles.json'
import style from "./page.module.css"

import { ArticleList } from './components'
import { TagList } from './components'
import { ArchiveList } from './components'

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
