"use client";

import { useState, useEffect } from 'react';
import { Check, X, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CheckoutPage from '../purchase-decision-form/page';


// Mock Link component for demo - replace with actual next/link in your project
const Link = ({ href, children, className = "", prefetch }: any) => (
  <a href={href} className={className}>{children}</a>
);

export default function AccountsPage() {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: number;
    features: string[];
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-fade]');
      
      setVisibleElements(prev => {
        const newVisible = new Set(prev);
        let hasChanges = false;

        elements.forEach((element, index) => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight - 150 && !prev.has(index)) {
            newVisible.add(index);
            hasChanges = true;
          }
        });

        return hasChanges ? newVisible : prev;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If checkout is open, show only checkout page
  if (selectedPlan) {
    return <CheckoutPage plan={selectedPlan} onBack={() => setSelectedPlan(null)} />;
  }

  const plans = {
    starter: {
      name: "Starter Account",
      price: 150,
      features: [
        "Starter Fiverr Account ($150 value)",
        "Free Hands-on Training Course (Worth $49 value)",
        "Normal Order Traffic",
        "Promotional Ads",
        "14 Days Cash Clearance",
        "4 Gigs",
        "Private Community Access",
      ]
    },
    professional: {
      name: "Professional Account",
      price: 370,
      features: [
        "Everything in Starter, plus:",
        "Level 1 seller status",
        "10 pre-loaded gigs with portfolio",
        "High Order Traffic",
        "Advanced keyword strategy",
        "Competitor analysis",
        "Promotional Coupons",
        "Instant Cash Clearance",
        "Instant support"
      ]
    },
    premium: {
      name: "Premium Account",
      price: 750,
      features: [
        "Everything in Professional, plus:",
        "Level 2 seller status",
        "10 pre-loaded gigs with portfolio",
        "Priority support 60 days",
        "Competitor analysis report",
      ]
    },
    bundle: {
      name: "Ultimate Success Bundle",
      price: 750,
      features: [
        "Premium Level 2 Account (Value $750)",
        "Full Gig Domination Course (Value $49)",
        "Lifetime Access to Tools & Resources (Value $97)",
        "Priority 30-Day Instant Support (Included)"
      ]
    }
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <span className="text-lg font-bold text-slate-900">
              Fiverr<span className="text-green-600">Ascend</span>
            </span>
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-green-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/accounts" className="text-green-600 font-medium border-b-2 border-green-600">
              Accounts
            </Link>
            <Link href="/training" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              Training
            </Link>
            <Link href="/tools" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              Tools
            </Link>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="#pricing">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white shadow-inner">
            <div className="flex flex-col space-y-2 p-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="/accounts" className="text-green-600 font-medium">
                Accounts
              </Link>
              <Link href="/training" className="text-gray-700 hover:text-green-600 font-medium">
                Training
              </Link>
              <Link href="/tools" className="text-gray-700 hover:text-green-600 font-medium">
                Tools
              </Link>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="#pricing">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              LIMITED TIME OFFER
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Skip the Struggle. Start Earning</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Get a <span className="text-yellow-400 font-bold">pre-optimized Fiverr account</span> and bypass months of struggle. Start appearing in search results from day one.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold text-lg">
                <Link href="#pricing">View Account Options</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/20 text-white hover:bg-white/30 border-white/30 font-bold text-lg">
                <Link href="#comparison">See How We Compare</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div data-fade>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Fiverr Struggle Is Real</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Invisible to Buyers',
                    desc: 'New accounts get buried in search results, making it nearly impossible to get your first order.'
                  },
                  {
                    title: 'Zero Credibility',
                    desc: 'Without reviews or a track record, buyers are hesitant to take a chance on you.'
                  },
                  {
                    title: 'Months of Waiting',
                    desc: 'It can take 3-6 months of consistent work just to get to Level 1 seller status.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <X className="text-red-500" size={12} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-fade>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Solution Gets You Results</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Instant Visibility',
                    desc: 'Our accounts are optimized to rank higher in search results from day one.'
                  },
                  {
                    title: 'Built-in Credibility',
                    desc: 'Start with seller levels that show buyers you\'re a proven professional.'
                  },
                  {
                    title: 'Skip The Line',
                    desc: 'Go from zero to earning in days, not months. Start where others hope to be in half a year.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <Check className="text-green-600" size={12} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-fade>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Start From Scratch?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compare the traditional path vs. our accelerated approach
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden" data-fade>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-r border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">Traditional Path</h3>
                  <p className="text-gray-600">Starting from zero</p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Months of Invisibility',
                      desc: 'Your gigs don\'t appear in search results for weeks or months'
                    },
                    {
                      title: 'No Social Proof',
                      desc: 'Zero reviews make buyers hesitant to order from you'
                    },
                    {
                      title: 'Trial and Error',
                      desc: 'Waste time figuring out what works through guesswork'
                    },
                    {
                      title: 'Slow Progression',
                      desc: 'Takes 3-6 months to reach Level 1 seller status'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <X className="text-red-500" size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-700 font-medium text-center">
                    Average Time to First Order: 2-4 weeks
                  </p>
                </div>
              </div>

              <div className="p-8 bg-green-50/50">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">FiverrAscend Path</h3>
                  <p className="text-gray-600">Starting with our accounts</p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Immediate Visibility',
                      desc: 'Your gigs rank higher from day one with our optimization'
                    },
                    {
                      title: 'Built-in Credibility',
                      desc: 'Seller levels show buyers you\'re established and trustworthy'
                    },
                    {
                      title: 'Proven Strategy',
                      desc: 'Gigs are created using data-backed, high-converting formulas'
                    },
                    {
                      title: 'Accelerated Growth',
                      desc: 'Skip ahead to where successful sellers are after months of work'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <Check className="text-green-600" size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-700 font-medium text-center">
                    Average Time to First Order: 2-5 days
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-fade>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Success Path</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the account that matches your ambition level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Account */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-fade>
              <CardHeader className="border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
                      New Seller
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2">Starter Account</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-slate-900">$150</span>
                    <span className="text-gray-500 block text-sm">one-time</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">Perfect for testing the waters or starting a side hustle.</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  {plans.starter.features.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => setSelectedPlan(plans.starter)}
                >
                  Select Plan
                </Button>
              </CardContent>
            </Card>

            {/* Professional Account */}
            <Card className="overflow-hidden shadow-2xl border-2 border-green-600 transform hover:scale-105 transition-transform relative" data-fade>
              <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                MOST POPULAR
              </div>
              <CardHeader className="border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                      Level 1
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2">Professional Account</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-slate-900">$370</span>
                    <span className="text-gray-500 block text-sm">one-time</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">For serious sellers who want to skip the initial grind.</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  {plans.professional.features.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => setSelectedPlan(plans.professional)}
                >
                  Select Plan
                </Button>
              </CardContent>
            </Card>

            {/* Premium Account */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-fade>
              <CardHeader className="border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block bg-purple-100 text-purple-600 text-sm font-medium px-3 py-1 rounded-full">
                      Level 2
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2">Premium Account</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-slate-900">$750</span>
                    <span className="text-gray-500 block text-sm">one-time</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">Maximum head start with high visibility and credibility.</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  {plans.premium.features.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-green-600 mr-3 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => setSelectedPlan(plans.premium)}
                >
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bundle Offer */}
          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center" data-fade>
            <h3 className="text-2xl font-bold mb-2">The Ultimate Success Bundle</h3>
            <p className="text-xl mb-4 opacity-90">Get our Premium Account + Complete Training Course</p>

            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
              <div>
                <span className="text-4xl font-bold">$750</span>
                <span className="text-xl opacity-80 ml-2 line-through">$896</span>
                <span className="block text-yellow-400 font-bold">Save $146</span>
              </div>
              <ul className="text-left space-y-2 text-white opacity-90">
                {plans.bundle.features.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-yellow-400 mr-2 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button 
              className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 px-8 py-6 text-lg font-bold"
              onClick={() => setSelectedPlan(plans.bundle)}
            >
              Get the Ultimate Bundle
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-fade>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Getting started is simple and secure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Select Your Account',
                desc: 'Choose the account level that matches your goals and budget.'
              },
              {
                step: '2',
                title: 'Secure Transfer',
                desc: 'We securely transfer account credentials through encrypted channels.'
              },
              {
                step: '3',
                title: 'Start Earning',
                desc: 'Begin receiving orders with your optimized, high-visibility account.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center" data-fade>
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto" data-fade>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Skip The Line?</h2>
            <p className="text-xl mb-8 opacity-90">
              Stop struggling for visibility and start building your freelance business today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold text-lg">
                <Link href="#pricing">Get Your Account Now</Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="bg-white/20 text-white hover:bg-white/30 border-white/30 font-bold text-lg">
                <Link href="/training">Learn About Our Training</Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-2 text-sm opacity-80">
              <Lock size={16} />
              <span>Secure checkout • 30-day support • 98% success rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="text-lg font-bold">
                  Fiverr<span className="text-green-600">Ascend</span>
                </span>
              </Link>
              <p className="text-gray-400">Your launchpad for Fiverr success. From first gig to full-time freelancing.</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/accounts" className="hover:text-white transition-colors">Fiverr Accounts</Link></li>
                <li><Link href="/training" className="hover:text-white transition-colors">Training Course</Link></li>
                <li><Link href="/tools" className="hover:text-white transition-colors">Tools & Resources</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Bundles</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 FiverrAscend. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}