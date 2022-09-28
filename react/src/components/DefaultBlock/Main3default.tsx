import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Main3Styles from "./Main3Styles.style.module.css"

interface DefaultBlockSchema {
    image: string;
    name: string;
    description: string;
    rate: Array<any>;
    date: string;
    children: ReactNode;
}

export const Main3Default: React.FC<DefaultBlockSchema> = ({ image, name, rate, description, date, children }) => {
    const {t}=useTranslation()
    return (
        <>
            <div className={Main3Styles.container}>
                <div className={Main3Styles.left}>
                    <input type="image" src="/images/left.svg" />
                </div>
                <div>
                    <div className={Main3Styles.aboutus}>
                        <h1>{t("PeopleThings")}</h1>
                    </div>
                    <div className={Main3Styles.fdbContainer}>
                        <div className={Main3Styles.feedback}>
                            <div className={Main3Styles.img}>
                                <img src={image} />
                            </div>
                            <div className={Main3Styles.likes}>
                                    <img src="/images/likes.svg"/>
                            </div>
                            <div className={Main3Styles.name}>
                                <p>{name}</p>
                            </div>
                            <div className={Main3Styles.date}>
                                <p>{t("feedback.date")}</p>
                            </div>
                            <div className={Main3Styles.stars}>
                                {
                                    rate.map(star =>
                                        <img key={star.k} src={star.url} width="12px" height="14px" />
                                    )
                                }
                            </div>
                            <div className={Main3Styles.description}>
                                <p>{t("feedback.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Main3Styles.right}>
                    <input type="image" src="/images/right.svg" />
                </div>
            </div>
        </>
    )
}

export default Main3Default