import React from "react";
import ColumnChart from "../../components/Charts/ColumnChart";
import { Button, Col, DatePicker, Row, Select } from "antd";
import {
  columnsCustomer,
  monthFilterData,
  pieChartStatusData,
  tableDataCustomer,
} from "../../utilities/data";
import { CalenderIconSvg, RefreshIconSvg } from "../../utilities/svg";
import PieChart from "../../components/Charts/PieChart";
import FacialRecognition from "../../components/FacialRecognition/FacialRecognition";
import CustomerActions from "../../components/CustomerAction/CustomerAction";
import { CustomTable } from "../../components/CustomTable/CustomTable";

const { RangePicker } = DatePicker;

const Home: React.FC = () => {
  const highlightedMonth = 7;
  const monthlyData = [32, 43, 20, 50, 58, 18, 10, 70, 42, 18, 15, 30];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="home_container">
      <div className="home_header">
        <h2>Dashboard</h2>
        <div className="filters">
          <RangePicker
            size="small"
            prefix={<CalenderIconSvg />}
            suffixIcon={false}
          />
          <Select
            size="small"
            defaultValue="Monthly"
            style={{ width: 120 }}
            allowClear
            options={monthFilterData}
            placeholder="Select filter"
          />
          <Button
            size="small"
            className="refresh_btn"
            icon={<RefreshIconSvg />}
            iconPosition="end"
          >
            Refresh
          </Button>
        </div>
      </div>
      <h2 className="on_boarding_heading">Onboarding applications status</h2>
      <Row gutter={[16, 16]} className="home_row">
        <Col lg={16} md={24}>
          <div className="colum_chart_main_div">
            <div className="column_chart_title">
              <h2>Total Applications</h2>
              <div className="sub_heading">
                <h2>
                  450 <span>New users registers</span>
                </h2>
              </div>
            </div>
            <ColumnChart
              data={monthlyData}
              categories={monthNames}
              highlightedMonth={highlightedMonth}
            />
          </div>
        </Col>
        <Col lg={8} md={24}>
          <div className="pie_chart_container">
            <div className="p-16">
              <PieChart title="Status breakdown" data={pieChartStatusData} />
            </div>
          </div>
        </Col>
      </Row>

      <div className="customer_actions_container">
        <h2 className="on_boarding_heading">Verification metrics</h2>
        <Row gutter={[16, 16]}>
          <Col lg={12} md={24}>
            <FacialRecognition successRate={50} failureRate={30} />
          </Col>
          <Col lg={12} md={24}>
            <CustomerActions
              missingDetailsPercentage={50}
              completeDetailsPercentage={30}
            />
          </Col>
        </Row>
      </div>
      <h2 className="on_boarding_heading">Pending document resubmissions</h2>
      <div className="table_wrapper_home">
        <CustomTable
          columns={columnsCustomer}
          dataSource={tableDataCustomer}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default Home;
