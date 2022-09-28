import { Button } from "@mui/material";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import HotelStyles from "./Hotel1.style.module.css"

interface DefaultBlockSchema {
    stars:Array<any>;
    image:string;
    title:string;
    description:string;
    items:Array<any>;
    lastPrice:string;
    price:string;
    children: ReactNode;
}

export const Hotels:React.FC<DefaultBlockSchema> = ({image,stars,title,description,items,lastPrice,price, children}) => {
    const {t}=useTranslation()
    return(
        <>
            <div className={HotelStyles.container}>
                <div className={HotelStyles.img}>
                    <img src={image}/>
                    <div className={HotelStyles.FlashOffer}>
                        <p>{t("flash")}</p>
                    </div>
                    <div className={HotelStyles.info}>
                    <div>
                        {
                            stars.map(star=>
                            <img key={star.k} src={star.url} width="10px" height="15px"/>
                            )
                        }
                    </div>
                    <div>
                        <h3>{t("Hotel1.title")}</h3>
                    </div>
                    <div className={HotelStyles.description}>
                        <p>{t("Hotel1.description")}</p>
                    </div>
                    <ul>
                        {    
                            items.map(item=>
                                <li key={item.icon}><img src={item.icon} width="12px" height="14px"/>{t(`Hotel1.items.${item.item}`)}</li>       
                            )   
                        }
                    </ul>
                    <div className={HotelStyles.lastPrice}>
                        <p>{lastPrice}</p>
                    </div>
                    <div className={HotelStyles.price}>
                        <p>{price}</p>
                        <Button variant="contained" style={{backgroundColor:"red"}}>{t("BookNow")}</Button>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    );
}