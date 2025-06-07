import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Award, Clock, CheckCircle, Play, Star } from 'lucide-react';

const Learn = () => {
  const modules = [
    {
      id: 1,
      title: "Pricing Fundamentals",
      description: "Learn the basics of art pricing and market dynamics",
      duration: "15 min",
      lessons: 4,
      progress: 100,
      badge: "completed",
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Understanding Your Market",
      description: "Identify your target audience and market positioning",
      duration: "20 min",
      lessons: 5,
      progress: 75,
      badge: "in-progress",
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "Client Communication",
      description: "Master the art of client negotiations and relationship building",
      duration: "25 min",
      lessons: 6,
      progress: 30,
      badge: "in-progress",
      difficulty: "Intermediate"
    },
    {
      id: 4,
      title: "Licensing & Rights",
      description: "Understand different licensing models and protect your work",
      duration: "30 min",
      lessons: 7,
      progress: 0,
      badge: "locked",
      difficulty: "Advanced"
    },
    {
      id: 5,
      title: "Digital Marketing for Artists",
      description: "Promote your work effectively across digital platforms",
      duration: "35 min",
      lessons: 8,
      progress: 0,
      badge: "locked",
      difficulty: "Intermediate"
    },
    {
      id: 6,
      title: "Portfolio Optimization",
      description: "Build a portfolio that converts viewers into buyers",
      duration: "28 min",
      lessons: 6,
      progress: 0,
      badge: "locked",
      difficulty: "Intermediate"
    }
  ];

  const achievements = [
    { icon: Star, title: "First Steps", description: "Completed your first module", earned: true },
    { icon: Award, title: "Quick Learner", description: "Finished 3 modules in a week", earned: true },
    { icon: BookOpen, title: "Scholar", description: "Read all pricing guides", earned: false },
    { icon: CheckCircle, title: "Master", description: "Completed all modules", earned: false }
  ];

  const quickTips = [
    {
      title: "Price with Confidence",
      tip: "Factor in your time, materials, skill level, and market demand when pricing artwork.",
      category: "Pricing"
    },
    {
      title: "Build Relationships",
      tip: "Long-term client relationships are more valuable than one-time sales.",
      category: "Client Relations"
    },
    {
      title: "Document Everything",
      tip: "Keep detailed records of your pricing decisions and their outcomes.",
      category: "Business"
    },
    {
      title: "Stay Market-Aware",
      tip: "Regularly research what similar artists in your style and skill level are charging.",
      category: "Research"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-mist-blue via-white to-lemon-cream/30">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-charcoal-black mb-2">
            Art Business Academy
          </h1>
          <p className="text-gray-600 font-lato">Master the business side of art with our comprehensive guides</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <BookOpen className="text-sky-coral mx-auto mb-3" size={32} />
              <div className="text-2xl font-playfair font-bold text-charcoal-black mb-1">6</div>
              <p className="text-sm font-lato text-gray-600">Total Modules</p>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <CheckCircle className="text-green-600 mx-auto mb-3" size={32} />
              <div className="text-2xl font-playfair font-bold text-charcoal-black mb-1">1</div>
              <p className="text-sm font-lato text-gray-600">Completed</p>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <Clock className="text-lemon-cream mx-auto mb-3" size={32} />
              <div className="text-2xl font-playfair font-bold text-charcoal-black mb-1">2.5h</div>
              <p className="text-sm font-lato text-gray-600">Time Invested</p>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <Award className="text-purple-600 mx-auto mb-3" size={32} />
              <div className="text-2xl font-playfair font-bold text-charcoal-black mb-1">2</div>
              <p className="text-sm font-lato text-gray-600">Badges Earned</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Learning Modules */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-playfair font-bold text-charcoal-black">Learning Modules</h2>
            
            {modules.map((module) => (
              <Card key={module.id} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-playfair font-semibold text-charcoal-black">
                          {module.title}
                        </h3>
                        <Badge 
                          className={`
                            ${module.badge === 'completed' ? 'bg-green-500' : 
                              module.badge === 'in-progress' ? 'bg-lemon-cream text-charcoal-black' : 
                              'bg-gray-400'}
                          `}
                        >
                          {module.badge === 'completed' ? 'Completed' : 
                           module.badge === 'in-progress' ? 'In Progress' : 'Locked'}
                        </Badge>
                      </div>
                      <p className="text-gray-600 font-lato mb-3">{module.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {module.duration}
                        </span>
                        <span>{module.lessons} lessons</span>
                        <Badge variant="outline">
                          {module.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      className={`
                        ${module.badge === 'locked' ? 'bg-gray-400 cursor-not-allowed' : 
                          'bg-sky-coral hover:bg-sky-coral/90'}
                      `}
                      disabled={module.badge === 'locked'}
                    >
                      {module.badge === 'completed' ? 'Review' : 
                       module.badge === 'in-progress' ? 'Continue' : 'Start'}
                      <Play size={16} className="ml-2" />
                    </Button>
                  </div>
                  
                  {module.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-lato text-gray-600">Progress</span>
                        <span className="font-lato font-medium">{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="font-playfair flex items-center gap-2">
                  <Award className="text-sky-coral" size={20} />
                  Your Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      achievement.earned ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                    }`}
                  >
                    <achievement.icon 
                      className={achievement.earned ? 'text-green-600' : 'text-gray-400'} 
                      size={24} 
                    />
                    <div className="flex-1">
                      <h4 className="font-lato font-semibold text-sm text-charcoal-black">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                    </div>
                    {achievement.earned && (
                      <CheckCircle className="text-green-600" size={16} />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="font-playfair">💡 Quick Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickTips.map((tip, index) => (
                  <div key={index} className="border-l-4 border-sky-coral pl-4 py-2">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-lato font-semibold text-sm text-charcoal-black">
                        {tip.title}
                      </h4>
                      <Badge variant="outline">
                        {tip.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 font-lato">{tip.tip}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
