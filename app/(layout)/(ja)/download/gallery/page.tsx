"use client"
import Gallery from "./gallery";

import galleryImages from './gallery.json'

const Page = () => {
    return (
        <>
            <h1>ギャラリー</h1>
            <p>各種ロゴや紋章など、画像形式の制作物を展示しています。画像を右クリックして「名前をつけてリンク先を保存」を選択することでダウンロードが可能です。</p>
            <p>ここに掲載されている制作物は全て<a href="https://creativecommons.org/licenses/by/4.0/deed.ja">CC BY 4.0</a>としてライセンスされています。</p>
            <Gallery images={galleryImages.map(i => i.path)} basePath="/gallery/" />
        </>
    )
}

export default Page