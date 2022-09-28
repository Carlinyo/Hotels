import { HotelStandart3 } from "../../../../../mocks/packageSummaryDetails"
import { HotelStandart } from "../../../../DefaultBlock/HotelStandart"

function Main2Div4(){
    return(
        <>
            {
                HotelStandart3.map(hotel=>
                    <HotelStandart key={hotel.title} k={hotel.k} image={hotel.image} title={hotel.title} items={hotel.items} lastPrice={hotel.lastPrice} price={hotel.price} children={undefined}/>
                )
            }
        </>
    )
}
export default Main2Div4