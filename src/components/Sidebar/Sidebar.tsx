import { Layout, Menu } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { SideBarData } from "../../utilities/data";
import { AppLogoColored, SingleAppLogoSvg } from "../../utilities/svg";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const collapsed = useSelector(
    (state: RootState) => state.collapse.isCollapsed
  );

  const keyToLinkMap: Record<string, string> = React.useMemo(() => {
    const map: Record<string, string> = {};
    const flattenItems = (items: typeof SideBarData) => {
      for (const item of items) {
        if (item.link) map[item.key] = item.link;
        if (item.children) flattenItems(item.children);
      }
    };
    flattenItems(SideBarData);
    return map;
  }, []);

  const findSelectedKey = React.useCallback(() => {
    let matchedKey = "1"; // default fallback
    let maxMatchLength = 0;

    for (const [key, link] of Object.entries(keyToLinkMap)) {
      if (
        link &&
        location.pathname.startsWith(link) &&
        link.length > maxMatchLength
      ) {
        matchedKey = key;
        maxMatchLength = link.length;
      }
    }

    return matchedKey;
  }, [location.pathname, keyToLinkMap]);

  const selectedKey = findSelectedKey();

  const findOpenKey = (selectedKey: string): string | undefined => {
    for (const item of SideBarData) {
      if (item.children?.some((child) => child.key === selectedKey)) {
        return item.key;
      }
    }
    return undefined;
  };

  const openKey = findOpenKey(selectedKey);

  const handleMenuClick = ({ key }: { key: string }) => {
    const link = keyToLinkMap[key];
    if (link) navigate(link);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={collapsed ? "custom_sider_collapse" : "custom_sider"}
    >
      <div className="layout_logo">
        {collapsed ? <SingleAppLogoSvg /> : <AppLogoColored />}
      </div>

      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        defaultOpenKeys={openKey ? [openKey] : []}
        items={SideBarData}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};

export default Sidebar;
