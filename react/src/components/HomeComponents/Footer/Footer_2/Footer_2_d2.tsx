import { Button, FormControl, TextField } from "@mui/material"
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Footer2d2Styles from "./Footer_2_d2.style.module.css"


function Footer_2_d2(){
    const {t}=useTranslation()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return (
        <div className={Footer2d2Styles.container}>
            <div className={Footer2d2Styles.title}>
                <h1></h1>
            </div>
            <form className={Footer2d2Styles.form}>
                <div className={Footer2d2Styles.d1_2}>
                <FormControl >
                    <TextField 
                        style={{backgroundColor:"white",borderRadius:"5px",}}
                        label={t("name")}
                        className={Footer2d2Styles.input}
                        placeholder={t("fullname")}
                        variant="outlined"
                        {...register("name",{required:true})}
                        error={errors.name ? true : false}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        className={Footer2d2Styles.input}
                        style={{backgroundColor:"white",borderRadius:"5px",}}
                        label={t("phone")}
                        placeholder={t("PN")}
                        variant="outlined"
                        {...register("phone",{required:true})}
                        error={errors.phone ? true : false}
                    />
                </FormControl>
                </div>
                <FormControl >
                    <TextField 
                        className={Footer2d2Styles.textarea}
                        style={{backgroundColor:"white",borderRadius:"5px",height:'123px'}}
                        multiline
                        rows={4}
                        placeholder={t("message")}
                        variant="outlined"
                        {...register("message",{required:true})}
                        error={errors.message ? true : false}
                    />
                </FormControl>
                <div className={Footer2d2Styles.button}>
                    <Button variant="contained" style={{color:"white",backgroundColor:"red",width:'160px',height:'50px'}} onClick={handleSubmit((data)=>console.log(data))}>{t("ButtonEmail")}</Button>
                    <p>{t("reqFilds")}</p>
                </div>
            </form>
        </div>
    )
}
export default Footer_2_d2