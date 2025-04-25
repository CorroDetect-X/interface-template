"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Mock data for the F-score chart
const mockData = [
  {
    name: "No Corrosion",
    precision: 0.95,
    recall: 0.93,
    fscore: 0.94,
  },
  {
    name: "Corrosion",
    precision: 0.91,
    recall: 0.9,
    fscore: 0.9,
  },
  {
    name: "Weighted Avg",
    precision: 0.93,
    recall: 0.92,
    fscore: 0.92,
  },
]

export function FScoreChart() {
  const [data, setData] = useState<typeof mockData>([])

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setData(mockData)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 1]} />
        <Tooltip formatter={(value) => [(value as number).toFixed(3)]} />
        <Legend />
        <Bar dataKey="precision" name="Precision" fill="#8884d8" />
        <Bar dataKey="recall" name="Recall" fill="#82ca9d" />
        <Bar dataKey="fscore" name="F1-Score" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  )
}
