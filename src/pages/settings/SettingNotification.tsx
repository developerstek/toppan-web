import React from "react";
import { Collapse, Switch } from "antd";
import { NotificationGroup } from "../../utilities/interfaces";
import { SettingNotificationData } from "../../utilities/data";
import { ArrowDownNotificationSvg, ArrowUpSvgIcon } from "../../utilities/svg";

const { Panel } = Collapse;

const SettingNotification: React.FC = () => {
  // State to manage notification settings
  const [notificationGroups, setNotificationGroups] = React.useState<
    NotificationGroup[]
  >(SettingNotificationData);

  // Handle toggle change
  const handleToggleChange = (
    groupKey: string,
    itemKey: string,
    checked: boolean
  ) => {
    setNotificationGroups(
      notificationGroups.map((group) => {
        if (group.key === groupKey) {
          return {
            ...group,
            items: group.items.map((item) => {
              if (item.key === itemKey) {
                return { ...item, enabled: checked };
              }
              return item;
            }),
          };
        }
        return group;
      })
    );
  };

  return (
    <>
      <div className="notification-header">
        <h4>Notification Preferences</h4>
      </div>
      <div className="setting-notification">
        <div className="notification-content">
          <Collapse
            bordered={false}
            expandIcon={(isActive) =>
              isActive ? <ArrowDownNotificationSvg /> : <ArrowUpSvgIcon />
            }
            expandIconPosition="end"
            className="notification-collapse"
          >
            {notificationGroups.map((group) => (
              <Panel
                header={group.title}
                key={group.key}
                className="notification-panel"
              >
                {group.items.map((item) => (
                  <div key={item.key} className="notification-item">
                    <span className="notification-label">{item.label}</span>
                    <Switch
                      checked={item.enabled}
                      onChange={(checked) =>
                        handleToggleChange(group.key, item.key, checked)
                      }
                      className={
                        item.enabled ? "switch-enabled" : "switch-disabled"
                      }
                    />
                  </div>
                ))}
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default SettingNotification;
