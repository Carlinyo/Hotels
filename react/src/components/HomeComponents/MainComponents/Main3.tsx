import { Container } from "@mui/system"
import { FeedBacks } from "../../../mocks/packageSummaryDetails"
import Main3Default from "../../DefaultBlock/Main3default"
function Main3(){
    return(
        <div style={{backgroundColor:"#F5FAFE"}}>
        <Container maxWidth="lg">
            {
                FeedBacks.map(feedback=>
                    <Main3Default key={feedback.name} image={feedback.image} name={feedback.name} description={feedback.description} rate={feedback.rate} date={feedback.date} children={undefined}/>    
                )
            }
            </Container>
        </div>
    )
}
export default Main3