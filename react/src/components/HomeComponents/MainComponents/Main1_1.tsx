import Main1Styles from "./Main1.style.module.css"
import { Button } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../utils/helpers"
import { useEffect } from "react"
import { GetHotel } from "../../../actions/hotels-actions"
function Main1_1(){
    const {t} = useTranslation()
    const {id} = useParams()
    const {hotel} = useAppSelector((state)=>state.gHreducer)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(GetHotel(id))
    },[])
    console.log(hotel)
    return(
    <>
<div className={Main1Styles.images}>
        <img src="/images/Hotel.jpg" className={Main1Styles.img}/>
        <div className={Main1Styles.about1_2}>
            <div className={Main1Styles.about1}>
                <div className={Main1Styles.about1_d1}>
                    <div>
                        <p>{t("pricestarts")}</p>
                        <h1>$ 8,500</h1>
                        <p>{t("perRoom")}</p>
                        <h3>{t("QB")}</h3>
                </div>
                <div className={Main1Styles.about1_d2}>
                    <div className={Main1Styles.about1_d2_child}>
                        <img src="/images/user.png" width="20px" height="20px"/>
                        <p>{t("guests")}</p>
                    </div>
                    <div className={Main1Styles.about1_d2_child}>
                        <img src="/images/Home.svg"/>
                        <p>{t("rooms")}</p>
                    </div>
                    <div className={Main1Styles.about1_d2_child}>
                    <img src="/images/tel.svg"/>
                    <h3>12100</h3>
                    </div>
                </div>
            </div>
            <div className={Main1Styles.button}>
            <Button style={{backgroundColor:"red",color:"white"}}>{t("VOO button")}</Button>
            </div>
        </div>
        <div className={Main1Styles.about2}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6307.2994439625145!2d-122.41995168999733!3d37.77481066846593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1658406311725!5m2!1sen!2s" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    </>
    )
}
export default Main1_1