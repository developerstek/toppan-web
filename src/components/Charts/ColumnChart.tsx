import ReactApexChart from "react-apexcharts";
import { ColumnChartProps } from "../../utilities/interfaces";

const ColumnChart = ({
  data,
  categories,
  highlightedMonth,
}: ColumnChartProps) => {
  const seriesData = data.map((value, index) => ({
    x: categories[index],
    y: value,
    fillColor: index === highlightedMonth ? "#3DC2B2" : "#3DC2B2",
  }));

  const options = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 1,
        columnWidth: "70%",
        distributed: true,
        dataLabels: {
          position: "top",
        },
        colors: {
          ranges: [
            {
              from: 0,
              to: 100,
              color: "#DEF5F2", // Default color
            },
          ],
          backgroundBarColors: [],
          backgroundBarOpacity: 1,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          fontSize: "12px",
          colors: "#64748b",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value: number) => Math.round(value).toString(),
        style: {
          fontSize: "12px",
          colors: "#94a3b8",
        },
      },
      max: 80,
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex }: any) {
        const value = series[seriesIndex][dataPointIndex];
        if (dataPointIndex === highlightedMonth) {
          return `
            <div class="apexcharts-tooltip-custom" style="padding: 8px 12px; background: white; border: 1px solid #3DC2B2; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <div style="font-size: 11px; color: #64748b;">Aug 20, 01:12:16am</div>
              <div style="font-size: 13px; font-weight: 500; text-align: left; margin-top: 2px; color: #3DC2B2;">${value} Users</div>
            </div>
          `;
        }
        return "";
      },
    },
    grid: {
      borderColor: "#f5f5f5",
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
          opacity: 0.5,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  };

  return (
    <ReactApexChart
      options={options as any}
      series={[{ name: "Users", data: seriesData }]}
      type="bar"
      height={300}
    />
  );
};

export default ColumnChart;
