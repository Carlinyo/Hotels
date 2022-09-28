import Footer_1_d1 from "./Footer_1_d1"
import Footer_1_d2 from "./Footer_1_d2"
import Footer_1_d3 from "./Footer_1_d3"
import FooterStyles from "./Footer_1.style.module.css"
import { useTranslation } from "react-i18next"


function Footer_1 () {
    const {t}=useTranslation()
    return (
        <>
            <div className={FooterStyles.container}>
                <div className={FooterStyles.title}>
                    <h1>{t("Best")} <span> {t("Tour")} </span>{t("Plan")}</h1>
                </div>
                <div className={FooterStyles.body}>
                    <Footer_1_d1/>
                    <Footer_1_d2/>
                    <Footer_1_d3/>
                </div>
            </div>
        </>
    )
}
export default Footer_1