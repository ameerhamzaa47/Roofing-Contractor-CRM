import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, FileText, Camera, Users, CheckCircle, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Storm Damage Assessment',
      description: 'Comprehensive evaluation of hail, wind, and weather-related roof damage.',
      features: ['Detailed inspection report', 'Photo documentation', 'Damage itemization']
    },
    {
      icon: FileText,
      title: 'Insurance Claim Filing',
      description: 'Expert assistance with insurance paperwork and claim submission.',
      features: ['Claim preparation', 'Documentation review', 'Adjuster coordination']
    },
    {
      icon: Camera,
      title: 'Professional Documentation',
      description: 'High-quality photos and detailed reports for insurance purposes.',
      features: ['Drone photography', 'Detailed measurements', 'Condition assessment']
    },
    {
      icon: Users,
      title: 'Adjuster Support',
      description: 'Professional representation during insurance adjuster meetings.',
      features: ['Expert advocacy', 'Technical explanations', 'Negotiation support']
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Roofing Claim Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive services ensure you receive the maximum compensation for your roofing damage claim.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Initial Contact', description: 'Schedule your free inspection' },
              { step: '2', title: 'Damage Assessment', description: 'Thorough roof evaluation' },
              { step: '3', title: 'Claim Filing', description: 'Submit comprehensive claim' },
              { step: '4', title: 'Settlement', description: 'Receive your compensation' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Claim?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Don't wait - storm damage claims have time limits. Get your free inspection today.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            <Clock className="mr-2 h-5 w-5" />
            Schedule Free Inspection
          </Button>
        </div>
      </div>
    </div>
  );
}