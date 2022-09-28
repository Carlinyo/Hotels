import { packageSummaryDetails6 } from "../../../../mocks/packageSummaryDetails"
import { DefaultBlock } from "../../../DefaultBlock"
import MChStyles from "../Main1_2_Childs.style.module.css"

function Div6(){
    return (
        <>
            <div className={MChStyles.d3_child3}>
                {
                    packageSummaryDetails6.map(detail=>
                       <DefaultBlock key={detail.k}  k={detail.k} title={detail.title} items={detail.items} children={undefined}/>    
                    )
                }
            </div>
        </>
    )
}
export default Div6