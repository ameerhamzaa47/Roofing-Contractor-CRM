'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your roofing claim? Get in touch for your free inspection and consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Get Your Free Inspection</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your roofing damage or concerns..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                  Schedule Free Inspection
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">(555) 123-ROOF</p>
                    <p className="text-gray-600">24/7 Emergency Service</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">info@roofclaimpro.com</p>
                    <p className="text-gray-600">Email us anytime</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">123 Main Street</p>
                    <p className="text-gray-600">Your City, ST 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Emergency calls only</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Emergency Storm Response</h3>
                <p className="text-orange-100 mb-4">
                  Storm damage? We provide 24/7 emergency response to secure your property and begin the claims process.
                </p>
                <Button variant="secondary" className="w-full">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Areas</h2>
          <p className="text-gray-600 mb-6">
            We proudly serve the greater metropolitan area and surrounding counties.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-gray-700">
            <div>City 1, City 2, City 3</div>
            <div>County A, County B, County C</div>
            <div>Metro Area & Surrounding Communities</div>
          </div>
        </div>
      </div>
    </div>
  );
}