import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Clock, CheckCircle, Star, Target, Zap } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We are committed to delivering high-quality leads to our contractors. We have a rigorous quality assurance process in place to ensure that our leads meet the highest standards.'
    },
    {
      icon: Award,
      title: 'Experience',
      description: 'Our team has years of experience in the roofing industry, giving us the knowledge and skills needed to deliver exceptional results for contractors.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We pride ourselves on staying up-to-date with the latest industry trends and technologies, bringing innovation and creativity to every lead we provide.'
    }
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal account manager for enterprise clients'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock lead delivery and support'
    },
    {
      icon: Target,
      title: 'Targeted Leads',
      description: 'Precisely matched to your service area and expertise'
    }
  ];

  return (
    <section className="py-8 lg:py-12 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23122E5F' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='nonzero'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Roof Claim Pros, we are dedicated to providing our contractors with the 
                best possible service. With our years of experience, attention to detail, 
                and commitment to quality lead generation and contractor success.
              </p>
            </div>

            {/* Additional Features */}
            <div className="space-y-4">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#122E5F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-[#122E5F]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-[#122E5F]/5 to-[#2563eb]/5 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#122E5F] mb-1">2,000+</div>
                  <div className="text-sm text-gray-600">Happy Contractors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#122E5F] mb-1">78%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#122E5F] mb-1">$28K</div>
                  <div className="text-sm text-gray-600">Avg Job Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#122E5F] mb-1">24hr</div>
                  <div className="text-sm text-gray-600">Lead Delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#122E5F]/10 to-[#2563eb]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <reason.icon className="h-8 w-8 text-[#122E5F]" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            
          </div>
        </div>
      </div>
    </section>
  );
}