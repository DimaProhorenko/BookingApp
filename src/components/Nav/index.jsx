import { Container, Li, Link, List } from "./style";

export default function Nav({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Nav.List = function NavList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Nav.Li = function NavLi({ children, ...restProps }) {
  return <Li {...restProps}>{children}</Li>;
};

Nav.Link = function NavLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
