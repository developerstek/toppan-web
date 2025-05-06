import type React from "react";
import {
  GreenDocIconSVG,
  PreviewEyeIconSVG,
  SessionInfoSvg,
} from "../../utilities/svg";
import { useState } from "react";
import ViewDocument from "../../components/ViewDocument/ViewDocument";
import { Images } from "../../utilities/images";
import FileViewerModal from "../../components/FileViewerModal/FileViewerModal";
import QBoxComponent from "../../components/QBoxComponent/QBoxComponent";
import { Typography } from "antd";

const AdditionalDocument: React.FC = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const showModal2 = () => {
    setFileUrl(Images?.DummyPdf);
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <div className="main_div_user_information">
      <div className="inner_div_user_information">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <SessionInfoSvg />
          </div>
          <h2>Additional document</h2>
        </div>
        <div className="card_div_user_information">
          <Typography.Title level={3} className="big-blue-heading">
            Section 1 of 2
          </Typography.Title>
          <QBoxComponent
            question="What is the user's role?"
            answer="Admin"
            answerTitle="Answer"
          />
          <QBoxComponent
            question="What is the user's role?"
            answerTitle="Driving license"
            answer="01 Page"
            icon={<GreenDocIconSVG />}
            button={{
              text: "Preview driving license",
              icon: <PreviewEyeIconSVG />,
              onClick: () => showModal2(),
            }}
          />
          <Typography.Title level={3} className="big-blue-heading">
            Section 2 of 2
          </Typography.Title>
          <QBoxComponent
            question="What is the user's role?"
            answerTitle="Driving license"
            answer="01 Page"
            icon={<GreenDocIconSVG />}
            button={{
              text: "Preview driving license",
              icon: <PreviewEyeIconSVG />,
              onClick: () => showModal2(),
            }}
          />
        </div>

        <FileViewerModal
          isModalOpen={isModalOpen2}
          ModalBody={<ViewDocument fileUrl={fileUrl} />}
          handleOk={handleOk2}
          handleCancel={handleCancel2}
        />
      </div>
    </div>
  );
};

export default AdditionalDocument;
