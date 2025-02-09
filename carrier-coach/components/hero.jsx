"use client"
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const HeroSection = () => {
  const heroImageRef = useRef(null);
  useEffect(() => {
    const imageElement = heroImageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      
      if(scrollPosition > scrollThreshold) {
        imageElement.classList.add('scrolled');
      }else{
        imageElement.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 heading-animation">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
            Your AI Carrier Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl"> 
          Boost your career with AI-driven resume building, cover letters, and industry insights for smarter growth.         
           </p>
        </div>
        <div className="display-flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" className="px-8" variant="outline">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-video-wrapper mt-5 md-5 md:mt-0">
          <div className="inline-flex items-center border p-2 rounded-md mb-2">
            <p className="text-sm text-muted-foreground mr-2">This is an AI generated video. Please unmute to listen to audio.</p>
            <Button 
            variant="secondary"
              onClick={() => {
                const videoElement = heroImageRef.current.querySelector('video');
                videoElement.muted = !videoElement.muted;
                
              }}
              className="mute-button"
            >
             Play Sound <span style={{ color: 'white' }}>&#x1F50A;</span> 
            </Button>
          </div>
          <div ref={heroImageRef} className="hero-video">
            <video 
              src="/Banner.mp4" 
              width="980" 
              height="720" 
              className="rounded-lg shadow-2x1 border mx-auto"
              autoPlay 
              loop 
              muted
              controls
              controlsList="nodownload "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
