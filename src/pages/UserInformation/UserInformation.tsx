import React from "react";
import RiskScoreComponent from "../../components/RiskScoreComponent/RiskScoreComponent";
import { individualRiskData } from "../../utilities/data";
import {
  CumulativeRiskSvg,
  RiskCompSvg,
  SessionInfoSvg,
  UserInformationSvg,
} from "../../utilities/svg";
import { Col, Progress, Row } from "antd";
import InfoRow from "../../components/InfoRow/InfoRow";

const UserInformation: React.FC = () => {
  return (
    <div className="main_div_user_information">
      <div className="inner_div_user_information">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <RiskCompSvg />
          </div>
          <h2>Individual risk score</h2>
        </div>
        <div className="card_div_user_information">
          <Row gutter={[16, 16]}>
            {individualRiskData?.map((item, index) => (
              <Col lg={8} md={24}>
                <RiskScoreComponent key={index} Data={item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="inner_div_user_information cumulative_risk_score">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <CumulativeRiskSvg />
          </div>
          <h2>Cumulative risk score</h2>
        </div>
        <div className="card_div_user_information">
          <div className="content_wrap">
            <p>
              The risk score is considered low due to a stable market
              environment
            </p>
            <div className="badge_risk_score">Low</div>
          </div>
          <div className="progress_bar_div">
            <Progress percent={30} strokeWidth={8} showInfo={false} />
            <span className="progress-percentage">30%</span>
          </div>
        </div>
      </div>

      <div className="inner_div_user_information cumulative_risk_score">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <SessionInfoSvg />
          </div>
          <h2>Session & device info </h2>
        </div>
        <div className="card_div_user_information">
          <div className="session_info_content">
            <div className="inner_session_info_content">
              <InfoRow label="Browser detail" value="Google chorme" />
              <InfoRow label="IP address" value="Web" />
            </div>
            <div className="inner_session_info_content">
              <InfoRow label="Device details" value="192.168.1.1" />
              <InfoRow label="Geolocation" value="New york, USA" />
            </div>
          </div>
        </div>
      </div>

      <div className="inner_div_user_information cumulative_risk_score">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <UserInformationSvg />
          </div>
          <h2>User information</h2>
        </div>
        <div className="card_div_user_information">
          <div className="session_info_content">
            <div className="inner_session_info_content">
              <InfoRow label="Full name" value="Darrell steward" />
              <InfoRow label="D.O.B" value="24-08-1992" />
              <InfoRow label="Expiry date" value="06-02-2025" />
            </div>
            <div className="inner_session_info_content">
              <InfoRow label="Gender" value="Male" />
              <InfoRow label="Device details" value="Apple iPhone 14 pro" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
