import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button, ButtonGroup, Form } from "../../components";
import { createCabin } from "../../services/apiCabins";

const CreateCabin = () => {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createCabin,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label htmlFor="name">Cabin Name</Form.Label>
        <Form.Input type="text" id="name" name="name" {...register("name")} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="maxCapacity">Maximum Capacity</Form.Label>
        <Form.Input
          type="number"
          default="1"
          id="maximumCapmaxCapacityacity"
          name="maxCapacity"
          {...register("maxCapacity")}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="regularPrice">Price</Form.Label>
        <Form.Input
          type="number"
          id="regularPrice"
          name="regularPrice"
          defaultValue={0}
          {...register("regularPrice")}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="discount">Discount</Form.Label>
        <Form.Input
          type="number"
          id="discount"
          name="discount"
          defaultValue={0}
          {...register("discount")}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Textarea
          id="description"
          name="description"
          {...register("description")}
        />
      </Form.Group>
      <ButtonGroup>
        <Button $variant="secondary" type="reset">
          Cancel
        </Button>
        <Button type="submit" $w="full">
          Create
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default CreateCabin;
