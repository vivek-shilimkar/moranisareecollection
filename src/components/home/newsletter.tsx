"use client";

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const Newsletter = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subscribeToWhatsApp, setSubscribeToWhatsApp] = useState(false);

  useEffect(() => {
    // Show the dialog after 5 seconds of page load if it hasn't been shown before
    const hasSeenPopup = sessionStorage.getItem('has_seen_popup');

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowDialog(true);
        sessionStorage.setItem('has_seen_popup', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, we would send the data to a backend
    console.log({ email, phone, subscribeToWhatsApp });
    setShowDialog(false);
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="p-0 rounded-lg max-w-4xl">
        <div className="flex flex-col md:flex-row">
          {/* Image section */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
            <Image
              src="https://web-assets.same.dev/2886157899/576539532.jpeg"
              alt="Knot N Threads Saree"
              fill
              className="object-cover rounded-l-lg"
            />
          </div>

          {/* Form section */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <button
              onClick={() => setShowDialog(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-6">
              <div className="mb-2">
                <Image
                  src="https://web-assets.same.dev/610373270/30836308.png"
                  alt="Knot N Threads"
                  width={120}
                  height={40}
                  className="mx-auto"
                />
              </div>
              <h2 className="text-2xl font-light text-primary mb-1">BE The <span className="font-medium">FIRST</span> To</h2>
              <h3 className="text-xl font-light text-primary mb-4">Know!</h3>
              <p className="text-sm text-gray-600">Get Amazing deals and offers Right Away!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex">
                {/* Country code */}
                <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l px-2 text-sm">
                  <Image
                    src="https://web-assets.same.dev/3051927105/584852213.png"
                    alt="India"
                    width={20}
                    height={15}
                    className="mr-1"
                  />
                  <span>+91</span>
                </div>

                {/* Phone input */}
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="rounded-l-none flex-1"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="whatsapp-subscribe"
                  className="mr-2"
                  checked={subscribeToWhatsApp}
                  onChange={() => setSubscribeToWhatsApp(!subscribeToWhatsApp)}
                />
                <label htmlFor="whatsapp-subscribe" className="text-sm text-gray-600">
                  Receive important information and updates on WhatsApp
                </label>
              </div>

              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Newsletter;
