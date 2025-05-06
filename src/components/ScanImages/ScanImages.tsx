import React from "react";
import { ScanImagesProps } from "../../utilities/interfaces";
import { Images } from "../../utilities/images";

const ScanImages: React.FC<ScanImagesProps> = ({
  documentImage,
  documentType = "ID Card",
  onImageClick,
  status = "passed",
  isVisible = false,
}) => {
  return (
    <div className="scan-card">
      <div className="scan-header">
        <h3>{documentType}</h3>
      </div>
      <div
        className="image-container"
        onClick={onImageClick}
        role="button"
        tabIndex={0}
      >
        <div
          className={`scan-image ${
            documentType.includes("Signature") ||
            documentType.includes("Barcode")
              ? "special-scan"
              : "normal-image"
          }`}
        >
          <img
            src={documentImage}
            alt={`Scanned ${documentType}`}
            className="scanned-image"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = Images?.personImg;
            }}
          />

          {isVisible ? (
            <div
              className={`scanned-image-status ${
                status == "Passed" ? "passed" : "failed"
              }`}
            >
              <span>{status}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ScanImages;
