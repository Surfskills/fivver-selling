"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  UserCog,
  BarChart3,
  ShieldCheck,
  Rocket,
  DollarSign,
  Lock,
  ListTodo,
  Clock,
  Shield,
  ChartLine,
  Send,
  User,
  Mail,
  MessageSquare,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// Mock Link component for demo - replace with actual next/link in your project
const Link = ({ href, children, className = "" }: any) => (
  <a href={href} className={className}>{children}</a>
);

export default function ToolsPage() {
  const fadeElementsRef = useRef<HTMLDivElement[]>([]);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const scrollToContactForm = (service: string = '') => {
    if (service) {
      setFormData(prev => ({
        ...prev,
        service: service
      }));
    }
    
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
    
    // Show success message (you can replace this with a toast notification)
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
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
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link href="/accounts" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
              Accounts
            </Link>
            <Link href="/training" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
              Training
            </Link>
            <Link href="/tools" className="text-green-600 font-medium border-b-2 border-green-600">
              Tools
            </Link>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-sm">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-sm hidden sm:flex">
              <Link href="#contact">Get In Touch</Link>
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
              className="text-gray-600 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Training
            </Link>
            <Link 
              href="/tools" 
              className="text-green-600 font-medium border-l-4 border-green-600 pl-3 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tools
            </Link>
            <Button asChild className="bg-green-600 hover:bg-green-700 mt-2 sm:hidden">
              <Link 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
          <div ref={addToRefs} className="max-w-3xl mx-auto text-center opacity-0 translate-y-5 transition-all duration-600">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              BUSINESS MANAGEMENT SUITE
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Essential Freelancer Business Tools
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 px-4 sm:px-0">
              Streamlined tools for <span className="text-yellow-400 font-bold">account management, payment processing, and business operations</span> in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold text-sm sm:text-base py-3 sm:py-4"
                onClick={() => scrollToContactForm()}
              >
                Get Started
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm sm:text-base py-3 sm:py-4">
                <Link href="#features">View Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="text-center mb-8 sm:mb-12 opacity-0 translate-y-5 transition-all duration-600">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Streamline Your Business Operations</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Essential tools designed to manage your freelance business efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div ref={addToRefs} className="text-center opacity-0 translate-y-5 transition-all duration-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-3 sm:mb-4">
                <ChartLine className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Account Performance</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Monitor and optimize your Fiverr account ratings with real-time analytics
              </p>
            </div>
            
            <div ref={addToRefs} className="text-center opacity-0 translate-y-5 transition-all duration-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-3 sm:mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Secure Operations</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Protect your accounts with proxy solutions and handle restrictions professionally
              </p>
            </div>
            
            <div ref={addToRefs} className="text-center opacity-0 translate-y-5 transition-all duration-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mx-auto mb-3 sm:mb-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Business Automation</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                AI assistants and payment processing to automate routine business tasks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Categories */}
      <section id="features" className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="text-center mb-8 sm:mb-12 opacity-0 translate-y-5 transition-all duration-600">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Core Business Management Tools</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Essential tools focused on account management and business operations
            </p>
          </div>
          
          {/* Account Management & Business Tools */}
          <div ref={addToRefs} className="max-w-4xl mx-auto mb-12 sm:mb-16 opacity-0 translate-y-5 transition-all duration-600">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-green-600 text-white p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center sm:justify-start text-center sm:text-left">
                  <UserCog className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Account Management & Business Tools
                </h3>
                <p className="opacity-90 mt-2 text-center sm:text-left text-sm sm:text-base">
                  Essential tools for account security, payments, and business operations
                </p>
              </div>
              
              <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {accountTools.map((tool, index) => (
                  <ToolCard 
                    key={index} 
                    {...tool} 
                    onCtaClick={() => scrollToContactForm(tool.serviceType)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-12 sm:py-16 bg-white" ref={contactFormRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="text-center mb-8 sm:mb-12 opacity-0 translate-y-5 transition-all duration-600">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Get Professional Assistance</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Let us help you set up and optimize your freelance business tools
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div ref={addToRefs} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden opacity-0 translate-y-5 transition-all duration-600">
              <div className="bg-green-600 text-white p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Service Inquiry Form
                </h3>
                <p className="text-center opacity-90 mt-2 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    <UserCog className="w-4 h-4 inline mr-2" />
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="fiverr-accounts-rating">Fiverr Accounts Rating</option>
                    <option value="proxies-sales-setup">Proxies Sales & Setup</option>
                    <option value="personal-assistant-ai">Personal Assistant AI Setup</option>
                    <option value="paypal-payments">PayPal Payments Processing</option>
                    <option value="multiple-services">Multiple Services</option>
                    <option value="custom-solution">Custom Solution</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Please describe your project requirements, current challenges, and any specific goals you'd like to achieve..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 font-bold py-2 sm:py-3 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Send Inquiry
                    </>
                  )}
                </Button>

                <div className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                  <Lock className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                  Your information is secure and will never be shared with third parties
                </div>
              </form>
            </div>

            {/* Additional Contact Info */}
            <div ref={addToRefs} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 opacity-0 translate-y-5 transition-all duration-600">
              <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2 sm:mb-3" />
                <h4 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Response Time</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Typically within 24 hours during business days</p>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
                <User className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2 sm:mb-3" />
                <h4 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Expert Support</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Dedicated specialists for each service area</p>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2 sm:mb-3" />
                <h4 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Confidential</h4>
                <p className="text-gray-600 text-xs sm:text-sm">All inquiries handled with strict confidentiality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-green-600 to-slate-900 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="max-w-3xl mx-auto opacity-0 translate-y-5 transition-all duration-600">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Streamline Your Freelance Business?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
              Join professionals who use our tools to manage their accounts and operations efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold text-sm sm:text-base py-3 sm:py-4"
                onClick={() => scrollToContactForm()}
              >
                Get Started Today
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm sm:text-base py-3 sm:py-4">
                <Link href="/training">View Training</Link>
              </Button>
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
                Essential tools for Fiverr business management and account operations.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-3 sm:mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/accounts" className="hover:text-white transition-colors text-sm sm:text-base">Fiverr Accounts</Link></li>
                <li><Link href="/training" className="hover:text-white transition-colors text-sm sm:text-base">Training Course</Link></li>
                <li><Link href="/tools" className="hover:text-white transition-colors text-sm sm:text-base">Business Tools</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors text-sm sm:text-base">Consultation</Link></li>
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
            <p className="text-xs sm:text-sm">&copy; 2023 FiverrAscend. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Updated Tool Card Component with CTA
interface ToolCardProps {
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
  title: string;
  description: string;
  serviceType: string;
  onCtaClick: () => void;
}

function ToolCard({ icon: Icon, bgColor, iconColor, title, description, onCtaClick }: ToolCardProps) {
  return (
    <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border border-gray-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 ${bgColor} rounded-lg flex items-center justify-center mb-3 sm:mb-4`}>
        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${iconColor}`} />
      </div>
      <h4 className="font-bold text-slate-900 mb-2 text-base sm:text-lg">{title}</h4>
      <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">{description}</p>
      <Button 
        onClick={onCtaClick}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium mt-auto text-xs sm:text-sm py-2"
        size="sm"
      >
        Get Started <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
      </Button>
    </div>
  );
}

// Updated Data - Added serviceType for each tool
const accountTools = [
  {
    icon: BarChart3,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    title: "Fiverr Accounts Rating",
    description: "Monitor and optimize your Fiverr account ratings with real-time analytics and improvement suggestions",
    serviceType: "fiverr-accounts-rating"
  },
  {
    icon: ShieldCheck,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    title: "Proxies Sales & Setup",
    description: "Secure proxy solutions with easy setup guides to maintain account security and access",
    serviceType: "proxies-sales-setup"
  },
  {
    icon: Rocket,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500",
    title: "Personal Assistant AI Setup",
    description: "Configure AI assistants to automate client communications and routine business tasks",
    serviceType: "personal-assistant-ai"
  },
  {
    icon: DollarSign,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
    title: "PayPal Payments Processing",
    description: "Streamlined PayPal integration and management for seamless payment processing",
    serviceType: "paypal-payments"
  },
];