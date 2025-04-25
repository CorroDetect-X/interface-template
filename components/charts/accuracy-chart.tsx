"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Mock data for the accuracy chart
const mockData = [
  { epoch: 1, training: 0.65, validation: 0.62 },
  { epoch: 5, training: 0.78, validation: 0.74 },
  { epoch: 10, training: 0.85, validation: 0.8 },
  { epoch: 15, training: 0.89, validation: 0.83 },
  { epoch: 20, training: 0.91, validation: 0.85 },
  { epoch: 25, training: 0.93, validation: 0.87 },
  { epoch: 30, training: 0.94, validation: 0.88 },
  { epoch: 35, training: 0.95, validation: 0.89 },
  { epoch: 40, training: 0.96, validation: 0.9 },
  { epoch: 45, training: 0.96, validation: 0.91 },
  { epoch: 50, training: 0.97, validation: 0.92 },
]

export function AccuracyChart() {
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
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="epoch" label={{ value: "Epochs", position: "insideBottomRight", offset: -10 }} />
        <YAxis domain={[0.5, 1]} label={{ value: "Accuracy", angle: -90, position: "insideLeft" }} />
        <Tooltip formatter={(value) => [(value as number).toFixed(3), "Accuracy"]} />
        <Legend />
        <Line type="monotone" dataKey="training" name="Training Accuracy" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="validation" name="Validation Accuracy" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}
