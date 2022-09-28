import HCStyles from "./style.module.css"
import { motion, useAnimation } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { boxVariant } from "../../DefaultBlock/HotelComponent_1"


export const HCMain1 = () => {
    const [ref,inView]=useInView()
    const control = useAnimation()
    useEffect(()=>{
        if(inView){
            control.start("visible")
        }
        // else {
        //     control.start("hidden")
        // }
    },[control,inView])
    const {t} = useTranslation()
    return (
        <>
            <div className={HCStyles.container}>
                <img src="./images/hotelBg1.jpg"/>
                    <motion.div className = {HCStyles.text} initial = {{opacity : 0}} animate = {{ opacity : 1}} >
                        <motion.h1 variants={boxVariant} ref={ref} initial="hidden" animate={control}>{t("hotelStay")}</motion.h1>
                        <motion.h3  variants={boxVariant} ref={ref} initial="hidden" animate={control}>{t("Royal")}</motion.h3>
                    </motion.div>
            </div>
        </>
    )
}