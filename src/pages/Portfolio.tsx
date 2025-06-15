import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Share2, ExternalLink, Download, Eye, Heart, DollarSign, Edit } from 'lucide-react';
const Portfolio = () => {
  // Mock portfolio data
  const portfolioData = {
    artist: {
      name: "Alex Rivera",
      bio: "Contemporary digital artist specializing in abstract compositions and mixed media installations.",
      location: "San Francisco, CA",
      experience: "8 years",
      specialties: ["Digital Art", "Abstract", "Mixed Media"]
    },
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
  return <div className="min-h-screen bg-gradient-to-br from-cream-beige via-white to-periwinkle-blue/30">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[s#FFF4E0] bg-[#fff4e0]">
        {/* Artist Header */}
        <div className="bg-white rounded-2xl p-8 mb-8 hover-lift">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blush-rose to-blush-rose rounded-full flex items-center justify-center text-white text-2xl font-playfair font-bold">
              AR
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-3xl font-playfair font-bold text-graphite-soft">
                  {portfolioData.artist.name}
                </h1>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleShare} className="bg-sky-50 text-slate-950">
                    <Share2 size={16} className="mr-2" />
                    Share Portfolio
                  </Button>
                  <Button size="sm" className="bg-blush-rose hover:bg-blush-rose/90 text-slate-950 bg-sky-50">
                    <Edit size={16} className="mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </div>
              
              <p className="text-graphite-soft font-lato mb-4 max-w-2xl">
                {portfolioData.artist.bio}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-periwinkle-blue text-graphite-soft">
                  📍 {portfolioData.artist.location}
                </Badge>
                <Badge variant="secondary" className="bg-blush-rose text-graphite-soft">
                  🎨 {portfolioData.artist.experience}
                </Badge>
                {portfolioData.artist.specialties.map((specialty, index) => <Badge key={index} variant="outline" className="border-blush-rose text-blush-rose">
                    {specialty}
                  </Badge>)}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[{
          icon: DollarSign,
          label: 'Total Earnings',
          value: '$12,400',
          color: 'text-green-600'
        }, {
          icon: Eye,
          label: 'Total Views',
          value: '8.3K',
          color: 'text-blue-600'
        }, {
          icon: Heart,
          label: 'Total Likes',
          value: '435',
          color: 'text-pink-600'
        }, {
          icon: ExternalLink,
          label: 'Artworks',
          value: '24',
          color: 'text-blush-rose'
        }].map((stat, index) => <Card key={index} className="hover-lift">
              <CardContent className="p-6 text-center bg-sky-50">
                <stat.icon className={`${stat.color} mx-auto mb-3`} size={32} />
                <div className="text-2xl font-playfair font-bold text-graphite-soft mb-1">
                  {stat.value}
                </div>
                <p className="text-sm font-lato text-graphite-soft">{stat.label}</p>
              </CardContent>
            </Card>)}
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
            {portfolioData.artworks.map(artwork => <Card key={artwork.id} className="overflow-hidden hover-lift group">
                <div className="relative">
                  <img src={artwork.image} alt={artwork.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
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
                  <Badge className={`absolute top-2 right-2 ${artwork.status === 'Sold' ? 'bg-red-500' : artwork.status === 'Commission' ? 'bg-blush-rose text-graphite-soft' : 'bg-green-500'}`}>
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
              </Card>)}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blush-rose to-blush-rose rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Interested in My Work?
          </h2>
          <p className="text-lg font-lato mb-6 opacity-90">
            Let's create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-blush-rose font-lato font-semibold bg-sky-50">
              Commission Artwork
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:text-blush-rose font-lato font-semibold bg-sky-50">
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Portfolio;