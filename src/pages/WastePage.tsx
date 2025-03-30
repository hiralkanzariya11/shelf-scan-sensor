
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ArrowDownIcon, ArrowUpIcon, DollarSign, Percent, Trash2 } from 'lucide-react';

const WastePage = () => {
  // Mock data for waste tracking
  const wasteData = [
    { day: 'Monday', amount: 8.2, value: 62 },
    { day: 'Tuesday', amount: 6.5, value: 48 },
    { day: 'Wednesday', amount: 5.3, value: 39 },
    { day: 'Thursday', amount: 7.8, value: 57 },
    { day: 'Friday', amount: 9.1, value: 68 },
    { day: 'Saturday', amount: 11.4, value: 85 },
    { day: 'Sunday', amount: 7.6, value: 56 },
  ];
  
  const wasteCategories = [
    { id: '1', category: 'Spoiled Produce', amount: '12.3 lbs', value: '$92', percent: '35%' },
    { id: '2', category: 'Overproduction', amount: '8.7 lbs', value: '$65', percent: '25%' },
    { id: '3', category: 'Trim Waste', amount: '7.0 lbs', value: '$52', percent: '20%' },
    { id: '4', category: 'Returned Items', amount: '5.2 lbs', value: '$39', percent: '15%' },
    { id: '5', category: 'Other', amount: '1.8 lbs', value: '$13', percent: '5%' },
  ];
  
  const customColors = [
    '#EF4444', '#F97316', '#F59E0B', '#10B981', '#6366F1'
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Waste Tracking & Analysis</h1>
        <p className="text-muted-foreground">
          Monitor and reduce food waste with computer vision analysis
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Weekly Food Waste</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Trash2 className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold mr-2">35 lbs</p>
                  <div className="flex items-center text-red-500 text-sm">
                    <ArrowDownIcon className="h-3 w-3 mr-1" />
                    <span>8%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">vs 38 lbs last week</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Financial Loss</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold mr-2">$261</p>
                  <div className="flex items-center text-red-500 text-sm">
                    <ArrowDownIcon className="h-3 w-3 mr-1" />
                    <span>12%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">vs $297 last week</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Waste Percentage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Percent className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold mr-2">6.1%</p>
                  <div className="flex items-center text-green-500 text-sm">
                    <ArrowDownIcon className="h-3 w-3 mr-1" />
                    <span>1.2%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">vs 7.3% last week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Daily Waste Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={wasteData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis yAxisId="left" orientation="left" stroke="#EF4444" />
                  <YAxis yAxisId="right" orientation="right" stroke="#1E88E5" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="amount" fill="#EF4444" name="Amount (lbs)" radius={[4, 4, 0, 0]}>
                    {wasteData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.amount > 9 ? '#DC2626' : '#EF4444'} />
                    ))}
                  </Bar>
                  <Bar yAxisId="right" dataKey="value" fill="#1E88E5" name="Value ($)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Waste Breakdown by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead className="text-right">Percentage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {wasteCategories.map((category, index) => (
                  <TableRow key={category.id}>
                    <TableCell>
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: customColors[index % customColors.length] }}
                        />
                        {category.category}
                      </div>
                    </TableCell>
                    <TableCell>{category.amount}</TableCell>
                    <TableCell>{category.value}</TableCell>
                    <TableCell className="text-right">{category.percent}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="mt-4 p-4 bg-shelf-gray rounded-lg">
              <h4 className="font-medium mb-2">Computer Vision Analysis</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Based on visual waste tracking, we recommend:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>
                  Reducing produce ordering by 15% to minimize spoilage
                </li>
                <li>
                  Adjusting portion sizes for salads to reduce trim waste
                </li>
                <li>
                  Implementing better storage for berries and leafy greens
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WastePage;
