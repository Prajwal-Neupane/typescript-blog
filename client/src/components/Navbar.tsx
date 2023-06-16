import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { AppBar, Avatar, Box, Menu, MenuItem, Toolbar } from "@mui/material";
import { BsFillCpuFill } from "react-icons/bs";
import { theme } from "../theme";
import { styled } from "@mui/system";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const navLinks = ["home", "blog", "about", "contacts"];
  const menuItems = ["Home", "Blog", "About", "Contacts", "Logout"];

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: ".5rem",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar
      sx={{
        alignItems: "center",
        backgroundColor: theme.palette.secondary.light,
      }}
    >
      <Toolbar
        sx={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo and Icon */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Blog
          </Typography>
          <BsFillCpuFill size={35} />
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            width: { lg: "35%", md: "50%%", sm: "60%" },
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link}
              style={{ textDecoration: "none", color: "white" }}
              to={`/${link}`}
            >
              <Typography
                sx={{
                  fontSize: { lg: "1.5rem", md: "1.3rem", sm: "1.2rem" },
                }}
              >
                {link.toUpperCase()}
              </Typography>
            </Link>
          ))}
        </Box>

        {/* Avatar and User Box */}
        <Avatar
          onClick={handleOpenMenu}
          alt="Profile Picture"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          sx={{
            width: 24,
            height: 24,
            display: { xs: "none", sm: "block" },
            "&:hover": {
              cursor: "pointer",
            },
          }}
        />
        <UserBox
          onClick={handleOpenMenu}
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            gap: ".4rem",
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            sx={{ width: 24, height: 24 }}
          />
          <Typography>Prajwal</Typography>
        </UserBox>
      </Toolbar>

      {/* Menu */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* Rendering menu items */}
        {menuItems.map((menuItem) => (
          <div onClick={() => setOpenMenu(false)} key={menuItem}>
            <MenuItem>{menuItem}</MenuItem>
          </div>
        ))}
      </Menu>
    </AppBar>
  );
};

export default Navbar;
