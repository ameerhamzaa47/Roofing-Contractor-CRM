import { Home, Phone, Mail, MapPin, Shield, Award, Users } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 text-gray-900 relative overflow-hidden border-t border-blue-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#122E5F" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path 
            d="M0,60 C300,120 900,0 1200,60 L1200,0 L0,0 Z" 
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid gap-12">
          
          {/* Logo and Company Info */}
          <div className="text-center">
            <div className="mb-2">
              <div className="relative w-80 h-20 mx-auto">
                <Image
                  src="/roofingF-logo.png"
                  alt="Roof Claim Pros Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            <p className="text-gray-600 text-center text-base lg:text-lg leading-relaxed mb-6 lg:whitespace-nowrap">
              Connecting licensed roofing contractors with qualified insurance claim leads since 2020
            </p>

          </div>

        </div>
          <div className="flex items-center justify-center space-x-2 lg:space-x-4 text-gray-800 mb-6">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium text-center">Licensed in All 50 States</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-center">A+ BBB Rating</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium text-center">$10M Liability Insurance</span>
            </div>
          </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-blue-300">
            <div className="text-center">
              <p className="text-gray-500 text-sm relative top-6">
                © 2025 Roof Claim Pros. All rights reserved.
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


// import { Home } from 'lucide-react';
// import Image from 'next/image';

// export function Footer() {
//   return (
//     <footer className="bg-slate-900 text-white relative overflow-hidden">
//       {/* Subtle Geometric Design at Top */}
//       <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
//         <svg 
//           viewBox="0 0 1200 80" 
//           className="w-full h-full"
//           preserveAspectRatio="xMidYMid slice"
//         >
//           <defs>
//             <pattern id="geometricPattern" x="0" y="0" width="60" height="40" patternUnits="userSpaceOnUse">
//               <polygon points="30,5 45,15 30,25 15,15" fill="none" stroke="#64748b" strokeWidth="1" opacity="0.3"/>
//               <polygon points="0,15 15,25 0,35 -15,25" fill="none" stroke="#64748b" strokeWidth="1" opacity="0.2"/>
//               <polygon points="60,15 75,25 60,35 45,25" fill="none" stroke="#64748b" strokeWidth="1" opacity="0.2"/>
//             </pattern>
//             <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#64748b" stopOpacity="0.15" />
//               <stop offset="100%" stopColor="#64748b" stopOpacity="0.05" />
//             </linearGradient>
//           </defs>
          
//           {/* Geometric pattern */}
//           <rect width="1200" height="80" fill="url(#geometricPattern)" />
          
//           {/* Fade gradient */}
//           <rect width="1200" height="80" fill="url(#fadeGradient)" />
//         </svg>
//       </div>
      
//       {/* Background pattern for contractor feel */}
//       <div className="absolute inset-0 opacity-5">
//         <div 
//           className="w-full h-full bg-repeat"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//           }}
//         ></div>
//       </div>
//       <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
//         <div className="text-center relative z-10">
//           {/* Logo and Company Name */}
//           <div className="flex justify-center">
//             <div className="relative w-96 h-16 sm:w-[500px] sm:h-10 lg:w-[600px] lg:h-16 mb-3">
//               <Image
//                 src="/roofingF-logo.png"
//                 alt="Roof Claim Pros Logo"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Tagline */}
//           <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
//             Connecting licensed roofing contractors with qualified insurance claim leads since 2020
//           </p>

//           {/* Trust Indicators */}
//           <div className="flex items-center justify-center space-x-8 text-gray-300 mb-6">
//             <div className="flex items-center space-x-2">
//               <span className="text-sm font-medium">Licensed in All 50 States</span>
//             </div>
//             <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
//             <div className="flex items-center space-x-2">
//               <span className="text-sm font-medium">A+ BBB Rating</span>
//             </div>
//             <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
//             <div className="flex items-center space-x-2">
//               <span className="text-sm font-medium">$10M Liability Insurance</span>
//             </div>
//           </div>

//           {/* Copyright */}
//           <div className="pt-4 border-t border-gray-600">
//             <p className="text-sm text-gray-400">
//               © 2025 Roof Claim Pros. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }