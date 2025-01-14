import React from "react";
import { Button } from "..";

const ButtonSpinner = ({ children, isLoading = false, ...restProps }) => {
  return (
    <Button disabled={isLoading} {...restProps}>
      {children}
    </Button>
  );
};

export default ButtonSpinner;
