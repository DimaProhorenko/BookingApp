import CabinTable from "../features/cabins/Table/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <>
      <Row $direction="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter</p>
      </Row>
      <CabinTable />
    </>
  );
}

export default Cabins;
