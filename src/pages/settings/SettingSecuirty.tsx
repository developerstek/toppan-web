"use client";

import type React from "react";
import { useState } from "react";
import { Form, Input, Button } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import {
  activeSessions,
  activeSessionsColumns,
  loginHistory,
  loginHistoryColumns,
} from "../../utilities/data";
import { CustomTable } from "../../components/CustomTable/CustomTable";

const SettingSecurity: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Sample data for active sessions

  const handlePasswordUpdate = (values: any) => {
    setLoading(true);
    console.log("Password update values:", values);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      form.resetFields();
      // Show success message
    }, 1500);
  };

  // Tab items
  const tabItems = [
    {
      key: "reset-password",
      label: "Reset password",
      children: (
        <div className="reset-password-form">
          <Form
            form={form}
            layout="vertical"
            onFinish={handlePasswordUpdate}
            requiredMark={false}
          >
            <Form.Item
              name="currentPassword"
              label="Current password"
              rules={[
                {
                  required: true,
                  message: "Please enter your current password",
                },
              ]}
            >
              <Input.Password
                placeholder="Enter current password"
                iconRender={(visible) =>
                  visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item
              name="newPassword"
              label="New password"
              rules={[
                { required: true, message: "Please enter your new password" },
                { min: 8, message: "Password must be at least 8 characters" },
              ]}
            >
              <Input.Password
                placeholder="Enter new password"
                iconRender={(visible) =>
                  visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm password"
              dependencies={["newPassword"]}
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Re-enter your password"
                iconRender={(visible) =>
                  visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="update-password-button"
              >
                Update password
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      key: "trusted-devices",
      label: "Trusted devices list",
      children: (
        <div className="trusted-devices-content">
          <div className="section">
            <h3 className="section-title">Active sessions</h3>
            <CustomTable
              dataSource={activeSessions}
              columns={activeSessionsColumns}
              pagination={false}
            />
          </div>

          <div className="section">
            <h3 className="section-title">Login & access history</h3>
            <CustomTable
              dataSource={loginHistory}
              columns={loginHistoryColumns}
              pagination={false}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="security-header">
        <h3>Security & authentication settings</h3>
      </div>

      <div className="setting-security">
        <div className="security-content">
          <CustomTabs
            items={tabItems}
            defaultActiveKey="reset-password"
            type="card"
          />
        </div>
      </div>
    </>
  );
};

export default SettingSecurity;
