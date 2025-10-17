"use client";

import { useState } from 'react';
import { ArrowLeft, Lock, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Mock Link component for demo - replace with actual next/link in your project
const Link = ({ href, children, className = "" }: any) => (
  <a href={href} className={className}>{children}</a>
);

interface OrderSummaryProps {
  plan: {
    name: string;
    price: number;
    features: string[];
  };
  onBack: () => void;
}

export default function CheckoutPage({ plan, onBack }: OrderSummaryProps) {
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const paymentMethods = [
    {
      id: 'paystack',
      name: 'PayStack',
      description: 'All major cards and mobile money',
      supportedNetworks: ['Visa', 'Mastercard', 'MTN Mobile Money', 'Airtel Money', 'Vodafone Cash']
    },
    {
      id: 'momo',
      name: 'MTN Mobile Money',
      description: 'Pay with your MTN mobile wallet'
    },
    {
      id: 'mpesa',
      name: 'M-PESA',
      description: 'Pay with your M-PESA account'
    },
    {
      id: 'airtel',
      name: 'Airtel Money',
      description: 'Pay with your Airtel mobile wallet'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Pay with your PayPal account'
    }
  ];

  const handlePayment = async () => {
    if (!selectedPayment || !email) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="text-center py-12">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="text-green-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Payment Successful!</h2>
              <p className="text-gray-600 text-lg">
                Thank you for your purchase. Your {plan.name} account is being prepared.
              </p>
              <p className="text-gray-500">
                You will receive an email at <strong>{email}</strong> with your account details within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/">Return Home</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/accounts">Browse More Accounts</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={16} />
            Back to Accounts
          </Button>
          <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your purchase securely</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-slate-900">{plan.name}</h3>
                  <p className="text-2xl font-bold text-green-600 mt-2">${plan.price}</p>
                </div>

                <div>
                  <h4 className="font-medium text-slate-900 mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-600">
                        <Check size={16} className="text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span>${plan.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Badges */}
            <Card className="mt-6 bg-green-50 border-green-200">
              <CardContent className="py-4">
                <div className="flex items-center gap-4 text-green-800">
                  <div className="flex items-center gap-2">
                    <Lock size={20} />
                    <span className="text-sm font-medium">Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={20} />
                    <span className="text-sm font-medium">SSL Encrypted</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className="text-sm text-gray-500">
                    We'll send your account details to this email
                  </p>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                  <Label>Select Payment Method</Label>
                  
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedPayment === method.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedPayment(method.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full border-2 ${
                              selectedPayment === method.id
                                ? 'border-green-500 bg-green-500'
                                : 'border-gray-300'
                            }`}
                          />
                          <div>
                            <h4 className="font-medium text-slate-900">{method.name}</h4>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Supported networks for PayStack */}
                      {method.id === 'paystack' && selectedPayment === 'paystack' && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-500 mb-2">Supported networks:</p>
                          <div className="flex flex-wrap gap-2">
                            {method.supportedNetworks?.map((network, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                              >
                                {network}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Terms */}
                <div className="text-xs text-gray-500 space-y-2">
                  <p>
                    By completing this purchase, you agree to our{' '}
                    <Link href="/terms" className="text-green-600 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-green-600 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <p>
                    All accounts come with 30-day support and setup assistance. 
                    Digital products are non-refundable once delivered.
                  </p>
                </div>

                {/* Pay Button */}
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 py-6 text-lg font-semibold"
                  disabled={!selectedPayment || !email || isProcessing}
                  onClick={handlePayment}
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    `Pay $${plan.price}`
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}