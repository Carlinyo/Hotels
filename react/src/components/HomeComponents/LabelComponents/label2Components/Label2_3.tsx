import { useRef, useState } from "react"
import Label2Styles from "../Label2.style.module.css"
import Label2_1 from "./Label2_1"
import { motion } from "framer-motion"
import { useOnClickOutside } from "../../../../utils/helpers"
import { useTranslation } from "react-i18next"

function Label2_3() {
    const [active, setActive] = useState(false)
    const lngs: any = {
        en: { nativeName: "English" },
        ru: { nativeName: "Russian" }
    }
    const { t, i18n } = useTranslation()
    const ref = useRef<HTMLDivElement>(null)
    const flagsRef = useRef<HTMLDivElement>(null)
    useOnClickOutside(ref, () => { setActive(false); setActiveFlag(false) })
    useOnClickOutside(flagsRef, () => setActiveFlag(false))
    const [flag, setFlag] = useState("English")
    const [activeFlag, setActiveFlag] = useState(false)
    return (
        <>
            <div ref={ref} className={Label2Styles.profile} >
                <img src="/images/Man.svg" />
                <span>Nathan</span>
                <input type="image" src="/images/slaq.svg" onClick={() => setActive(!active)} className={active ? Label2Styles.reverse : ""} />
                {
                    active &&
                    <motion.div className={Label2Styles.active} animate={{
                        width: "100%",
                        minHeight: "100px"
                    }}>
                        <div className={Label2Styles.profileinput}>
                            <Label2_1 />
                        </div>
                        <div ref={flagsRef} style={{ display: "flex" }}>
                            <a href="#">{t("profile")}</a>
                            <motion.div whileHover={{ scale: 1.2 }} className={Label2Styles.flagDiv}>
                                <input type="image" src={"/images/" + flag + ".png"} onClick={() => setActiveFlag(!activeFlag)} style={{ width: "25px", height: "25px" }} />
                            </motion.div>
                            {
                                activeFlag &&
                                <motion.div animate={{ minHeight: "100px" }} className={Label2Styles.activeFlag} style={{ color: "black", paddingLeft: "35px", fontFamily: "cursive", fontSize: "20px" }} >
                                    {Object.keys(lngs).map((lng) => (<a key={lng} href="#" onClick={() => { i18n.changeLanguage(lng); setFlag(lngs[lng].nativeName); setActiveFlag(false) }}>{lngs[lng].nativeName}</a>))}
                                </motion.div>
                            }
                        </div>
                        <a href="#">{t("settings")}</a>
                        <a href="#" className={Label2Styles.Bascket}>{t("bascket")}</a>
                        <a href="#">{t("logout")}</a>
                    </motion.div>
                }
            </div>
        </>
    )
}
export default Label2_3