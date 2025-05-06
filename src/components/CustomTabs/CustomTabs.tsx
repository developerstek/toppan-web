import React from "react";
import { Tabs } from "antd";
import { CustomTabsProps } from "../../utilities/interfaces";

const CustomTabs: React.FC<CustomTabsProps> = ({
  items,
  type = "card",
  defaultActiveKey,
  onChange,
}) => {
  return (
    <Tabs
      items={items}
      type={type}
      defaultActiveKey={defaultActiveKey}
      onChange={onChange}
      className="custom_tabs"
    />
  );
};

export default CustomTabs;
