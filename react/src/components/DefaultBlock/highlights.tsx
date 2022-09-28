import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface DefaultBlockSchema {
    items:any[];
    children?: ReactNode;
}

export const Highlights:React.FC<DefaultBlockSchema> = ({items, children}) => {
    const {t}=useTranslation()
    return(
        <>
            <ul>
                {
                    items.map(item=>{
                        return(
                            <li key={item}>{t(`highlight1.${item}`)}</li>
                        )
                    })
                }
            </ul>
        </>
    );
}