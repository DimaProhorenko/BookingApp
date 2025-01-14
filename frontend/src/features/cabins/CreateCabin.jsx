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
      <Form.Row label="name" htmlFor="name" error={errors?.name?.message}>
        <Form.Input
          type="text"
          id="name"
          name="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </Form.Row>
      <Form.Row
        label="Max Capacity"
        htmlFor="maxCapacity"
        error={errors?.maxCapacity?.message}
      >
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
      </Form.Row>
      <Form.Row
        htmlFor="regularPrice"
        label="Regular Price"
        error={errors?.regularPrice?.message}
      >
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
      </Form.Row>
      <Form.Row
        htmlFor="discount"
        label="Discount"
        error={errors?.discount?.message}
      >
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
              +value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </Form.Row>
      <Form.Row
        label="Description"
        htmlFor="description"
        error={errors?.description?.message}
      >
        <Form.Textarea
          id="description"
          name="description"
          {...register("description", {
            required: "This field is required",
          })}
        />
      </Form.Row>

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
