import { Form, Input } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { AuthLoginSchema } from "../../utilities/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFromSubmit } from "../../utilities/interfaces";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AuthLoginSchema),
  });
  const onSubmit = (data: LoginFromSubmit) => {
    console.log(data);
    // Handle login logic here
    navigate("/security-questions");
  };

  return (
    <div className="loginpage">
      <div className="loginpage_container">
        <h1>Sign in</h1>
        <p>Welcome to TOPPAN!</p>
        <Form
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            required
            validateStatus={errors.userName ? "error" : ""}
            help={errors.userName?.message}
          >
            <Controller
              name="userName"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter username" {...field} />
              )}
            />
          </Form.Item>
          <Form.Item
            label="Temporary password"
            required
            validateStatus={errors.temporaryPassword ? "error" : ""}
            help={errors.temporaryPassword?.message}
          >
            <Controller
              name="temporaryPassword"
              control={control}
              render={({ field }) => (
                <Input.Password placeholder="Enter your password" {...field} />
              )}
            />
          </Form.Item>

          <Form.Item
            label="New password"
            required
            validateStatus={errors.newPassword ? "error" : ""}
            help={errors.newPassword?.message}
          >
            <Controller
              name="newPassword"
              control={control}
              render={({ field }) => (
                <Input.Password placeholder="Enter your password" {...field} />
              )}
            />
          </Form.Item>

          <CustomButton type="primary" htmlType="submit" text="Next" block />
        </Form>
      </div>
    </div>
  );
};

export default Login;
