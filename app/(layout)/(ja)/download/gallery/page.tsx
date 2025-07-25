"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css"

import { FetchData } from "@/funcs";

const Page = () => {
    const [main, setMain]: any[] = useState(<p>データ読み込み中...</p>)

    useEffect(() => {
        const access = async () => {
          try {
            const data = await FetchData("https://kaeru2193.github.io/Phun-Resources/index.json");
            const json = JSON.parse(data)

            setMain(
                <div>
                    <GalleryProcess data={json}/>
                </div>
            )

          } catch (error) {
            setMain(
                <div>
                    <p>データ取得に失敗しました。時間を空けて再度お試しください。</p>
                </div>
            )
          }
        }
    
        access()
      }, []);

    
    
    return (
        <>
            <h1>ギャラリー</h1>
            <p>各種ロゴや紋章など、画像形式の制作物を展示しています。画像を右クリックして「名前をつけてリンク先を保存」を選択することでダウンロードが可能です。</p>
            <p>ここに掲載されている制作物は全て<a href="https://creativecommons.org/licenses/by/4.0/deed.ja">CC BY 4.0</a>としてライセンスされています。</p>
            {main}
        </>
    )
}

export default Page

const GalleryProcess = (props: any) => {
    const json: any[] = props.data
    const images = json
        .filter(f => f.pathList[0] == "img")
        .sort((a, b) => a.title > b.title? 1: a.title < b.title? -1: 0) //タイトル順ソート
    return (
        <div className={styles.imageContainer}>
            {images.map(i =>
                {
                const url = "https://kaeru2193.github.io/Phun-Resources/" + i.path
                return (
                <div className={styles.imageBox} key={i.title}>
                    <a href={url}>
                        <div className={styles.imageFrame}>
                            <Image
                                fill
                                sizes="150"
                                src={url}
                                alt={i.title}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.title}>
                            {i.title}
                        </div>
                        <div className={styles.desc}>{i.desc}</div>
                    </a>
                </div>)}
            )}
        </div>
    )
}