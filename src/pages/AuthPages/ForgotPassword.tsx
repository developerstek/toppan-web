import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Input } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import { AuthForgetPasswordFromSubmit } from "../../utilities/interfaces";
import { AuthForgetPasswordSchema } from "../../utilities/schemas";
import { BackArrowSvg } from "../../utilities/svg";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AuthForgetPasswordSchema),
  });
  const onSubmit = (data: AuthForgetPasswordFromSubmit) => {
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
          <h1>Forget password</h1>
        </div>
        <p>
          Enter the email or phone number associated with your account to
          receive a 4-digit verification code
        </p>
        <Form
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <Form.Item
            label="Email address"
            required
            validateStatus={errors.email ? "error" : ""}
            help={errors.email?.message}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter your email address" {...field} />
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

export default ForgotPassword;
