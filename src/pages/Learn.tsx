import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Award, Clock, Users, Star, Play, CheckCircle, Lightbulb, Target, TrendingUp, DollarSign } from 'lucide-react';
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
  return <div className="min-h-screen bg-gradient-to-br from-cream-beige via-white to-periwinkle-blue/30">
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
          label: 'Modules Completed',
          value: '2/6',
          progress: 33
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
          {/* Learning Modules */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="bg-sky-50">
                <CardTitle className="font-playfair flex items-center gap-2">
                  <BookOpen className="text-blush-rose" size={20} />
                  Learning Modules
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-sky-50">
                <div className="space-y-4">
                  {modules.map(module => <div key={module.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-periwinkle-blue rounded-lg flex items-center justify-center">
                            <module.icon className="text-blush-rose" size={20} />
                          </div>
                          <div>
                            <h3 className="font-lato font-semibold text-graphite-soft">{module.title}</h3>
                            <p className="text-sm text-gray-600">{module.description}</p>
                          </div>
                        </div>
                        <Button size="sm" className="bg-blush-rose hover:bg-blush-rose/90">
                          <Play size={16} className="mr-1" />
                          Continue
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {module.duration}
                        </span>
                        <span>{module.lessons} lessons</span>
                        <Badge variant="outline">
                          {module.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium text-graphite-soft">{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card>
              <CardHeader className="bg-sky-50">
                <CardTitle className="font-playfair flex items-center gap-2">
                  <Lightbulb className="text-blush-rose" size={20} />
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
                    <span className="text-sm font-lato text-graphite-soft">Lessons Completed</span>
                    <span className="font-semibold text-graphite-soft">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-lato text-graphite-soft">Study Time</span>
                    <span className="font-semibold text-graphite-soft">3.5h</span>
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