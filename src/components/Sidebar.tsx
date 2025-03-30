
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  BarChart, 
  Camera, 
  Home, 
  List, 
  RefreshCcw, 
  ShoppingCart, 
  Utensils 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Inventory', href: '/inventory', icon: List },
    { name: 'Scan Items', href: '/scan', icon: Camera },
    { name: 'Menu Planning', href: '/menu', icon: Utensils },
    { name: 'Waste Tracking', href: '/waste', icon: RefreshCcw },
    { name: 'Analytics', href: '/analytics', icon: BarChart },
    { name: 'Order Supplies', href: '/orders', icon: ShoppingCart },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 bg-white border-r transition-transform duration-300 transform md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-16 border-b">
          <h1 className="text-xl font-bold text-shelf-dark">
            ShelfScan<span className="text-shelf-green">AI</span>
          </h1>
        </div>
        
        {/* Navigation */}
        <nav className="px-3 py-4">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive
                        ? "bg-shelf-light-blue text-shelf-blue"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                    onClick={onClose}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-shelf-gray rounded-lg p-3 text-xs text-gray-600">
            <p className="font-medium text-shelf-dark">ShelfScanAI v1.0</p>
            <p>Computer vision enabled inventory management</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
