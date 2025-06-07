
import { useState } from 'react';
import { Menu, X, Upload, BarChart3, User, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: Upload, label: 'Upload & Price', path: '/' },
    { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
    { icon: User, label: 'Portfolio', path: '/portfolio' },
    { icon: BookOpen, label: 'Learn', path: '/learn' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-gradient-to-br from-sky-coral to-lemon-cream rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AV</span>
            </div>
            <span className="font-playfair font-bold text-xl text-charcoal-black">ArtValue Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex items-center space-x-2 text-gray-600 hover:text-sky-coral transition-colors duration-200"
              >
                <item.icon size={18} />
                <span className="font-lato font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-sky-coral text-sky-coral hover:bg-sky-coral hover:text-white">
              Sign In
            </Button>
            <Button className="bg-sky-coral hover:bg-sky-coral/90">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-sky-coral hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-up">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-sky-coral hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <item.icon size={20} />
                  <span className="font-lato font-medium">{item.label}</span>
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 px-4">
                <Button variant="outline" className="border-sky-coral text-sky-coral hover:bg-sky-coral hover:text-white w-full">
                  Sign In
                </Button>
                <Button className="bg-sky-coral hover:bg-sky-coral/90 w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
