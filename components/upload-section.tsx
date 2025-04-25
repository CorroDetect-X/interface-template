"use client"

import { useState } from "react"
import { UploadButton } from "@/components/upload-button"
import { CorrosionResults } from "@/components/corrosion-results"
import { HowItWorks } from "@/components/how-it-works"
import { Card } from "@/components/ui/card"

export function UploadSection() {
  const [showResults, setShowResults] = useState(false)

  const handleAnalysisComplete = () => {
    setShowResults(true)
  }

  return (
    <div className="space-y-8">
      <Card className="p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Analyze Surface Corrosion</h2>
        <UploadButton onAnalysisComplete={handleAnalysisComplete} />
      </Card>

      {showResults && <CorrosionResults />}

      <div className="mt-16">
        <HowItWorks />
      </div>
    </div>
  )
}
