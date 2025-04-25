"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle } from "lucide-react"

type AnalysisResult = {
  id: string
  originalImage: string
  processedImage: string
  hasCorrosion: boolean
  confidence: number
  detections: {
    box: [number, number, number, number]
    confidence: number
    area: number
  }[]
  timestamp: string
}

// This is a mock result for demonstration purposes
const mockResult: AnalysisResult = {
  id: "result-123",
  originalImage: "/placeholder.svg?height=400&width=600",
  processedImage: "/placeholder.svg?height=400&width=600",
  hasCorrosion: true,
  confidence: 0.92,
  detections: [
    { box: [100, 150, 200, 250], confidence: 0.89, area: 10000 },
    { box: [300, 200, 350, 280], confidence: 0.76, area: 5600 },
  ],
  timestamp: new Date().toISOString(),
}

export function CorrosionResults() {
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real application, you would fetch the latest result from the API
    // For demonstration, we'll use the mock result after a delay
    const timer = setTimeout(() => {
      setResult(mockResult)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md text-center">
        <p className="text-gray-500">No analysis results yet. Upload an image to get started.</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            Analysis Results
            <Badge className={`ml-2 ${result.hasCorrosion ? "bg-red-500" : "bg-green-500"}`}>
              {result.hasCorrosion ? (
                <span className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  Corrosion Detected
                </span>
              ) : (
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  No Corrosion
                </span>
              )}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="original">
            <TabsList className="mb-4">
              <TabsTrigger value="original">Original Image</TabsTrigger>
              <TabsTrigger value="processed">Processed Image</TabsTrigger>
            </TabsList>
            <TabsContent value="original">
              <div className="relative h-[400px] w-full">
                <Image
                  src={result.originalImage || "/placeholder.svg"}
                  alt="Original image"
                  fill
                  className="object-contain"
                />
              </div>
            </TabsContent>
            <TabsContent value="processed">
              <div className="relative h-[400px] w-full">
                <Image
                  src={result.processedImage || "/placeholder.svg"}
                  alt="Processed image with corrosion detection"
                  fill
                  className="object-contain"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium">Detection Summary</h3>
              <p className="text-gray-600">Classification confidence: {(result.confidence * 100).toFixed(2)}%</p>
              <p className="text-gray-600">Number of corrosion areas: {result.detections.length}</p>
              <p className="text-gray-600">
                Total affected area: {result.detections.reduce((sum, d) => sum + d.area, 0)} px²
              </p>
            </div>

            {result.detections.length > 0 && (
              <div>
                <h3 className="text-lg font-medium">Detailed Detections</h3>
                <div className="space-y-2 mt-2">
                  {result.detections.map((detection, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-md">
                      <p className="font-medium">Area {index + 1}</p>
                      <p className="text-sm text-gray-600">Confidence: {(detection.confidence * 100).toFixed(2)}%</p>
                      <p className="text-sm text-gray-600">Size: {detection.area} px²</p>
                      <p className="text-sm text-gray-600">
                        Location: x={detection.box[0]}, y={detection.box[1]}, width=
                        {detection.box[2] - detection.box[0]}, height={detection.box[3] - detection.box[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
