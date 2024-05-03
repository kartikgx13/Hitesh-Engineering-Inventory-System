import React from 'react'
import {Pie} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function PieChart({options,dataset}) {
  return (
    <Pie options={options} data={dataset}/>
  )
}

export default PieChart