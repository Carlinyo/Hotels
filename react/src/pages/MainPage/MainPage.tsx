import Main5 from "../../components/HomeComponents/Main5/Main5"
import Main4 from "../../components/HomeComponents/MainComponents/main4Component/Main4"
import { HotelComponent } from "../../components/MainPageComponents/HotelComponent/HotelComponent"
import { HCMain1 } from "../../components/MainPageComponents/HotelComponent_main1/HCMain1"
import MainStyle from "./style.module.css"

export const MainPage = () =>{
    return(
        <>
            <HCMain1/>
            <HotelComponent />
            <div className={MainStyle.Main4}>
                <Main4 />
            </div>
            <Main5/>
        </>
    )
}
