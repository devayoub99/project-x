import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

import Logo from "../../assets/icons/logo.svg";

import Container from "../Container/Container";
// import { AdminContext } from "../../utils/AdminContext";
// import { BurgerMenuIcon } from "../../assets/icons";

export default function Navigation({ variant }: { variant?: string }) {
  // const { admin } = useContext(AdminContext);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const linksClass = variant === "over-all" ? classes.whiteText : null;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header
      className={`${classes.header} ${variant ? classes[variant] : null}`}
    >
      <Container variant="spaceBetween">
        <h2>
          <Link to="/" className={classes.link}>
            <img src={Logo} alt="Furniro" className={classes.logo} />
            <span>Furniro</span>
          </Link>
        </h2>
        <div className={classes.burgerIcon} onClick={toggleSidebar}>
          {/* <BurgerMenuIcon fill={variant === "over-all" ? "#fff" : "#000"} /> */}
        </div>
        <>
          {isSidebarOpen ? (
            <div
              className={classes.sidebarOverlay}
              onClick={closeSidebar}
            ></div>
          ) : null}
          <nav>
            <ul
              className={`${classes.sidebar} ${
                isSidebarOpen ? classes.sidebarOpen : ""
              }`}
            >
              <li>
                <Link
                  className={classes.noUnderLine}
                  to="/"
                  onClick={toggleSidebar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={classes.noUnderLine}
                  to="/shop"
                  onClick={toggleSidebar}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className={classes.noUnderLine}
                  to="/about"
                  onClick={toggleSidebar}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={classes.noUnderLine}
                  to="/contact"
                  onClick={toggleSidebar}
                >
                  Contact
                </Link>
              </li>
              {/* {admin ? (
                <li>
                  <Link
                    className={classes.noUnderLine}
                    to="/admin-panel"
                    onClick={toggleSidebar}
                  >
                    لوحة التحكم
                  </Link>
                </li>
              ) : null} */}
            </ul>
          </nav>
        </>

        <nav className={classes.navbarLg}>
          <ul className={classes.sidebarLg}>
            <li>
              <Link className={classes.noUnderLine} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={classes.noUnderLine} to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className={classes.noUnderLine} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={classes.noUnderLine} to="/contact">
                Contact
              </Link>
            </li>
            {/* {admin ? (
              <li>
                <Link className={classes.noUnderLine} to="/admin-panel">
                  لوحة التحكم
                </Link>
              </li>
            ) : null} */}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
