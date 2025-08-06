import { useState } from 'react';
import Header from '@/components/Header';
import ArtworkUpload from '@/components/ArtworkUpload';
import ValuationCalculator from '@/components/ValuationCalculator';
import PricingBreakdown from '@/components/PricingBreakdown';
import { Sparkles, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import artwork1 from '@/assets/artwork1.jpg';
import artwork2 from '@/assets/artwork2.jpg';
import artwork3 from '@/assets/artwork3.jpg';
import artwork4 from '@/assets/artwork4.jpg';
import artwork5 from '@/assets/artwork5.jpg';
const Index = () => {
  const [artwork, setArtwork] = useState(null);
  const [valuation, setValuation] = useState(null);
  return <div className="min-h-screen bg-gradient-to-br from-cream-beige via-white to-periwinkle-blue/30">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Artwork Collage Background */}
        <div className="absolute inset-0 opacity-15">
          <div 
            className="absolute top-10 left-10 w-48 h-36 rounded-2xl transform rotate-12"
            style={{
              backgroundImage: `url(${artwork1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(0.5px)'
            }}
          />
          <div 
            className="absolute top-20 right-16 w-32 h-48 rounded-2xl transform -rotate-6"
            style={{
              backgroundImage: `url(${artwork2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(0.5px)'
            }}
          />
          <div 
            className="absolute bottom-32 left-1/4 w-40 h-40 rounded-2xl transform rotate-45"
            style={{
              backgroundImage: `url(${artwork3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(0.5px)'
            }}
          />
          <div 
            className="absolute bottom-20 right-1/4 w-36 h-36 rounded-2xl transform -rotate-12"
            style={{
              backgroundImage: `url(${artwork4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(0.5px)'
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-48 h-32 rounded-2xl transform -translate-x-1/2 -translate-y-1/2 rotate-6"
            style={{
              backgroundImage: `url(${artwork5})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(0.5px)'
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-playfair font-bold text-graphite-soft mb-6 md:text-7xl">
              Price Your Art with
              <span className="bg-gradient-to-r from-blush-rose to-periwinkle-blue bg-clip-text text-transparent"> Confidence</span>
            </h1>
            <p className="text-xl font-lato max-w-3xl mx-auto mb-12 text-graphite-soft">
              Get instant, data-driven valuations for your artwork. Upload, analyze, and receive professional 
              pricing recommendations in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg">
                <Sparkles className="text-blush-rose" size={24} />
                <span className="font-lato font-bold text-lg text-graphite-soft">AI-Powered Analysis</span>
              </div>
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg">
                <TrendingUp className="text-mint-gray" size={24} />
                <span className="font-lato font-bold text-lg text-graphite-soft">Market Insights</span>
              </div>
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg">
                <Users className="text-periwinkle-blue" size={24} />
                <span className="font-lato font-bold text-lg text-graphite-soft">Trusted by Artists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Application */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-cream-beige">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Upload & Calculator */}
            <div className="space-y-8">
              <div className="animate-slide-up">
                <ArtworkUpload onArtworkChange={setArtwork} />
              </div>
              <div className="animate-slide-up" style={{
              animationDelay: '0.1s'
            }}>
                <ValuationCalculator onValuationChange={setValuation} />
              </div>
            </div>

            {/* Right Column - Pricing Breakdown */}
            <div className="animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
              <PricingBreakdown valuation={valuation} />
            </div>
          </div>

          {/* Problem-Solution Section */}
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-12 mb-12 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-graphite-soft mb-6">
                Most emerging artists struggle to price their work fairly, often undervaluing their talent and missing out on rightful earnings.
              </h2>
              <p className="text-xl font-lato text-graphite-soft/80 leading-relaxed">
                Our AI-powered platform analyzes market data, artistic techniques, and current trends to give you confident, 
                data-backed pricing that reflects your art's true worth.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blush-rose to-periwinkle-blue rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-playfair font-bold mb-4">Ready to Price Like a Pro?</h2>
            <p className="text-lg font-lato mb-6 opacity-90">Join other artists who've discovered their true worth</p>
            <Button size="lg" className="bg-white text-blush-rose hover:bg-gray-100 font-lato font-semibold px-8 py-3">
              Start Your Free Analysis
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-graphite-soft mb-6">
            About Us
          </h2>
          <p className="text-xl font-lato text-graphite-soft/80 leading-relaxed">
            Panini Rao is the founder of Know Your Worth and a passionate changemaker dedicated to helping people recognize their true value.
          </p>
        </div>
      </section>
    </div>;
};
export default Index;