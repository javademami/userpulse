'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from 'lucide-react'
import { Footer } from "@/components/Footer"; // Import Footer

const pricingPlans = [
  {
    name: 'Free',
    description: 'For individuals just getting started',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      'Basic user analytics',
      'Up to 1,000 monthly active users',
      'Email support',
      '1 project',
    ],
    popular: false,
  },
  {
    name: 'Basic',
    description: 'For growing teams and businesses',
    monthlyPrice: 29,
    annualPrice: 290,
    features: [
      'Advanced user analytics',
      'Up to 10,000 monthly active users',
      'Priority email support',
      '5 projects',
      'Custom event tracking',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    description: 'For large-scale applications',
    monthlyPrice: 99,
    annualPrice: 990,
    features: [
      'Enterprise-grade analytics',
      'Unlimited monthly active users',
      '24/7 phone and email support',
      'Unlimited projects',
      'Custom event tracking',
      'Dedicated account manager',
      'Single Sign-On (SSO)',
    ],
    popular: false,
  },
]

const faqs = [
  {
    question: 'What is a monthly active user?',
    answer: 'A monthly active user is a unique user who has interacted with your application at least once within a 30-day period.',
  },
  {
    question: 'Can I upgrade or downgrade my plan at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for our Basic and Premium plans. No credit card is required to start your trial.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. We also support payment via PayPal.',
  },
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
        
        <div className="flex justify-center items-center mb-8">
          <span className={`mr-2 ${!isAnnual ? 'font-bold' : ''}`}>Monthly</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span className={`ml-2 ${isAnnual ? 'font-bold' : ''}`}>Annual (Save 20%)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col relative ${plan.popular ? 'border-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-2 py-1 text-sm rounded-tr-lg rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="pt-8">
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold mb-4">
                  $
                  {isAnnual
                    ? Math.round(plan.annualPrice / 12)
                    : plan.monthlyPrice}
                  <span className="text-sm font-normal">/month</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{plan.popular ? 'Start Free Trial' : 'Choose Plan'}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}