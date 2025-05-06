import { Col, Row } from "antd";
import React from "react";
import { AuthLayoutInterface } from "../utilities/interfaces";
import { AppLogoWhite } from "../utilities/svg";

const AuthLayout: React.FC<AuthLayoutInterface> = ({ Children }) => {
  return (
    <div className="authlayout">
      <Row>
        <Col lg={12} md={12}>
          <div className="authleft-side">
            <div className="p-30">
              <AppLogoWhite />
              <div className="subtitle-auth">
                <h1>Digital banking management platform</h1>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={12} md={12}>
          {Children}
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
