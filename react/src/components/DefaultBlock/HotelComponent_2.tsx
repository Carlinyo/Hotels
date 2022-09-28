import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MainStyles from "../MainPageComponents/HotelComponent/MainStyle.style.module.css"
import {motion, useAnimation} from "framer-motion"
import { Button } from "@mui/material";
import { BuscketAction } from "../../actions/hotels-actions";
import { useAppDispatch } from "../../utils/helpers";
import { useInView } from "react-intersection-observer";
import { boxVariant } from "./HotelComponent_1";

interface HC_2{
    hotel:any
}


export const HotelComponent_2:React.FC<HC_2> = ({hotel}) => {
    const [ref,inView]=useInView()
    const control = useAnimation()
    const dispatch = useAppDispatch()
    useEffect(()=>{
        if(inView){
            control.start("visible")
        }
        // else {
        //     control.start("hidden")
        // }
    },[control,inView])
         return (
            <>
             <motion.div ref={ref} className = {MainStyles.body} variants={boxVariant} initial="hidden" animate={control}>
                    <div className={MainStyles.aboutContent}>
                        <p>{hotel.hotel.name}</p>
                        {
                            hotel.offers.map((offer:any,index:number)=>{
                            return(
                                <div key={index} className={MainStyles.aboutCanvas}>
                                    <div className={MainStyles.description}>
                                        <p>Description</p>
                                        <p>{offer.room.description.text}</p>
                                    </div>
                                    <div className={MainStyles.Prices}>
                                    <div className={MainStyles.CheckDates}>
                                        <p>Check In Date: <span>{offer.checkInDate}</span></p>
                                        <p>Check Out Date: <span>{offer.checkOutDate}</span></p>
                                    </div>
                                        <p>Price: <span>{offer.price.currency} {offer.price.total}</span></p>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }    
                    <div className={MainStyles.BookNow}>
                        <div className={MainStyles.More}>
                           <motion.div whileHover={{scale:1.1}}><Link to = {"/Home/" + hotel.hotel.hotelId }>See More</Link></motion.div>
                        </div>
                        <Button variant="contained" onClick={()=>dispatch(BuscketAction(hotel))}>Book Now</Button>
                    </div>
                </div>
                <img src = {hotel.img}/>
            </motion.div>
        </>
    )
}