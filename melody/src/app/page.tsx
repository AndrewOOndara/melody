"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from 'embla-carousel-react'

const carouselItems = [
  {
    title: "Rights Management",
    description: "Easily manage and track your music rights in one place"
  },
  {
    title: "Automated Licensing",
    description: "Streamline your licensing workflow with automation"
  },
  {
    title: "Analytics Dashboard",
    description: "Get insights into your music performance and licensing"
  },
  {
    title: "Royalty Tracking",
    description: "Monitor and manage your royalty payments"
  },
  {
    title: "Collaboration Tools",
    description: "Work seamlessly with other creators and publishers"
  }
];


export default function Home() {
  return (
    <div className="min-h-screen font-montserrat" style={{ background: "rgba(255, 251, 240, 1)" }}>
      {/* <section className="py-20 px-8 bg-background">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Melody</h1>
          <p className="text-lg text-muted-foreground">
            Melody streamlines music licensing and rights management, making it easier
            for creators and publishers to collaborate.
          </p>
        </div>
      </section> */}
      
      <section className="py-20 px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-[500px] w-[540px] mx-auto relative">
              <Image 
                src="/public/DudeSmiling.png" 
                alt="Music collaboration" 
                fill 
                className="object-cover rounded-lg"
              />
            </div>
            <div className="h-[500px] w-[540px] mx-auto relative">
              <Image 
                src="/public/TitleCCC.png" 
                alt="Music creation" 
                fill 
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg mb-8">Discover and connect with local artists in your area.</p>
            
            <div className="flex justify-center gap-16">
              <div className="text-center">
                <h3 className="text-3xl font-bold">10k+ Artists</h3>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold">1k+ Collabs</h3>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold">100k+ Streams</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="h-[200px] w-[200px] relative mb-6">
                <Image 
                  src="/public/Create.png" 
                  alt="Create" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center mb-6">
                {["C","R","E","A","T","E"].map((letter, index) => (
                  <span key={index} className="text-2xl font-bold">{letter}</span>
                ))}
              </div>
              <p className="text-muted-foreground">
                Focus on creating your music and being yourself. We'll handle everything from licensing to generating revenue. We want you to focus on your craft and getting your music out there.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-[200px] w-[200px] relative mb-6">
                <Image 
                  src="/public/Connect.png" 
                  alt="Connect" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center mb-6">
                {["C","O","N","N","E","C","T"].map((letter, index) => (
                  <span key={index} className="text-2xl font-bold">{letter}</span>
                ))}
              </div>
              <p className="text-muted-foreground">
                Find and connect with professionals across the entertainment industry, from filmmakers to advertisers.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-[200px] w-[200px] relative mb-6">
                <Image 
                  src="/public/Collaborate.png" 
                  alt="Collaborate" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center mb-6">
                {["C","O","L","L","A","B"].map((letter, index) => (
                  <span key={index} className="text-2xl font-bold">{letter}</span>
                ))}
              </div>
              <p className="text-muted-foreground">
                Work together to craft your music for filmmakers and iterate based on effective feedback. We'll also provide our input to help you improve and succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="w-full h-[10px]" style={{ background: "rgba(212, 93, 67, 1)" }}></div>
        <Image src="/RedDash.png" alt="Red Dash" width={1000} height={1000} className="w-full h-auto mt-5 mb-5" />
        <div className="container mx-auto px-8 pt-10">
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Are You Getting Enough Out of Your Music?</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-muted-foreground">
                  Royalties are not enough for musicians these days, and it is extremely difficult for them to find opportunities to improve their talents, either through collaboration with others or through real-world opportunities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-muted-foreground">
                  Foster collaboration amongst musicians and provide them with revenue generating opportunities to help them turn dreams into reality
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Solution</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-muted-foreground">
                  Provide a platform for musicians to connect with those in need of their skill sets, presenting them with both collaborative and lucrative opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image src="/RedDash.png" alt="Red Dash" width={1000} height={1000} className="w-full h-auto" />
        <div className="w-full h-[10px] mt-5 mb-5" style={{ background: "rgba(212, 93, 67, 1)" }}></div>
      </section>
      
      {/* <footer className="py-12 px-8 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold">melody</h2>
            </div>
            <div className="flex flex-wrap gap-8">
              <a href="#" className="hover:text-primary">Events</a>
              <a href="#" className="hover:text-primary">Podcast</a>
              <a href="#" className="hover:text-primary">About</a>
              <a href="#" className="hover:text-primary">Contact</a>
              <a href="#" className="hover:text-primary">Log In</a>
            </div>
            <div className="mt-6 md:mt-0 flex gap-4">
              <button className="bg-primary text-white px-6 py-2 rounded-md">Join</button>
              <button className="border border-primary px-6 py-2 rounded-md">Learn More</button>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
{/* <section className="py-20 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center righteous-font">
          Simplifying the Licensing Process
        </h2>
        <div className="relative w-full h-[300px]">
          <Carousel
            opts={{align: "start", loop: true, skipSnaps: false, slidesToScroll: 1}}
            plugins={[Autoplay({delay: 6000,}),]}
            className="w-full">
            <CarouselContent className="-ml-4">
              {carouselItems.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-[200px]">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 righteous-font">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 " />
            </div>
          </Carousel>
        </div>
      </div>
    </section> */}