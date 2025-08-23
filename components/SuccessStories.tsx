'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, TrendingUp, Users, Award, Quote, CheckCircle, Shield } from 'lucide-react';

export function SuccessStories() {
  const stories = [
    {
      name: 'Mike Rodriguez',
      company: 'Elite Roofing Solutions',
      location: 'Houston, TX',
      avatar: 'MR',
      beforeRevenue: '$45K',
      afterRevenue: '$280K',
      timeframe: '6 months',
      testimonial: "I was skeptical at first, but these leads are the real deal. Every single one has been pre-qualified with insurance approval. I've closed 85% of the leads I've received."
    },
    {
      name: 'Sarah Johnson',
      company: 'Apex Storm Restoration',
      location: 'Dallas, TX',
      avatar: 'SJ',
      beforeRevenue: '$80K',
      afterRevenue: '$450K',
      timeframe: '8 months',
      testimonial: "The quality of these leads is unmatched. Homeowners are ready to sign contracts, not just getting quotes. My business has tripled in less than a year."
    },
    {
      name: 'David Chen',
      company: 'Storm Guard Roofing',
      location: 'Austin, TX',
      avatar: 'DC',
      beforeRevenue: '$120K',
      afterRevenue: '$380K',
      timeframe: '5 months',
      testimonial: "Best investment I've made for my business. The CRM system keeps me organized, and the leads keep coming. I've hired 3 new crews just to keep up with demand."
    }
  ];

  const overallStats = [
    { icon: TrendingUp, value: '340%', label: 'Average Revenue Increase' },
    { icon: Users, value: '2,000+', label: 'Successful Contractors' },
    { icon: Award, value: '78%', label: 'Average Conversion Rate' },
    { icon: Star, value: '4.9/5', label: 'Contractor Satisfaction' }
  ];

  return (
    <section className="py-8 lg:py-12 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="success-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2563eb" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#success-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#2563eb]/10 text-[#122E5F] rounded-full text-sm font-semibold mb-6">
            Real Results from Real Contractors
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how contractors like you have transformed their businesses with our premium lead system.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {overallStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-[#2563eb]/5 to-[#122E5F]/5 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-[#122E5F]" />
                </div>
                <div className="text-3xl font-bold text-[#122E5F] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <Card key={index} className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-[#2563eb]/10 rounded-full flex items-center justify-center mb-6">
                  <Quote className="h-5 w-5 text-[#2563eb]" />
                </div>

                {/* Testimonial */}
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{story.testimonial}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100 mb-4">
                  <div className="w-12 h-12 bg-[#122E5F] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{story.avatar}</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.company}</div>
                    <div className="text-xs text-gray-500">{story.location}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0 Rating</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-[#122E5F] to-[#2563eb] rounded-xl p-4 text-white">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Star className="h-4 w-4 text-white fill-current" />
          </div>
          
          <h3 className="text-lg font-bold mb-2">Ready to Join These Success Stories?</h3>
          <p className="text-sm text-blue-100 mb-3 max-w-2xl mx-auto">
            Stop chasing unqualified leads. Start closing $28K+ insurance jobs with homeowners who are ready to hire immediately.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center space-x-1 bg-white/15 rounded-lg px-3 py-1 backdrop-blur-sm border border-white/20">
              <CheckCircle className="h-3 w-3 text-white" />
              <span className="text-xs font-medium text-white">5 Free Leads</span>
            </div>
            <div className="flex items-center space-x-1 bg-white/15 rounded-lg px-3 py-1 backdrop-blur-sm border border-white/20">
              <Shield className="h-3 w-3 text-white" />
              <span className="text-xs font-medium text-white">No Setup Fees</span>
            </div>
            <div className="flex items-center space-x-1 bg-white/15 rounded-lg px-3 py-1 backdrop-blur-sm border border-white/20">
              <Star className="h-3 w-3 text-white fill-current" />
              <span className="text-xs font-medium text-white">Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}