import type React from "react";
import { ProfileHistorySvg } from "../../utilities/svg";
import { Images } from "../../utilities/images";
import { Col, Row } from "antd";

const ProfileHistory: React.FC = () => {
  return (
    <div className="profile-history-container">
      <div className="profile-history-header">
        <div className="profile-history-icon">
          <ProfileHistorySvg />
        </div>
        <h2 className="profile-historytitle">Profile history</h2>
      </div>

      <div className="timeline">
        {/* Login event */}
        <div className="timeline-item">
          <div className="timeline-content">
            <p>
              <span>Darrell steward</span> logged out on <span>10:25 PM</span>
            </p>
            <span className="timestamp">50m ago</span>
          </div>
        </div>
        <Row gutter={[40, 40]} className="timeline-item">
          <Col lg={12} md={12} sm={24} xs={24}>
            {/* Face picture verification */}
            <div className="timeline-box">
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <p>
                      <span>Live face picture</span> taken from iPhone <span>10:25 PM</span>
                    </p>
                    <span className="timestamp">50m ago</span>
                  </div>

                  <span className="status accepted">Accepted</span>
                </div>
                <div className="image-container">
                  <img
                    src={Images?.verificationImage}
                    alt="Face verification"
                    className="verification-image"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = Images?.personImg;
                    }}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            {/* Document picture verification */}
            <div className="timeline-box">
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <p>
                      <strong>Live doc front picture</strong> taken from iPhone
                      10:25 PM
                    </p>
                    <span className="timestamp">50m ago</span>
                  </div>
                  <span className="status pending">Pending</span>
                </div>
                <div className="image-container">
                  <img
                    src={Images?.cardFrontImage}
                    alt="Document verification"
                    className="verification-image"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = Images?.personImg;
                    }}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* AML Screening */}
        <div className="timeline-item">
          <div className="timeline-content">
            <p className="timeline-title">Profile has been screened for AML Compliance.
              <img
                src={Images?.searchImage}
                alt="searchImage" width={16} height={16}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = Images?.personImg;
                }}
              />
            </p>
            <div className="timeline-icon">
              <img
                src={Images?.alertImage}
                alt="alertImage" width={16} height={16}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = Images?.personImg;
                }}
              />
              <p>
                <span>Risk level:</span> Low
              </p>
            </div>

            <div className="timeline-icon">
              <img
                src={Images?.clipboardImage}
                alt="clipboardImage" width={16} height={16}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = Images?.personImg;
                }}
              />
              <p>
                <span>Watchlist matches:</span> Yes
              </p>
            </div>
            <span className="timestamp">50m ago</span>
          </div>
        </div>

        {/* Additional documents */}
        <div className="timeline-item">
          <div className="timeline-content">
            <p className="timeline-title">
              Additional documents have been submitted for Enhanced Due
              Diligence (EDD).
              <img
                src={Images?.docImage}
                alt="docImage" width={16} height={16}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = Images?.personImg;
                }}
              />
            </p>
            <div className="timeline-icon">
              <img
                src={Images?.pinImage}
                alt="pinImage" width={16} height={16}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = Images?.personImg;
                }}
              />
              <p>
                <span>Review outcome:</span> Approved
              </p>
            </div>

            <div className="timeline-icon">
              <img
                src={Images?.folderImage}
                alt="folderImage" width={16} height={16}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = Images?.personImg;
                }}
              />
              <p>
                <span>Submitted documents:</span> Utility bill
              </p>
            </div>

            <span className="timestamp">50m ago</span>
          </div>
        </div>

        {/* Compliance review */}
        <div className="timeline-item">
          <div className="timeline-content">
            <p><span>Profile</span> has been flagged for compliance review.</p>
            <span className="timestamp">50m ago</span>
          </div>
        </div>

        {/* Rejection notice */}
        <div className="timeline-item">
          <div className="timeline-content">
            <p>
              Submission was rejected due to <span>mismatched details</span>
              . Please review the issue and resubmit.
            </p>
            <span className="timestamp">50m ago</span>
          </div>
        </div>

        {/* Agent handling */}
        <div className="timeline-item">
          <div className="timeline-content">
            <p className="timeline-title">Profile was previously handled by:</p>
            <div className="timeline-icon">
              <img
                src={Images?.agentImage}
                alt="AgentImage" width={16} height={16}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = Images?.personImg;
                }}
              />
              <p>
                <span>Agent:</span> John doe
              </p>
            </div>
            <span className="timestamp">50m ago</span>
          </div>
        </div>

        {/* Manager handling */}
        <div className="timeline-item">
          <div className="timeline-content">
            <p className="timeline-title">Profile was previously handled by:</p>
            <div className="timeline-icon">
              <img
                src={Images?.agentImage}
                alt="AgentImage" width={16} height={16}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = Images?.personImg;
                }}
              />
              <p>
                <span>Manager:</span> Jane smith
              </p>
            </div>
            <span className="timestamp">50m ago</span>
          </div>
        </div>

        {/* Compliance tracking */}
        <div className="timeline-item">
          <div className="timeline-content">
            <p className="timeline-title">Compliance tracking records are available for review. 📑</p>
            <div className="timeline-icon">
              <img
                src={Images?.linkImage}
                alt="linkImage" width={16} height={16}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = Images?.personImg;
                }}
              />
              <p>
                <span>Reference ID:</span> #AL-20250313
              </p>
            </div>
            <div className="timeline-icon">
              <img
                src={Images?.linkImage}
                alt="linkImage" width={16} height={16}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = Images?.personImg;
                }}
              />
              <p>
                <span>View details:</span> <a href="#" className="details-link">
                  Click here
                </a>
              </p>
            </div>
            <span className="timestamp">50m ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHistory;
