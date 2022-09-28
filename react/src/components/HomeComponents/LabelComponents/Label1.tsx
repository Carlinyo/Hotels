import { Container } from "@mui/system"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import Label1Styles from "./Label1.style.module.css"

function Label1(){
    const {t,i18n} = useTranslation()
    
    return(
        <div className={Label1Styles.Container}>
             
            <Container maxWidth="lg">
            <div className={Label1Styles.container}>
                <div className={Label1Styles.Call}>
                    <p>
                    {t("questions")}
                    </p>
                </div>
            <div>
                <div className={Label1Styles.giftAndstar}>
                    <img src="/images/Vector.svg" />
                    <p>{t("giftcart")}</p>
                </div>
                <div className={Label1Styles.giftAndstar}>
                    <img src="/images/star.svg" />
                    <p>{t("Loyalty")}</p>
                </div>
            </div>
        </div>
    </Container>
    </div>
    )
}
export default Label1