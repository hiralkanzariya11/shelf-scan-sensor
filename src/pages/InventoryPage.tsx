
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Camera, Package, Plus, Search, SlidersHorizontal, Clock, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InventoryPage = () => {
  const navigate = useNavigate();
  
  // Mock inventory data
  const inventory = [
    { id: '1', name: 'Tomatoes', category: 'Produce', quantity: '5 lbs', level: 28, expiry: '2 days' },
    { id: '2', name: 'Chicken Breast', category: 'Meat', quantity: '10 lbs', level: 65, expiry: '3 days' },
    { id: '3', name: 'Rice', category: 'Dry Goods', quantity: '25 lbs', level: 82, expiry: '120 days' },
    { id: '4', name: 'Onions', category: 'Produce', quantity: '8 lbs', level: 45, expiry: '7 days' },
    { id: '5', name: 'Bell Peppers', category: 'Produce', quantity: '4 lbs', level: 32, expiry: '4 days' },
    { id: '6', name: 'Potatoes', category: 'Produce', quantity: '15 lbs', level: 60, expiry: '14 days' },
    { id: '7', name: 'Olive Oil', category: 'Dry Goods', quantity: '2 gallons', level: 55, expiry: '180 days' },
    { id: '8', name: 'Lettuce', category: 'Produce', quantity: '3 heads', level: 20, expiry: '2 days' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Inventory Management</h1>
          <p className="text-muted-foreground">
            Track and manage your ingredient stock levels
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate('/scan')}
            className="gap-2"
          >
            <Camera className="h-4 w-4" />
            <span>Scan</span>
          </Button>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            <span>Add Item</span>
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle>Current Inventory</CardTitle>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search inventory..."
                  className="pl-8 w-full sm:w-[250px]"
                />
              </div>
              
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Stock Level</TableHead>
                  <TableHead>Expires In</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-2 max-w-24">
                          <div 
                            className={`h-2 rounded-full ${
                              item.level < 30 
                                ? 'bg-red-500' 
                                : item.level > 70 
                                ? 'bg-shelf-green' 
                                : 'bg-shelf-blue'
                            }`}
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                        <span className="text-xs">{item.level}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span 
                        className={`px-1.5 py-0.5 rounded text-xs ${
                          item.expiry.includes('day') && parseInt(item.expiry) <= 3
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {item.expiry}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Low Stock Alert</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Package className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Items below threshold</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Expiring Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">Items expiring in 5 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-shelf-light-blue rounded-full flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-shelf-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold">$4,285</p>
                <p className="text-sm text-muted-foreground">Current inventory value</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InventoryPage;
