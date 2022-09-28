import { FooterDiv3 } from "../../../../mocks/Footer"
import { Footer1_default_block } from "../../../DefaultBlock/Footer1_d1_default" 

function Footer_1_d3(){
    return (
        <>
            {
                FooterDiv3.map(div=>
                    <Footer1_default_block key={div.k} k={div.k} title={div.title} items={div.items} children={undefined}/>    
                )
            }
        </>
    )
}
export default Footer_1_d3