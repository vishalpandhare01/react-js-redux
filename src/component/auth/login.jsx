// LoginPage.js
import React, { useEffect, useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginAPi } from "../../redux/action/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { userLoginData } = useSelector((state) => state.reducer);

  const handleLogin = (event) => {
    try {
      event.preventDefault();
      dispatch(loginAPi({ email, password }));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    try {
      if(userLoginData.data){
        if (userLoginData.data.status) {
          localStorage.setItem("token",userLoginData.data.data);
          if(localStorage.getItem("token")){
             setTimeout(()=>{
              window.location.replace("/users")
             },5000)
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [userLoginData]);

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
