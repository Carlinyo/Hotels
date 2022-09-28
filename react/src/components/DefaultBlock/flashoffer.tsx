import { useTranslation } from "react-i18next"


export const FlashOffer=()=>{
    const {t}=useTranslation()
    return(
        <>
            <p>{t("flash")}</p>
        </>
    )
}