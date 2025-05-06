import React from "react";
import { Progress } from "antd";
import { FacialVerificationScoreComponentProps } from "../../utilities/interfaces";

const FacialVerificationScore: React.FC<
  FacialVerificationScoreComponentProps
> = ({ Data }) => {
  return (
    <div className="FacialVerificationScore">
      <div className="FacialVerificationScore-percentage">
        <p>{Data?.title}</p>
        <span className="progress-percentage">{Data?.percentage}%</span>
      </div>
      <Progress percent={Data?.percentage} strokeWidth={8} showInfo={false} />
    </div>
  );
};

export default FacialVerificationScore;
