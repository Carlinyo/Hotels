import { packageSummaryDetails } from "../../../../mocks/packageSummaryDetails"
import { DefaultBlock } from "../../../DefaultBlock"
import MChStyles from "../Main1_2_Childs.style.module.css"
function Div1(){
    return (
    <>
        <div className={MChStyles.d3_d1}>
            {packageSummaryDetails.map(packageDetail => (
                <DefaultBlock key={packageDetail.k} k={packageDetail.k} title={packageDetail.title} items={packageDetail.items} children={undefined}/>
            ))}
        </div>
    </>
    )
}
export default Div1