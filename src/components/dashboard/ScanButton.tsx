
import React from 'react';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ScanButton = () => {
  const navigate = useNavigate();
  
  return (
    <Button 
      onClick={() => navigate('/scan')}
      className="bg-shelf-blue hover:bg-blue-700 w-full flex items-center justify-center gap-2 py-6"
    >
      <Camera className="h-5 w-5" />
      <span>Scan Inventory</span>
    </Button>
  );
};

export default ScanButton;
