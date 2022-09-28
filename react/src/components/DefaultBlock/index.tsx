import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface DefaultBlockSchema {
    title: string;
    items:number[];
    k:number;
    children: ReactNode;
}

export const DefaultBlock:React.FC<DefaultBlockSchema> = ({title,items,k, children}) => {
    const {t}=useTranslation()
    return(
        <>
            <div>
               <p>{t(`highlight${k}.title`)}</p>
                <ul>   
                {
                    items.map(item=>{
                        return(
                            <li key={item}>{t(`highlight${k}.items.${item}`)}</li>
                        )
                    })
                }
                </ul>
            </div>
        </>
    );
}