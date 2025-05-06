import React from "react";
import { InfoRowProps } from "../../utilities/interfaces";
import { Col, Row } from "antd";
import { VerificationStatus } from "../../utilities/svg";

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <div className="session-info-row">
    <Row>
      <Col lg={12} md={12}>
        <div className={`session-info-label ${label === "Verification status" ? "verification-label" : ""}`}>{label}
          {label === "Verification status" && <VerificationStatus />}
        </div>
      </Col>
      <Col lg={12} md={12}>
        <div className="session-info-value">
          {
            value === "Approved" ? (
              <span className="span-status approved-status">Approved</span>
            ) : value === "Verified" ? (
              <span className="span-status verified-status">Verified</span>
            ) : value === "Non verified" ? (
              <span className="span-status non-verified-status">Non verified</span>
            ) : value === "Reject" ? (
              <span className="span-status reject-status">Reject</span>
            ) : value === "Rejected" ? (
              <span className="span-status reject-status">Rejected</span>
            ) : value === "Match" ? (
              <span className="span-status match-status">Match</span>
            ) : value === "No Match" ? (
              <span className="span-status no-match-status">No Match</span>
            ) : value === "Review Needed" ? (
              <span className="span-status review-needed-status">Review Needed</span>
            ) : value === "Medium" ? (
              <span className="span-status medium-status">Medium</span>
            ) : (
              value
            )}</div>
      </Col>
    </Row>
  </div>
);

export default InfoRow;
