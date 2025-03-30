
import React from 'react';
import { 
  BarChart3, 
  Clock, 
  PackageOpen, 
  RefreshCw, 
  Trash2, 
  TrendingDown 
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import InventoryStatus from '@/components/dashboard/InventoryStatus';
import WasteChart from '@/components/dashboard/WasteChart';
import AlertsList from '@/components/dashboard/AlertsList';
import InventoryTrend from '@/components/dashboard/InventoryTrend';
import ScanButton from '@/components/dashboard/ScanButton';

const Index = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your inventory and reduce food waste with computer vision.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Inventory Items" 
          value="128" 
          icon={PackageOpen}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard 
          title="Weekly Food Waste" 
          value="35 lbs" 
          icon={Trash2}
          trend={{ value: 8, isPositive: false }}
        />
        <StatCard 
          title="Inventory Value" 
          value="$4,285" 
          icon={BarChart3}
        />
        <StatCard 
          title="Items Near Expiry" 
          value="12" 
          icon={Clock}
          description="Action required within 3 days"
          className="border-amber-200 bg-amber-50"
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <InventoryTrend />
        </div>
        <div>
          <ScanButton />
          <div className="h-4"></div>
          <InventoryStatus />
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <WasteChart />
        <AlertsList />
      </div>
    </div>
  );
};

export default Index;
