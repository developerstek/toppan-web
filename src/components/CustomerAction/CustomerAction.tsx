import { describeArc } from "../../utilities/helper";
import { CustomerActionsProps } from "../../utilities/interfaces";

const CustomerActions = ({
  missingDetailsPercentage = 50,
  completeDetailsPercentage = 30,
}: CustomerActionsProps) => {
  return (
    <div className="customer-actions-card">
      <h3 className="customer-actions-title">Pending customer actions</h3>

      <div className="customer-actions-content">
        <div className="donut-chart-container">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle
              className="donut-ring"
              cx="60"
              cy="60"
              r="40"
              fill="transparent"
              strokeWidth="12"
            />

            {/* Create a single path for both segments */}
            <path
              className="donut-segment-1"
              d={describeArc(
                60,
                60,
                40,
                0,
                (missingDetailsPercentage / 100) * 360
              )}
              fill="transparent"
              strokeWidth="12"
            />
            <path
              className="donut-segment-2"
              d={describeArc(
                60,
                60,
                40,
                (missingDetailsPercentage / 100) * 360,
                ((missingDetailsPercentage + completeDetailsPercentage) / 100) *
                  360
              )}
              fill="transparent"
              strokeWidth="12"
            />
          </svg>
        </div>

        <div className="customer-actions-legend">
          <div className="legend-item">
            <span className="legend-indicator missing-details"></span>
            <span className="legend-text">Customers with missing details</span>
            <span className="legend-percentage">
              {missingDetailsPercentage}%
            </span>
          </div>
          <div className="legend-item">
            <span className="legend-indicator complete-details"></span>
            <span className="legend-text">Customers with complete details</span>
            <span className="legend-percentage">
              {completeDetailsPercentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerActions;
