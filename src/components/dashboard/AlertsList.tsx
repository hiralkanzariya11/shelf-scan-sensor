
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertCircle, AlertTriangle, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Alert {
  id: string;
  type: 'warning' | 'critical' | 'info';
  message: string;
  time: string;
}

const AlertsList = () => {
  // Mock data for demonstration
  const alerts: Alert[] = [
    {
      id: '1',
      type: 'critical',
      message: 'Fresh Tomatoes reaching expiry date',
      time: '2 hours ago',
    },
    {
      id: '2',
      type: 'warning',
      message: 'Chicken inventory below reorder level',
      time: '3 hours ago',
    },
    {
      id: '3',
      type: 'info',
      message: 'Weekly produce delivery arriving tomorrow',
      time: '5 hours ago',
    },
    {
      id: '4',
      type: 'warning',
      message: 'Rice inventory running low',
      time: '1 day ago',
    },
  ];

  const getIcon = (type: Alert['type']) => {
    switch (type) {
      case 'critical':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'info':
        return <ShoppingCart className="h-5 w-5 text-shelf-blue" />;
    }
  };

  const getBackground = (type: Alert['type']) => {
    switch (type) {
      case 'critical':
        return 'bg-red-50';
      case 'warning':
        return 'bg-amber-50';
      case 'info':
        return 'bg-blue-50';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={cn(
                "p-3 rounded-lg flex items-start gap-3",
                getBackground(alert.type)
              )}
            >
              {getIcon(alert.type)}
              <div>
                <p className="text-sm font-medium">{alert.message}</p>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertsList;
