import Main2Div1 from "./Main2Divs/Main2Div1"
import Main2Div2 from "./Main2Divs/Main2Div2"
import Main2Styles from "./Main2.style.module.css"
import Main2Div3 from "./Main2Divs/Main2Div3"
import Main2Div4 from "./Main2Divs/Main2Div4"
import Main2Div5 from "./Main2Divs/Main2Div5"
import { Container } from "@mui/material"

function Main2(){
    return (
        <div className={Main2Styles.Container}>
        <Container maxWidth="lg">
        <div  className={Main2Styles.container}>
            <div className={Main2Styles.d1_2}>
                <Main2Div1/>
                <Main2Div2/>
            </div>
            <div className={Main2Styles.d3_5}>
                <Main2Div3/>
                <Main2Div4/>
                <Main2Div5/>
            </div>
        </div>
        </Container>
        </div>
    )
}
export default Main2