import React from "react";
import {
  Container,
  Group,
  Label,
  Input,
  Textarea,
  Submit,
  Error,
} from "./style";

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Form.Group = function FormGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Form.Input = React.forwardRef(function FormInput(
  { children, ...restProps },
  ref
) {
  return (
    <Input ref={ref} {...restProps}>
      {children}
    </Input>
  );
});

Form.Textarea = React.forwardRef(function FormTextarea(
  { children, ...restProps },
  ref
) {
  return (
    <Textarea ref={ref} {...restProps}>
      {children}
    </Textarea>
  );
});

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

export default Form;
