// components/Navigation.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#1DBF73] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">F</span>
          </div>
          <Link href="/" className="text-lg font-bold text-[#0E0E2C]">
            Fiverr<span className="text-[#1DBF73]">Ascend</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="/" 
            className={`font-medium ${
              isActive('/') 
                ? 'text-[#1DBF73] border-b-2 border-[#1DBF73]' 
                : 'text-gray-600 hover:text-[#1DBF73]'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/accounts"
            className={`font-medium ${
              isActive('/accounts') 
                ? 'text-[#1DBF73] border-b-2 border-[#1DBF73]' 
                : 'text-gray-600 hover:text-[#1DBF73]'
            }`}
          >
            Accounts
          </Link>
          <Link 
            href="/training"
            className={`font-medium ${
              isActive('/training') 
                ? 'text-[#1DBF73] border-b-2 border-[#1DBF73]' 
                : 'text-gray-600 hover:text-[#1DBF73]'
            }`}
          >
            Training
          </Link>
          <Link 
            href="/tools"
            className={`font-medium ${
              isActive('/tools') 
                ? 'text-[#1DBF73] border-b-2 border-[#1DBF73]' 
                : 'text-gray-600 hover:text-[#1DBF73]'
            }`}
          >
            Tools
          </Link>
          <Button asChild className="bg-[#1DBF73] hover:bg-green-600">
            <Link href="/#pricing">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}