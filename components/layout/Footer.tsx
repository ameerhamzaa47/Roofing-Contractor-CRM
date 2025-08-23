import { Home } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern for contractor feel */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center space-y-8 relative z-10">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-[#122E5F] rounded-xl flex items-center justify-center">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Roof Claim Pros</span>
          </div>

          {/* Tagline */}
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Connecting licensed roofing contractors with qualified insurance claim leads since 2020
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Licensed in All 50 States</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">A+ BBB Rating</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">$10M Liability Insurance</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-600">
            <p className="text-sm text-gray-400">
              © 2025 Roof Claim Pros. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}