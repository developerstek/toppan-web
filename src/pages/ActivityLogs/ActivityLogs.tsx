import React from "react";
import ActivityLogsComponent from "../../components/ActivityLogsComponent/ActivityLogsComponent";
import { ActivityLogsSvg } from "../../utilities/svg";
import { Images } from "../../utilities/images";
import { acvitiyLogData, verificationData } from "../../utilities/data";
import { Col, Row } from "antd";

const ActivityLogs: React.FC = () => {
  return (
    <div className="activity_logs_page">
      <div className="activity_logs_page_header">
        <div className="activity_logs_page_svg">
          <ActivityLogsSvg />
        </div>
        <h2 className="activity_logs_page_title">Activity Logs</h2>
      </div>
      {acvitiyLogData?.map((item, index) => {
        return (
          <div className="activity_logs_page_card" key={index}>
            <ActivityLogsComponent key={index} Data={item} />
          </div>
        );
      })}

      <Row gutter={[16, 16]}>
        {verificationData?.map((val) => {
          return (
            <Col lg={12} md={12} sm={24} xs={24}>
              <p
                className={`verification_para ${
                  val?.status == "new"
                    ? "verification_para_2"
                    : "verification_para_1"
                }`}
              >
                {val?.status == "new"
                  ? "New verification"
                  : "Previous verification"}
              </p>
              <div className="verification_div">
                <div className="img_div">
                  <img
                    className={val?.status == "previous" ? "blur_img" : ""}
                    src={val?.imageUrl}
                    alt="verification image"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = Images?.personImg;
                    }}
                  />
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ActivityLogs;
