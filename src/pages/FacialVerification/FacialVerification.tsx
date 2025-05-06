import React from "react";
import { FacialverificationSvg } from "../../utilities/svg";
import FacialVerificationScore from "../../components/FacialVerificationScore/FacialVerificationScore";
import ScanImages from "../../components/ScanImages/ScanImages";
import { Col, Row } from "antd";
import {
  FacialVerificationDocData,
  FacialVerificationScoreData,
} from "../../utilities/data";

const FacialVerification: React.FC = () => {
  return (
    <div className="facial-verification-container">
      <div className="facial-verification-header">
        <div className="facial-verification-icon">
          <FacialverificationSvg />
        </div>
        <h2 className="facial_verificationtitle">Facial verification</h2>
      </div>
      <div className="facial-verification-body">
        {FacialVerificationScoreData?.map((item, index) => {
          return (
            <div className="facial-verification-score" key={index}>
              <FacialVerificationScore key={index} Data={item} />
            </div>
          );
        })}

        <Row gutter={[20, 20]}>
          {FacialVerificationDocData?.map((item, index) => {
            return (
              <Col lg={12} md={12} sm={24} xs={24}>
                <ScanImages
                  key={index}
                  documentImage={item?.imageUrl}
                  documentType=""
                  onImageClick={() => console.log("Image clicked")}
                  isVisible={true}
                  status={item?.status}
                />
                <div className="facial-verification-dec">
                  <h6>{item?.type}</h6>
                  <p>{item?.device}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default FacialVerification;
