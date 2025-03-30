
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, CheckCircle2, Loader2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const Scanner = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  
  // Mock detected items
  const detectedItems = [
    { name: 'Tomatoes', confidence: 98.2, quantity: '5 units', status: 'Fresh' },
    { name: 'Onions', confidence: 95.7, quantity: '3 units', status: 'Fresh' },
    { name: 'Bell Peppers', confidence: 91.3, quantity: '2 units', status: 'Fresh' },
    { name: 'Lettuce', confidence: 89.5, quantity: '1 unit', status: 'Wilting' },
  ];

  const handleScan = () => {
    setCameraActive(true);
    setScanning(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setScanning(false);
      setProcessed(true);
      
      toast({
        title: "Scan complete",
        description: "4 items detected and added to inventory",
      });
    }, 3000);
  };
  
  const resetScan = () => {
    setCameraActive(false);
    setProcessed(false);
  };
  
  const saveToInventory = () => {
    toast({
      title: "Inventory updated",
      description: "Items have been added to your inventory",
    });
    navigate('/inventory');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-video bg-gray-900 relative">
            {!cameraActive && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <Camera className="h-12 w-12 mb-4 text-shelf-light-blue" />
                <p className="text-lg font-medium mb-8">
                  Scan your inventory with the camera
                </p>
                <Button 
                  className="bg-shelf-blue hover:bg-blue-700"
                  onClick={handleScan}
                >
                  Activate Camera
                </Button>
              </div>
            )}
            
            {cameraActive && (
              <div className="relative w-full h-full">
                {/* Camera view or placeholder */}
                <div className="absolute inset-0 bg-black">
                  <div className="h-full w-full flex items-center justify-center">
                    {scanning ? (
                      <div className="text-center text-white">
                        <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
                        <p className="text-lg">Analyzing ingredients...</p>
                      </div>
                    ) : (
                      <div className="w-full h-full relative">
                        {/* Mock camera view with sample image */}
                        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                          <img 
                            src="/placeholder.svg" 
                            alt="Camera Feed" 
                            className="w-full h-full object-cover opacity-50"
                          />
                          {processed && (
                            <div className="absolute inset-0">
                              {/* Highlight detected items with boxes */}
                              <div className="absolute top-[20%] left-[25%] w-[100px] h-[100px] border-2 border-green-400 rounded-md flex items-center justify-center">
                                <span className="bg-green-400 text-black text-xs px-1 absolute -top-6">
                                  Tomatoes (98%)
                                </span>
                              </div>
                              <div className="absolute top-[40%] left-[60%] w-[80px] h-[80px] border-2 border-green-400 rounded-md">
                                <span className="bg-green-400 text-black text-xs px-1 absolute -top-6">
                                  Onions (95%)
                                </span>
                              </div>
                              <div className="absolute top-[60%] left-[40%] w-[90px] h-[70px] border-2 border-green-400 rounded-md">
                                <span className="bg-green-400 text-black text-xs px-1 absolute -top-6">
                                  Bell Peppers (91%)
                                </span>
                              </div>
                              <div className="absolute top-[30%] left-[70%] w-[120px] h-[60px] border-2 border-yellow-400 rounded-md">
                                <span className="bg-yellow-400 text-black text-xs px-1 absolute -top-6">
                                  Lettuce (89%) - Wilting
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Controls overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 flex justify-between">
                  <Button 
                    variant="outline" 
                    className="text-white border-white hover:bg-white/20 hover:text-white"
                    onClick={resetScan}
                    disabled={scanning}
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                  
                  {processed && (
                    <Button 
                      className="bg-shelf-green hover:bg-green-700"
                      onClick={saveToInventory}
                    >
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Save to Inventory
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Results section */}
          {processed && (
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2">Detected Items</h3>
              <div className="divide-y">
                {detectedItems.map((item, index) => (
                  <div key={index} className="py-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <span className={`text-sm ${
                          item.status === 'Fresh' ? 'text-shelf-green' : 'text-yellow-500'
                        }`}>
                          {item.status}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({item.confidence.toFixed(1)}%)
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Scanner;
