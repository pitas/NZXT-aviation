import ReactApexChart from "react-apexcharts";

const BarGauge = (props) => {
  const options = {
    theme: {
      mode: "dark",
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      min: 0,
      max: 100,
      categories: [1],
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      row: {
        colors: ["#e5e5e5", "transparent"],
        opacity: 0.2,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: [
        function ({ value }) {
          if (value < 60) {
            return "#00FF00";
          } else if (value >= 60 && value < 80) {
            return "#FFA500";
          } else {
            return "#FF0000";
          }
        },
      ],
      opacity: 1,
    },
  };
  const series = [
    {
      data: [props?.data || 0],
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        paddingLeft: "0.8rem",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          width="45px"
          height={10}
        />
        <h3
          style={{
            fontSize: "0.75rem",
            margin: "0",
          }}
        >
          {props?.label || "No Label"}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          marginLeft: "0.75rem",
        }}
      >
        <p
          style={{
            display: "block",
            width: "20px",
            marginTop: "-0.7rem",
          }}
        >
          {props?.data || "0"}
        </p>
        <p
          style={{
            marginTop: "-0.5rem",
            fontSize: "0.55rem",
          }}
        >
          %
        </p>
      </div>
    </div>
  );
};

export default BarGauge;
