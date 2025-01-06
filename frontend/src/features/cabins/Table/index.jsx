import {
  Container,
  Header,
  HeaderItem,
  Row,
  Img,
  Cabin,
  Price,
  Discount,
} from "./style";

const Table = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Table.Header = function TableHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};
Table.HeaderItem = function TableHeaderItem({ children, ...restProps }) {
  return <HeaderItem {...restProps}>{children}</HeaderItem>;
};
Table.Row = function TableRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Table.Img = function TableImg({ children, ...restProps }) {
  return <Img {...restProps}>{children}</Img>;
};
Table.Cabin = function TableCabin({ children, ...restProps }) {
  return <Cabin {...restProps}>{children}</Cabin>;
};
Table.Price = function TablePrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};
Table.Discount = function TableDiscount({ children, ...restProps }) {
  return <Discount {...restProps}>{children}</Discount>;
};

export default Table;
