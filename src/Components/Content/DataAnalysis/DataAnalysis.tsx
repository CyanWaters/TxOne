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

interface IDataAnalysisProps {
  title?: string
  data: { labels: any[]; data: Record<string, any[]> }
}

const DataAnalysis: React.FC<IDataAnalysisProps> = ({
  title,
  data: rowData,
}) => {
  const { labels, data: tmpData } = rowData
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: !!title,
        text: title,
      },
    },
  }
  const data = {
    labels,
    datasets: Object.keys(tmpData).map((key, index) => ({
      label: key,
      data: tmpData[key],
      borderColor: COLOR_MAPPING[index],
      backgroundColor: COLOR_MAPPING[index],
    })),
  }
  return <Line options={options} data={data} />
}

export default DataAnalysis
