import Label2Styles from "../Label2.style.module.css"
import { motion } from "framer-motion"
import { Bascket } from "../../../DefaultBlock/Label2Default"
import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector, useOnClickOutside } from '../../../../utils/helpers';
import { Button } from "@mui/material";
import { GetTotalPrice } from "../../../../actions/hotels-actions";



function Label2_2() {
    const [active, setActive] = useState(false)
    const ref = useRef<HTMLDivElement | HTMLImageElement>(null)
    const dispatch = useAppDispatch()
    const { Buscket, total } = useAppSelector((state) => state.BsctReducer)
    useEffect(() => {
        dispatch(GetTotalPrice(Buscket))
    })
    useOnClickOutside(ref, () => setActive(false))
    return (
        <>
            <div ref={ref} className={Label2Styles.shopcart} >
                <input type="image" src="/images/shoppingCart.png" width="28px" height="30px" onClick={() => setActive(!active)} />
                <Bascket key={Buscket.length} count={Buscket.length} children={undefined} />
                {
                    active &&
                    <motion.div key={active + '1'} style={{ position: "absolute", top: "45px", right: 0, background: 'white', zIndex: "10", border: '0.1px solid grey', overflow: "scroll" }} animate={{
                        width: '230px',
                        height: '300px',
                        borderRadius: "1%",
                    }}>
                        <motion.h3>ShopCart</motion.h3>
                        {
                            Buscket.map((hotel: any, index: number) => {
                                return (
                                    <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left", paddingLeft: "15px", gap: "10px", paddingRight: "10px" }} >
                                        <p>{hotel.hotel.name} {hotel?.offers.map((offer: any, index: number) => <p key={index}>{offer.price.currency} {offer.price.total}</p>)}</p>
                                        <Button variant="contained" style={{ height: "40px", backgroundColor: "red", minWidth: "24px", maxWidth: "24px" }}>X</Button>
                                    </div>
                                )
                            })
                        }
                        <div className={Label2Styles.PayNow}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left", paddingLeft: "15px", gap: "10px", paddingRight: "10px" }}>
                                <p>Total Price</p>
                                <p>{total} USD</p>
                            </div>
                            <Button variant="contained" style={{ height: "50px" }}>Pay Now</Button>
                        </div>
                    </motion.div>
                }
            </div>
        </>
    )
}
export default Label2_2