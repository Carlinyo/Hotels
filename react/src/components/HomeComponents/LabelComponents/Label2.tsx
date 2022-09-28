import { Container } from "@mui/system"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import Label2Styles from "./Label2.style.module.css"
import Label2_1 from "./label2Components/Label2_1"
import Label2_2 from "./label2Components/Label2_2"
import Label2_3 from "./label2Components/Label2_3"
function Label2() {
    
    const { t } = useTranslation()
    return (
        <div className={Label2Styles.Container}>
            <Container maxWidth="lg">
                <div className={Label2Styles.container}>
                    <div>
                        <h1 className={Label2Styles.BestPlan}>{t("Best")} <span className={Label2Styles.Tour}>{t("Tour")}</span> {t("Plan")}</h1>
                    </div>
                    <div className={Label2Styles.about}>
                        <div className={Label2Styles.shopCart}>
                            <Label2_2 />
                        </div>
                        <div>
                            <Label2_3 />
                        </div>
                    </div>
                </div>
                <div className={Label2Styles.Search}>
                    <Label2_1 />
                </div>
            </Container>
        </div>
    )
}
export default Label2