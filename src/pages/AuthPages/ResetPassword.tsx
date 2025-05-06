import React from "react";
import { BackArrowSvg } from "../../utilities/svg";
import { Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthResetPasswordFromSubmit } from "../../utilities/interfaces";
import { AuthResetPasswordSchema } from "../../utilities/schemas";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AuthResetPasswordSchema),
  });
  const onSubmit = (data: AuthResetPasswordFromSubmit) => {
    console.log(data);
    // Handle login logic here
    navigate("/otp-verification");
  };

  return (
    <div className="loginpage">
      <div className="loginpage_container">
        <div className="header_auth_pages">
          <div onClick={() => navigate(-1)} className="back_arrow_svg">
            <BackArrowSvg />
          </div>
          <h1>Reset password</h1>
        </div>
        <p>
          Your new password must be different from the previously used password
        </p>
        <Form
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <Form.Item
            label="Password"
            required
            validateStatus={errors.password ? "error" : ""}
            help={errors.password?.message}
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password placeholder="Enter your password" {...field} />
              )}
            />
          </Form.Item>
          <Form.Item
            label="Confirm password"
            required
            validateStatus={errors.newPassword ? "error" : ""}
            help={errors.newPassword?.message}
          >
            <Controller
              name="newPassword"
              control={control}
              render={({ field }) => (
                <Input.Password
                  placeholder="Confirm your password"
                  {...field}
                />
              )}
            />
          </Form.Item>

          <CustomButton
            type="primary"
            htmlType="submit"
            text="Continue"
            block
          />
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
