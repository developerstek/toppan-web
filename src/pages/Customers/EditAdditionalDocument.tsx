import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { Col, Form, Input, Radio, Row, Typography } from "antd";
import {
  EditScanDocIconSVG,
  GreenDocIconSVG,
  PreviewEyeIconSVG,
} from "../../utilities/svg";
// import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdditionalDocumentEditFromSubmit } from "../../utilities/interfaces";
import { AdditionalDocumentEditSchema } from "../../utilities/schemas";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../../components/CustomButton/CustomButton";
import FileUpload from "../../components/FileUpload/FileUpload";
import {
  notificationType,
  toastMessage,
} from "../../components/ToastMessage/ToastMessage";
import QBoxComponent from "../../components/QBoxComponent/QBoxComponent";
import { Images } from "../../utilities/images";
import FileViewerModal from "../../components/FileViewerModal/FileViewerModal";
import ViewDocument from "../../components/ViewDocument/ViewDocument";

const EditAdditionalDocument: React.FC = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const showModal2 = () => {
    setFileUrl(Images?.DummyPdf);
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  // const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AdditionalDocumentEditSchema),
    defaultValues: {
      title: "User Management",
      question1: "What is the user's role?",
      answer1: "admin",
      question2: "What is the access level?",
      answer2: "editor",
      question3: "Driving license required?",
      question4: "What is the user's role?",
      comment:
        "gravida Nam tincidunt amet, hendrerit elit. nibh urna vel maximus In eget sit venenatis Nullam elit efficitur. viverra dui lorem. malesuada lobortis, id amet, ",
    },
  });
  const onSubmit = (data: AdditionalDocumentEditFromSubmit) => {
    console.log(data);
    // Handle login logic here
    toastMessage(
      notificationType.success,
      "Profile has been updated successfully!"
    );
    // navigate("/security-questions");
  };

  return (
    <>
      <Row className="main_row justify-content-center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <div className="main_div_user_information main_div_edit_customer_profile">
            <div className="inner_div_user_information">
              <div className="header_div_user_information">
                <div className="header_icon_div">
                  <EditScanDocIconSVG />
                </div>
                <h2>Additional document</h2>
              </div>
              <Form
                layout="vertical"
                onFinish={handleSubmit(onSubmit)}
                autoComplete="off"
              >
                <Row gutter={15}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Typography.Title level={3} className="big-blue-heading">
                      Section 1 of 2
                    </Typography.Title>
                    <Form.Item
                      label="Title"
                      validateStatus={errors.title ? "error" : ""}
                      help={errors.title?.message}
                    >
                      <Controller
                        name="title"
                        control={control}
                        render={({ field }) => (
                          <Input placeholder="Enter title here" {...field} />
                        )}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <div className="border-wrap">
                      <Form.Item
                        label="Question 1"
                        validateStatus={errors.question1 ? "error" : ""}
                        help={errors.question1?.message}
                      >
                        <Controller
                          name="question1"
                          control={control}
                          render={({ field }) => (
                            <Input
                              placeholder="Enter question here"
                              {...field}
                            />
                          )}
                        />
                      </Form.Item>

                      <Form.Item
                        label="Previous response"
                        validateStatus={errors.answer1 ? "error" : ""}
                        help={errors.answer1?.message}
                      >
                        <Controller
                          name="answer1"
                          control={control}
                          render={({ field }) => (
                            <Radio.Group
                              defaultValue="admin"
                              {...field}
                              className="numbered-radio-group"
                            >
                              <Radio.Button value="admin">
                                Admin{" "}
                                <span className="previous-response">
                                  Previous response
                                </span>
                              </Radio.Button>
                              <Radio.Button value="editor">Editor</Radio.Button>
                              <Radio.Button value="viewer">Viewer</Radio.Button>
                              <Radio.Button value="moderator">
                                Moderator
                              </Radio.Button>
                            </Radio.Group>
                          )}
                        />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <div className="border-wrap">
                      <Form.Item
                        label="Question 2"
                        validateStatus={errors.question2 ? "error" : ""}
                        help={errors.question2?.message}
                      >
                        <Controller
                          name="question2"
                          control={control}
                          render={({ field }) => (
                            <Input
                              placeholder="Enter question here"
                              {...field}
                            />
                          )}
                        />
                      </Form.Item>

                      <Form.Item
                        label="Previous response"
                        validateStatus={errors.answer2 ? "error" : ""}
                        help={errors.answer2?.message}
                      >
                        <Controller
                          name="answer2"
                          control={control}
                          render={({ field }) => (
                            <Radio.Group
                              defaultValue="admin"
                              {...field}
                              className="numbered-radio-group"
                            >
                              <Radio.Button value="admin">Admin</Radio.Button>
                              <Radio.Button value="editor">
                                Editor{" "}
                                <span className="previous-response">
                                  Previous response
                                </span>
                              </Radio.Button>
                              <Radio.Button value="viewer">Viewer</Radio.Button>
                              <Radio.Button value="moderator">
                                Moderator
                              </Radio.Button>
                            </Radio.Group>
                          )}
                        />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Typography.Title level={3} className="big-blue-heading">
                      Section 2 of 2
                    </Typography.Title>
                    <div className="border-wrap">
                      <Form.Item
                        label="Question 3"
                        validateStatus={errors.question3 ? "error" : ""}
                        help={errors.question3?.message}
                      >
                        <Controller
                          name="question3"
                          control={control}
                          render={({ field }) => (
                            <Input
                              placeholder="Enter question here"
                              {...field}
                            />
                          )}
                        />
                      </Form.Item>

                      <QBoxComponent
                        question="Previous document"
                        answerTitle="Driving license"
                        answer="01 Page"
                        icon={<GreenDocIconSVG />}
                        button={{
                          text: "Preview driving license",
                          icon: <PreviewEyeIconSVG />,
                          onClick: () => showModal2(),
                        }}
                      />
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
                                label: "Document upload area",
                              }}
                              onUploadSuccess={(file) => {
                                console.log("Upload success:", file);
                                onChange(file);
                              }}
                              onUploadError={(error) =>
                                console.log("Upload error:", error)
                              }
                              onFilesDropped={(files) => onChange(files)}
                            />
                          )}
                        />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <div className="border-wrap">
                      <Form.Item
                        label="Question 4"
                        validateStatus={errors.question4 ? "error" : ""}
                        help={errors.question4?.message}
                      >
                        <Controller
                          name="question4"
                          control={control}
                          render={({ field }) => (
                            <Input
                              placeholder="Enter question here"
                              {...field}
                            />
                          )}
                        />
                      </Form.Item>
                      <Form.Item
                        label=""
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
                    </div>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <div className="btn-wrap">
                      <CustomButton
                        type="default"
                        variant="outlined"
                        color="primary"
                        text="Cancel"
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <div className="btn-wrap btn-right">
                      <CustomButton
                        type="primary"
                        htmlType="submit"
                        text="Update profile"
                      />
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
      <FileViewerModal
        isModalOpen={isModalOpen2}
        ModalBody={<ViewDocument fileUrl={fileUrl} />}
        handleOk={handleOk2}
        handleCancel={handleCancel2}
      />
    </>
  );
};

export default EditAdditionalDocument;
