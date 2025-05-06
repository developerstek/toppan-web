import type React from "react";
import { Avatar, Row, Col, Typography } from "antd";
import { ProfileInfoItemProps } from "../../utilities/interfaces";
import CustomButton from "../../components/CustomButton/CustomButton";
import { EditProfileSvgIcon } from "../../utilities/svg";
import { Images } from "../../utilities/images";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const ProfileInfoItem: React.FC<ProfileInfoItemProps> = ({ label, value }) => (
  <div className="profile-info-item">
    <Text type="secondary" className="profile-info-label">
      {label}
    </Text>
    <Text strong className="profile-info-value">
      {value}
    </Text>
  </div>
);

const ProfileSettings: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="content-header">
        <h3>User profile</h3>
        <CustomButton
          text="Edit Profile"
          icon={<EditProfileSvgIcon />}
          size="middle"
          onClick={() => navigate("/settings/edit-profile")}
        />
      </div>

      <div className="profile-section">
        <div className="profile-picture-section">
          <Avatar size={80} src={Images?.ProfileImg} />
          <h2>Profile picture</h2>
        </div>

        <Row gutter={[48, 24]}>
          <Col xs={24} md={12}>
            <ProfileInfoItem label="Full name" value="John doe" />
          </Col>
          <Col xs={24} md={12}>
            <ProfileInfoItem label="Email address" value="John@gmail.com" />
          </Col>
          <Col xs={24} md={12}>
            <ProfileInfoItem label="Phone number" value="(208) 555-0112" />
          </Col>
          <Col xs={24} md={12}>
            <ProfileInfoItem
              label="Designation & department"
              value="General manager - management"
            />
          </Col>
          <Col xs={24} md={12}>
            <ProfileInfoItem label="Preferred language" value="English" />
          </Col>
          <Col xs={24} md={12}>
            <ProfileInfoItem
              label="Date format"
              value="04/04/2025 - dd/mm/yy"
            />
          </Col>
          <Col xs={24} md={12}>
            <ProfileInfoItem
              label="Time zone"
              value="Pacific time-US & canada 5:30am"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProfileSettings;
