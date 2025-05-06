import React, { useState } from "react";
import { BackArrowSvg } from "../../utilities/svg";
import { useNavigate } from "react-router-dom";
import { Images } from "../../utilities/images";
import { Button } from "antd";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import UserInformation from "../UserInformation/UserInformation";
import ProfileHistory from "../ProfileHistory/ProfileHistory";
import ActivityLogs from "../ActivityLogs/ActivityLogs";
import ScanDocument from "../ScanDocument/ScanDocument";
import FacialVerification from "../FacialVerification/FacialVerification";
import AmlResults from "../AmlResults/AmlResults";
import AdditionalDocument from "../AdditionalDocument/AdditionalDocument";

const CustomersDetailPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("1");

  const navigate = useNavigate();

  const items = [
    {
      label: "User information",
      key: "1",
      children: (
        <div>
          <UserInformation />
        </div>
      ),
    },
    {
      label: "Activity log",
      key: "2",
      children: (
        <div>
          <ActivityLogs />
        </div>
      ),
    },
    {
      label: "Profile history",
      key: "3",
      children: (
        <div>
          <ProfileHistory />
        </div>
      ),
    },
    {
      label: "Scan document",
      key: "4",
      children: (
        <div>
          <ScanDocument />
        </div>
      ),
    },
    {
      label: "Facial verification",
      key: "5",
      children: (
        <div>
          <FacialVerification />
        </div>
      ),
    },
    {
      label: "AML results",
      key: "6",
      children: (
        <div>
          <AmlResults />
        </div>
      ),
    },
    {
      label: "Additional document",
      key: "7",
      children: (
        <div>
          <AdditionalDocument />
        </div>
      ),
    },
  ];
  const handleTabChange = (key: string) => {
    console.log("Tab changed to:", key);
    setActiveTab(key);
  };

  return (
    <div className="main_div_customer_details">
      <div className="back_button_div">
        <div className="icon_div" onClick={() => navigate(-1)}>
          <BackArrowSvg />
        </div>
        <p>Back</p>
      </div>
      <div className="main_div_profile_section">
        <div className="inner_profile_section">
          <div className="img_div">
            <img
              src={Images?.customerProfile}
              alt="profile"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = Images?.personImg;
              }}
            />
          </div>
          <h3>Darrell steward</h3>
          <div className="verify_badge">
            <p>Verified</p>
          </div>
        </div>
        <div className="main_div_btn_section">
          <Button
            className="edit_btn_customer"
            onClick={() => {
              switch (activeTab) {
                case "4": // Scan document tab
                  navigate(`/edit/scan-document/${activeTab}`);
                  break;
                case "7": // Additional document tab
                  navigate(`/edit/additional-document/${activeTab}`);
                  break;
                case "1": // Additional document tab
                  navigate(`/edit/customer-profile/${activeTab}`);
                  break;
                default:
                  return;
              }
            }}
          >
            Edit Profile
          </Button>
          <Button className="verification_btn_customer">Verification</Button>
          <Button className="block_btn_customer">Block</Button>
        </div>
      </div>
      <div className="pt-20">
        <CustomTabs items={items} onChange={handleTabChange} />
      </div>
    </div>
  );
};

export default CustomersDetailPage;
