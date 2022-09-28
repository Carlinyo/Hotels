import { useTranslation } from "react-i18next"
import MChStyles from "../Main1_2_Childs.style.module.css"

function Div_2(){
    const {t}=useTranslation()
    return(
        <>
        <div  className={MChStyles.d2}>
                    <div className={MChStyles.d2_label}>
                        {t("OffDet")}
                    </div>
                     <div className={MChStyles.d2Cont}>
                        <div className={MChStyles.d2_child1}>
                            <ul>
                                <li>{t("Benefit")}</li>
                            </ul>
                            <p>{t("Valid")}</p>
                        </div>
                        <div className={MChStyles.d2_child2}>
                            <p><img src="/images/calendar.svg"/>{t("Calendar")}</p>
                        </div>
                      </div>
                </div>
        </>
    )
}
export default Div_2