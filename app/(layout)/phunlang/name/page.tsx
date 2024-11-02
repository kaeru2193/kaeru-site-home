import Link from "next/link"

const Page = () => {
    return (
        <>
            <h1>雰名</h1>
            <p>雰名とは、雰人（広義には雰文化圏全体について指すこともある）が持つ人名のことである。ここでは雰人以外が名乗る雰風名義についても述べる。</p>
            <h2>構成</h2>
            <p>
                現代における雰名は、「家名 + 小名」の2部分で構成される。家名は家系ごとに共通して使用されるもので、一字のものが多数を占める。二字の家名も小数だがある程度は存在し、割合は漢姓のそれよりも多い。三字以上の家名はほぼ全てが雰民族以外に由来するものであり、雰人の姓として存在することは滅多に無い。
            </p>
            <p>
                雰天国内で多い家名には上位から<span className="phun">広</span> (広 Dúa)、<span className="phun">青</span> (青 Qâi)、<span className="phun">明</span> (明 Nú)などがある。上位100位までの家名が総人口の7割を占めるとされる。
            </p>
            <p>
                小名は個人ごとに与えられる名であり、比較的自由度が高い。古代には小名に当たる部分は一字である事が原則であったが、現代では二字が主流になっている。小名には植物や自然に関連する雰字が用いられることも多い。
            </p>
            <h2>雰風名義</h2>
            <p>
                本来雰名を持たない者が雰風の名義を創作する場合、家名にはその人物の象徴となるような自然物・植物・色彩・概念などを、小名にはその人物の気質や性格、また家名から連想される概念、更に誕生日などから五材に関わる字などを用いることが好まれる。また、親族が既に雰名保持者である場合にはそこから派生した雰名を付けることもある。
            </p>
            <h2>雰名保持者一覧</h2>
            <p>
                2024年10月現在、11名が公式の雰名（雰風名義）を保持している。以下で付与年月日の古い順に雰名保持者を示す。（敬称略）
            </p>
            <table>
                <tbody>
                    <tr>
                        <th>雰名</th>
                        <th>漢字転写</th>
                        <th>ラテン文字転写</th>
                        <th>主要な名義</th>
                        <th>付与日</th>
                    </tr>
                    <tr>
                        <td>(<span className="phun">之機</span>)<sup>*1</sup></td>
                        <td>(之機)</td>
                        <td>(Kúaàil)</td>
                        <td><Link href="https://kaeru2193.net/">かえる</Link></td>
                        <td>2023/04頃</td>
                    </tr>
                    <tr>
                        <td><span className="phun">蒼 日透</span></td>
                        <td>蒼 日透</td>
                        <td>Cò Kúanglí</td>
                        <td><Link href="https://x.com/Distr_to_Yonder">佐藤陽花</Link></td>
                        <td>2023/08/31</td>
                    </tr>
                    <tr>
                        <td><span className="phun">山 知乾</span></td>
                        <td>山 知乾</td>
                        <td>Dás Qài'só</td>
                        <td><Link href="https://twitter.com/atri_nen">Atridott</Link></td>
                        <td>2023/09/23</td>
                    </tr>
                    <tr>
                        <td><span className="phun">緑 月定</span></td>
                        <td>緑 月定</td>
                        <td>Dúal Vò'lûa</td>
                        <td><Link href="https://ponsuqe.github.io/">ぽんすけ</Link></td>
                        <td>2023/10/15</td>
                    </tr>
                    <tr>
                        <td><span className="phun">慶宇 川奏</span></td>
                        <td>慶宇 川奏</td>
                        <td>Nûdúo Hùocáil</td>
                        <td><Link href="https://ja.pronouns.page/@nsopikha">ンソピハ</Link></td>
                        <td>2023/10/15</td>
                    </tr>
                    <tr>
                        <td><span className="phun">葉 気翠</span></td>
                        <td>葉 気翠</td>
                        <td>Pûa Síngzào</td>
                        <td>rain=sailen</td>
                        <td>2023/10/17</td>
                    </tr>
                    <tr>
                        <td><span className="phun">六 間恒</span></td>
                        <td>六 間恒</td>
                        <td>Lîs Túdùang</td>
                        <td>闇瀬</td>
                        <td>2024/04/20</td>
                    </tr>
                    <tr>
                        <td><span className="phun">柑 風暁</span></td>
                        <td>柑 風暁</td>
                        <td>Túl Têmmí</td>
                        <td>暁理</td>
                        <td>2024/08/14</td>
                    </tr>
                    <tr>
                        <td><span className="phun">桜 晴葉</span></td>
                        <td>桜 晴葉</td>
                        <td>Túo Zênpûa</td>
                        <td><Link href="https://x.com/jan__Keta">epikijetesantakalu Keta</Link></td>
                        <td>2024/10/24</td>
                    </tr>
                </tbody>
            </table>
            <p>*1: 音写を事実上の雰名として用いているため家名は存在しない。</p>
        </>
    )
}

export default Page