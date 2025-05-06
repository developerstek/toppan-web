import React from "react";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import CustomerHeader from "../../components/CustomerHeader/CustomerHeader";
import { CustomTable } from "../../components/CustomTable/CustomTable";
import {
  allCustomersApprovedData,
  allCustomersBlockedData,
  allCustomersData,
  allCustomersFlaggedData,
  allCustomersRejectedData,
  allCustomersUnderReviewData,
  columnsAllCustomers,
} from "../../utilities/data";

const AllCustomers: React.FC = () => {
  const items = [
    {
      label: "Pending",
      key: "1",
      children: (
        <div>
          <CustomerHeader />
          <div className="pt-20">
            <CustomTable
              columns={columnsAllCustomers}
              dataSource={allCustomersData}
            />
          </div>
        </div>
      ),
    },
    {
      label: "Approved",
      key: "2",
      children: (
        <div>
          <CustomerHeader />
          <div className="pt-20">
            <CustomTable
              columns={columnsAllCustomers}
              dataSource={allCustomersApprovedData}
            />
          </div>
        </div>
      ),
    },
    {
      label: "Rejected",
      key: "3",
      children: (
        <div>
          <CustomerHeader />
          <div className="pt-20">
            <CustomTable
              columns={columnsAllCustomers}
              dataSource={allCustomersRejectedData}
            />
          </div>
        </div>
      ),
    },
    {
      label: "Under Review",
      key: "4",
      children: (
        <div>
          <CustomerHeader />
          <div className="pt-20">
            <CustomTable
              columns={columnsAllCustomers}
              dataSource={allCustomersUnderReviewData}
            />
          </div>
        </div>
      ),
    },
    {
      label: "Blocked",
      key: "5",
      children: (
        <div>
          <CustomerHeader />
          <div className="pt-20">
            <CustomTable
              columns={columnsAllCustomers}
              dataSource={allCustomersBlockedData}
            />
          </div>
        </div>
      ),
    },
    {
      label: "Flagged",
      key: "6",
      children: (
        <div>
          <CustomerHeader />
          <div className="pt-20">
            <CustomTable
              columns={columnsAllCustomers}
              dataSource={allCustomersFlaggedData}
            />
          </div>
        </div>
      ),
    },
  ];
  const handleTabChange = (key: string) => {
    console.log("Tab changed to:", key);
  };

  return (
    <div className="main_div_all_customers">
      <h3>Customer management</h3>
      <CustomTabs items={items} onChange={handleTabChange} />
    </div>
  );
};

export default AllCustomers;
