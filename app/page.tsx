'use client';

import { useState, useEffect } from 'react';
import { Check, ArrowRight, PlayCircle, Users, Award, TrendingUp, Shield, Clock, Star, Zap, Target, Rocket, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock Link component for demo - replace with actual next/link in your project
const Link = ({ href, children, className = "" }: any) => (
  <a href={href} className={className}>{children}</a>
);

export default function HomePage() {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Header background on scroll
      setIsScrolled(window.scrollY > 50);

      // Fade-in animation
      const elements = document.querySelectorAll('[data-fade]');
      const newVisible = new Set(visibleElements);

      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          newVisible.add(index);
        }
      });

      setVisibleElements(newVisible);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleElements]);

  return (
    <div className="font-sans bg-gray-50">
      {/* Header */}
      <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">F</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-slate-900">
              Fiverr<span className="text-green-600">Ascend</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="#how-it-works" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">How It Works</Link>
            <Link href="#services" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Services</Link>
            <Link href="#success-stories" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Success Stories</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Pricing</Link>
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-sm sm:text-base">
              <Link href="#pricing">Get Started</Link>
            </Button>
            <button 
              className="lg:hidden text-gray-600 p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-3">
            <Link 
              href="#how-it-works" 
              className="text-gray-600 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#services" 
              className="text-gray-600 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#success-stories" 
              className="text-gray-600 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link 
              href="#pricing" 
              className="text-gray-600 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              <span className="text-xs sm:text-sm font-medium">Trusted by 16+ Successful Freelancers</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              From First Gig to <span className="text-yellow-400 block sm:inline">Full-Time Income</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 text-gray-100 max-w-3xl mx-auto px-4 sm:px-0">
              Your complete launchpad for Fiverr success. Get pre-optimized accounts, proven free training, and powerful tools to start earning faster than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
              <Button asChild size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold text-sm sm:text-base md:text-lg w-full sm:w-auto">
                <Link href="/accounts" className="flex items-center justify-center">
                  Start Your Journey <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/20 text-white hover:bg-white/30 border-2 border-white/30 font-bold text-sm sm:text-base md:text-lg w-full sm:w-auto backdrop-blur-sm">
                <Link href="#how-it-works" className="flex items-center justify-center">
                  <PlayCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Watch Demo
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm px-4 sm:px-0">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Check className="text-green-400 w-3 h-3 sm:w-4 sm:h-4" />
                <span>No Experience Needed</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Check className="text-green-400 w-3 h-3 sm:w-4 sm:h-4" />
                <span>Start Earning in Days</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Check className="text-green-400 w-3 h-3 sm:w-4 sm:h-4" />
                <span>14-Day Money Back</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 sm:py-12 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto text-center">
            <div data-fade className="p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">16+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Successful Students</div>
            </div>
            <div data-fade className="p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">98%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Success Rate</div>
            </div>
            <div data-fade className="p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">$900+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Avg Monthly Earnings</div>
            </div>
            <div data-fade className="p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-fade>
            <span className="inline-block bg-green-100 text-green-600 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              SIMPLE PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Your Path to Fiverr Success
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              We've simplified the entire process into three straightforward steps
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Target,
                  step: "01",
                  title: "Choose Your Account",
                  description: "Select from our pre-optimized accounts crafted to position you for maximum visibility and impact."
                },
                {
                  icon: Rocket,
                  step: "02",
                  title: "Get Set Up",
                  description: "We don't just set up your account — we equip you for success with proven systems, free hands-on training, and a tailored toolkit for optimum results."
                },
                {
                  icon: TrendingUp,
                  step: "03",
                  title: "Start Earning",
                  description: "Start receiving orders within days and scale your business confidently with our ongoing support and growth strategies."
                }
              ].map((item, index) => (
                <div key={index} className="relative group" data-fade>
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group-hover:border-green-200">
                    <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-200 transition-colors">
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-fade>
            <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Choose individual services or get the complete package for maximum results
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Accounts */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-green-200" data-fade>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Pre-Optimized Accounts</h3>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Skip the initial grind with our ready-to-earn Fiverr accounts. Start with starter, Level 1 or Level 2 seller status and appear in search results from day one.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {["Starter, Level 1 & 2 accounts available", "Pre-loaded optimized gigs", "Email access included", "Instant visibility boost"].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700 text-sm sm:text-base">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-sm sm:text-base">
                <Link href="/accounts" className="flex items-center justify-center">
                  Browse Accounts <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <p className="text-center text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">Starting at $150</p>
            </div>

            {/* Training */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-blue-200" data-fade>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Gig Domination Course</h3>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Master Fiverr with our comprehensive training program. Learn proven strategies from beginner to full-time freelancer.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {["Client Communication", "Creating Gigs", "Creating offers", "Personal Assistant AI Set Up", "Attaching withdrawl accounts", "Private community access"].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700 text-sm sm:text-base">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                <Link href="/training" className="flex items-center justify-center">
                  View Training <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <p className="text-center text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">FREE</p>
            </div>

            {/* Tools */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-purple-200" data-fade>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Success Toolkit</h3>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Access our curated collection of tools and resources. Everything you need to streamline workflow and maximize productivity.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {["Security & account tools", "Gig optimization resources", "Productivity suite", "Skill-specific tools"].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700 text-sm sm:text-base">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-sm sm:text-base">
                <Link href="/tools" className="flex items-center justify-center">
                  Explore Tools <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <p className="text-center text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">Varies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div data-fade>
                <span className="inline-block bg-yellow-100 text-yellow-600 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  WHY CHOOSE US
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                  The Smart Way to Start on Fiverr
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                  Stop wasting months trying to figure things out. We've done the hard work so you can focus on what matters—earning money.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      icon: Clock,
                      title: "Save 3-6 Months",
                      desc: "Skip the initial struggle period that holds most sellers back"
                    },
                    {
                      icon: Shield,
                      title: "Proven System",
                      desc: "98% of our students get their first order within 30 days"
                    },
                    {
                      icon: Users,
                      title: "Ongoing Support",
                      desc: "Access to our community and expert guidance whenever you need it"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div data-fade className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">Traditional vs FiverrAscend</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { label: "Time to First Order", traditional: "2-4 weeks", ours: "2-5 days" },
                    { label: "Learning Curve", traditional: "Trial & Error", ours: "Guided System" },
                    { label: "Profile Optimization", traditional: "DIY", ours: "Pre-Optimized" },
                    { label: "Support", traditional: "None", ours: "24/7 Available" }
                  ].map((item, index) => (
                    <div key={index} className="border-b pb-3 sm:pb-4">
                      <div className="text-xs sm:text-sm font-medium text-gray-500 mb-1 sm:mb-2">{item.label}</div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <X className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-1 sm:mr-2" />
                          <span className="text-gray-600 text-xs sm:text-sm">{item.traditional}</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1 sm:mr-2" />
                          <span className="font-bold text-slate-900 text-xs sm:text-sm">{item.ours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-fade>
            <span className="inline-block bg-green-100 text-green-600 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              SUCCESS STORIES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Real Results from Real People
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Join other freelancers who transforming their careers with FiverrAscend
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Moses Morang'a",
                initial: "M",
                role: "Graphic Designer",
                result: "$0 to $900/month in 2 months",
                quote: "I was struggling to get my first order for months. After getting a Level 1 account and taking the course, I got my first order in 3 days! Now I'm making full-time income."
              },
              {
                name: "Victor Babu",
                initial: "V",
                role: "Systematic Reviewer",
                result: "First order in 2 days",
                quote: "The keyword strategy module alone was worth the investment. My gigs now appear on the first page, and I'm getting consistent orders without even sending buyer requests."
              },
              {
                name: "Andrew Osom",
                initial: "A",
                role: "Digital Marketing",
                result: "$1700/month after 3 months",
                quote: "I purchased the Premium account bundle and it completely changed my freelance business. The templates and tools saved me so much time, and the community support is incredible."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300" data-fade>
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl mr-3 sm:mr-4">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg sm:text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3 sm:mb-4 italic text-sm sm:text-base">"{testimonial.quote}"</p>
                <div className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-center">
                  {testimonial.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-600 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-fade>
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              LIMITED TIME OFFER
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Get Everything You Need
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto px-4 sm:px-0">
              Start with individual services or save big with our complete bundle
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200" data-fade>
              <div className="p-6 sm:p-8 md:p-12">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">The Starter Bundle</h3>
                    <p className="text-gray-600 text-sm sm:text-lg">Everything you need to dominate Fiverr—all in one package</p>
                  </div>
                  <div className="bg-yellow-400 text-slate-900 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-bold text-base sm:text-lg">
                    Save $49
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 sm:mb-4 text-lg sm:text-xl">What's Included:</h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {[
                        "Starter Fiverr Account ($150 value)",
                        "Free Hands-on Training Course (Worth $49 value)",
                        "Normal Order Traffic",
                        "Promotional Ads",
                        "14 Days Cash Clearance",
                        "4 Gigs",
                        "Private Community Access",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start text-gray-700 text-sm sm:text-base">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-gray-200">
                    <div>
                      <div className="text-center mb-4 sm:mb-6">
                        <div className="text-gray-500 line-through text-lg sm:text-xl mb-1 sm:mb-2">$199</div>
                        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-1 sm:mb-2">$150</div>
                        <div className="text-gray-600 text-sm sm:text-base">One-time payment</div>
                      </div>

                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        <div className="flex items-center text-xs sm:text-sm text-gray-700">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1 sm:mr-2" />
                          <span>10-day money-back guarantee</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-gray-700">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1 sm:mr-2" />
                          <span>Instant access to all materials</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-gray-700">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1 sm:mr-2" />
                          <span>No recurring fees</span>
                        </div>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-sm sm:text-base md:text-lg py-4 sm:py-6">
                      <Link href="/accounts">Get the Complete Bundle</Link>
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-4 sm:pt-6 text-center">
                  <p className="text-gray-600 text-sm sm:text-base">
                    Or start with individual services: <Link href="/accounts" className="text-green-600 hover:underline font-medium">Accounts</Link> · <Link href="/training" className="text-green-600 hover:underline font-medium">Training</Link> · <Link href="/tools" className="text-green-600 hover:underline font-medium">Tools</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-fade>
            <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Everything you need to know before getting started
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  q: "Do I need any prior experience with Fiverr?",
                  a: "Not at all! Our system is designed for complete beginners. Whether you've never been on Fiverr before or you've struggled to get traction, our step-by-step training and pre-optimized accounts give you everything you need to succeed."
                },
                {
                  q: "How quickly can I start earning?",
                  a: "Most of our students get their first order within 2-5 days when using our pre-optimized accounts and following our training. Compare that to the typical 2-4 weeks (or longer) for accounts starting from scratch."
                },
                {
                  q: "Is buying a Fiverr account safe and legal?",
                  a: "We operate in a consultative and educational capacity. The account transfer is part of our comprehensive training package. We advise all clients to review Fiverr's current terms and make informed decisions. We use secure, encrypted transfer processes to protect your information."
                },
                {
                  q: "What if I'm not satisfied with my purchase?",
                  a: "We offer a 14-day money-back guarantee on our training course. For accounts, we provide comprehensive support to ensure your success. Our 98% success rate speaks for itself—when you follow our system, you get results."
                },
                {
                  q: "Can I get support if I have questions?",
                  a: "Absolutely! Depending on your package, you'll get anywhere from 7 days to 60 days of direct support. Plus, you'll have lifetime access to our private community where you can connect with other successful freelancers and get your questions answered."
                },
                {
                  q: "What makes FiverrAscend different from other courses?",
                  a: "We don't just teach—we provide everything you need to succeed. Pre-optimized accounts, proven training, powerful tools, and ongoing support. It's a complete ecosystem designed to fast-track your success, not just another course that leaves you to figure things out on your own."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300" data-fade>
                  <details className="group">
                    <summary className="flex justify-between items-center p-4 sm:p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors duration-200">
                      <span className="font-bold text-slate-900 pr-4 text-sm sm:text-lg text-left">{faq.q}</span>
                      <span className="transition group-open:rotate-180 flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-6 sm:h-6">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.a}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-white shadow-2xl border border-green-500" data-fade>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Freelance Career?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 opacity-90">
              Stop struggling and start earning. Join 16+ successful freelancers who chose the smart path to Fiverr success.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button asChild size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold text-sm sm:text-base md:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto">
                <Link href="/accounts">Get Started Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/20 text-white hover:bg-white/30 border-2 border-white/30 font-bold text-sm sm:text-base md:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto backdrop-blur-sm">
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm opacity-90">
              <div className="flex items-center">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span>14-Day Money Back</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span>Lifetime Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">F</span>
                </div>
                <span className="text-lg sm:text-xl font-bold">
                  Fiverr<span className="text-green-600">Ascend</span>
                </span>
              </Link>
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Your complete launchpad for Fiverr success. From first gig to full-time freelancing, we provide the accounts, training, and tools you need to succeed.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <Link href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </Link>
                <Link href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </Link>
                <Link href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-400">
                <li><Link href="/accounts" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Fiverr Accounts</Link></li>
                <li><Link href="/training" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Training Course</Link></li>
                <li><Link href="/tools" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Tools & Resources</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Complete Bundle</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">About Us</Link></li>
                <li><Link href="/success-stories" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Success Stories</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Contact</Link></li>
                <li><Link href="/affiliate" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Affiliate Program</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 sm:mb-4">Legal</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-400">
                <li><Link href="/terms" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Privacy Policy</Link></li>
                <li><Link href="/refund" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Refund Policy</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Disclaimer</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
                &copy; 2023 FiverrAscend. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-400">
                <span>Made with ❤️ for freelancers</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}