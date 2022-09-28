import { Button, TextField } from "@mui/material"
import { useState, useRef, useEffect, Dispatch, SetStateAction, ChangeEvent, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Label2Styles from "../Label2.style.module.css"
import { motion } from "framer-motion"
import { getHotelsbyGeo, useAppDispatch, useAppSelector, useOnClickOutside } from "../../../../utils/helpers";
import { FieldValues, useForm } from "react-hook-form";
import { hotelsbyGeo, TestRequest } from "../../../../actions/hotels-actions";
import { useNavigate } from "react-router-dom";


function Label2_1() {
    const { t } = useTranslation()
    const ref = useRef<HTMLDivElement>(null)
    const [activeBtn, setActiveBtn] = useState(false)
    const [adults, setAdults] = useState(1)
    const [childs, setChilds] = useState(0)
    const [rooms, setRooms] = useState(1)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
    useOnClickOutside(ref, () => { setActiveBtn(false) })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const {test,hotelsGeo} = useAppSelector((state)=>state.gHreducer)
    useMemo(() => {
        getHotelsbyGeo(test,dispatch)
        navigate("/search_hotels")
    },[test])
    console.log(test)
    console.log(hotelsGeo)
    return (
        <>
            <form>
                <div className={Label2Styles.inputContainer}>
                    <TextField type="text" placeholder={t("wanttogo")} label={t("searchhotel")} style={{ backgroundColor: "white" }} className={Label2Styles.inp1} {...register("hotel", { required: true })} error={errors.hotel ? true : false} />
                    {
                    <div className={Label2Styles.state_country}>
                        <TextField type="text" placeholder = {t("state")} {...register("state", { required: true })} error = {errors.state ? true : false}/>
                        <TextField type="text" placeholder={t("country")} {...register("country", { required: true })} error = {errors.country ? true : false}/>
                    </div>
                    }
                    <div className={Label2Styles.Inp_Btn}>
                        
                        {/* <TextField type="date" style={{ backgroundColor: "white" }} className={Label2Styles.inp2} {...register("date", { required: true })} error={errors.date ? true : false} /> */}
                        <div ref={ref} className={Label2Styles.peoplesParent}>
                            <Button variant="contained" style={{ backgroundColor: "white", color: "black", height: "56px" }} onClick={() => setActiveBtn(!activeBtn)} className={Label2Styles.btn1}>{adults} {t("adults")} {childs} {t("childs")} {rooms} {t("room")}</Button>
                            {
                                activeBtn &&
                                <motion.div className={Label2Styles.peoples} animate={{ width: "100%" }}>
                                    <div className={Label2Styles.adults}>
                                        <p>{t("adults")}</p>
                                        <div>
                                            <Button className={Label2Styles.bttns} variant="outlined" onClick={() => adults > 1 ? setAdults(adults - 1) : 0}>-</Button>
                                            <p>{adults}</p>
                                            <Button className={Label2Styles.bttns} variant="outlined" onClick={() => setAdults(adults + 1)}>+</Button>
                                        </div>
                                    </div>
                                    <div className={Label2Styles.childs}>
                                        <p>{t("childs")}</p>
                                        <div>
                                            <Button className={Label2Styles.bttns} variant="outlined" onClick={() => childs > 0 ? setChilds(childs - 1) : 0}>-</Button>
                                            <p>{childs}</p>
                                            <Button className={Label2Styles.bttns} variant="outlined" onClick={() => setChilds(childs + 1)}>+</Button>
                                        </div>
                                    </div>
                                    <div className={Label2Styles.rooms}>
                                        <p>{t("room")}</p>
                                        <div>
                                            <Button className={Label2Styles.bttns} variant="outlined" onClick={() => rooms > 1 ? setRooms(rooms - 1) : 0}>-</Button>
                                            <p>{rooms}</p>
                                            <Button className={Label2Styles.bttns} variant="outlined" onClick={() => setRooms(rooms + 1)}>+</Button>
                                        </div>
                                    </div>
                                </motion.div>
                            }
                        </div>
                    </div>
                    <Button onClick={handleSubmit((data:FieldValues)=>{
                        data.adults = adults
                        data.childs = childs
                        data.rooms = rooms
                        dispatch(TestRequest(data.hotel))
                        
                    })} variant="outlined" style={{ backgroundColor: "#0071c2", color: "white", height: "56px" }} className={Label2Styles.btn2}>{t("checkprice")}</Button>
                </div>
            </form>
        </>
    )
}
export default Label2_1