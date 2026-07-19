"use client"
import Gallery from "@/(layout)/(ja)/download/gallery/gallery";

import galleryImages from '@/(layout)/(ja)/download/gallery/gallery.json'

const Page = () => {
    return (
        <>
            <h1>Gallery</h1>
            <p>Image creations such as logos and emblems are stored here. You can download them by right-clicking on the image and selcting "Save as...".</p>
            <p>All creations here are licensed as <a href="https://creativecommons.org/licenses/by/4.0/deed.ja">CC BY 4.0</a>.</p>
            <Gallery images={galleryImages.map(i => i.path)} basePath="/gallery/" />
        </>
    )
}

export default Page