import {
    Button,
    FormControl,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import { useState } from "react";
  import { useForm } from "react-hook-form";
  import SignUpStyles from "./style.module.css";

function SignUpComponent(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      return (
        <div className={SignUpStyles.container}>
          <form className={SignUpStyles.form}>
            <div className={SignUpStyles.Names}>
            <FormControl sx={{ m: 0.3 }}>
              <TextField
                type="text"
                label="First Name"
                placeholder="Enter First Name"
                variant="outlined"
                {...register("firstname", { required: true })}
                error={errors.firstname ? true : false}
              />
            </FormControl>
            
            <FormControl sx={{ m: 0.3 }}>
              <TextField
                type="text"
                label="Last Name"
                placeholder="Enter Last Name"
                variant="outlined"
                {...register("lastname", { required: true })}
                error={errors.lastname ? true : false}
              />
            </FormControl>
            
            </div>
            <FormControl sx={{ m: 0.3 }}>
              <TextField
                type="text"
                label="Address"
                placeholder="Enter Address"
                variant="outlined"
                {...register("address", { required: true })}
                error={errors.address ? true : false}
              />
            </FormControl>
            
            <div className={SignUpStyles.Names}>
            <FormControl sx={{ m: 0.3 }}>
              <TextField
                type="text"
                label="City"
                placeholder="Enter City"
                variant="outlined"
                {...register("city", { required: true })}
                error={errors.city ? true : false}
              />
            </FormControl>
            <FormControl sx={{ m: 0.3 }}>
              <TextField
                type="text"
                label="Country"
                placeholder="Enter Country"
                variant="outlined"
                {...register("country", { required: true })}
                error={errors.country ? true : false}
              />
            </FormControl>
            </div>
            <FormControl sx={{ m: 0.3 }}>
              <TextField
                type="number"
                label="Phone"
                placeholder="Enter Phone"
                variant="outlined"
                {...register("phone", { required: true })}
                error={errors.phone ? true : false}
              />
            </FormControl>
            <FormControl sx={{ m: 0.3 }}>
              <TextField
                type="email"
                label="Email"
                placeholder="Enter Email"
                variant="outlined"
                {...register("email", { required: true })}
                error={errors.email ? true: false}
              />
            </FormControl>
            <FormControl sx={{ m: 0.3 }}>
              <TextField
                type="date"
                placeholder="Enter Birth Day"
                variant="outlined"
                {...register("birthday", { required: true })}
                error={errors.birthday ? true : false}
              />
            </FormControl>
            <div className={SignUpStyles.selects}>
              <FormControl sx={{ width: 180, m: 0.3 }}>
                <label>Gender</label>
                <Select {...register("gender", { required: true })} error={errors.gender ? true : false}>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width:180, m: 0.3 }}>
                <label>Document Type</label>
                <Select {...register("documenttype", { required: true })} error={errors.documenttype ? true : false}>
                  <MenuItem value={"Passport"}>Passport</MenuItem>
                  <MenuItem value={"Id"}>Id</MenuItem>
                  <MenuItem value={"Birthday Document"}>Birthday Document</MenuItem>
                </Select>
              </FormControl>
              
            </div>
            <FormControl sx={{ m: 0.3 }}>
              <TextField
                type="number"
                label="Document Number"
                placeholder="Enter Document Number"
                variant="outlined"
                {...register("docnumber", { required: true })}
                error={errors.docnumber ? true : false}
              />
            </FormControl>
            <FormControl sx={{ m: 0.3 }}>
              <TextField
                type="date"
                placeholder="Enter Document Issue Date"
                variant="outlined"
                {...register("docIssueDate", { required: true })}
                error={errors.docIssueDate ? true : false}
              />
            </FormControl>
            <FormControl>
              <TextField
                type="password"
                label="Password"
                placeholder="Enter Password"
                variant="outlined"
                {...register("password", { required: true })}
                error={errors.password ? true : false}
              />
            </FormControl>
            <Button
              variant="contained"
              sx={{ maxWidth: 110 }}
              onClick={handleSubmit((data) => {
                console.log(data);
              })}
            >
              Sign Up
            </Button>
          </form>
        </div>
      );
}
export default SignUpComponent