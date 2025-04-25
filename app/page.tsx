import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UploadSection } from "@/components/upload-section"
import { ModelPerformance } from "@/components/model-performance"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-10">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Corrosion Detection System</h1>
          <p className="text-lg text-gray-600">AI-powered surface corrosion detection and analysis</p>
        </header>

        <Tabs defaultValue="upload" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upload">Upload & Analyze</TabsTrigger>
            <TabsTrigger value="performance">Model Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <UploadSection />
          </TabsContent>

          <TabsContent value="performance">
            <ModelPerformance />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
