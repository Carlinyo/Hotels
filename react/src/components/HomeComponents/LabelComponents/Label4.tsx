import { useTranslation } from "react-i18next"
import Label4Styles from "./Label4.style.module.css"
function Label4(){
    const {t} = useTranslation()
    return (
    <div className={Label4Styles.container}>
        {t("hfg")}
    </div>
    )
}
export default Label4