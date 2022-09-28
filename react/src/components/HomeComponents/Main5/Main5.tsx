import { Container } from "@mui/system"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { GetAdHotels } from "../../../actions/hotels-actions"
import { useAppDispatch, useAppSelector } from "../../../utils/helpers"
import { Main5DefaultBody } from "../../DefaultBlock/Main5"
import Main5Styles from "./Main5.style.module.css"


function Main5(){
    const dispatch = useAppDispatch()
    const {t}=useTranslation()
    const {adHotels} = useAppSelector((state)=>state.BsctReducer)
    useEffect(()=>{
        dispatch(GetAdHotels())
    },[])
    console.log(adHotels)
    return (
        <div className={Main5Styles.Container}>
            <Container maxWidth="lg">
    <div className={Main5Styles.container}>
        <div className={Main5Styles.name}>
            <h1>{t("Activities")}</h1>
        </div>
            <div className={Main5Styles.body}>
                {
                    adHotels.map((hotel:any,index:number)=>{
                        return (
                            <Main5DefaultBody key={index} hotel={hotel} image={hotel.img} k={index} name={hotel.name} children={undefined}/>
                        )
                    })
                }
            </div>
        </div>
    </Container>
    </div>
    )
}

export default Main5