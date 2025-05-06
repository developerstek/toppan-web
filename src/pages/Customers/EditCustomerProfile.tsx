import React from "react";
// import dayjs from 'dayjs';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { DateIconSVG, SelectIconSVG, UserInformationIconSVG } from "../../utilities/svg";
// import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserProfileEditFromSubmit } from "../../utilities/interfaces";
import { UserProfileEditSchema } from "../../utilities/schemas";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../../components/CustomButton/CustomButton";
import FileUpload from "../../components/FileUpload/FileUpload";
import { notificationType, toastMessage } from "../../components/ToastMessage/ToastMessage";
import ProfilePictureUpdater from "../../components/ProfilePictureUpdater/ProfilePictureUpdater";
import { Images } from "../../utilities/images";

const EditCustomerProfile: React.FC = () => {

  // const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserProfileEditSchema),
    defaultValues: {
      fullName: 'Darrell',
      gender: 'male',
      // dob: dayjs('1992-12-12'),
      // expiryDate: dayjs('27 May 2028'),
    }
  });
  const onSubmit = (data: UserProfileEditFromSubmit) => {
    console.log(data);
    // Handle login logic here
    toastMessage(notificationType.success, 'Profile has been updated successfully!');
    // navigate("/security-questions");
  };

  return <>

    <Row className="main_row justify-content-center">
      <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>


        <div className="main_div_user_information main_div_edit_customer_profile">
          <div className="inner_div_user_information">
            <div className="header_div_user_information">
              <div className="header_icon_div">
                <UserInformationIconSVG />
              </div>
              <h2>User information</h2>
            </div>
            <Form
              layout="vertical"
              onFinish={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <Row gutter={15}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <ProfilePictureUpdater
                    imageUrl={Images?.profileImage2}
                    onImageChange={(file) => {
                      // Upload logic here
                      console.log('Uploading:', file);
                    }}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Full name"
                    required
                    validateStatus={errors.fullName ? "error" : ""}
                    help={errors.fullName?.message}
                  >
                    <Controller
                      name="fullName"
                      control={control}
                      render={({ field }) => (
                        <Input placeholder="Enter full name" {...field} />
                      )}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Gender"
                    required
                    validateStatus={errors.gender ? "error" : ""}
                    help={errors.gender?.message}
                  >
                    <Controller
                      name="gender"
                      control={control}
                      render={({ field }) => (
                        <Select
                          placeholder="Select gender"
                          {...field}
                          options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'other', label: 'Other' }
                          ]}
                          suffixIcon={<SelectIconSVG />}
                        // allowClear
                        // clearIcon={<span className="anticon">×</span>}
                        />
                      )}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="DOB"
                    required
                    validateStatus={errors.dob ? "error" : ""}
                    help={errors.dob?.message}
                  >
                    <Controller
                      name="dob"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          placeholder="DD-MM-YYYY"
                          format="DD-MM-YYYY"
                          suffixIcon={<DateIconSVG />}
                          className="custom-datepicker"
                          style={{ width: '100%' }}
                        />
                      )}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Phone Number"
                    validateStatus={errors.phone ? "error" : ""}
                    help={errors.phone?.message}
                  >
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <PhoneInput
                          country={'us'}
                          value={value}
                          onChange={onChange}
                          placeholder="XXX XXXXXXX"
                          inputClass="phone-input"
                          containerClass="phone-container"
                          buttonClass="country-button"
                          dropdownClass="country-dropdown"
                          containerStyle={{
                            width: '100%',
                          }}
                          inputStyle={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                          }}
                        />
                      )}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <Form.Item
                    label="Expiry date"
                    required
                    validateStatus={errors.expiryDate ? "error" : ""}
                    help={errors.expiryDate?.message}
                  >
                    <Controller
                      name="expiryDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          placeholder="DD-MM-YYYY"
                          format="DD MMM YYYY"
                          suffixIcon={<DateIconSVG />}
                          className="custom-datepicker"
                          style={{ width: '100%' }}
                        />
                      )}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <Form.Item
                    label="Comment"
                    validateStatus={errors.comment ? "error" : ""}
                    help={errors.comment?.message}
                  >
                    <Controller
                      name="comment"
                      control={control}
                      render={({ field }) => (
                        <Input.TextArea
                          placeholder="Write description here..."
                          {...field}
                          rows={4}
                          className="custom-textarea"
                        />
                      )}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <Form.Item
                    label="Attach document"
                    validateStatus={errors.attachments ? "error" : ""}
                    help={errors.attachments?.message}
                  >
                    <Controller
                      name="attachments"
                      control={control}
                      render={({ field: { onChange } }) => (
                        <FileUpload
                          uploadUrl="/api/upload"
                          multiple={true}
                          customText={{
                            uploadText: "Upload documents",
                            label: "Document upload area"
                          }}
                          onUploadSuccess={(file) => {
                            console.log('Upload success:', file);
                            onChange(file);
                          }}
                          onUploadError={(error) => console.log('Upload error:', error)}
                          onFilesDropped={(files) => onChange(files)}
                        />
                      )}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <div className="btn-wrap">
                    <CustomButton type="default" variant="outlined" color="primary" text="Cancel" />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <div className="btn-wrap btn-right">
                    <CustomButton type="primary" htmlType="submit" text="Update profile" />
                  </div>
                </Col>
              </Row>

            </Form>


          </div>
        </div>
      </Col>
    </Row></>;
};

export default EditCustomerProfile;
