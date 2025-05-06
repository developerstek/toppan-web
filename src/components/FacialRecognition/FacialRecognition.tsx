import type React from "react";
import { FacialRecognitionAccuracyProps } from "../../utilities/interfaces";

const FacialRecognition: React.FC<FacialRecognitionAccuracyProps> = ({
  successRate,
  failureRate,
}) => {
  return (
    <div className="facial-recognition-wrapper">
      <div className="facial-recognition-header">
        <h3 className="facial-recognition-title">
          Facial recognition accuracy
        </h3>
      </div>
      <div className="facial-recognition-content">
        <div className="facial-recognition-container">
          <div className="bar-container">
            <div className="bar-group">
              <div
                className="bar-filled success"
                style={{ height: `${successRate}%` }}
              ></div>
            </div>
            <div className="bar-group">
              <div className="bar-empty"></div>
              <div
                className="bar-filled failure"
                style={{ height: `${failureRate}%` }}
              ></div>
            </div>
          </div>

          <div className="metrics-container">
            <div className="metric-item">
              <div className="metric-group">
                <div className="metric-dot success"></div>
                <div className="metric-label">Success</div>
              </div>
              <div className="metric-value">{successRate}%</div>
            </div>
            <div className="metric-item">
              <div className="metric-group">
                <div className="metric-dot failure"></div>
                <div className="metric-label">Failure</div>
              </div>
              <div className="metric-value">{failureRate}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacialRecognition;
