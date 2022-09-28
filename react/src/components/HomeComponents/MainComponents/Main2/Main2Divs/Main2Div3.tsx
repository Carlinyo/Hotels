import { HotelStandart2 } from "../../../../../mocks/packageSummaryDetails"
import { HotelStandart } from "../../../../DefaultBlock/HotelStandart"

function Main2Div3(){
    return(
        <>
            {
                HotelStandart2.map(hotel=>
                    <HotelStandart key={hotel.title} k={hotel.k} image={hotel.image} title={hotel.title} items={hotel.items} lastPrice={hotel.lastPrice} price={hotel.price} children={undefined}/>    
                )
            }
        </>
    )
}
export default Main2Div3