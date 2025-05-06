import { DatePicker, Input, Select } from "antd";
import React from "react";
import { CalenderIconSvg, SearchIconSvg } from "../../utilities/svg";
import { monthFilterData, riskFilterData } from "../../utilities/data";

const { RangePicker } = DatePicker;

const CustomerHeader: React.FC = () => {
  return (
    <div className="customer_header_main_div">
      <Input
        size="small"
        placeholder="Search by name and ID number"
        prefix={<SearchIconSvg />}
      />
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
      <Select
        size="small"
        defaultValue="High"
        style={{ width: 120 }}
        allowClear
        options={riskFilterData}
        placeholder="Select filter"
      />
    </div>
  );
};

export default CustomerHeader;
