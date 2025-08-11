import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Download, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Download Instagram content in seconds with our optimized servers'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Your privacy is protected. No data stored, direct downloads only'
  },
  {
    icon: Download,
    title: 'High Quality',
    description: 'Get the best available quality for all posts, stories, and reels'
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Works perfectly on all devices - desktop, tablet, and mobile'
  }
];

export function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-instagram bg-clip-text text-transparent">
            Why Choose InstaDownloader?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The fastest and most reliable way to download Instagram content from public accounts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-white/10 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-instagram rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}