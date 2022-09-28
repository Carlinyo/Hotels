import { Container } from "@mui/material"
import Input from "./inputComponent"
import Main4Styles from "./Main4.style.module.css"
import Subscribe from "./SubscribeComponent"

function Main4(){
    return(
        <div className={Main4Styles.Container}>
            <div className={Main4Styles.container}>
                <div className={Main4Styles.img}>
                    <img src="../images/Main4.jpg"/>
                    <div className={Main4Styles.about}>
                        <div className={Main4Styles.subscribe}>
                            <Subscribe/>
                        </div>
                        <div className={Main4Styles.input}>
                          <Input/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main4