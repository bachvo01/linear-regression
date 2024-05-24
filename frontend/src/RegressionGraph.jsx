import React, { useEffect, useState } from "react";
import Papa from 'papaparse'
import { Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import csv from '/data/Salary_Data.csv'
import './graph.scss'


function RegressionGraph() {
    const [data, setData] = useState([])
    const [regressionLine, setRegressionLine] = useState([])

    useEffect(() => {
        fetch(csv)
            .then(response => response.text())
            .then(text => {
                const parsedData = []
                Papa.parse(text, {
                    header: true,
                    dynamicTyping: true,
                    step: (results, parser) => {
                        parsedData.push({
                            x: results.data.YearsofExperience,
                            y: results.data.Salary,
                        })
                        if(parsedData.length >= 500) {
                            parser.abort();
                            setData(parsedData)
                            computeRegressionLine(parsedData)
                        }
                    },
                    complete: () => {
                        if (parsedData.length < 500) {
                          setData(parsedData);
                          computeRegressionLine(parsedData);
                        }
                      },
                })
            })
    })

    const computeRegressionLine = (data) => {
        // Simple linear regression calculation
        const n = data.length;
        const sumX = data.reduce((sum, point) => sum + point.x, 0);
        const sumY = data.reduce((sum, point) => sum + point.y, 0);
        const sumXY = data.reduce((sum, point) => sum + point.x * point.y, 0);
        const sumX2 = data.reduce((sum, point) => sum + point.x * point.x, 0);

        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        const regressionLine = data.map((point) => ({
        x: point.x,
        y: intercept + slope * point.x,
        }));
        setRegressionLine(regressionLine);
    }

    // Plugin to customize background
    const backgroundPlugin = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart) => {
            const { ctx, width, height } = chart;
            ctx.save();
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);
            ctx.restore();
        }
    };

    const chartData = {
        datasets: [
          {
            label: 'Actual Data',
            data: data.map((point) => ({ x: point.x, y: point.y })),
            backgroundColor: '#A4B1CD',
          },
          {
            label: 'Regression Line',
            data: regressionLine.map((point) => ({ x: point.x, y: point.y })),
            borderColor: '#9FEF00',
            borderWidth: 2,
            type: 'line',
            fill: false,
            showLine: true,
          },
        ],
      };

      const options = {
        respnsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                        family: 'monospace'
                    },
                    color: '#A4B1CD'
                }
            }
        },
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'Years of Experience',
              color: '#A4B1CD'
            },
            ticks: {
                color: '#A4B1CD'
            },
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: true,
            }
          },
          y: {
            title: {
              display: true,
              text: 'Salary',
              color: '#A4B1CD'
            },
            ticks: {
                color: '#A4B1CD'
            }
          },
        },
      };
    
      return (
        <div className="graph-container">
          <Scatter data={chartData} options={options} />
        </div>
      );
}

export default RegressionGraph