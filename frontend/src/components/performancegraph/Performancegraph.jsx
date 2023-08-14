import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
//Author: MAHBUB


function ShowPerformanceGraph() {
  // useEffect(() => {
  //   const ctx = "performanceChart";
  //   var performanceChart =  new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //       datasets: [{
  //         label: 'Performance Rating',
  //         data: [75, 80, 85, 90, 88, 92, 89, 95, 93, 91, 87, 82],
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         borderWidth: 2,
  //         pointRadius: 5,
  //         pointHoverRadius: 7,
  //         fill: true
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //           max: 100
  //         }
  //       }
  //     }
  //   });
  //   return () => {
  //     performanceChart.destroy();
  //   };
  // }, []);

  return (
    <div>
      {/* <canvas id="performanceChart"></canvas> */}
      <canvas
        data-mdb-chart="line"
        data-mdb-dataset-label="Traffic"
        data-mdb-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
        data-mdb-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"
      ></canvas>
    </div>
  );
};

export default ShowPerformanceGraph;
