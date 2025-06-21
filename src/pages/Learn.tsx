import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Award, Clock, Users, Star, Play, CheckCircle, Lightbulb, Target, TrendingUp, DollarSign, Image, ShoppingBag, MessageSquare, Upload, Instagram } from 'lucide-react';

const Learn = () => {
  const modules = [{
    id: 1,
    title: 'Pricing Fundamentals',
    description: 'Learn the basics of art valuation and pricing strategies',
    duration: '45 min',
    lessons: 8,
    difficulty: 'Beginner',
    progress: 75,
    icon: DollarSign,
    completed: false
  }, {
    id: 2,
    title: 'Market Analysis',
    description: 'Understanding trends and market dynamics',
    duration: '1h 15min',
    lessons: 12,
    difficulty: 'Intermediate',
    progress: 30,
    icon: TrendingUp,
    completed: false
  }, {
    id: 3,
    title: 'Client Communication',
    description: 'Master the art of client relations and negotiations',
    duration: '55 min',
    lessons: 10,
    difficulty: 'Advanced',
    progress: 0,
    icon: Users,
    completed: false
  }];
  const achievements = [{
    name: 'First Valuation',
    icon: Star,
    earned: true,
    description: 'Complete your first artwork pricing'
  }, {
    name: 'Market Analyst',
    icon: TrendingUp,
    earned: true,
    description: 'Study 10 market trend reports'
  }, {
    name: 'Pricing Pro',
    icon: Award,
    earned: false,
    description: 'Price 50 artworks successfully'
  }, {
    name: 'Community Helper',
    icon: Users,
    earned: false,
    description: 'Help 5 fellow artists'
  }];
  const resourceHub = [
    {
      id: 1,
      title: 'How to Price Your Art (With Examples)',
      description: 'Real pricing strategies with step-by-step examples from successful artists',
      icon: DollarSign,
      readTime: '8 min read',
      category: 'Pricing',
      color: 'bg-emerald-50 border-emerald-200',
      iconColor: 'text-emerald-600'
    },
    {
      id: 2,
      title: 'What Buyers Actually Look For',
      description: 'Inside insights on what makes collectors and buyers choose specific artworks',
      icon: Target,
      readTime: '6 min read',
      category: 'Market',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 3,
      title: 'How to Handle Custom Requests',
      description: 'Navigate commissions, custom work, and client expectations like a pro',
      icon: MessageSquare,
      readTime: '10 min read',
      category: 'Business',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      title: 'Checklist Before You Upload Your Art Online',
      description: 'Essential preparation steps to maximize your online art sales',
      icon: Upload,
      readTime: '5 min read',
      category: 'Digital',
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600'
    },
    {
      id: 5,
      title: 'Instagram vs Etsy vs Gallery – Where Should You Sell?',
      description: 'Compare platforms and find the best fit for your art style and goals',
      icon: ShoppingBag,
      readTime: '12 min read',
      category: 'Platforms',
      color: 'bg-pink-50 border-pink-200',
      iconColor: 'text-pink-600'
    },
    {
      id: 6,
      title: 'Building Your Artist Brand on Social Media',
      description: 'Authentic strategies to grow your following and connect with buyers',
      icon: Instagram,
      readTime: '9 min read',
      category: 'Marketing',
      color: 'bg-indigo-50 border-indigo-200',
      iconColor: 'text-indigo-600'
    }
  ];
  const quickTips = [{
    title: 'Research Your Market',
    content: 'Study similar artists and their pricing to understand your position',
    category: 'Strategy'
  }, {
    title: 'Document Your Process',
    content: 'Keep detailed records of time spent and materials used',
    category: 'Organization'
  }, {
    title: 'Factor in Your Experience',
    content: 'More experienced artists can command higher prices',
    category: 'Pricing'
  }, {
    title: 'Consider the Venue',
    content: 'Gallery sales vs online sales may have different pricing strategies',
    category: 'Sales'
  }];
  return <div className="min-h-screen from-cream-beige via-white to-periwinkle-blue/30 bg-[t#FFF4E0] bg-[#fff4e0]">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[s#FFF4E0] bg-[#fff4e0]">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-graphite-soft mb-2">
            Learn & Grow
          </h1>
          <p className="text-graphite-soft font-lato">Master the art of pricing and grow your artistic business</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[{
          icon: BookOpen,
          label: 'Resources Read',
          value: '12/25',
          progress: 48
        }, {
          icon: Award,
          label: 'Badges Earned',
          value: '3',
          progress: 75
        }, {
          icon: Clock,
          label: 'Learning Hours',
          value: '12.5',
          progress: 60
        }, {
          icon: Target,
          label: 'Skills Mastered',
          value: '8/15',
          progress: 53
        }].map((stat, index) => <Card key={index} className="hover-lift">
              <CardContent className="p-6 bg-sky-50">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="text-blush-rose" size={24} />
                  <span className="text-2xl font-playfair font-bold text-graphite-soft">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm font-lato text-graphite-soft mb-2">{stat.label}</p>
                <Progress value={stat.progress} className="h-2" />
              </CardContent>
            </Card>)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resource Hub */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="bg-sky-50">
                <CardTitle className="font-playfair flex items-center gap-2">
                  <Lightbulb className="text-blush-rose" size={20} />
                  Practical Resource Hub
                </CardTitle>
                <p className="text-sm text-gray-600 font-lato">
                  Actionable guides and insights to help you succeed as an artist
                </p>
              </CardHeader>
              <CardContent className="bg-sky-50 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resourceHub.map(resource => (
                    <div 
                      key={resource.id} 
                      className={`${resource.color} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 ${resource.color.split(' ')[0]} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <resource.icon className={resource.iconColor} size={24} />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {resource.category}
                        </Badge>
                      </div>
                      
                      <h3 className="font-lato font-bold text-graphite-soft mb-2 leading-tight group-hover:text-blush-rose transition-colors">
                        {resource.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock size={12} />
                          {resource.readTime}
                        </span>
                        <Button size="sm" variant="ghost" className="text-blush-rose hover:bg-blush-rose/10 p-2">
                          <Play size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button className="bg-blush-rose hover:bg-blush-rose/90 text-white">
                    View All Resources
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card>
              <CardHeader className="bg-sky-50">
                <CardTitle className="font-playfair flex items-center gap-2">
                  <Star className="text-blush-rose" size={20} />
                  Quick Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-sky-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickTips.map((tip, index) => <div key={index} className="bg-mint-gray/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-lato font-semibold text-sm text-graphite-soft">
                          {tip.title}
                        </h4>
                        <Badge variant="outline">
                          {tip.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{tip.content}</p>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card>
              <CardHeader className="bg-sky-50">
                <CardTitle className="font-playfair flex items-center gap-2">
                  <Award className="text-blush-rose" size={20} />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-sky-50">
                <div className="space-y-3">
                  {achievements.map((achievement, index) => <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${achievement.earned ? 'bg-blush-rose text-white' : 'bg-gray-300 text-gray-500'}`}>
                        {achievement.earned ? <CheckCircle size={16} /> : <achievement.icon size={16} />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-lato font-semibold text-sm text-graphite-soft">
                          {achievement.name}
                        </h4>
                        <p className="text-xs text-graphite-soft">{achievement.description}</p>
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            {/* Learning Stats */}
            <Card>
              <CardHeader className="bg-sky-50">
                <CardTitle className="font-playfair text-sm">This Week</CardTitle>
              </CardHeader>
              <CardContent className="bg-sky-50">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-lato text-graphite-soft">Resources Read</span>
                    <span className="font-semibold text-graphite-soft">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-lato text-graphite-soft">Study Time</span>
                    <span className="font-semibold text-graphite-soft">2.5h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-lato text-graphite-soft">Streak</span>
                    <span className="font-semibold text-blush-rose">5 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community */}
            <Card>
              <CardHeader className="bg-sky-50">
                <CardTitle className="font-playfair flex items-center gap-2">
                  <Users className="text-blush-rose" size={20} />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-sky-50">
                <div className="text-center">
                  <div className="text-2xl font-playfair font-bold text-graphite-soft mb-1">1,247</div>
                  <div className="text-sm font-lato text-graphite-soft mb-4">Active Learners</div>
                  <Button variant="outline" className="w-full border-blush-rose text-blush-rose hover:bg-blush-rose bg-sky-50 text-slate-950">
                    Join Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};

export default Learn;
