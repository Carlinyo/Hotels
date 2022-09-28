import { Container } from "@mui/system"
import { useRef, useState } from "react"
import Label3Styles from "./Label3.style.module.css"
import {motion} from "framer-motion"
import { useOnClickOutside } from "../../../utils/helpers"
import { useTranslation } from "react-i18next"

function Label3(){
    const [active,setActive]=useState(false)
    const ref=useRef<HTMLDivElement>(null)
    const {t} = useTranslation()
    useOnClickOutside(ref,()=>setActive(false))
    return (
        <div className={Label3Styles.Container}>
            <Container maxWidth="lg">
    <div className={Label3Styles.container}>
        <div className={Label3Styles.navigate}>
            <p><a href="#">{t("allDeals")}</a></p>
            <p><a href="#">{t("hotels")}</a></p>
            <p><a href="#">{t("activities")}</a></p>
            <p><a href="#">{t("packages")}</a></p>
            <p><a href="#">{t("restaurants")}</a></p>
            <p><a href="#">{t("events")}</a></p>
           <p><a href="#">{t("rodrigues")}</a></p>
           <div ref={ref} className={Label3Styles.menu}>
                 <input type="image" src="/images/menu.png" width="40px" height="40px" onClick={()=>setActive(!active)}/>
                    {
                        active &&
                            <motion.div  className={Label3Styles.active} animate={{
                                width:'30%',
                                minHeight:"100px",
                            }}>
                                <p><a href="#">{t("allDeals")}</a></p>
                                <p><a href="#">{t("hotels")}</a></p>
                                <p><a href="#">{t("activities")}</a></p>
                                <p><a href="#">{t("packages")}</a></p>
                                <p><a href="#">{t("restaurants")}</a></p>
                                <p><a href="#">{t("events")}</a></p>
                                <p><a href="#">{t("rodrigues")} </a></p>
                            </motion.div>
                    }
               </div>
            </div>
        </div>
        </Container>
    </div>
    )
}
export default Label3