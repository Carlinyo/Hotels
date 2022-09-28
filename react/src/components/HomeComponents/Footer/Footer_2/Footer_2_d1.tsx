import { useTranslation } from "react-i18next"
import FooterStyles from "./Footer_2_d1.style.module.css"
function Footer_2_d1(){
    const {t}=useTranslation()
    return (
        <>
            <div className={FooterStyles.container}>
                <div className={FooterStyles.title}>
                    <h1 className={FooterStyles.h1}>{t("ContDet")}</h1>
                    <p>{t("FeelFree")}</p>
                </div>
                <div className={FooterStyles.location}>
                    <div>
                        <img src="/images/location1.svg"/>   
                    </div>
                    <div>
                        <p>{t("9478")}</p>
                    </div>
                </div>
                <div className={FooterStyles.tel}>
                    <div>
                        <img src="/images/telephone.svg"/>
                    </div>
                    <div className={FooterStyles.telephones}>
                        <p>{t("tel.1")}</p>
                        <p>{t("tel.2")}</p>
                        <p>{t("tel.3")}</p>
                    </div>
                </div>
                <div className={FooterStyles.mail}>
                    <div>
                        <img src="/images/Mail.svg"/>
                    </div>
                    <div>
                        <p>cherly.lawson@example.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer_2_d1
