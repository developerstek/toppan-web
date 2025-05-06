import React from "react";
import { ReportingListProps } from "../../utilities/interfaces";
import { useNavigate } from "react-router-dom";

const ReportingList: React.FC<ReportingListProps> = ({
  icon,
  title,
  desp,
  id,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/reporting/report-details/${id}`);
  };
  return (
    <div className="main_div_reporting_list_comp" onClick={handleClick}>
      <div className="inner_div_reporting_list">
        <div className="icon_div">{icon}</div>
        <h3>{title}</h3>
        <p>{desp}</p>
      </div>
    </div>
  );
};

export default ReportingList;
