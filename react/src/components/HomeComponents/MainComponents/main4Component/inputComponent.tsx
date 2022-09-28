import { Button, TextField } from "@mui/material"
import { useTranslation } from "react-i18next"
import Main4Styles from "./Main4.style.module.css"

function Input(){
    const {t}=useTranslation()
    return (
    <>
        <TextField style={{backgroundColor:"white",borderStartStartRadius:'6px',borderEndStartRadius:'6px'}} className={Main4Styles.Input} placeholder={t("InputEmail")}/>
        <Button variant="contained" style={{backgroundColor:"red",color:"white",height:"56px"}}>{t("ButtonEmail")}</Button>
    </>
    )
}
export default Input