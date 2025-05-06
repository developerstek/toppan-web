import type React from "react";
import { ExtractedDataSVG } from "../../utilities/svg";
import InfoRow from "../../components/InfoRow/InfoRow";
import ScanImages from "../../components/ScanImages/ScanImages";
import { Images } from "../../utilities/images";

const ScanDocument: React.FC = () => {
  return (
    <>
      <div className="main_div_user_information">
        <div className="inner_div_user_information">
          <div className="header_div_user_information">
            <div className="header_icon_div">
              <ExtractedDataSVG />
            </div>
            <h2>Extracted data</h2>
          </div>
          <div className="card_div_user_information">
            <h3 className="session_info_title card-sub-title">OCR</h3>
            <div className="session_info_content">
              <div className="inner_session_info_content">
                <InfoRow label="First name" value="John" />
                <InfoRow label="D.O.B" value="24-08-1992" />
                <InfoRow label="Expiry date" value="24-08-2020" />
                <InfoRow label="Verification status" value="Approved" />
              </div>
            </div>
          </div>
          <div className="card_div_user_information">
            <h3 className="session_info_title card-sub-title">Barcode data</h3>
            <div className="session_info_content">
              <div className="inner_session_info_content">
                <InfoRow label="First name" value="John" />
                <InfoRow label="D.O.B" value="24-08-1992" />
                <InfoRow label="Father’s name" value="Steward maxwell" />
                <InfoRow label="Verification status" value="Approved" />
              </div>
            </div>
          </div>
          <div className="scan-card-wrapper">
            <div className="scan-card-main-title">
              <h3 className="card-sub-title">
                Images to be extracted during the scan
              </h3>
            </div>
            <ScanImages
              documentImage={Images?.croppedImage}
              documentType="Uncropped document"
              onImageClick={() => console.log("Image clicked")}
            />
            <ScanImages
              documentImage={Images?.croppedImage}
              documentType="Cropped document"
              onImageClick={() => console.log("Image clicked")}
            />
            <ScanImages
              documentImage={Images?.verificationImageBorder}
              documentType="Portrait"
              onImageClick={() => console.log("Image clicked")}
            />
            <ScanImages
              documentImage={Images?.scannedSignature}
              documentType="Signature"
              onImageClick={() => console.log("Image clicked")}
            />
            <ScanImages
              documentImage={Images?.verificationImageBorder}
              documentType="Ghost portrait"
              onImageClick={() => console.log("Image clicked")}
            />
            <ScanImages
              documentImage={Images?.scannedBarcode}
              documentType="Barcode"
              onImageClick={() => console.log("Image clicked")}
            />
          </div>
          <h3 className="bottom-card-title card-sub-title">
            Document Verification Checks
          </h3>
          <div className="card_div_user_information">
            <h3 className="session_info_title card-sub-title small">
              Image Quality
            </h3>
            <div className="session_info_content">
              <div className="inner_session_info_content bottom-border">
                <InfoRow label="Focus" value="Verified" />
                <InfoRow label="Glares" value="Non verified" />
                <InfoRow label="Portrait" value="Verified" />
                <InfoRow label="Bounds" value="Non verified" />
                <InfoRow label="Perspective" value="Verified" />
                <InfoRow label="Resolution" value="Verified" />
              </div>
            </div>
          </div>
          <div className="card_div_user_information">
            <h3 className="session_info_title card-sub-title small">
              Security Check
            </h3>
            <div className="session_info_content">
              <div className="inner_session_info_content bottom-border">
                <InfoRow label="Digital signature check" value="Non verified" />
                <InfoRow label="Page number" value="Non verified" />
                <InfoRow label="Image patterns" value="Verified" />
                <InfoRow label="Liveness" value="Non verified" />
                <InfoRow label="Barcode format" value="Verified" />
                <InfoRow label="Photo embedding" value="Verified" />
                <InfoRow label="Portrait comparison" value="Non verified" />
                <InfoRow label="IPI" value="Verified" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScanDocument;
