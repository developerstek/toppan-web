import React from "react";
import { Form } from "antd";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../../components/CustomButton/CustomButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { AuthOtpVerification } from "../../utilities/schemas";
import { AuthOtpVerificationFromSubmit } from "../../utilities/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { resetTimer, startTimer } from "../../redux/slices/timerSlice";
import OTPInput from "react-otp-input";
import { BackArrowSvg } from "../../utilities/svg";

const OtpVerification: React.FC = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state: RootState) => state.timer.value);

  const handleResend = () => {
    if (timer !== 0) return; // Prevent resending if timer is not expired
    dispatch(resetTimer());
    dispatch(startTimer());
    // Add logic to resend OTP
  };

  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AuthOtpVerification),
  });
  const onSubmit = (data: AuthOtpVerificationFromSubmit) => {
    console.log(data);
    // Handle login logic here
    navigate("/reset-password");
  };

  return (
    <div className="loginpage">
      <div className="loginpage_container">
        <div className="header_auth_pages">
          <div onClick={() => navigate(-1)} className="back_arrow_svg">
            <BackArrowSvg />
          </div>
          <h1>OTP verification</h1>
        </div>
        <p>
          Please enter the OTP you received on
          <span className="colorBlack">sam.marsh@gmail.com</span>
        </p>
        <Form
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <Form.Item
            required
            validateStatus={errors.otp ? "error" : ""}
            help={errors.otp?.message}
          >
            <Controller
              name="otp"
              control={control}
              render={({ field }) => (
                <div className="OtpInput-container mt-40 pb-20">
                  <OTPInput
                    {...field}
                    value={field.value || ""}
                    onChange={(otp) => {
                      field.onChange(otp);
                    }}
                    inputType="tel"
                    numInputs={4}
                    placeholder={"----"}
                    renderInput={(props, index) => (
                      <input
                        {...props}
                        placeholder="-"
                        style={{ marginRight: "1rem", textAlign: "center" }} // Add space between inputs
                        key={index}
                      />
                    )}
                  />
                </div>
              )}
            />
          </Form.Item>
          <div className="OtpInput-container mt-40 pb-20">
            <p className="expire_para">
              Expires in: <span>0:{timer.toString().padStart(2, "0")}</span>
            </p>
            <p className="expire_para">
              Didn’t receive code?{" "}
              <span
                className={timer !== 0 ? "resend_link_color" : "resend_link"}
                onClick={handleResend}
              >
                Resend
              </span>
            </p>

            <CustomButton text="Continue" block htmlType="submit" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default OtpVerification;
