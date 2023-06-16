import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import { BsFillCpuFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: ".5rem",
        mt: "6rem",
      }}
    >
      <BsFillCpuFill size={35} />
      <Box
        sx={{
          mb: "1rem",
        }}
      >
        <Typography variant="h5">Sign In</Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          mb: "1rem",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          required
          sx={{
            width: { xs: "100%", sm: "50%" },
          }}
        />{" "}
        <br /> <br />
        <TextField
          id="outlined-basic"
          required
          label="Password"
          type="password"
          variant="outlined"
          sx={{
            width: "50%",
          }}
        />
      </Box>
      <br /> <br />
      <Button
        sx={{
          width: "25.2%",
          backgroundColor: theme.palette.secondary.light,
        }}
        variant="contained"
      >
        SIGN IN
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "25.2%",
        }}
      >
        <Typography
          color={theme.palette.primary.dark}
          fontSize={"15px"}
          sx={{
            "&:hover": {
              textDecoration: "underline",
              color: "blue",
              cursor: "pointer",
            },
          }}
        >
          Forget Password?
        </Typography>
        <Link style={{ textDecoration: "none" }} to={"/register"}>
          <Typography
            sx={{
              "&:hover": {
                textDecoration: "underline",
                color: "blue",
                cursor: "pointer",
              },
            }}
            color={theme.palette.primary.dark}
            fontSize={"15px"}
          >
            Don't have account? Sign Up
          </Typography>
        </Link>
      </Box>
      <Typography
        sx={{
          mt: "2rem",
          color: "#00000080",
          "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
          },
        }}
      >
        Copyright © Prajwal 2023
      </Typography>
    </Box>
  );
};

export default Login;
