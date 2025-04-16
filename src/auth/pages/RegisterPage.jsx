import { Link as RouterLink } from "react-router-dom";

import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "The email should contain @"],
  password: [
    (value) => value.length >= 6,
    "The password should be at least 6 characters long",
  ],
  displayName: [(value) => value.length >= 1, "The name is required"],
};

export const RegisterPage = () => {

  const dispatch = useDispatch();
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Register">
      <form onClick={onSubmit}>
        <Grid2 container>
          <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Full Name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid2>

          <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Email"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid2>

          <Grid2 item size={{ xs: 12 }} xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="*****"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid2>

          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 item size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                width="100%"
                fullWidth={true}
              >
                Create account
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2 container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
          <Link component={RouterLink} to="/auth/login" color="inherit">
            Login
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
