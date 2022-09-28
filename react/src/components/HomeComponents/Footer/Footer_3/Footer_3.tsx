import { useTranslation } from "react-i18next"
import Footer3Styles from "./Footer_3.style.module.css"
function Footer_3(){
    const {t}=useTranslation()
    return (
        <>
            <div className={Footer3Styles.container}>
                <p>{t("disclaimer")}</p>
                <div className={Footer3Styles.images}>
                    <img src="/images/footerImg.svg"/>
                </div>
            </div>
        </>
    )
}
export default Footer_3