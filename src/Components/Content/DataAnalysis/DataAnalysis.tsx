import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const COLOR_MAPPING: Record<number, string> = { 0: "blue", 1: "red" }

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Birth in Taiwan",
    },
  },
}

interface IDataAnalysisProps {
  data: { labels: any[]; data: Record<string, any[]> }
}

const DataAnalysis: React.FC<IDataAnalysisProps> = ({ data: rowData }) => {
  const labels = rowData.labels
  const data = {
    labels,
    datasets: Object.keys(rowData.data).map((key, index) => ({
      label: key,
      data: rowData.data[key],
      borderColor: COLOR_MAPPING[index],
      backgroundColor: COLOR_MAPPING[index],
    })),
  }
  return <Line options={options} data={data} />
}

export default DataAnalysis
