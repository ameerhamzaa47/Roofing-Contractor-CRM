import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Award, Users, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Shield, label: 'Claims Processed', value: '2,500+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Satisfied Clients', value: '1,800+' },
    { icon: Clock, label: 'Avg. Settlement Increase', value: '40%' }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About RoofClaim Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to helping homeowners receive fair compensation for their roofing damage claims.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">{stat.value}</CardTitle>
                <CardDescription className="text-gray-600">{stat.label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2009, RoofClaim Pro was born from a simple mission: to help homeowners receive fair treatment from their insurance companies after storm damage.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our founder, a former insurance adjuster, witnessed too many homeowners being undercompensated for legitimate roof damage. This inspired the creation of a company dedicated to leveling the playing field.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to have helped thousands of families recover millions in properly owed insurance settlements.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <img 
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Professional roofing inspection" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with complete honesty and transparency in all our dealings with clients and insurance companies.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expertise</h3>
              <p className="text-gray-600">
                Our team brings decades of combined experience in roofing, insurance, and claims processing.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advocacy</h3>
              <p className="text-gray-600">
                We fight tirelessly to ensure our clients receive every dollar they're entitled to under their policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}