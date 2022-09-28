import { PackageHighlights } from "../../../../mocks/packageSummaryDetails"
import { Highlights } from "../../../DefaultBlock/highlights"
import MChStyles from "../Main1_2_Childs.style.module.css"

function Div1Child(){
    return(
        <>
        <div className={MChStyles.d1_child1}>
            {
                PackageHighlights.map(detail=>
                    <Highlights key={detail.items[0]} items={detail.items}/>
                )
            }
        </div>
        </>
    )
}
export default Div1Child