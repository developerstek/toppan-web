import { Progress } from "antd";
import React from "react";
import { RiskScoreComponentProps } from "../../utilities/interfaces";

const RiskScoreComponent: React.FC<RiskScoreComponentProps> = ({ Data }) => {
  const getPriorityClass = () => {
    switch (Data?.priority) {
      case "High":
        return "priority-high";
      case "Medium":
        return "priority-medium";
      case "Low":
        return "priority-low";
      default:
        return "priority-medium";
    }
  };

  return (
    <div className={`scan-progress-container`}>
      <div className="scan-progress-header">
        <span className="scan-progress-title">{Data?.title}</span>
        <span className={`scan-progress-priority ${getPriorityClass()}`}>
          {Data?.priority}
        </span>
      </div>
      <div className="scan-progress-bar-container">
        <Progress percent={Data?.percentage} showInfo={false} strokeWidth={8} />
        <span className="scan-progress-percentage">{Data?.percentage}%</span>
      </div>
    </div>
  );
};

export default RiskScoreComponent;
