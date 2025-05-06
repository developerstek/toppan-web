import { Avatar, Badge, Button, Layout } from "antd";
import React from "react";
import { LayoutSvgIcon, NotificationSvg } from "../../utilities/svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleCollapse } from "../../redux/slices/collapseSlice";
import { Images } from "../../utilities/images";

const { Header } = Layout;

const NavHeader: React.FC = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector(
    (state: RootState) => state.collapse.isCollapsed
  );

  return (
    <Header>
      <div className="headerfixed">
        <div className="header_container">
          <Button
            className="header-icon-faolting"
            type="text"
            icon={collapsed ? <LayoutSvgIcon /> : <LayoutSvgIcon />}
            onClick={() => dispatch(toggleCollapse())}
          />
          <div className="header_title">
            <h2>Welcome! robert</h2>
            <p>Tuesday, 14 january 2025</p>
          </div>
          <div className="badge_container">
            <Badge status="processing" dot={true}>
              <NotificationSvg />
            </Badge>

            <Avatar size={44} src={Images?.ProfileImg} />

            <div className="profile_username">
              <h3>John Doe</h3>
              <p>
                <a href="emailto:john@gmail.com">John@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default NavHeader;
