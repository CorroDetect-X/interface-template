import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, TrendingUp } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  description: string
  trend?: "up" | "down"
  trendValue?: string
}

export function MetricCard({ title, value, description, trend, trendValue }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && trendValue && (
          <div className="flex items-center mt-2">
            {trend === "up" ? (
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={`text-xs ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
              {trendValue} from last month
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
