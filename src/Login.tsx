import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

interface UserDetailTS {
  firstName: FormDataEntryValue | null;
  lastName: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  phoneNumber: FormDataEntryValue | null;
}

interface LoginFlagTS {
  loginFlag: boolean;
  setLoginFlag: (arg: boolean) => void;
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        GrowMeOrganic
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login(setLoginFlagTS: LoginFlagTS) {
  const [validation, setValidation] = useState([false, false, false, false]);
  const [validationMessage, setValidationMessage] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    if (!data.get("firstName")) {
      setValidation([true, false, false, false]);
      setValidationMessage(["Please Enter FirstName", "", "", ""]);
      return;
    }
    if (!data.get("lastName")) {
      setValidation([false, true, false, false]);
      setValidationMessage(["", "Please Enter lastName", "", ""]);
      return;
    }
    if (!data.get("email")) {
      setValidation([false, false, true, false]);
      setValidationMessage(["", "", "Please Enter Email", ""]);
      return;
    }
    if (!data.get("number")) {
      setValidation([false, false, false, true]);
      setValidationMessage(["", "", "", "Please Enter Phone Number"]);
      return;
    }
    if (data.get("email")) {
      const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const result = data.get("email")?.toString().match(regex);
      if (!result) {
        setValidation([false, false, true, false]);
        setValidationMessage(["", "", "Enter email in correct format", ""]);
        return;
      }
    }
    if (data.get("number")) {
      const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
      const result = data.get("number")?.toString().match(regex);
      if (!result) {
        setValidation([false, false, false, true]);
        setValidationMessage(["", "", "", "Enter 10 digit phone number"]);
        return;
      }
    }
    const userDetails: UserDetailTS = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phoneNumber: data.get("number"),
    };
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phoneNumber: data.get("number"),
    });

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setLoginFlagTS.setLoginFlag(true);
    navigate(`/dashboard/${data.get("firstName")}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={validation[0]}
                helperText={validation[0] && validationMessage[0]}
                onChange={() =>
                  setValidation(
                    validation.map((value, index) => {
                      if (index === 0) {
                        return false;
                      }
                      return value;
                    })
                  )
                }
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={validation[1]}
                helperText={validation[1] && validationMessage[1]}
                onChange={() =>
                  setValidation(
                    validation.map((value, index) => {
                      if (index === 1) {
                        return false;
                      }
                      return value;
                    })
                  )
                }
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={validation[2]}
                helperText={validation[2] && validationMessage[2]}
                onChange={() =>
                  setValidation(
                    validation.map((value, index) => {
                      if (index === 2) {
                        return false;
                      }
                      return value;
                    })
                  )
                }
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={validation[3]}
                helperText={validation[3] && validationMessage[3]}
                onChange={() =>
                  setValidation(
                    validation.map((value, index) => {
                      if (index === 3) {
                        return false;
                      }
                      return value;
                    })
                  )
                }
                required
                fullWidth
                name="number"
                label="Phone number"
                type="number"
                id="number"
                autoComplete="number"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enter
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
