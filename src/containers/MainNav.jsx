import React from "react";
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineUser,
} from "react-icons/hi";
import { HiOutlineHomeModern, HiOutlineCog6Tooth } from "react-icons/hi2";

import { Nav } from "../components";
import {
  BOOKINGS,
  CABINS,
  DASHBOARD,
  SETTINGS,
  USERS,
} from "../constants/routes";

const MainNav = () => {
  return (
    <Nav>
      <Nav.List>
        <Nav.Li>
          <Nav.Link to={DASHBOARD}>
            <HiOutlineHome />
            <span>Home</span>
          </Nav.Link>
        </Nav.Li>
        <Nav.Li>
          <Nav.Link to={BOOKINGS}>
            <HiOutlineCalendar />
            <span>Bookings</span>
          </Nav.Link>
        </Nav.Li>
        <Nav.Li>
          <Nav.Link to={CABINS}>
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </Nav.Link>
        </Nav.Li>
        <Nav.Li>
          <Nav.Link to={USERS}>
            <HiOutlineUser />
            <span>Users</span>
          </Nav.Link>
        </Nav.Li>
        <Nav.Li>
          <Nav.Link to={SETTINGS}>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </Nav.Link>
        </Nav.Li>
      </Nav.List>
    </Nav>
  );
};

export default MainNav;
