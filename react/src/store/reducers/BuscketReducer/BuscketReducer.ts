import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { HotelStoreTypes } from '../../../constants/storeTypes/hotelStoreTypes';
import { HotelsState } from '../../states/HotelsState/Hotels';


const BuscketReducer:Slice<any>=createSlice({
    name: HotelStoreTypes.BUSCKET,
    initialState: HotelsState,
    reducers: {
        addHotelToBuscket(state,action:PayloadAction){
            state.Buscket.push(action.payload)
        },
        getTotalPrice(state,action:PayloadAction){
            state.total = action.payload
        },
        getAdHotels(state,action:PayloadAction){
            state.adHotels = action.payload
        }
    },
})

export const {  addHotelToBuscket,getTotalPrice, getAdHotels } = BuscketReducer.actions
export default BuscketReducer.reducer