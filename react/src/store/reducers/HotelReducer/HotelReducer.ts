import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { HotelStoreTypes } from '../../../constants/storeTypes/hotelStoreTypes';
import { HotelsState } from '../../states/HotelsState/Hotels';


const HotelReducer:Slice<any>=createSlice({
    name: HotelStoreTypes.STORE_HOTELS,
    initialState: HotelsState,
    reducers: {
        getHotels(state,action:PayloadAction){
            state.hotels = action.payload
        },
        hotelBooking(state,action:PayloadAction){
            state.BookingHotels = action.payload
        },
        findHotel(state,action:PayloadAction){
            state.hotel = state.hotels.find((el:any)=> el.hotel.hotelId == action.payload)
        },
        GetTestRequestData(state,action:PayloadAction){
            state.test = action.payload
        },
        getHotelsByGeo(state,action:PayloadAction){
            state.hotelsGeo = action.payload
        }
    },
})

export const { getHotels, hotelBooking,findHotel,GetTestRequestData,getHotelsByGeo } = HotelReducer.actions
export default HotelReducer.reducer