import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Input, Select } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { AuthSecurityQuestion } from "../../utilities/schemas";
import { SecurityQuestionSubmit } from "../../utilities/interfaces";
import CustomButton from "../../components/CustomButton/CustomButton";
import { securityQuestionData } from "../../utilities/data";
import { useNavigate } from "react-router-dom";

const SecurityQuesSetup: React.FC = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AuthSecurityQuestion),
  });
  const onSubmit = (data: SecurityQuestionSubmit) => {
    console.log(data);
    navigate("/otp-verification");
  };

  return (
    <div className="loginpage">
      <div className="loginpage_container">
        <h1>Security questions setup</h1>
        <p>
          Your security question will help you regain access to your account &
          rest authentication. If you cannot receive authentication codes or
          access your security code.
        </p>
        <Form
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <Form.Item
            label="Security Question"
            required
            validateStatus={errors.securityQuestion ? "error" : ""}
            help={errors.securityQuestion?.message}
          >
            <Controller
              name="securityQuestion"
              control={control}
              render={({ field }) => (
                <Select
                  allowClear
                  options={securityQuestionData}
                  placeholder="Select security question"
                  {...field}
                />
              )}
            />
          </Form.Item>
          <Form.Item
            label="Security Answer"
            required
            validateStatus={errors.securityAnswer ? "error" : ""}
            help={errors.securityAnswer?.message}
          >
            <Controller
              name="securityAnswer"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter your answer" {...field} />
              )}
            />
          </Form.Item>

          <CustomButton type="primary" htmlType="submit" text="Next" block />
        </Form>
      </div>
    </div>
  );
};

export default SecurityQuesSetup;
