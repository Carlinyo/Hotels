import Label4 from "../LabelComponents/Label4"
import Main1_2 from "./Main1_2"
import Main1label from "./Main1Label"
import Main1_1 from "./Main1_1"
import M1_2_Childs from "./Main1_2_childs"
import { Container } from "@mui/material"
import MainStyles from "./Main1.style.module.css"


function Main1() {
    return (
        <div className={MainStyles.container}>
            <Container maxWidth="lg">
                <Label4 />
                <Main1label />
                <Main1_1 />
                <Main1_2 />
                <M1_2_Childs />
            </Container>
        </div>
    )
}
export default Main1