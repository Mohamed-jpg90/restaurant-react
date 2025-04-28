import React, { useState } from "react";
import Logo from "../Assestes/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Tune } from "@mui/icons-material";


export default function NaveBare() {

  const [openMenu, setopenMenu] = useState(false)
  const menuOption = [
    {
      text: "Home",
      icon: <HomeIcon />
    },
    {
      text: "About",
      icon: <InfoIcon />
    },
    {
      text: "Testiomonials",
      icon: <CommentRoundedIcon />
    },
    {
      text: "contact",
      icon: <PhoneRoundedIcon />
    },
    {
      text: "cart",
      icon: <ShoppingCartRoundedIcon />
    }
  ]

  return (
    <nav>
      <div className="the_logo">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href='' > Home </a>
        <a href='' > About   </a>
        <a href='' > Testimotials </a>
        <a href='' > contact </a>
        <a href='' >

          <BsCart2 className="navbat-cart-icon" />
        </a>
        <button className="primary-button"> Booking Now </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setopenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setopenMenu(false)} anchor="right">

        <Box
          sx={{ width: 250 }}
          role="presentation"ء
          onClick={() => setopenMenu(false)}
          onKeyDown={() => setopenMenu(false)}
        >

          <List>
            {menuOption.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon> {item.icon} </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}

          </List>

        </Box>

      </Drawer>

    </nav>
  )
}
