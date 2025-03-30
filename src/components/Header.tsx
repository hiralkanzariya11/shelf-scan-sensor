
import React from 'react';
import { Bell, Menu, Search, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="md:hidden"
        >
          <Menu size={20} />
        </Button>
        <h1 className="text-xl font-semibold text-shelf-dark hidden md:block">
          Pet<span className="text-shelf-green">Pooja</span>
        </h1>
      </div>

      <div className="hidden md:flex items-center mx-4 flex-1 max-w-md relative">
        <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search inventory, recipes..." 
          className="pl-8"
        />
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-shelf-green rounded-full"></span>
        </Button>
        <Button variant="ghost" size="icon">
          <Settings size={20} />
        </Button>
        <Button variant="ghost" size="sm" className="ml-2 gap-2">
          <div className="w-6 h-6 rounded-full bg-shelf-blue flex items-center justify-center text-white text-xs">
            JD
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;
