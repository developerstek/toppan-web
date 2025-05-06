import { Modal } from "antd";
import React from "react";
import { modalProp } from "../../utilities/interfaces";

const FileViewerModal: React.FC<modalProp> = (props) => {
  return (
    <div>
      <Modal
        title=""
        className="file_viewer_modal"
        open={props?.isModalOpen}
        centered
        onOk={props?.handleOk}
        onCancel={props?.handleCancel}
        footer={false}
      >
        <div className="modal_body_file_viewer">{props?.ModalBody}</div>
      </Modal>
    </div>
  );
};

export default FileViewerModal;
