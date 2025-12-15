import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Zap } from 'lucide-react';

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(query.trim()) onSearch(query);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.location.reload()}>
            <Zap className="w-8 h-8 text-neon-purple animate-glow" />
            <span className="font-display text-2xl font-bold tracking-wider text-white group-hover:text-neon-blue transition-colors">
              NEON<span className="text-neon-purple">STREAM</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white transition-colors hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]">Home</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
