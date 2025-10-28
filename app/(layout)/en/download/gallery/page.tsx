"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css"

import { FetchData } from "@/funcs";

const Page = () => {
    const [main, setMain]: any[] = useState(<p>Loading data...</p>)

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
                    <p>The data has failed to load. Please try again later.</p>
                </div>
            )
          }
        }
    
        access()
      }, []);

    
    
    return (
        <>
            <h1>Gallery</h1>
            <p>Image creations such as logos and emblems are stored here. You can download them by right-clicking on the image and selcting "Save as...".</p>
            <p>All creations here are licensed as <a href="https://creativecommons.org/licenses/by/4.0/deed.ja">CC BY 4.0</a>.</p>
            {main}
        </>
    )
}

export default Page

const GalleryProcess = (props: any) => {
    const json: any[] = props.data
    const images = json
        .filter(f => f.pathList[0] == "img")
        .sort((a, b) => a.title > b.title? 1: a.title < b.title? -1: 0) //タイトル順ソートはEEEEEEEPIIIIIIIIIKUUUUUUUUUだよ
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
