"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MetricCard } from "@/components/metric-card"
import { AccuracyChart } from "@/components/charts/accuracy-chart"
import { LossChart } from "@/components/charts/loss-chart"
import { ConfusionMatrix } from "@/components/charts/confusion-matrix"
import { FScoreChart } from "@/components/charts/fscore-chart"

export function ModelPerformance() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Accuracy" value="94.2%" description="Overall model accuracy" trend="up" trendValue="1.2%" />
        <MetricCard
          title="Precision"
          value="92.8%"
          description="Positive predictive value"
          trend="up"
          trendValue="0.8%"
        />
        <MetricCard title="Recall" value="91.5%" description="True positive rate" trend="down" trendValue="0.3%" />
        <MetricCard
          title="F1 Score"
          value="92.1%"
          description="Harmonic mean of precision and recall"
          trend="up"
          trendValue="0.5%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Training & Validation Accuracy</CardTitle>
            <CardDescription>Model accuracy over training epochs</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <AccuracyChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Training & Validation Loss</CardTitle>
            <CardDescription>Model loss over training epochs</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <LossChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Confusion Matrix</CardTitle>
            <CardDescription>Performance visualization across classes</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ConfusionMatrix />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>F-Score Analysis</CardTitle>
            <CardDescription>Precision, recall, and F1-score metrics</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <FScoreChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Model Performance Details</CardTitle>
          <CardDescription>Detailed metrics and evaluation results</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="mobilenet">
            <TabsList className="mb-4">
              <TabsTrigger value="mobilenet">MobileNet (Classification)</TabsTrigger>
              <TabsTrigger value="yolov9">YOLOv9 (Detection)</TabsTrigger>
            </TabsList>

            <TabsContent value="mobilenet">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Classification Report</h3>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Class</th>
                          <th className="text-right py-2">Precision</th>
                          <th className="text-right py-2">Recall</th>
                          <th className="text-right py-2">F1-Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">No Corrosion</td>
                          <td className="text-right">0.95</td>
                          <td className="text-right">0.93</td>
                          <td className="text-right">0.94</td>
                        </tr>
                        <tr>
                          <td className="py-2">Corrosion</td>
                          <td className="text-right">0.91</td>
                          <td className="text-right">0.90</td>
                          <td className="text-right">0.90</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Training Parameters</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Learning Rate:</span>
                        <span>0.001</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Batch Size:</span>
                        <span>32</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Epochs:</span>
                        <span>50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Optimizer:</span>
                        <span>Adam</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Data Augmentation:</span>
                        <span>Yes</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Dataset Information</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Training Samples:</span>
                        <span>2,450</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Validation Samples:</span>
                        <span>612</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Test Samples:</span>
                        <span>816</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Classes:</span>
                        <span>2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Image Size:</span>
                        <span>224 × 224</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="yolov9">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Detection Metrics</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">mAP@0.5:</span>
                        <span>0.89</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">mAP@0.5:0.95:</span>
                        <span>0.76</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Precision:</span>
                        <span>0.87</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Recall:</span>
                        <span>0.85</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">F1-Score:</span>
                        <span>0.86</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Training Parameters</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Learning Rate:</span>
                        <span>0.0005</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Batch Size:</span>
                        <span>16</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Epochs:</span>
                        <span>100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Optimizer:</span>
                        <span>SGD</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Momentum:</span>
                        <span>0.937</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Dataset Information</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Training Images:</span>
                        <span>1,850</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Validation Images:</span>
                        <span>462</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Test Images:</span>
                        <span>616</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Classes:</span>
                        <span>1 (Corrosion)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Image Size:</span>
                        <span>640 × 640</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
