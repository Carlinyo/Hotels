import MChStyles from "./Main1_2_Childs.style.module.css"
import Div1 from "./div3Childs/div1"
import Div2 from "./div3Childs/div2"
import Div3 from "./div3Childs/div3"
import Div1Child from "./div1Childs/div1"
import Div1Child2 from "./div1Childs/div2"
import Div4 from "./div3Childs/div4"
import Div5 from "./div3Childs/div5"
import Div_2 from "./div2/div"
import Div6 from "./div3Childs/div6"
import { useTranslation } from "react-i18next"

function M1_2_Childs(){
    const {t}=useTranslation()
    return (    
    <>
        <div className={MChStyles.container}>
            <div className={MChStyles.d1_2Container}>
                <div className={MChStyles.d1}>
                    <div className={MChStyles.d1_label}>
                        {t("packagesummery")}
                    </div>
                    <div className={MChStyles.d1Cont}>
                    <Div1Child/>
                    <Div1Child2/>
                </div>
                </div>
                <Div_2/>
            </div>
            <div  className={MChStyles.d3}>
                <div className={MChStyles.d3_divsContainer}>
                <div className={MChStyles.d3_label}>
                    <p>Package Summery Details</p>
                </div>
                    <div className={MChStyles.d3_divs1_2_3}>
                        <Div1/>
                        <Div2/>
                        <Div3/>
                  </div>
                  <div style={{border: '1px dashed #E0E0E0',width:'width: 1048px'}} className={MChStyles.line}></div>
                  <div className={MChStyles.d3_childs}>
                        <Div4/>
                        <Div5/>
                        <Div6/>
                  </div>
              </div>
            </div>
        </div>
    </>
    )
}
export default M1_2_Childs