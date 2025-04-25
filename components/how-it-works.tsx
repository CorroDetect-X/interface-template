import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Search, BarChart } from "lucide-react"

export function HowItWorks() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Step 1: Upload</CardTitle>
            <Upload className="h-6 w-6 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Upload an image of the surface you want to analyze. The system accepts JPG, JPEG, and PNG formats.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Step 2: AI Analysis</CardTitle>
            <Search className="h-6 w-6 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Our system uses MobileNet to classify if corrosion exists and YOLOv9 to precisely locate corrosion areas.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Step 3: Results</CardTitle>
            <BarChart className="h-6 w-6 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              View detailed results including corrosion detection, confidence scores, and affected area measurements.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md mt-8">
        <h3 className="text-xl font-semibold mb-4">About Our Technology</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">MobileNet Classification</h4>
            <p className="text-gray-600">
              We use a pre-trained MobileNet model fine-tuned on corrosion datasets to determine if corrosion is present
              on the surface.
            </p>
          </div>

          <div>
            <h4 className="font-medium">YOLOv9 Detection</h4>
            <p className="text-gray-600">
              For precise localization, we employ YOLOv9, a state-of-the-art object detection model that identifies the
              exact areas affected by corrosion.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
