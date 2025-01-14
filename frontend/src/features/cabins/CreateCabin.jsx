import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button, ButtonGroup, Form } from "../../components";
import { createCabin } from "../../services/apiCabins";

const CreateCabin = () => {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createCabin,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  const { errors } = formState;

  console.log(errors);

  const onSubmit = (data) => {
    mutate(data);
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Group>
        <Form.Label htmlFor="name">Cabin Name</Form.Label>
        <Form.Input
          type="text"
          id="name"
          name="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
        {errors.name && <Form.Error>{errors.name.message}</Form.Error>}
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="maxCapacity">Maximum Capacity</Form.Label>
        <Form.Input
          type="number"
          default="1"
          id="maximumCapmaxCapacityacity"
          name="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Minimum 1",
            },
            max: {
              value: 8,
              message: "Maximum 8",
            },
          })}
        />
        {errors.maxCapacity && (
          <Form.Error>{errors.maxCapacity.message}</Form.Error>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="regularPrice">Price</Form.Label>
        <Form.Input
          type="number"
          id="regularPrice"
          name="regularPrice"
          defaultValue={0}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 0,
              message: "Can not be negative",
            },
          })}
        />
        {errors.regularPrice && (
          <Form.Error>{errors.regularPrice.message}</Form.Error>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="discount">Discount</Form.Label>
        <Form.Input
          type="number"
          id="discount"
          name="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            min: {
              value: 0,
              message: "Can not be negative",
            },
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
        {errors.discount && <Form.Error>{errors.discount.message}</Form.Error>}
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Textarea
          id="description"
          name="description"
          {...register("description", {
            required: "This field is required",
          })}
        />
        {errors.description && (
          <Form.Error>{errors.description.message}</Form.Error>
        )}
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
