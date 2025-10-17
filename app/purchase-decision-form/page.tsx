"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const dynamic = "force-dynamic"; // disable prerendering

interface OrderSummaryProps {
  plan?: {
    name: string;
    price: number;
    features: string[];
  };
  onBack?: () => void;
}

// ✅ Default plan to prevent build-time undefined errors
const defaultPlan = {
  name: "Starter Plan",
  price: 99,
  features: [
    "Pre-optimized Fiverr profile setup",
    "1-on-1 onboarding session",
    "Three gig templates included",
  ],
};

export default function CheckoutPage({
  plan = defaultPlan,
  onBack = () => window.history.back(),
}: OrderSummaryProps) {
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [clientInfo, setClientInfo] = useState({
    fullName: "",
    phone: "",
    country: "",
    timezone: "",
    skills: "",
    niche: "",
    experience: "",
    targetClients: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setClientInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleOrder = async () => {
    const requiredFields = ["fullName", "phone", "country", "skills", "email"];
    const missingFields = requiredFields.filter((field) => {
      if (field === "email") return !email;
      return !clientInfo[field as keyof typeof clientInfo];
    });

    if (missingFields.length > 0) {
      alert("Please fill in all required fields");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      console.log("Client information:", clientInfo);
      console.log("Selected plan:", plan);
      console.log("Contact email:", email);
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
              <h2 className="text-3xl font-bold text-slate-900">
                Order Received!
              </h2>
              <p className="text-gray-600 text-lg">
                Thank you for your order. Your {plan.name} request has been
                received.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left max-w-md mx-auto">
                <div className="flex items-center gap-2 text-blue-800 mb-2">
                  <Clock size={20} />
                  <h4 className="font-semibold">What happens next:</h4>
                </div>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• Our support team will contact you within 24 hours</li>
                  <li>• We'll discuss your account requirements in detail</li>
                  <li>• You'll receive payment instructions</li>
                  <li>• Account setup begins after payment confirmation</li>
                </ul>
              </div>
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
      <div className="container mx-auto px-4 max-w-6xl">
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
          <h1 className="text-3xl font-bold text-slate-900">Place Your Order</h1>
          <p className="text-gray-600 mt-2">
            Provide your details and our team will contact you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Personal Info */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <p className="text-sm text-gray-600">
                  We need this to understand your requirements
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={clientInfo.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="+1234567890"
                      value={clientInfo.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      placeholder="Your country"
                      value={clientInfo.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input
                      id="timezone"
                      placeholder="e.g., UTC+1, EST, etc."
                      value={clientInfo.timezone}
                      onChange={(e) =>
                        handleInputChange("timezone", e.target.value)
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills & Niche */}
            <Card>
              <CardHeader>
                <CardTitle>Skills & Services</CardTitle>
                <p className="text-sm text-gray-600">
                  Tell us about your skills and target market
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="skills">Your Skills & Services *</Label>
                  <Textarea
                    id="skills"
                    placeholder="e.g., Graphic design, WordPress, Video editing"
                    value={clientInfo.skills}
                    onChange={(e) => handleInputChange("skills", e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="niche">Preferred Niche</Label>
                    <Input
                      id="niche"
                      placeholder="e.g., Logo design, E-commerce"
                      value={clientInfo.niche}
                      onChange={(e) =>
                        handleInputChange("niche", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Input
                      id="experience"
                      placeholder="Beginner, Intermediate, Expert"
                      value={clientInfo.experience}
                      onChange={(e) =>
                        handleInputChange("experience", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetClients">Target Clients</Label>
                  <Input
                    id="targetClients"
                    placeholder="e.g., Small businesses, Agencies"
                    value={clientInfo.targetClients}
                    onChange={(e) =>
                      handleInputChange("targetClients", e.target.value)
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <p className="text-sm text-gray-600">
                  Where we should contact you
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Your Email Address *</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="text-2xl font-bold text-green-600 mt-2">
                    ${plan.price}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-slate-900 mb-3">
                    What's included:
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <Check
                          size={16}
                          className="text-green-600 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total Amount</span>
                    <span>${plan.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="py-6">
                <div className="flex items-start gap-3">
                  <Clock className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">
                      What happens after you order?
                    </h4>
                    <ul className="text-blue-800 text-sm space-y-2">
                      <li>• Support team contacts you within 24 hours</li>
                      <li>• Discuss your account requirements</li>
                      <li>• Receive secure payment instructions</li>
                      <li>• Setup begins after payment confirmation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms & Button */}
            <Card>
              <CardContent className="space-y-6 pt-6">
                <div className="text-xs text-gray-500 space-y-2">
                  <p>
                    By placing this order, you agree to our{" "}
                    <Link href="/terms" className="text-green-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-green-600 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700 py-6 text-lg font-semibold"
                  disabled={!email || isProcessing}
                  onClick={handleOrder}
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Placing Your Order...
                    </div>
                  ) : (
                    `Place Your Order - $${plan.price}`
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
