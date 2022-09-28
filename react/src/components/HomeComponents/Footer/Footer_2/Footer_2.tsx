import Footer_2_d1 from "./Footer_2_d1"
import Footer_2_d2 from "./Footer_2_d2"
import Footer2Styles from "./Footer_2.style.module.css"


function Footer_2(){
    return (
        <div className={Footer2Styles.container}>
            <Footer_2_d1 />
            <Footer_2_d2/>
        </div>
    )
}
export default Footer_2