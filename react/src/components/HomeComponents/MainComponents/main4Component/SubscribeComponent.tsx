import { useTranslation } from "react-i18next"

function Subscribe(){
    const {t}=useTranslation()
    return (
        <>
        <p>{t("subscribe")}</p>
        <h4>{t("Newsletter")}</h4>
        </>
    )
}
export default Subscribe