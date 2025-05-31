"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Please enter a subject"),
  message: z.string().min(10, "Please enter a message (minimum 10 characters)"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, we would send the data to an API endpoint
    console.log(data);
    
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Have questions about our products, creators, or mission? We're here to help!
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <div className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@ishigaki-artisans.com</p>
                  <p className="text-muted-foreground">support@ishigaki-artisans.com</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+81 (0) 980-XX-XXXX</p>
                  <p className="text-muted-foreground">Monday to Friday, 9am - 5pm JST</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Visit Our Studio</h3>
                  <p className="text-muted-foreground">123 Ishigaki Street</p>
                  <p className="text-muted-foreground">Ishigaki City, Okinawa Prefecture</p>
                  <p className="text-muted-foreground">Japan 907-0000</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-semibold mb-4">Our Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Monday - Friday</div>
                <div>9:00 AM - 5:00 PM</div>
                <div>Saturday</div>
                <div>10:00 AM - 3:00 PM</div>
                <div>Sunday</div>
                <div>Closed</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 h-80 rounded-lg overflow-hidden">
            {/* In a real implementation, this would be a Google Map */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Map of Ishigaki Island location would appear here</p>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter the subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your message here" 
                          className="min-h-32" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
            
            <p className="text-sm text-muted-foreground mt-6">
              We value your privacy and promise to respond to your inquiry within 24-48 business hours.
            </p>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <section className="mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Do you ship internationally?</h3>
              <p className="text-muted-foreground">
                Yes, we ship to most countries worldwide. International shipping rates and delivery times 
                vary by destination. Please note that customers are responsible for any customs duties or 
                import taxes that may apply.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">What is your return policy?</h3>
              <p className="text-muted-foreground">
                We want you to be completely satisfied with your purchase. If for any reason you're not, 
                you may return most items within 30 days of delivery for a full refund. Please note that 
                items must be in their original condition. Custom or personalized items cannot be returned 
                unless damaged.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">How can I learn more about the creators?</h3>
              <p className="text-muted-foreground">
                Each product page features information about the creator, and you can find more detailed 
                profiles on our "Creators" page. We also share creator stories and behind-the-scenes 
                content on our blog and social media channels.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Can I visit your workshop on Ishigaki Island?</h3>
              <p className="text-muted-foreground">
                Yes! We welcome visitors to our workshop by appointment. Please contact us at least one 
                week in advance of your planned visit so we can arrange a tour and potentially organize 
                for you to meet some of our artisans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}