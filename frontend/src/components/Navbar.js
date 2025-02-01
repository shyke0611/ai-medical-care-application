import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Tooltip,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/navbar.css";
import logo from "../assets/images/logo.png";
import InfoModal from "./InfoModal";

export default function Navbar() {
  const location = useLocation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  // Automatically close the drawer on resize if the screen width exceeds 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleInfoOpen = () => setInfoModalOpen(true); // Open the modal
  const handleInfoClose = () => setInfoModalOpen(false); // Close the modal

  const menuItems = [
    { label: "Home", icon: <HomeRoundedIcon />, link: "/" },
    { label: "Help Center", icon: <HelpRoundedIcon />, onClick: handleInfoOpen },
    { label: "Chat", icon: <MessageRoundedIcon />, link: "/chat" },
    { label: "Chat History", icon: <StorageRoundedIcon />, link: "/summary" },
  ];

  const authItems = [
    { label: "Signup", icon: <PersonAddAltRoundedIcon />, link: "/signup" },
    { label: "Login", icon: <LoginRoundedIcon />, link: "/login" },
  ];

  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar className="toolbar">
          {/* Left Section: Logo */}
          <div className="navbar-left">
            <Link to="/" className="navbar-logo-link">
              <img src={logo} alt="Medi Home Logo" className="navbar-logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-right desktop-nav">
            {menuItems.map((item, index) => (
              <Tooltip title={item.label} arrow key={index}>
                <IconButton
                  component={item.link ? Link : "button"}
                  to={item.link}
                  onClick={item.onClick}
                  className={`navbar-icon ${
                    location.pathname === item.link ? "active-icon" : ""
                  }`}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            ))}

            {/* Divider */}
            <div className="navbar-divider"></div>

            {/* Signup and Login Buttons */}
            {authItems.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.link}
                className={`navbar-button bordered ${
                  location.pathname === item.link ? "active-button" : ""
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="mobile-nav">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>

        {/* Drawer for Mobile View */}
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <div
            className="drawer-menu"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {/* Main Menu */}
            <List className="drawer-list">
              {menuItems.map((item, index) => (
            <ListItem
            button
            component={item.link ? Link : "div"}
            to={item.link}
            onClick={item.onClick}
            key={index}
            className={`drawer-item ${
              location.pathname === item.link ? "active-item" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            <IconButton className="drawer-icon">
              {item.icon}
            </IconButton>
            <ListItemText primary={item.label} />
          </ListItem>
          
              ))}
            </List>

            {/* Footer (Signup and Login) */}
            <div className="drawer-footer">
              {authItems.map((item, index) => (
                <ListItem
                  button
                  component={Link}
                  to={item.link}
                  key={index}
                  className={`drawer-item ${
                    location.pathname === item.link ? "active-item" : ""
                  }`}
                >
                  <IconButton className="drawer-icon">{item.icon}</IconButton>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </div>
          </div>
        </Drawer>
      </AppBar>

      {/* Info Modal */}
      <InfoModal isOpen={isInfoModalOpen} onClose={handleInfoClose} />
    </>
  );
}
