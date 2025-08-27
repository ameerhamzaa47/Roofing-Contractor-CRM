'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-40 h-40 mt-2 sm:w-40 sm:h-40 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/roofing-logo.png"
                    alt="Logo"
                    fill
                    className="object-contain cursor-pointer"
                  />
                </div>
          </Link>

          <div className="flex items-center space-x-4">
            {/* Licensed Badge */}
            <div className="flex items-center space-x-2 bg-[#122E5F] px-4 py-2 rounded-full border border-[#122E5F] shadow-sm hover:shadow-md transition-all duration-300">
              <CheckCircle className="h-4 w-4 text-white" />
              <span className="text-xs font-medium text-white">
                Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}