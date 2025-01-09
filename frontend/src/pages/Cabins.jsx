import { useState } from "react";
import CreateCabin from "../features/cabins/CreateCabin";
import CabinTable from "../features/cabins/Table/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { Button } from "../components";

function Cabins() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Row $direction="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter</p>
      </Row>
      <CabinTable />
      {!isFormOpen && (
        <Button
          $size="lg"
          onClick={() => setIsFormOpen((prevState) => !prevState)}
        >
          Create Cabin
        </Button>
      )}
      {isFormOpen && <CreateCabin />}
    </>
  );
}

export default Cabins;
