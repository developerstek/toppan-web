import { Button } from "antd";
import React from "react";
import { FilledButtonProps } from "../../utilities/interfaces";

const CustomButton: React.FC<FilledButtonProps> = ({ text, ...restProps }) => {
  return (
    <Button
      {...restProps}
      type={restProps.type || "primary"}
      ghost={false}
      className="filled_btn"
    >
      {text}
    </Button>
  );
};

export default CustomButton;
