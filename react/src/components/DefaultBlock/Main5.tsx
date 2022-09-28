import { Button } from "@mui/material";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../utils/helpers";
import Main5Styles from "./Main5.style.module.css"

interface DefaultBlockSchema {
    image:string;
    k:number;
    name:string;
    hotel:any;
    children: ReactNode;
}

export const Main5DefaultBody:React.FC<DefaultBlockSchema> = ({image,name,hotel,k,children}) => {
    const {t}=useTranslation()
    return(
        <>
            <div className={Main5Styles.container}>
                <img src={image}/>
                <div className={Main5Styles.body}>
                    <h3>{name}</h3>
                    <div className={Main5Styles.button}>
                        <Button variant="contained" style={{backgroundColor:"red"}} >{t("BookNow")}</Button>
                    </div>
                </div>
            </div>
        </>
    );
}