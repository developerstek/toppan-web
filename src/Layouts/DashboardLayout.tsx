import React from "react";
import { DashboardLayoutInterface } from "../utilities/interfaces";
import { Layout } from "antd";
import NavHeader from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const { Content } = Layout;

const DashboardLayout: React.FC<DashboardLayoutInterface> = ({ Children }) => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <div className="pd-50">
          <NavHeader />
          <Content>{Children}</Content>
        </div>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
