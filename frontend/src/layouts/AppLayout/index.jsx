import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Main } from "./style";
import { Header, Sidebar } from "..";
import { Container as MainContainer } from "../../components/";

const AppLayout = () => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Main>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Main>
    </Container>
  );
};

export default AppLayout;
