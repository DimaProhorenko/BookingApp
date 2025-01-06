import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { deleteCabin, getAllCabins } from "../../../services/apiCabins";
import { Spinner } from "../../../components";
import Table from ".";
import Row from "./Row";

const CabinTable = () => {
  const { data: cabins, isPending } = useQuery({
    queryKey: ["cabins"],
    queryFn: getAllCabins,
  });

  if (isPending) {
    return <Spinner />;
  }

  return (
    <Table>
      <Table.Header>
        <Table.HeaderItem></Table.HeaderItem>
        <Table.HeaderItem>Cabin</Table.HeaderItem>
        <Table.HeaderItem>Capacity</Table.HeaderItem>
        <Table.HeaderItem>Price</Table.HeaderItem>
        <Table.HeaderItem>Discount</Table.HeaderItem>
        <Table.HeaderItem></Table.HeaderItem>
      </Table.Header>
      {cabins.data.map((cabin) => (
        <Row key={cabin._id} cabin={cabin} />
      ))}
    </Table>
  );
};

export default CabinTable;
