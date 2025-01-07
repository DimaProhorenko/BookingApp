import React from "react";
import Table from ".";
import { formatCurrency } from "../../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../../services/apiCabins";
import toast from "react-hot-toast";

const Row = ({ cabin, deleteHandler }) => {
  const queryClient = useQueryClient();

  const { isPending, mutate: handleDeleteCabin } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: ({ message }) => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success(message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { _id, name, image, maxCapacity, regularPrice, discount } = cabin;

  return (
    <Table.Row>
      <Table.Img
        src="https://images.pexels.com/photos/2527556/pexels-photo-2527556.jpeg"
        alt={name}
      />
      <Table.Cabin>{name}</Table.Cabin>
      <div>up to {maxCapacity} guests</div>
      <Table.Price>{formatCurrency(regularPrice)}</Table.Price>
      <Table.Discount>{formatCurrency(discount)}</Table.Discount>
      <button onClick={() => handleDeleteCabin(_id)}>Delete</button>
    </Table.Row>
  );
};

export default Row;
