import { useTranslation } from "react-i18next"
import { FooterDiv2 } from "../../../../mocks/Footer"
import { Footer1_default_block } from "../../../DefaultBlock/Footer1_d1_default" 

import FooterDivStyles from "./Footer_1_d2.style.module.css"


function Footer_1_d2(){
    const {t}=useTranslation()
    return (
        <>
            <div className={FooterDivStyles.container}>
            {
                FooterDiv2.map(div=>
                    <Footer1_default_block key={div.k} k={div.k} title={div.title} items={div.items} children={undefined}/>    
                )
            }
                <div className={FooterDivStyles.network}>
                    <div>
                        <h1>{t("SN")}</h1>
                    </div>
                    <div className={FooterDivStyles.images}>
                        <a href="https://www.facebook.com/"><img src="/images/facebook.svg" /></a>
                        <a href="https://youtube.com/"><img src="/images/youtube.svg" /></a>
                        <a href="https://www.instagram.com/"><img src="/images/instagram.svg" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer_1_d2