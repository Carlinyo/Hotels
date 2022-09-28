import { useTranslation } from "react-i18next"
import { flashoffer } from "../../../mocks/flashOffer"
import { Rate } from "../../../mocks/Rate"
import { FlashOffer } from "../../DefaultBlock/flashoffer"
import { RATE } from "../../DefaultBlock/Rate"
import LabelStyle from "./Main1Label.style.module.css"
function Main1label() {
    const { t } = useTranslation()
    return (
        <div className={LabelStyle.container}>
            <div className={LabelStyle.label}>
                <div className={LabelStyle.stars}>
                    <img src="/images/star2.svg" />
                    <img src="/images/star2.svg" />
                    <img src="/images/star2.svg" />
                    <img src="/images/star2.svg" />
                    <img src="/images/star2.svg" />
                </div>
                <div className={LabelStyle.aboutHotel}>
                    <h2>{t("ghh")}</h2>
                    <FlashOffer />

                </div>
                <p>{t("halfBoard")}</p>
            </div>
            <div className={LabelStyle.hotelRate}>
                <h6>{t("userRate")}</h6>
                <p>{Rate.map(rate => <RATE rate={rate.rate} key={rate.rate} />)}/<span>5</span></p>
            </div>
        </div>
    )
}
export default Main1label