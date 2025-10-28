import { SiteLinkList } from "@/link"

const siteData = 
    [
        {name: "Fonts", desc: "You can download my various original fonts here.", url: "./font"},
        {name: "Gallery", desc: "Download creative works in image format, such as logos and emblems.", url: "./gallery"}
    ]

const Page = () => {
    return (
        <>
            <h1>Warehouse</h1>
            <p>Download various creative works.</p>
            <SiteLinkList data={siteData}/>
        </>
    )
}

export default Page
