import type React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import { MenuItem, SettingLayoutProps } from "../utilities/interfaces";
import {
  PersonSvgIcon,
  SecuritySettingsIcon,
  SettingsNotificationIcon,
  TrashIconSvg,
} from "../utilities/svg";

const { Sider, Content } = Layout;

// Type for menu items

const SettingsLayout: React.FC<SettingLayoutProps> = ({ Children }) => {
  const location = useLocation();

  // Menu items configuration
  const menuItems: MenuItem[] = [
    {
      key: "profile",
      icon: <PersonSvgIcon />,
      label: "User profile",
      path: "/settings/profile",
    },
    {
      key: "security",
      icon: <SecuritySettingsIcon />,
      label: "Security & authentication",
      path: "/settings/security",
    },
    {
      key: "notifications",
      icon: <SettingsNotificationIcon />,
      label: "Notification preferences",
      path: "/settings/notifications",
    },
  ];

  // Get the current active key based on the path
  const getSelectedKey = () => {
    const path = location.pathname;
    const item = menuItems.find((item) => path.includes(item.key));
    return item ? item.key : "profile";
  };

  return (
    <>
      <h4 className="settings-title">Settings</h4>

      <Layout className="settings-layout">
        <Sider className="settings-sider" width={280}>
          <Menu
            mode="vertical"
            selectedKeys={[getSelectedKey()]}
            className="settings-menu"
          >
            {menuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon} className="menu-item">
                <NavLink to={item.path}>{item.label}</NavLink>
              </Menu.Item>
            ))}
          </Menu>

          <Button
            danger
            type="text"
            icon={<TrashIconSvg />}
            className="deactivate-button"
          >
            Deactivate account
          </Button>
        </Sider>

        <Content className="settings-content">{Children}</Content>
      </Layout>
    </>
  );
};

export default SettingsLayout;
