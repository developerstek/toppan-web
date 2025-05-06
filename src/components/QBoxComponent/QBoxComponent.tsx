import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { QBoxProps } from "../../utilities/interfaces";

const QBoxComponent: React.FC<QBoxProps> = ({
  question,
  answer,
  icon,
  button,
  answerTitle = "Answer",
}) => {
  return (
    <div className="qbox-card">
      <div className="qbox-card-inner">
        <span className="qbox-ques">{question}</span>
        <div className="qbox-wrap">
          <div className="qbox-outer">
            {icon && <div className="qbox-icon">{icon}</div>}
            <div className="qbox-content">
              <span className="qbox-ans-title">{answerTitle}</span>
              <span className="qbox-ans">{answer}</span>
            </div>
          </div>
          {button && (
            <CustomButton
              type="default"
              htmlType="submit"
              variant="outlined"
              color="primary"
              icon={button.icon}
              iconPosition="end"
              text={button.text}
              onClick={button.onClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QBoxComponent;
