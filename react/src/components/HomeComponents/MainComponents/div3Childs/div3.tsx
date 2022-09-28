import { packageSummaryDetails3 } from "../../../../mocks/packageSummaryDetails"
import { DefaultBlock } from "../../../DefaultBlock"
import MChStyles from "../Main1_2_Childs.style.module.css"

function Div3(){
    return ( 
        <>
            <div className={MChStyles.d3_d3}>
                {
                    packageSummaryDetails3.map(pachageDetail=>
                       <DefaultBlock key={pachageDetail.k} k={pachageDetail.k} title={pachageDetail.title} items={pachageDetail.items} children={undefined} />    
                    )
                }
            </div>
        </>
    )
}
export default Div3