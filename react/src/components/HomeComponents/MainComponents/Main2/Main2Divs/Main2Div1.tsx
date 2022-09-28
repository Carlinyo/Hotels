import { Hotel } from "../../../../../mocks/packageSummaryDetails"
import { Hotels } from "../../../../DefaultBlock/Hotels"

function Main2Div1(){
    return (
        <>
            {
                Hotel.map(hotel=>
                    <Hotels key={hotel.title } image={hotel.image} title={hotel.title} description={hotel.description} items={hotel.items} lastPrice={hotel.lastPrice} price={hotel.price} children={undefined} stars={hotel.stars} />    
                )
            }
        </> 
    )
}
export default Main2Div1