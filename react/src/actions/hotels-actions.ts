import { HotelsServices } from "../services/HotelsServices"
import { addHotelToBuscket, getTotalPrice,getAdHotels } from "../store/reducers/BuscketReducer/BuscketReducer"
import { findHotel, getHotels, getHotelsByGeo, GetTestRequestData } from "../store/reducers/HotelReducer/HotelReducer"
import { TotalPrice } from "../utils/helpers"

export const fetchHotels = () => 
     (dispatch: (xxx: any) => any) => {
        HotelsServices.getHotels().then((data:any) => dispatch(getHotels({hotels:data})))
}

export const BuscketAction = (hotel:any) => 
    (dispatch : (xxx:any) => any ) => {
        dispatch(addHotelToBuscket(hotel))
}

export const  GetTotalPrice = (price:any)=>
   async (dispatch : (xxx:any) => any ) => {
    let total = await TotalPrice(price)
    dispatch(getTotalPrice(total))
}
export const GetAdHotels = () =>
    async (dispatch:(xxx:any) => any) =>{
        HotelsServices.adHotels().then((data:any) => dispatch(getAdHotels(data)))
}

export const GetHotel=(hotel:any)=>
    async (dispatch:(xxx:any)=>any)=>{
        dispatch(findHotel(hotel))
    }


export const TestRequest = (Location:any) =>
    async (dispatch : (xxx:any) => any) =>{
        HotelsServices.testRequest(Location).then((data)=>dispatch(GetTestRequestData(data)))
    }

export const hotelsbyGeo = (lat:number,long:number)=>
    async (dispatch : (xxx:any) => any) =>{
        HotelsServices.HotelsByGeo(lat,long).then((data)=>dispatch(getHotelsByGeo(data)))
    }