import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { BsFillCpuFill } from "react-icons/bs";
import { theme } from "../theme";
import { Link } from "react-router-dom";

const Register = () => {
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
        <Typography variant="h5">Sign Up</Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
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
            width: "50%",
          }}
        />{" "}
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required
          type="email"
          sx={{
            width: "50%",
          }}
        />{" "}
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
        <TextField
          id="outlined-basic"
          required
          label="Confirm Password"
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
        SIGN UP
      </Button>
      <Box
        sx={{
          textAlign: "right",
          width: "25.2%",
        }}
      >
        <Link style={{ textDecoration: "none" }} to={"/login"}>
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
            Already have an account? Sign In
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

export default Register;
