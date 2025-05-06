import React from "react";
import ReportingList from "../../components/ReportingList/ReportingList";
import { Col, Row } from "antd";
import { ReportingListingData } from "../../utilities/data";

const ReportingModule: React.FC = () => {
  return (
    <div className="reporting_module_main_div">
      <h1>Reporting Module</h1>
      <div className="reporting_listing_div">
        <Row gutter={[16, 16]}>
          {ReportingListingData?.map((item, index) => {
            return (
              <Col lg={6}>
                <ReportingList
                  key={index}
                  id={index}
                  title={item?.title}
                  icon={item?.icon}
                  desp={item?.desp}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ReportingModule;
