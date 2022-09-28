import { PackageHighlights2 } from "../../../../mocks/packageSummaryDetails"
import { Highlights } from "../../../DefaultBlock/highlights"
import MChStyles from "../Main1_2_Childs.style.module.css"

function Div1Child2(){
    return (
        <>
            <div className={MChStyles.d1_child2}>
                {
                    PackageHighlights2.map(detail=>
                        <Highlights key={detail.items[0]} items={detail.items} children={undefined} />    
                    )
                }
            </div>        
        </>
    )
}
export default Div1Child2