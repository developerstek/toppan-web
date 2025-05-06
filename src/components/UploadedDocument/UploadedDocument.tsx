import React from "react";
import { FilePDFIconSVG } from "../../utilities/svg";
import { UploadedDocumentProps } from "../../utilities/interfaces";

const UploadedDocument: React.FC<UploadedDocumentProps> = ({
  fileName,
  fileSize,
  uploadTime,
  onClick,
}) => {
  return (
    <div className="uploaded-document" onClick={onClick}>
      <div className="document-icon">
        <FilePDFIconSVG />
      </div>
      <div className="document-info">
        <div className="document-name">{fileName}</div>
        <div className="document-meta">
          {fileSize} • {uploadTime}
        </div>
      </div>
    </div>
  );
};

export default UploadedDocument;
