
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const InventoryTrend = () => {
  // Mock data for demonstration
  const data = [
    { day: 'Mon', ingredients: 120, waste: 14 },
    { day: 'Tue', ingredients: 132, waste: 18 },
    { day: 'Wed', ingredients: 101, waste: 23 },
    { day: 'Thu', ingredients: 134, waste: 17 },
    { day: 'Fri', ingredients: 165, waste: 25 },
    { day: 'Sat', ingredients: 189, waste: 32 },
    { day: 'Sun', ingredients: 143, waste: 28 },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">
          Weekly Inventory Trend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="ingredients"
                stroke="#1E88E5"
                strokeWidth={2}
                activeDot={{ r: 8 }}
                name="Stock Level"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="waste"
                stroke="#EF4444"
                strokeWidth={2}
                name="Waste"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryTrend;
