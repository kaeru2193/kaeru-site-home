import articles from './articles.json'
import style from "./page.module.scss"

import { ArticleList } from './components'

const Page = () => {
    return (
        <>
            <h1 className={style.pageTitle}>栄言記集</h1>
            <div className='contentContainer'>
                <p>哉、我為之機。多栄言居之。</p>
                <h2>帳函</h2>
                <div className={style.articleContainer}>
                    <ArticleList list={articles}/>
                </div>
            </div>
        </>
    )
}

export default Page