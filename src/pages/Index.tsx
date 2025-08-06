import { useState } from 'react';
import Header from '@/components/Header';
import ArtworkUpload from '@/components/ArtworkUpload';
import ValuationCalculator from '@/components/ValuationCalculator';
import PricingBreakdown from '@/components/PricingBreakdown';
import { Sparkles, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import artistHands1 from '@/assets/artist-hands1.jpg';
import artistHands2 from '@/assets/artist-hands2.jpg';
import easelPainting from '@/assets/easel-painting.jpg';
import potteryHands from '@/assets/pottery-hands.jpg';
import canvasWork from '@/assets/canvas-work.jpg';
import artStudio from '@/assets/art-studio.jpg';
import painting1 from '@/assets/painting1.jpg';
import sculpture1 from '@/assets/sculpture1.jpg';
import pottery1 from '@/assets/pottery1.jpg';
const Index = () => {
  const [artwork, setArtwork] = useState(null);
  const [valuation, setValuation] = useState(null);
  return <div className="min-h-screen bg-gradient-to-br from-cream-beige via-white to-periwinkle-blue/30">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <div className="animate-fade-in relative">
            {/* Clean Grid Background - positioned behind headline and subtext only */}
            <div className="absolute inset-0 -top-4 h-80">
              {/* Light white overlay for text readability */}
              <div className="absolute inset-0 bg-white/60 z-10"></div>
              
              {/* 3x4 Clean Grid of artworks */}
              <div className="absolute inset-0 opacity-18">
                <div className="grid grid-cols-4 grid-rows-3 gap-2 h-full w-full">
                  {/* Row 1 */}
                  <div 
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${artistHands1})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div 
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${easelPainting})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div 
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${potteryHands})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div 
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${painting1})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  
                  {/* Row 2 */}
                  <div 
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${canvasWork})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div 
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${sculpture1})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div 
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${artistHands2})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div 
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${pottery1})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  
                  {/* Row 3 */}
                  <div 
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${artStudio})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div 
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${painting1})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div 
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${potteryHands})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div 
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${canvasWork})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>
              </div>
            </div>
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