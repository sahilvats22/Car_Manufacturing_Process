import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import $ from "jquery";
import "orgchart";
import "orgchart/dist/css/jquery.orgchart.min.css"; // Import orgchart CSS
import "./App.css";
import { cst, generateRandomData } from "./constant";
import Header from "./Header";
import Trial from "./Trial";

const OrgChartContainer = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const ds = cst;

    const oc = $("#chart-container").orgchart({
      data: ds,
      nodeContent: "title",
      direction: "l2r",
      pan: true,
    });

    setChartData(ds);
  }, []);

  useEffect(() => {
    if (chartData) {
      $(".orgchart .node").each(function () {
        const node = $(this);

        node.hover(
          function () {
            const tooltip = $("<div class='tooltip'></div>");
            $("body").append(tooltip);
            const chartCanvas = $("<canvas width='200' height='200'></canvas>");
            tooltip.append(chartCanvas);

            const nodeOffset = node.offset();
            const nodeWidth = node.outerWidth();
            const nodeHeight = node.outerHeight();

            tooltip.css({
              left: nodeOffset.left + nodeWidth + 10,
              top: nodeOffset.top - 10,
            });

            const randomData = generateRandomData();
            const myChart = new Chart(
              chartCanvas[0].getContext("2d"),
              randomData
            );
          },
          function () {
            $(".tooltip").remove();
          }
        );
      });
    }
  }, [chartData]);
  function generateRandomData() {
    return {
      type: "bar",
      data: {
        labels: ["Positive", "Negative", "Comments"],
        datasets: [
          {
            label: "# of Reviews",
            data: [
              getRandomInt(1000, 20000),
              getRandomInt(1000, 20000),
              getRandomInt(1000, 20000),
            ],
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
    <Header/>
    <div id="chart-container" className="chart-container"></div>
    <Trial/>
    </>
  );
};

export default OrgChartContainer;
