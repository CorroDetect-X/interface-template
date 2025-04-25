"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Mock data for the loss chart
const mockData = [
  { epoch: 1, training: 0.82, validation: 0.85 },
  { epoch: 5, training: 0.45, validation: 0.52 },
  { epoch: 10, training: 0.32, validation: 0.4 },
  { epoch: 15, training: 0.25, validation: 0.35 },
  { epoch: 20, training: 0.2, validation: 0.32 },
  { epoch: 25, training: 0.17, validation: 0.3 },
  { epoch: 30, training: 0.15, validation: 0.28 },
  { epoch: 35, training: 0.13, validation: 0.27 },
  { epoch: 40, training: 0.12, validation: 0.26 },
  { epoch: 45, training: 0.11, validation: 0.25 },
  { epoch: 50, training: 0.1, validation: 0.25 },
]

export function LossChart() {
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
        <YAxis domain={[0, 1]} label={{ value: "Loss", angle: -90, position: "insideLeft" }} />
        <Tooltip formatter={(value) => [(value as number).toFixed(3), "Loss"]} />
        <Legend />
        <Line type="monotone" dataKey="training" name="Training Loss" stroke="#ff7300" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="validation" name="Validation Loss" stroke="#ff0000" />
      </LineChart>
    </ResponsiveContainer>
  )
}
