import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Main } from "./style";
import { Header, Sidebar } from "..";

const AppLayout = () => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default AppLayout;
