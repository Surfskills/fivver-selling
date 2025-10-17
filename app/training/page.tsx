"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ChartLine, 
  DollarSign, 
  Star, 
  Check, 
  PlayCircle, 
  Video, 
  FileText, 
  CheckSquare, 
  Users, 
  Award, 
  Infinity, 
  ShieldAlert,
  Download,
  Mail,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// Mock Link component for demo - replace with actual next/link in your project
const Link = ({ href, children, className = "" }: any) => (
  <a href={href} className={className}>{children}</a>
);

export default function TrainingPage() {
  const fadeElementsRef = useRef<HTMLDivElement[]>([]);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Header background on scroll
      setIsScrolled(window.scrollY > 50);

      // Fade-in animation
      fadeElementsRef.current.forEach(element => {
        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 100;
          
          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('opacity-100', 'translate-y-0');
            element.classList.remove('opacity-0', 'translate-y-5');
          }
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !fadeElementsRef.current.includes(el)) {
      fadeElementsRef.current.push(el);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      // Reset form
      setEmail('');
    }
  };

  const handleDownload = () => {
    // Simulate curriculum download
    alert('Thank you! Your curriculum is being prepared for download...');
    // In a real implementation, this would trigger an actual download
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <span className="text-lg font-bold text-slate-900">
              Fiverr<span className="text-green-600">Ascend</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link href="/accounts" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
              Accounts
            </Link>
            <Link href="/training" className="text-green-600 font-medium border-b-2 border-green-600">
              Training
            </Link>
            <Link href="/tools" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
              Tools
            </Link>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-sm">
              <Link href="#download">Get Curriculum</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-sm hidden sm:flex">
              <Link href="#download">Get Curriculum</Link>
            </Button>
            <button 
              className="text-gray-600 p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-3">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/accounts" 
              className="text-gray-600 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accounts
            </Link>
            <Link 
              href="/training" 
              className="text-green-600 font-medium border-l-4 border-green-600 pl-3 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Training
            </Link>
            <Link 
              href="/tools" 
              className="text-gray-600 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tools
            </Link>
            <Button asChild className="bg-green-600 hover:bg-green-700 mt-2 sm:hidden">
              <Link 
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Curriculum
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Email Collection Focus */}
      <section className="bg-gradient-to-br from-green-600 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
          <div ref={addToRefs} className="max-w-3xl mx-auto text-center opacity-0 translate-y-5 transition-all duration-600">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              FREE CURRICULUM DOWNLOAD
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Get Our Complete Fiverr Success Curriculum
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 px-4 sm:px-0">
              Enter your email to instantly download our <span className="text-yellow-400 font-bold">step-by-step curriculum</span> used by 16+ successful students
            </p>
            
            {/* Email Collection Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full pl-10 pr-4 py-3 sm:py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold whitespace-nowrap text-sm sm:text-base py-3 sm:py-4"
                    >
                      Get Free Curriculum
                      <Download className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 text-center sm:text-left">
                    By downloading, you agree to receive occasional emails with tips and updates. Unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <div className="text-center py-4 sm:py-6 md:py-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Check className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Check Your Email!</h3>
                  <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
                    Your curriculum download link has been sent to your email address.
                  </p>
                  <Button 
                    onClick={handleDownload}
                    className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold text-sm sm:text-base"
                  >
                    Download Now
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="text-center mb-8 sm:mb-12 opacity-0 translate-y-5 transition-all duration-600">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">What You'll Learn in Our Curriculum</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Our comprehensive curriculum covers everything from beginner to advanced strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div ref={addToRefs} className="text-center opacity-0 translate-y-5 transition-all duration-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-3 sm:mb-4">
                <ChartLine className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Foundation & Setup</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Account optimization, niche selection, and profile perfection strategies
              </p>
            </div>
            
            <div ref={addToRefs} className="text-center opacity-0 translate-y-5 transition-all duration-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-3 sm:mb-4">
                <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Gig Creation Mastery</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                High-converting gigs, pricing strategies, and ranking techniques
              </p>
            </div>
            
            <div ref={addToRefs} className="text-center opacity-0 translate-y-5 transition-all duration-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mx-auto mb-3 sm:mb-4">
                <Star className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Scaling & Growth</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Client management, review generation, and business scaling methods
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Download Section */}
      <section id="download" className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="text-center mb-8 sm:mb-12 opacity-0 translate-y-5 transition-all duration-600">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Download Complete Curriculum</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Get instant access to our proven Fiverr success blueprint
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Curriculum Details */}
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">What's Included in Your Free Download:</h3>
                  
                  <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                    {lessons.map((module, index) => (
                      <div key={index} className="border-l-4 border-green-500 pl-3 sm:pl-4">
                        <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-1 sm:mb-2">{module.title}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">{module.description}</p>
                        <div className="flex items-center text-xs sm:text-sm text-gray-500">
                          <span>{module.lessons}</span>
                          <span className="mx-1 sm:mx-2">•</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                      <span className="font-medium text-sm sm:text-base">Instant download access</span>
                    </div>
                  </div>
                </div>
                
                {/* Download CTA */}
                <div className="bg-gradient-to-br from-green-600 to-slate-900 text-white p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Download className="w-6 h-6 sm:w-8 sm:h-8 text-slate-900" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Get Your Free Curriculum</h3>
                    <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
                      Enter your email to receive the complete curriculum directly to your inbox
                    </p>
                    
                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                        <div>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 text-sm sm:text-base"
                            required
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold py-2 sm:py-3 text-sm sm:text-base"
                        >
                          Download Curriculum
                        </Button>
                      </form>
                    ) : (
                      <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <p className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Download Started!</p>
                        <Button 
                          onClick={handleDownload}
                          className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold text-sm sm:text-base"
                        >
                          Download File
                        </Button>
                      </div>
                    )}
                    
                    <div className="mt-4 sm:mt-6 flex items-center justify-center text-xs sm:text-sm text-gray-300">
                      <ShieldAlert className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span>We respect your privacy. Unsubscribe anytime.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-green-600 to-slate-900 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="max-w-3xl mx-auto opacity-0 translate-y-5 transition-all duration-600">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Start Your Fiverr Journey?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
              Get our proven curriculum and start implementing strategies that work.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 text-sm sm:text-base"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold whitespace-nowrap text-sm sm:text-base py-2 sm:py-3"
                  >
                    Get Curriculum
                  </Button>
                </div>
              </form>
            ) : (
              <div className="bg-white/10 rounded-lg p-4 sm:p-6 max-w-md mx-auto">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Check Your Email!</h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base">Your curriculum is waiting in your inbox</p>
                <Button 
                  onClick={handleDownload}
                  className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold text-sm sm:text-base"
                >
                  Download Now
                </Button>
              </div>
            )}
            
            <div className="mt-6 sm:mt-8 flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm opacity-80">
              <ShieldAlert className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>No credit card required • Instant access • Free forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-3 sm:mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="text-lg font-bold">
                  Fiverr<span className="text-green-600">Ascend</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm sm:text-base">
                Your launchpad for Fiverr success. From first gig to full-time freelancing.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-3 sm:mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/accounts" className="hover:text-white transition-colors text-sm sm:text-base">Fiverr Accounts</Link></li>
                <li><Link href="/training" className="hover:text-white transition-colors text-sm sm:text-base">Training Course</Link></li>
                <li><Link href="/tools" className="hover:text-white transition-colors text-sm sm:text-base">Tools & Resources</Link></li>
                <li><Link href="#download" className="hover:text-white transition-colors text-sm sm:text-base">Free Curriculum</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors text-sm sm:text-base">About Us</Link></li>
                <li><Link href="/success-stories" className="hover:text-white transition-colors text-sm sm:text-base">Success Stories</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors text-sm sm:text-base">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors text-sm sm:text-base">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">&copy; 2025 FiverrAscend. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Data
const lessons = [
  {
    title: "Lesson 1: Foundation & Mindset",
    description: "Lay the groundwork for your Fiverr success with the right foundation",
    lessons: "1 lesson",
    duration: "45 minutes",
    items: [
      "Understanding the Fiverr Ecosystem",
      "Finding Your Profitable Niche",
      "Setting Realistic Income Goals",
      "Freelancer Mindset & Productivity",
      "Worksheet: Niche Selection & Goal Setting"
    ]
  },
  {
    title: "Lesson 2: Account Setup & Optimization",
    description: "Create a profile that converts visitors into buyers",
    lessons: "1 lesson",
    duration: "1 hour 20 minutes",
    items: [
      "Crafting Your Professional Profile",
      "Creating a Buyer-Focused Bio",
      "Selecting the Right Profile Image",
      "Building a Compelling Portfolio",
      "Template: Bio & Profile Optimization",
      "Worksheet: Portfolio Building",
      "Checklist: Profile Perfection"
    ]
  },
  {
    title: "Lesson 3: Gig Creation Mastery",
    description: "Build gigs that rank high and convert browsers into buyers",
    lessons: "1 lesson",
    duration: "2 hours 15 minutes",
    items: [
      "Keyword Research for Fiverr",
      "Crafting Irresistible Gig Titles",
      "Writing Conversion-Focused Descriptions",
      "Creating High-Converting Gig Images",
      "Pricing Strategy & Package Creation",
      "Gig Video Best Practices",
      "Template: Gig Description Framework",
      "Tool: Keyword Research Tool Access",
      "Worksheet: Gig Creation Plan"
    ]
  },
  {
    title: "Lesson 4: Getting Your First Orders",
    description: "Strategies to land your first clients and build momentum",
    lessons: "1 lesson",
    duration: "1 hour 30 minutes",
    items: [
      "Buyer Request Strategy",
      "Crafting Winning Proposals",
      "Responding to Inquiries",
      "Offering Limited-Time Discounts",
      "Template: Proposal Templates",
      "Worksheet: First Order Action Plan"
    ]
  },
  {
    title: "Lesson 5: Delivering Excellence & Getting Reviews",
    description: "Provide 5-star service that earns you glowing reviews and repeat business",
    lessons: "1 lesson",
    duration: "1 hour 45 minutes",
    items: [
      "Client Communication Best Practices",
      "Setting Clear Expectations",
      "Delivering Work That Exceeds Expectations",
      "Handling Revisions Professionally",
      "Strategies for Getting 5-Star Reviews",
      "Dealing With Difficult Clients",
      "Template: Client Communication Scripts",
      "Checklist: Order Delivery Process"
    ]
  },
  {
    title: "Lesson 6: Scaling Your Business",
    description: "Grow from occasional orders to consistent, high-income freelancing",
    lessons: "1 lesson",
    duration: "1 hour 30 minutes",
    items: [
      "Upselling & Cross-Selling Strategies",
      "Managing Multiple Orders",
      "Time Management for Freelancers",
      "Raising Prices Without Losing Clients",
      "Building a Personal Brand Beyond Fiverr",
      "Template: Upselling Scripts",
      "Worksheet: Business Growth Plan"
    ]
  }
];

const included = [
  {
    icon: Video,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    title: "35+ HD Video Lessons",
    description: "Step-by-step tutorials showing exactly what to do"
  },
  {
    icon: FileText,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    title: "Downloadable Resources",
    description: "Templates, worksheets, and checklists to implement what you learn"
  },
  {
    icon: CheckSquare,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500",
    title: "Actionable Assignments",
    description: "Practical exercises that move you toward your goals"
  },
  {
    icon: Users,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
    title: "Private Community",
    description: "Access to our exclusive student community for support and networking"
  },
  {
    icon: Award,
    bgColor: "bg-red-100",
    iconColor: "text-red-500",
    title: "Certificate of Completion",
    description: "Official certification to showcase your expertise"
  },
  {
    icon: Infinity,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-500",
    title: "Lifetime Access",
    description: "All future updates and new content included at no extra cost"
  }
];