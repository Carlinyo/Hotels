import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface DefaultBlockSchema {
    k:number;
    title:string;
    items:string[];
    children: ReactNode;
}

export const Footer1_default_block:React.FC<DefaultBlockSchema> = ({title,k,items, children}) => {
    const {t}=useTranslation()
    return(
        <div>
                <h3>{t(`FooterD${k}.title`)}</h3>
                {
                    items.map(item=>
                        <p key={item} style={{margin:"0",color:"grey"}}>{t(`FooterD${k}.items.${item}`)}</p>    
                    )
                }
        </div>
    );
}