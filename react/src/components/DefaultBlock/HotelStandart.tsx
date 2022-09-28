import { Button } from "@mui/material";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import StandartHotelStyles from "./HotelStandart1.style.module.css"

interface HotelStandart{
    image:string;
    title:string;
    items:Array<any>;
    lastPrice:string;
    k:number;
    price:string;
    children: ReactNode;
}

export const  HotelStandart:React.FC<HotelStandart>=({image,k,title,items,lastPrice,price,children})=>{
    const {t}=useTranslation()
    return(
        <>
            <div className={StandartHotelStyles.container}>
                <div className={StandartHotelStyles.img}>
                    <img src={image}/>
                    <div className={StandartHotelStyles.FlashOffer}>
                        <p>{t("flash")}</p>
                    </div>
                </div>
                <div className={StandartHotelStyles.info}>
                    <div className={StandartHotelStyles.title}>
                        <h3>{t(`Hotel${k}.title`)}</h3>
                    </div>
                    <div className={StandartHotelStyles.items}>
                        {
                            items.map(item=>
                                <p key={item.icon}><img src={item.icon} width="12px" height="14px"/>{t(`Hotel${k}.items.${item.item}`)}</p>
                            )
                        }
                    </div>
                    <div className={StandartHotelStyles.lastPrice}>
                        <p>{lastPrice}</p>
                    </div>
                    <div className={StandartHotelStyles.price}>
                        <p>{price}</p>
                        <Button variant="contained" style={{backgroundColor:"red"}}>{t("BookNow")}</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HotelStandart