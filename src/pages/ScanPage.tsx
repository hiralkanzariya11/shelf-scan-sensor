
import React from 'react';
import Scanner from '@/components/scan/Scanner';

const ScanPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Scan Inventory</h1>
        <p className="text-muted-foreground">
          Use computer vision to automatically detect and log your inventory
        </p>
      </div>
      
      <Scanner />
      
      <div className="bg-shelf-gray rounded-lg p-4 max-w-3xl mx-auto">
        <h3 className="font-medium mb-2">How to scan:</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Position your camera to view ingredients clearly</li>
          <li>Click "Activate Camera" to start the detection process</li>
          <li>Hold still while the AI analyzes the image</li>
          <li>Review detected items and their conditions</li>
          <li>Click "Save to Inventory" to update your stock levels</li>
        </ol>
      </div>
    </div>
  );
};

export default ScanPage;
