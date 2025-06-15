
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Share2, ExternalLink, Download, Eye, Heart, DollarSign, BarChart3 } from 'lucide-react';

const Portfolio = () => {
  // Mock portfolio data
  const portfolioData = {
    artworks: [{
      id: 1,
      title: "Urban Dreams",
      style: "Abstract Digital",
      price: "$2,850",
      views: "1.2K",
      likes: 89,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
      status: "Available"
    }, {
      id: 2,
      title: "Neon Reflections",
      style: "Digital Art",
      price: "$3,200",
      views: "2.1K",
      likes: 156,
      image: "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=400",
      status: "Sold"
    }, {
      id: 3,
      title: "Cosmic Harmony",
      style: "Mixed Media",
      price: "$1,950",
      views: "890",
      likes: 67,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      status: "Available"
    }, {
      id: 4,
      title: "Ocean Waves",
      style: "Abstract",
      price: "$2,400",
      views: "1.5K",
      likes: 123,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      status: "Commission"
    }]
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    // Show toast notification
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-beige via-white to-periwinkle-blue/30">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#fff4e0]">
        {/* Portfolio Header */}
        <div className="bg-white rounded-2xl p-8 mb-8 hover-lift">
          <div className="text-center">
            <h1 className="text-3xl font-playfair font-bold text-graphite-soft mb-4">
              Creative Portfolio
            </h1>
            <p className="text-graphite-soft font-lato mb-6 max-w-2xl mx-auto">
              This portfolio showcases performance insights and visual metrics of featured creative projects.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm" onClick={handleShare} className="bg-sky-50 text-slate-950">
                <Share2 size={16} className="mr-2" />
                Share Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[{
            icon: DollarSign,
            label: 'Project Value',
            value: '$12,400',
            color: 'text-green-600'
          }, {
            icon: Eye,
            label: 'Total Views',
            value: '8.3K',
            color: 'text-blue-600'
          }, {
            icon: Heart,
            label: 'Total Engagement',
            value: '435',
            color: 'text-pink-600'
          }, {
            icon: BarChart3,
            label: 'Active Projects',
            value: '24',
            color: 'text-blush-rose'
          }].map((stat, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6 text-center bg-sky-50">
                <stat.icon className={`${stat.color} mx-auto mb-3`} size={32} />
                <div className="text-2xl font-playfair font-bold text-graphite-soft mb-1">
                  {stat.value}
                </div>
                <p className="text-sm font-lato text-graphite-soft">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Artworks Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-playfair font-bold text-graphite-soft">
              Featured Artworks
            </h2>
            <Button variant="outline" className="border-blush-rose text-blush-rose hover:bg-blush-rose bg-sky-50 text-slate-950">
              <Download size={16} className="mr-2" />
              Export Portfolio
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioData.artworks.map(artwork => (
              <Card key={artwork.id} className="overflow-hidden hover-lift group">
                <div className="relative">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white text-sm">
                        <Eye size={14} />
                        <span>{artwork.views}</span>
                        <Heart size={14} className="ml-2" />
                        <span>{artwork.likes}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={`absolute top-2 right-2 ${
                    artwork.status === 'Sold' 
                      ? 'bg-red-500' 
                      : artwork.status === 'Commission' 
                        ? 'bg-blush-rose text-graphite-soft' 
                        : 'bg-green-500'
                  }`}>
                    {artwork.status}
                  </Badge>
                </div>
                
                <CardContent className="p-4 bg-sky-50">
                  <h3 className="font-playfair font-semibold text-graphite-soft mb-1">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-graphite-soft font-lato mb-2">{artwork.style}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-lato font-bold text-blush-rose">
                      {artwork.price}
                    </span>
                    <div className="flex items-center gap-3 text-sm text-graphite-soft">
                      <div className="flex items-center gap-1">
                        <Eye size={12} />
                        {artwork.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={12} />
                        {artwork.likes}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blush-rose to-blush-rose rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Interested in These Projects?
          </h2>
          <p className="text-lg font-lato mb-6 opacity-90">
            Explore creative opportunities and collaborations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-blush-rose font-lato font-semibold bg-sky-50">
              View All Projects
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:text-blush-rose font-lato font-semibold bg-sky-50">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
