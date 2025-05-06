import React from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Form, Input, Row, Select } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ProfileFormData } from "../../utilities/interfaces";
import { ProfileEditSchema } from "../../utilities/schemas";
import ProfilePictureUpdater from "../../components/ProfilePictureUpdater/ProfilePictureUpdater";
import { Images } from "../../utilities/images";
import { BackArrowSVG } from "../../utilities/svg";

const SettingEditProfile: React.FC = () => {
  const navigate = useNavigate();
  //   const [_profileImage, setProfileImage] = React.useState<string>(
  //     "/placeholder.svg?height=100&width=100"
  //   );

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(ProfileEditSchema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "John@gmail.com",
      phone: "12085550112",
      designation: "General Manager - Management",
      language: "English",
      dateFormat: "dd/mm/yy",
      timeZone: "Pacific Time - US & canada",
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
    // Handle form submission logic here
    // Show success message
    // Navigate back to profile page
    navigate("/settings/profile");
  };

  const handleBack = () => {
    navigate("/settings/profile");
  };

  //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = e.target.files?.[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setProfileImage(reader.result as string);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  return (
    <>
      <div className="back-button-container">
        <Button type="text" icon={<BackArrowSVG />} onClick={handleBack}>
          Back
        </Button>
      </div>
      <div className="setting-edit-profile">
        <Form
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
          className="edit-profile-form"
        >
          <div className="profile-picture-section">
            <div className="profile-picture-container">
              <ProfilePictureUpdater
                imageUrl={Images?.profileImage2}
                onImageChange={(file) => {
                  // Upload logic here
                  console.log("Uploading:", file);
                }}
              />
            </div>
          </div>

          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="First name"
                validateStatus={errors.firstName ? "error" : ""}
                help={errors.firstName?.message}
              >
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter first name" />
                  )}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Last name"
                validateStatus={errors.lastName ? "error" : ""}
                help={errors.lastName?.message}
              >
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter last name" />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Email address"
                validateStatus={errors.email ? "error" : ""}
                help={errors.email?.message}
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter email address" />
                  )}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Phone number"
                validateStatus={errors.phone ? "error" : ""}
                help={errors.phone?.message}
              >
                <Controller
                  name="phone"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <PhoneInput
                      country={"us"}
                      value={value}
                      onChange={onChange}
                      inputClass="phone-input"
                      containerClass="phone-container"
                      buttonClass="country-button"
                      dropdownClass="country-dropdown"
                    />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Designation & department"
                validateStatus={errors.designation ? "error" : ""}
                help={errors.designation?.message}
              >
                <Controller
                  name="designation"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder="Select designation"
                      options={[
                        {
                          value: "General Manager - Management",
                          label: "General Manager - Management",
                        },
                        {
                          value: "Team Lead - Engineering",
                          label: "Team Lead - Engineering",
                        },
                        {
                          value: "Director - Marketing",
                          label: "Director - Marketing",
                        },
                      ]}
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Preferred language"
                validateStatus={errors.language ? "error" : ""}
                help={errors.language?.message}
              >
                <Controller
                  name="language"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder="Select language"
                      options={[
                        { value: "English", label: "English" },
                        { value: "Spanish", label: "Spanish" },
                        { value: "French", label: "French" },
                        { value: "German", label: "German" },
                      ]}
                    />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Date format"
                validateStatus={errors.dateFormat ? "error" : ""}
                help={errors.dateFormat?.message}
              >
                <Controller
                  name="dateFormat"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder="Select date format"
                      options={[
                        { value: "dd/mm/yy", label: "dd/mm/yy" },
                        { value: "mm/dd/yy", label: "mm/dd/yy" },
                        { value: "yy/mm/dd", label: "yy/mm/dd" },
                      ]}
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Time zone"
                validateStatus={errors.timeZone ? "error" : ""}
                help={errors.timeZone?.message}
              >
                <Controller
                  name="timeZone"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder="Select time zone"
                      options={[
                        {
                          value: "Pacific Time - US & canada",
                          label: "Pacific Time - US & canada 5:30am",
                        },
                        {
                          value: "Eastern Time - US & canada",
                          label: "Eastern Time - US & canada 8:30am",
                        },
                        {
                          value: "Central Time - US & canada",
                          label: "Central Time - US & canada 7:30am",
                        },
                        {
                          value: "Mountain Time - US & canada",
                          label: "Mountain Time - US & canada 6:30am",
                        },
                      ]}
                    />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <div className="form-actions">
            <Button type="primary" htmlType="submit" className="update-button">
              Update profile
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SettingEditProfile;
