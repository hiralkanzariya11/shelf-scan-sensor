
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface InventoryItem {
  id: string;
  name: string;
  level: number;
  status: 'low' | 'ok' | 'high';
  expiryDays?: number;
}

const InventoryStatus = () => {
  // Mock data for the demo
  const inventoryItems: InventoryItem[] = [
    { id: '1', name: 'Fresh Tomatoes', level: 28, status: 'low', expiryDays: 2 },
    { id: '2', name: 'Chicken Breast', level: 65, status: 'ok', expiryDays: 3 },
    { id: '3', name: 'Rice', level: 82, status: 'high' },
    { id: '4', name: 'Onions', level: 45, status: 'ok', expiryDays: 7 },
    { id: '5', name: 'Bell Peppers', level: 32, status: 'low', expiryDays: 4 },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Inventory Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inventoryItems.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-medium text-sm">{item.name}</span>
                    {item.expiryDays && item.expiryDays <= 3 && (
                      <span className="ml-2 px-1.5 py-0.5 rounded text-xs bg-red-100 text-red-800">
                        Expires in {item.expiryDays} days
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-sm font-medium">{item.level}%</span>
              </div>
              
              <Progress 
                value={item.level} 
                className={`h-2 ${
                  item.status === 'low' 
                    ? 'bg-red-100' 
                    : item.status === 'high' 
                    ? 'bg-shelf-light-green' 
                    : 'bg-shelf-light-blue'
                }`}
                indicatorClassName={`${
                  item.status === 'low' 
                    ? 'bg-red-500' 
                    : item.status === 'high' 
                    ? 'bg-shelf-green' 
                    : 'bg-shelf-blue'
                }`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryStatus;
