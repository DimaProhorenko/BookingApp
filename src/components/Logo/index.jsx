import React from "react";
import { Link } from "react-router-dom";
import { Container, Image } from "./style";

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <Image src="/images/logo-light.png" alt="Wild Oasis" />
      </Link>
    </Container>
  );
};

export default Logo;
