import { Container } from "@mui/system"
import { useRef, useState } from "react"
import StylesMain from "./Main1_2.style.module.css"
import {motion} from "framer-motion"
import { useOnClickOutside } from "../../../utils/helpers"
import { useTranslation } from "react-i18next"

function Main1_2(){
    const [active,setActive]=useState(false)
    const ref=useRef<HTMLDivElement>(null)
    useOnClickOutside(ref,()=>setActive(false))
    const {t}=useTranslation()
    return (
    <>
        <div className={StylesMain.Nav}>
            <Container maxWidth="xl" style={{padding:0}}>
                <div className={StylesMain.nav}>
            <p><a href="#">{t("packagesummery")}</a></p>
            <p><a href="#">{t("hotelinformation")}</a></p>
            <p><a href="#">{t("Rooms")}</a></p>
            <p><a href="#">{t("F&A")}</a></p>
            <p><a href="#">{t("D&E")}</a></p>
            <p><a href="#">{t("Reviews")}</a></p>
            <p><a href="#">{t("Q&A")}</a></p>
            <div ref={ref} className={StylesMain.menu}>
                <input type="image" src="/images/menu.png" width="40px" height="40px" onClick={()=>setActive(!active)}/>
                {
                    active && 
                <motion.div  className={StylesMain.active} animate={{
                        width:"30%",
                        minHeight:'50px'
                    }}>
                    <a href="#">{t("packagesummery")}</a>
                    <a href="#">{t("hotelinformation")}</a>
                    <a href="#">{t("Rooms")}</a>
                    <a href="#">{t("F&A")}</a>
                    <a href="#">{t("D&E")}</a>
                    <a href="#">{t("Reviews")}</a>
                    <a href="#">{t("Q&A")}</a>
                </motion.div>
                }
            </div>
            </div>
            </Container>
        </div>
        <div className={StylesMain.paragraph}>
            <h2>{t("packagesummery")}</h2>          
        </div>
    </>
    )
}
export default Main1_2