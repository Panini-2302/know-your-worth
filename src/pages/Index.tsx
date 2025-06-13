
import { useState } from 'react';
import Header from '@/components/Header';
import ArtworkUpload from '@/components/ArtworkUpload';
import ValuationCalculator from '@/components/ValuationCalculator';
import PricingBreakdown from '@/components/PricingBreakdown';
import { Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [artwork, setArtwork] = useState(null);
  const [valuation, setValuation] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-beige via-white to-periwinkle-blue/30">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-graphite-soft mb-6">
              Price Your Art with
              <span className="bg-gradient-to-r from-blush-rose to-periwinkle-blue bg-clip-text text-transparent"> Confidence</span>
            </h1>
            <p className="text-xl font-lato text-gray-600 max-w-3xl mx-auto mb-8">
              Get instant, data-driven valuations for your artwork. Upload, analyze, and receive professional 
              pricing recommendations in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="text-blush-rose" size={20} />
                <span className="font-lato font-medium">AI-Powered Analysis</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <TrendingUp className="text-mint-gray" size={20} />
                <span className="font-lato font-medium">Market Insights</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="text-periwinkle-blue" size={20} />
                <span className="font-lato font-medium">Trusted by 10k+ Artists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Application */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Upload & Calculator */}
            <div className="space-y-8">
              <div className="animate-slide-up">
                <ArtworkUpload onArtworkChange={setArtwork} />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <ValuationCalculator onValuationChange={setValuation} />
              </div>
            </div>

            {/* Right Column - Pricing Breakdown */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <PricingBreakdown valuation={valuation} />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Users, label: 'Active Artists', value: '12,543' },
              { icon: TrendingUp, label: 'Artworks Valued', value: '89,234' },
              { icon: Award, label: 'Success Rate', value: '94%' },
              { icon: Sparkles, label: 'Avg. Price Increase', value: '32%' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <stat.icon className="text-blush-rose mx-auto mb-3" size={32} />
                <div className="text-2xl font-playfair font-bold text-graphite-soft">{stat.value}</div>
                <div className="text-sm font-lato text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blush-rose to-periwinkle-blue rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-playfair font-bold mb-4">Ready to Price Like a Pro?</h2>
            <p className="text-lg font-lato mb-6 opacity-90">
              Join thousands of artists who've discovered their true worth
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blush-rose hover:bg-gray-100 font-lato font-semibold px-8 py-3"
            >
              Start Your Free Analysis
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
