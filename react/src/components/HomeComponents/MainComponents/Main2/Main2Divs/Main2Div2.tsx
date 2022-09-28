import { HotelStandart1 } from "../../../../../mocks/packageSummaryDetails"
import { HotelStandart } from "../../../../DefaultBlock/HotelStandart"

function Main2Div2(){
    return (
    <>  
        {
            HotelStandart1.map(hotel=>
                <HotelStandart key={hotel.title} image={hotel.image} title={hotel.title} items={hotel.items} lastPrice={hotel.lastPrice} price={hotel.price} children={undefined} k={hotel.k}/>
            )
        }
    </>
    )
}

export default Main2Div2