import React from "react";
import { InfoRowProps } from "../../utilities/interfaces";
import { VerificationStatus } from "../../utilities/svg";

const InfoRowInline: React.FC<InfoRowProps> = ({ label, value }) => (
  <div className="session-info-row session-info-row-inline">
    <div
      className={`session-info-label ${
        label === "Verification status" ? "verification-label" : ""
      }`}
    >
      {label}
      {label === "Verification status" && <VerificationStatus />}:
    </div>
    <div className="session-info-value">
      {value === "Approved" ? (
        <span className="span-status approved-status">Approved</span>
      ) : value === "Verified" ? (
        <span className="span-status verified-status">Verified</span>
      ) : value === "Non verified" ? (
        <span className="span-status non-verified-status">Non verified</span>
      ) : value === "Reject" ? (
        <span className="span-status reject-status">Reject</span>
      ) : value === "Match" ? (
        <span className="span-status match-status">Match</span>
      ) : value === "No Match" ? (
        <span className="span-status no-match-status">No Match</span>
      ) : (
        value
      )}
    </div>
  </div>
);

export default InfoRowInline;
