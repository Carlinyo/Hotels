import { Container } from "@mui/material"
import Footer_1 from "./Footer_1/Footer_1"
import Footer_2 from "./Footer_2/Footer_2"
import Footer_3 from "./Footer_3/Footer_3"

function Footer(){
    return (
        <div style={{backgroundColor:"#0A223D"}}>
            <Container maxWidth="lg">
                <Footer_1/>
                <Footer_2/>
                <Footer_3/>
            </Container>
        </div>
    )
}
export default Footer