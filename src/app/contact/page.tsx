'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Footer } from "@/components/Footer"; // Import Footer

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-primary" />
                  <span>123 UX Street, Analysis City, 12345</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-primary" />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-primary" />
                  <span>contact@uxanalysis.com</span>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardContent>
                <div className="aspect-video bg-muted flex items-center justify-center">
                  {/* Replace this with an actual map component */}
                  <span className="text-muted-foreground">Map Placeholder</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-primary/80"><Facebook /></a>
                  <a href="#" className="text-primary hover:text-primary/80"><Twitter /></a>
                  <a href="#" className="text-primary hover:text-primary/80"><Instagram /></a>
                  <a href="#" className="text-primary hover:text-primary/80"><Linkedin /></a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}