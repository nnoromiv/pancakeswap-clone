import { Chart as ChartJS, ChartConfiguration, registerables} from "chart.js";
import { chartData, maxValue, minValue, randomData, redOrGreen, redOrGreenGradient, timeUnitInMs, valueRanges } from "./utils";

export function chart(id: string, time : string, previous : number, next : number): void {


    ChartJS.register(...registerables)    

    const data = {
        labels: chartData[time], // Convert to string if necessary
        datasets: [
            {
                // label: 'By Year',
                data: randomData(timeUnitInMs.year,timeUnitInMs.hour),
                fill: true,
                backgroundColor: redOrGreenGradient(previous, next, .5, .07),
                borderColor: redOrGreen(previous, next),                
                borderWidth: 2,
                tension: .2,
                                       
            }
        ]
    }

    const config : ChartConfiguration =  { 
        type: "line",
        data,
        options: {            
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: "category",                    
                    grid: {
                        display: false
                    }
                },
                y: {
                    suggestedMin: Math.round(minValue(chartData[time]) - (valueRanges(chartData[time]) / 3)),
                    suggestedMax: Math.round(maxValue(chartData[time]) + (valueRanges(chartData[time]) / 9)),

                    grid: {
                        display: false
                    },
                    display: false
                }
            },

            elements: {
                point: {
                    radius: 0,
                    hitRadius: 0,
                    hoverRadius: 20
                },
            },

            plugins: {
                legend: {
                    display: false
                },

                tooltip: {
                    enabled: false,
                }
            },

            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            
        }
    }
    
    const chartElement = <HTMLCanvasElement>document.getElementById(id);

    if (chartElement) {

        const existingChart = ChartJS.getChart(chartElement)

        if(existingChart){
            existingChart.destroy()
        }

        new ChartJS(chartElement, config);
    } else {
        console.error(`Element with ID "${id}" not found.`);
    }
}