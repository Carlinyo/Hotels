import { Button, FormControl, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import LoginStyles from "./style.module.css";

function LoginComponent() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      return (
        <div className={LoginStyles.container}>
          <form className={LoginStyles.form}>
            <FormControl sx={{ m: 0.3 }}>
              <TextField
                label="Email"
                placeholder="Enter Email"
                variant="outlined"
                {...register("email", { required: true })}
                error={errors.email ? true : false}
              />
            </FormControl>
            <FormControl sx={{ m: 0.3 }}>
              <TextField
                type="password"
                label="Password"
                error={errors.password ? true : false}
                placeholder="Enter Password"
                variant="outlined"
                {...register("password", { required: true })}
                />
            </FormControl>
            <Button
              variant="contained"
              onClick={handleSubmit((data) => {
                console.log(data);
              })}
            >
              Log In
            </Button>
          </form>
        </div>
      );
}
export default LoginComponent