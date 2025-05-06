import ReactApexChart from "react-apexcharts";
import { DonutChartProps } from "../../utilities/interfaces";

const PieChart: React.FC<DonutChartProps> = ({ title, data }) => {
  const series = data.map((item) => item.value);
  const colors = data.map((item) => item.color);
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
      fontFamily: "inherit",
    },
    labels: [], // We'll handle labels separately for better control
    colors: colors,
    legend: {
      show: false, // Hide default legend, we'll create our own
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      colors: ["#fff"],
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
          background: "transparent",
          labels: {
            show: false,
          },
        },
        expandOnClick: false,
      },
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: "12px",
        fontFamily: "inherit",
      },
      y: {
        formatter: function (value: number) {
          return value + "%";
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
      active: {
        filter: {
          type: "none",
        },
      },
    },
    grid: {
      padding: {
        top: 0,
        bottom: 0,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  };
  return (
    <div className="donut-chart">
      {title && <h3 className="donut-chart__title">{title}</h3>}

      <div className="donut-chart__container">
        <div className="donut-chart__chart">
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            height={175}
            width="100%"
          />
        </div>

        <div className="donut-chart__legend">
          {data.map((item, index) => (
            <div key={index} className="donut-chart__legend-item">
              <div
                className="donut-chart__legend-color"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="donut-chart__legend-name">{item.name}</span>
              <span className="donut-chart__legend-value">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
