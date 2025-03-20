'use client'
import React from 'react';
import { Coffee, Settings, Users, Leaf, Star, Info, MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUsPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8"
    >
      {/* Hero Section */}
      <motion.div className="relative h-96 mb-12 rounded-xl overflow-hidden" variants={fadeIn}>
        <video 
          src="/jlexpresso/shopview.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div className="text-center text-white p-6" variants={fadeIn}>
            <h1 className="text-4xl font-serif mb-4">Crafting Excellence in Coffee</h1>
            <p className="text-xl max-w-2xl">
              From premium beans to expert service, we&apos;re dedicated to delivering exceptional coffee solutions across the United Kingdom.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" variants={fadeIn}>
        {[{ number: '2010', label: 'Established' }, { number: 'UK-Wide', label: 'Coverage' }, { number: '1000+', label: 'Happy Clients' }, { number: '24/7', label: 'Support' }].map((stat, index) => (
          <motion.div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm text-center" whileHover={{ scale: 1.05 }}>
            <h3 className="text-3xl font-serif text-gray-800 mb-2">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

     {/* Founders Section */}
<motion.div className="mb-12" variants={fadeIn}>
  <h3 className="font-serif text-2xl mb-6">Meet Our Founders</h3>
  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      <div className="h-full md:h-full flex items-center justify-center">
        <img 
          src="/founders.jpg" 
          alt="J.L Espresso Founders" 
          className="w-full h-full object-cover object-center" 
        />
      </div>
      <div className="p-6 flex flex-col justify-center">
        <h4 className="font-serif text-xl mb-2">John K Stephens & Lydia Parker</h4>
        <p className="text-sm text-gray-600 mb-4">Founder & CEO</p>
        <div className="text-gray-700 space-y-4">
          <p>&quot;Great coffee isn&apos;t just a drink—it&apos;s a moment of connection. That belief sparked J.L Espresso in 2010, tinkering with machines in my garage while chasing the perfect brew. Today, we&apos;re still driven by that same curiosity: blending craftsmanship with innovation to transform how the world experiences coffee.</p>
          <p>Every bean we source, every machine we build or refurbish, and every barista we train is rooted in respect—for the craft, for the planet, and for the people who grow, brew, and savor what we create.</p>
          <p>This isn&apos;t just a business; it&apos;s a lifelong pursuit of excellence. Whether you&apos;re a home brewer, a café owner, or simply someone who loves that first sip of a flawlessly pulled shot, we&apos;re here to empower your journey.</p>
          <p>Let&apos;s keep brewing better, together.&quot;</p>
        </div>
        <div className="mt-6 text-right">
          <p className="text-lg font-serif text-gray-800">Powering</p>
          <p className="text-lg font-serif text-gray-800">Perfect Coffee</p>
          <p className="text-lg font-serif text-gray-800">Experience</p>
        </div>
      </div>
    </div>
  </div>
</motion.div>

      {/* Our Story Section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" variants={fadeIn}>
        <motion.div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm" whileHover={{ scale: 1.02 }}>
          <div className="flex items-start gap-4">
            <Coffee className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-serif text-2xl mb-4">Our Story</h3>
              <div className="text-gray-600 space-y-4">
                <p>The story of J.L Espresso began in 2010 in London, fueled by a passion for both the art of coffee making and the mechanics of the machines that make it possible.</p>
                <p>Starting from a home workshop, we were driven by a simple yet powerful vision: to provide unparalleled coffee experiences.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="rounded-lg overflow-hidden h-64" whileHover={{ scale: 1.02 }}>
          <img src="/jlexpresso/busRight.jpg" alt="bus"
           className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
     {/* Services Section */}
<div className="mb-16">
  <h2 className="font-serif text-3xl mb-8 text-center">Our Offerings</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    {/* Premium Coffee Beans */}
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src="/about/beans.jpg" 
          alt="Premium Coffee Beans" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <div className="flex items-start gap-4">
          <Coffee className="w-8 h-8 text-gray-700 mt-1" />
          <div>
            <h3 className="font-serif text-2xl mb-3">Premium Coffee Beans</h3>
            <p className="text-gray-600 mb-5">Ethically sourced beans from renowned coffee-growing regions.</p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {["Single-origin selections", "Small-batch roasting", "Ethical sourcing", "Expert curation"].map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <Leaf className="w-4 h-4 mr-2 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Coffee Machines */}
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src="/about/machine.jpg" 
          alt="Coffee Machines" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <div className="flex items-start gap-4">
          <Settings className="w-8 h-8 text-gray-700 mt-1" />
          <div>
            <h3 className="font-serif text-2xl mb-3">Coffee Machines</h3>
            <p className="text-gray-600 mb-5">State-of-the-art equipment and pre-owned machines.</p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {["Latest technology", "Energy efficient", "Professional grade", "Customizable options"].map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <Leaf className="w-4 h-4 mr-2 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Service & Repairs */}
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src="/about/service.jpg" 
          alt="Service & Repairs" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <div className="flex items-start gap-4">
          <Users className="w-8 h-8 text-gray-700 mt-1" />
          <div>
            <h3 className="font-serif text-2xl mb-3">Service & Repairs</h3>
            <p className="text-gray-600 mb-5">Professional maintenance and repair services.</p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {["24/7 support", "Nationwide coverage", "Expert technicians", "Quick response"].map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <Leaf className="w-4 h-4 mr-2 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Training & Education */}
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src="/training.jpg" 
          alt="Training & Education" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <div className="flex items-start gap-4">
          <Users className="w-8 h-8 text-gray-700 mt-1" />
          <div>
            <h3 className="font-serif text-2xl mb-3">Training & Education</h3>
            <p className="text-gray-600 mb-5">We empower coffee lovers and professionals through knowledge-sharing.</p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {["Barista Masterclasses", "Machine Maintenance Workshops", "Sustainability Programs", "Certification Courses"].map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <Leaf className="w-4 h-4 mr-2 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* Shop Section */}
      <div className="mb-12">
        <h3 className="font-serif text-2xl mb-6">Visit Our Shop</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
            <img 
              src="/map.png" 
              alt="Map location" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Shop Information */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h4 className="font-serif text-xl mb-4">London Flagship Store</h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-700" />
                <div>
                  <h5 className="font-medium mb-2">Location</h5>
                  <p className="text-gray-600">  <span>Gretton Rd, <br />Corby NN17 3HN, United Kingdom</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gray-700" />
                <div>
                  <h5 className="font-medium mb-2">Opening Hours</h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>Monday - Friday: 7:00 AM - 7:00 PM</li>
                    <li>Saturday: 8:00 AM - 6:00 PM</li>
                    <li>Sunday: 9:00 AM - 5:00 PM</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gray-700" />
                <div>
                  <h5 className="font-medium mb-2">Contact</h5>
                  <p className="text-gray-600">+44 7903 856712</p>
                  <p className="text-gray-600">+44 7860 937505</p>
                  <p className="text-gray-600">info@jlespressoservice.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 rounded-lg p-6 mb-12">
        <div className="flex items-start gap-4">
          <Star className="w-6 h-6 text-gray-700 mt-1" />
          <div>
            <h3 className="font-serif text-2xl mb-4">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Excellence", description: "Superior quality in every product and service we offer." },
                { title: "Sustainability", description: "Committed to responsible sourcing and environmentally friendly operations." },
                { title: "Customer Centricity", description: "Building strong relationships and tailoring solutions to unique needs." }
              ].map((value, index) => (
                <div key={index} className="text-gray-600">
                  <h4 className="font-medium mb-2">{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-gray-700 mt-1" />
          <div>
            <h3 className="font-serif text-2xl mb-4">Get in Touch</h3>
            <div className="space-y-2 text-gray-600">
              <p>📍 London, UK</p>
              <p>📞 +44 7903 856712</p>
              <p>📞 +44 7860 937505</p>
              <p>🌐 www.jlespressoservice.com</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUsPage;