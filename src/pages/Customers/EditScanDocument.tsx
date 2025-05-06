import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { Col, Form, Input, Row } from "antd";
import { ExtractedDataSVG } from "../../utilities/svg";
// import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserProfileEditFromSubmit } from "../../utilities/interfaces";
import { UserProfileEditSchema } from "../../utilities/schemas";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../../components/CustomButton/CustomButton";
import FileUpload from "../../components/FileUpload/FileUpload";
import {
  notificationType,
  toastMessage,
} from "../../components/ToastMessage/ToastMessage";
import UploadedDocument from "../../components/UploadedDocument/UploadedDocument";
import { Images } from "../../utilities/images";
import FileViewerModal from "../../components/FileViewerModal/FileViewerModal";
import ViewDocument from "../../components/ViewDocument/ViewDocument";

const EditScanDocument: React.FC = () => {
  // const navigate = useNavigate();
  const [fileUrl, setFileUrl] = useState("");
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserProfileEditSchema),
  });
  const onSubmit = (data: UserProfileEditFromSubmit) => {
    console.log(data);
    // Handle login logic here
    toastMessage(
      notificationType.success,
      "Profile has been updated successfully!"
    );
    // navigate("/security-questions");
  };

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

  return (
    <>
      <Row className="main_row justify-content-center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <div className="main_div_user_information main_div_edit_customer_profile">
            <div className="inner_div_user_information">
              <div className="header_div_user_information">
                <div className="header_icon_div">
                  <ExtractedDataSVG />
                </div>
                <h2>Scan document</h2>
              </div>
              <Form
                layout="vertical"
                onFinish={handleSubmit(onSubmit)}
                autoComplete="off"
              >
                <Row gutter={15}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Form.Item
                      label="Upload new document"
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
                              uploadText: "Upload new documents",
                              label: "Existing document upload area",
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
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row gutter={15}>
                      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <h3 className="field-title">Previous documents</h3>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <UploadedDocument
                          fileName="Driving license.pdf"
                          fileSize="443KB"
                          uploadTime="2 seconds ago"
                          onClick={showModal2}
                        />
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <UploadedDocument
                          fileName="Driving license.pdf"
                          fileSize="443KB"
                          uploadTime="2 seconds ago"
                          onClick={showModal2}
                        />
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <UploadedDocument
                          fileName="Driving license.pdf"
                          fileSize="443KB"
                          uploadTime="2 seconds ago"
                          onClick={showModal2}
                        />
                      </Col>
                    </Row>
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
            <FileViewerModal
              isModalOpen={isModalOpen2}
              ModalBody={<ViewDocument fileUrl={fileUrl} />}
              handleOk={handleOk2}
              handleCancel={handleCancel2}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default EditScanDocument;
