
import { useState } from 'react';
import { Menu, X, Upload, BarChart3, User, BookOpen, Gem, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const menuItems = [{
    icon: Upload,
    label: 'Upload & Price',
    path: '/'
  }, {
    icon: BarChart3,
    label: 'Dashboard',
    path: '/dashboard',
    protected: true
  }, {
    icon: User,
    label: 'Portfolio',
    path: '/portfolio',
    protected: true
  }, {
    icon: BookOpen,
    label: 'Learn',
    path: '/learn'
  }];

  const handleNavigation = (path: string, isProtected?: boolean) => {
    if (isProtected && !user) {
      navigate('/auth');
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-gradient-to-br from-blush-rose to-periwinkle-blue rounded-lg flex items-center justify-center relative">
              <Gem className="text-graphite-soft" size={16} />
              <div className="absolute inset-0 bg-gradient-to-br from-blush-rose/30 to-mint-gray/30 rounded-lg blur-sm"></div>
            </div>
            <span className="font-playfair font-bold text-xl text-graphite-soft">Know Your Worth</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => (
              <button 
                key={item.path} 
                onClick={() => handleNavigation(item.path, item.protected)}
                className="flex items-center space-x-2 text-gray-600 hover:text-blush-rose transition-colors duration-200"
              >
                <item.icon size={18} />
                <span className="font-lato font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Welcome back!</span>
                <Button 
                  variant="outline" 
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 text-slate-950 bg-sky-50 rounded-none"
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </Button>
              </div>
            ) : (
              <Button 
                variant="outline" 
                onClick={() => navigate('/auth')}
                className="text-slate-950 bg-sky-50 rounded-none"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blush-rose hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-up">
            <nav className="flex flex-col space-y-3">
              {menuItems.map(item => (
                <button 
                  key={item.path} 
                  onClick={() => handleNavigation(item.path, item.protected)}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-blush-rose hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <item.icon size={20} />
                  <span className="font-lato font-medium">{item.label}</span>
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 px-4">
                {user ? (
                  <Button 
                    onClick={handleSignOut}
                    className="flex items-center justify-center space-x-2 bg-blush-rose hover:bg-blush-rose/90 text-white w-full"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </Button>
                ) : (
                  <Button 
                    onClick={() => handleNavigation('/auth')}
                    className="bg-blush-rose hover:bg-blush-rose/90 text-white w-full"
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
