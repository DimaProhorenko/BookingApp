import React from "react";
import { Aside } from "./style";
import MainNav from "../../containers/MainNav";
import { Logo } from "../../components";

const Sidebar = () => {
  return (
    <Aside>
      <Logo />
      <MainNav />
    </Aside>
  );
};

export default Sidebar;
