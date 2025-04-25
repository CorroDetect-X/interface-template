"use client"

import { useEffect, useState } from "react"
import { ResponsiveContainer } from "recharts"

// Mock data for the confusion matrix
const mockData = {
  labels: ["No Corrosion", "Corrosion"],
  matrix: [
    [412, 28], // True Negatives, False Positives
    [19, 357], // False Negatives, True Positives
  ],
}

export function ConfusionMatrix() {
  const [data, setData] = useState<typeof mockData | null>(null)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setData(mockData)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!data) {
    return <div className="flex items-center justify-center h-full">Loading...</div>
  }

  // Calculate the maximum value for color scaling
  const maxValue = Math.max(...data.matrix.flat())

  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-center mb-4">
          <h3 className="text-sm font-medium">Confusion Matrix</h3>
        </div>

        <div className="relative">
          {/* Y-axis label */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-500">
            Actual Class
          </div>

          {/* X-axis label */}
          <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500">
            Predicted Class
          </div>

          <div className="grid grid-cols-[auto,1fr,1fr] gap-1">
            {/* Empty top-left cell */}
            <div className="w-8 h-8"></div>

            {/* Column headers */}
            {data.labels.map((label, i) => (
              <div key={`col-${i}`} className="flex items-center justify-center h-8 text-xs font-medium">
                {label}
              </div>
            ))}

            {/* Row headers and matrix cells */}
            {data.matrix.map((row, i) => (
              <>
                {/* Row header */}
                <div key={`row-${i}`} className="flex items-center justify-end pr-2 w-8 h-16 text-xs font-medium">
                  {data.labels[i]}
                </div>

                {/* Matrix cells */}
                {row.map((value, j) => {
                  // Calculate color intensity based on value
                  const intensity = Math.round((value / maxValue) * 100)
                  const bgColor =
                    j === i
                      ? `rgba(52, 211, 153, ${intensity / 100})` // Green for correct predictions
                      : `rgba(248, 113, 113, ${intensity / 100})` // Red for incorrect predictions

                  return (
                    <div
                      key={`cell-${i}-${j}`}
                      className="flex flex-col items-center justify-center h-16 w-16 border text-sm font-medium"
                      style={{ backgroundColor: bgColor }}
                    >
                      <span>{value}</span>
                      <span className="text-xs text-gray-600">
                        {((value / data.matrix.flat().reduce((a, b) => a + b, 0)) * 100).toFixed(1)}%
                      </span>
                    </div>
                  )
                })}
              </>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-400 mr-1"></div>
            <span>Correct Predictions</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-400 mr-1"></div>
            <span>Incorrect Predictions</span>
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  )
}
