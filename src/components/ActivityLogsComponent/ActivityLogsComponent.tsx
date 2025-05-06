import React from "react";
import { ActivityLogsComponentProps } from "../../utilities/interfaces";

const ActivityLogsComponent: React.FC<ActivityLogsComponentProps> = ({
  Data,
}) => {
  return (
    <div className="activity_logs_details">
      <div className="activity_logs_header">
        <h4 className="activity_logs_title">{Data?.title}</h4>
        <p className="activity_logs_date">{Data?.date}</p>
      </div>
      <div className="activity_logs_body">
        <p className="activity_logs_dec">{Data?.desp}</p>
        <p className="activity_logs_title">
          Action by :{" "}
          <span className="activity_logs_dec">{Data?.action_by}</span>
        </p>
        <p className="activity_logs_title">
          Device : <span className="activity_logs_dec">{Data?.device}</span>
        </p>
        {Data?.pre_value ? (
          <p className="activity_logs_title pre-value">
            Previous value:{" "}
            <span className="activity_logs_dec">{Data?.pre_value}</span>
          </p>
        ) : (
          ""
        )}
        {Data?.new_value ? (
          <p className="activity_logs_title new-value">
            New values:{" "}
            <span className="activity_logs_dec">{Data?.new_value}</span>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ActivityLogsComponent;
