import { useEffect } from "react"
import { fetchHotels } from "../../../actions/hotels-actions"
import { RootState } from "../../../store/store"
import {  useAppDispatch, useAppSelector } from "../../../utils/helpers"
import MainStyles from "./MainStyle.style.module.css"
import { Container } from "@mui/material"
import { HotelComponent_1 } from "../../DefaultBlock/HotelComponent_1"
import { HotelComponent_2 } from "../../DefaultBlock/HotelComponent_2"
import { FeedBacks } from "../../../mocks/packageSummaryDetails"


export const HotelComponent = () => {
    const dispatch = useAppDispatch()
    const { hotels } = useAppSelector((state:RootState) => state.gHreducer)
    const { Buscket } = useAppSelector((state:RootState)=> state.BsctReducer)
    useEffect (() => {
        dispatch(fetchHotels())
    },[])
    console.log(hotels, Buscket)
    return (
        <div className={MainStyles.Container}>
        <Container maxWidth="lg">
            <div className={MainStyles.container}>
                <h1 className={MainStyles.TopHotels}>Top Hotels</h1>
                <div className={MainStyles.Stars}>
                    {
                        FeedBacks.map((feedback,index)=>{
                            return (
                                <div key={index} style={{letterSpacing:"5px"}}>
                                {
                                    feedback.rate.map((star,index)=>{
                                        return(
                                            <img key={index} src={star.url} width="30px"/>
                                        )
                                    })
                                }
                                </div>
                            )
                        })
                    }
                </div>
                        {
                        hotels.hotels &&
                            hotels.hotels.data.map((hotel:any, index:number) => {
                                return (
                                    index == 0 ? <div className={MainStyles.left} key = { index }> <HotelComponent_1 hotel={hotel}  /></div>
                                    : <div className={ MainStyles.right } key = { index }><HotelComponent_2 hotel = { hotel } /></div>
                                )
                            })
                        }
                </div>
            </Container>
        </div>
    )
}