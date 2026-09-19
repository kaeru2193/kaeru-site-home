import style from "./page.module.css"
import Link from "next/link"

const Page = () => {
    return (
        <>
            <h1>PDF版雰和辞典</h1>
            <p>雰語のPDF版辞書です。不定期更新なので一部内容が古い可能性があります。PDFデータは、<Link href="https://dict.kaeru2193.net">Web雰和辞典</Link>と同様に CC BY-NC 4.0 ライセンスの元で使用可能です。</p>
            <div className="pdfEmbed">
                <iframe
                    src="/pdf/phundict-pdf-latest.pdf"
                    width="100%"
                    height="100%"
                    title="PDF Viewer"
                />
            </div>
        </>
    )
}

export default Page