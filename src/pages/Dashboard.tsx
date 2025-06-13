
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, DollarSign, Eye, Heart, Calendar, MapPin } from 'lucide-react';

const Dashboard = () => {
  // Mock data for demo
  const revenueData = [
    { month: 'Jan', revenue: 1200, artworks: 5 },
    { month: 'Feb', revenue: 1800, artworks: 7 },
    { month: 'Mar', revenue: 2400, artworks: 9 },
    { month: 'Apr', revenue: 3200, artworks: 12 },
    { month: 'May', revenue: 2800, artworks: 10 },
    { month: 'Jun', revenue: 4100, artworks: 15 }
  ];

  const trendingStyles = [
    { style: 'Abstract', demand: 85, region: 'North America', trend: '+12%' },
    { style: 'Digital Art', demand: 92, region: 'Global', trend: '+24%' },
    { style: 'Realistic', demand: 78, region: 'Europe', trend: '+8%' },
    { style: 'Mixed Media', demand: 81, region: 'Asia', trend: '+15%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-beige via-white to-periwinkle-blue/30">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-graphite-soft mb-2">
            Market Trends Dashboard
          </h1>
          <p className="text-gray-600 font-lato">Stay ahead with real-time art market insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: DollarSign, label: 'Avg. Sale Price', value: '$2,850', change: '+12%', color: 'text-green-600' },
            { icon: TrendingUp, label: 'Market Growth', value: '18.5%', change: '+3.2%', color: 'text-blush-rose' },
            { icon: Eye, label: 'Views This Month', value: '15.2K', change: '+25%', color: 'text-blue-600' },
            { icon: Heart, label: 'Engagement Rate', value: '8.4%', change: '+1.8%', color: 'text-pink-600' }
          ].map((metric, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className="text-blush-rose" size={24} />
                  <Badge variant="secondary" className={`${metric.color} bg-transparent`}>
                    {metric.change}
                  </Badge>
                </div>
                <div className="text-2xl font-playfair font-bold text-graphite-soft mb-1">
                  {metric.value}
                </div>
                <p className="text-sm font-lato text-gray-600">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Trends */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="font-playfair">Revenue & Sales Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [
                      name === 'revenue' ? `$${value}` : value,
                      name === 'revenue' ? 'Revenue' : 'Artworks'
                    ]} />
                    <Line type="monotone" dataKey="revenue" stroke="#F9D5D3" strokeWidth={3} />
                    <Line type="monotone" dataKey="artworks" stroke="#DDEBF9" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Trending Styles */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="font-playfair flex items-center gap-2">
                <TrendingUp className="text-blush-rose" size={20} />
                Trending Art Styles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trendingStyles.map((style, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-lato font-semibold text-graphite-soft">{style.style}</h3>
                      <Badge className="bg-mint-gray text-graphite-soft">
                        {style.trend}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {style.region}
                      </div>
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blush-rose h-2 rounded-full transition-all duration-500"
                            style={{ width: `${style.demand}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="font-medium">{style.demand}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Heatmap & Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Regional Insights */}
          <Card className="lg:col-span-2 hover-lift">
            <CardHeader>
              <CardTitle className="font-playfair">Regional Market Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { region: 'North America', activity: 'High', value: '$3.2K', color: 'bg-blush-rose' },
                  { region: 'Europe', activity: 'Medium', value: '$2.8K', color: 'bg-periwinkle-blue' },
                  { region: 'Asia Pacific', activity: 'High', value: '$3.1K', color: 'bg-blush-rose' },
                  { region: 'South America', activity: 'Low', value: '$1.9K', color: 'bg-mint-gray' },
                  { region: 'Africa', activity: 'Growing', value: '$2.1K', color: 'bg-green-400' },
                  { region: 'Middle East', activity: 'Medium', value: '$2.5K', color: 'bg-periwinkle-blue' }
                ].map((region, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className={`w-16 h-16 ${region.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                      <MapPin className="text-white" size={24} />
                    </div>
                    <h3 className="font-lato font-semibold text-sm text-graphite-soft mb-1">
                      {region.region}
                    </h3>
                    <p className="text-xs text-gray-600 mb-1">{region.activity} Activity</p>
                    <p className="text-sm font-semibold text-blush-rose">{region.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="font-playfair flex items-center gap-2">
                <Calendar className="text-blush-rose" size={20} />
                Market Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { event: 'Art Basel Miami', date: 'Dec 8-10', impact: 'High' },
                  { event: 'Digital Art Week', date: 'Dec 15-20', impact: 'Medium' },
                  { event: 'Winter Exhibitions', date: 'Jan 5-25', impact: 'Medium' },
                  { event: 'NFT Conference', date: 'Jan 12-14', impact: 'High' }
                ].map((event, index) => (
                  <div key={index} className="border-l-4 border-blush-rose pl-4 py-2">
                    <h4 className="font-lato font-semibold text-graphite-soft text-sm">
                      {event.event}
                    </h4>
                    <p className="text-xs text-gray-600">{event.date}</p>
                    <Badge 
                      className={`mt-1 ${event.impact === 'High' ? 'bg-blush-rose' : 'bg-periwinkle-blue text-graphite-soft'}`}
                    >
                      {event.impact} Impact
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
