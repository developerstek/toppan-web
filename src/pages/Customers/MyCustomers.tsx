import React from "react";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import CustomerHeader from "../../components/CustomerHeader/CustomerHeader";
import { CustomTable } from "../../components/CustomTable/CustomTable";
import {
  columnsMyCustomers,
  myCustomersApprovedData,
  myCustomersBlockedData,
  myCustomersData,
  myCustomersFlaggedData,
  myCustomersRejectedData,
  myCustomersUnderReviewData,
} from "../../utilities/data";
import { useNavigate } from "react-router-dom";

const MyCustomers: React.FC = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Pending",
      key: "1",
      children: (
        <div>
          <CustomerHeader />
          <div className="pt-20">
            <CustomTable
              columns={columnsMyCustomers}
              dataSource={myCustomersData}
              scroll={{ x: 1366 }}
              onRow={(record: any) => ({
                onClick: () => {
                  navigate(`/my-customers/${record.id}`);
                },
                style: { cursor: "pointer" },
              })}
              rowKey="id"
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
              columns={columnsMyCustomers}
              dataSource={myCustomersApprovedData}
              scroll={{ x: 1300 }}
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
              columns={columnsMyCustomers}
              dataSource={myCustomersRejectedData}
              scroll={{ x: 1300 }}
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
              columns={columnsMyCustomers}
              dataSource={myCustomersUnderReviewData}
              scroll={{ x: 1300 }}
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
              columns={columnsMyCustomers}
              dataSource={myCustomersBlockedData}
              scroll={{ x: 1300 }}
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
              columns={columnsMyCustomers}
              dataSource={myCustomersFlaggedData}
              scroll={{ x: 1300 }}
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

export default MyCustomers;
