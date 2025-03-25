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
            <div className="h-[470px] w-[540px] mx-auto relative">
              <Image 
                src="/TitleCCC.png" 
                alt="Music collaboration" 
                fill 
                className="object-cover rounded-lg"
              />
            </div>
            <div className="h-[502px] w-[566px] mx-auto relative">
              <Image 
                src="/DudeSmiling.png" 
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
                <h3 className="text-3xl font-bold" style={{ color: "rgba(53, 124, 166, 1)" }}>10k+ Artists</h3>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold" style={{ color: "rgba(53, 124, 166, 1)" }}>1k+ Collabs</h3>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold" style={{ color: "rgba(53, 124, 166, 1)" }}>100k+ Streams</h3>
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
                  src="/Create.png" 
                  alt="Create" 
                  fill 
                  className="object-contain"
                />
              </div>
              {/* <div className="flex flex-col items-center mb-6">
                {["C","R","E","A","T","E"].map((letter, index) => (
                  <span key={index} className="text-2xl font-bold">{letter}</span>
                ))}
              </div> */}
              <p className="text-muted-foreground">
                Focus on creating your music and being yourself. We'll handle everything from licensing to generating revenue. We want you to focus on your craft and getting your music out there.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-[200px] w-[200px] relative mb-6">
                <Image 
                  src="/Connect.png" 
                  alt="Connect" 
                  fill 
                  className="object-contain"
                />
              </div>
              {/* <div className="flex flex-col items-center mb-6">
                {["C","O","N","N","E","C","T"].map((letter, index) => (
                  <span key={index} className="text-2xl font-bold">{letter}</span>
                ))}
              </div> */}
              <p className="text-muted-foreground">
                Find and connect with professionals across the entertainment industry, from filmmakers to advertisers.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-[200px] w-[200px] relative mb-6">
                <Image 
                  src="/Collaborate.png" 
                  alt="Collaborate" 
                  fill 
                  className="object-contain"
                />
              </div>
              {/* <div className="flex flex-col items-center mb-6">
                {["C","O","L","L","A","B"].map((letter, index) => (
                  <span key={index} className="text-2xl font-bold">{letter}</span>
                ))}
              </div> */}
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
        <div className="container mx-auto px-20 pt-10">
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: "rgba(53, 124, 166, 1)" }}>Are You Getting Enough Out of Your Music?</h2>
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
                <h2 className="text-3xl font-bold mb-4" style={{ color: "rgba(53, 124, 166, 1)" }}>Our Mission</h2>
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
                <h2 className="text-3xl font-bold mb-4" style={{ color: "rgba(53, 124, 166, 1)" }}>Solution</h2>
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
      
      <section className="py-20 px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: "rgba(53, 124, 166, 1)" }}>Founders</h2>
          
          {/* Andrew Ondara - Left Image */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="relative group justify-self-end">
              <div className="h-[400px] w-[400px] relative rounded-lg overflow-hidden">
                <Image 
                  src="/andrew.png" 
                  alt="Andrew Ondara" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 overflow-y-auto">
                  <p className="text-white">
                    I started making music during the SoundCloud rapper era, inspired by artists like Lil Uzi and Playboi Carti. Using a free iPhone DAW, I recorded myself over YouTube beats, gaining 50k SoundCloud plays under the name "Andre100." My sound evolved through influences like Michael Jackson, Elton John, Kanye, and Frank Ocean. In college, I created Rice University's first Black-centric radio show, rapped with friends, and began DJing. Now, I focus on producing beats and improving my sampling skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2">Andrew Ondara</h3>
              <p className="text-xl mb-2">Co-Founder</p>
              <p className="text-lg text-muted-foreground">Radio Host / DJ</p>
            </div>
          </div>

          {/* Krish Shah - Right Image */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="flex flex-col justify-center text-right">
              <h3 className="text-2xl font-bold mb-2">Krish Shah</h3>
              <p className="text-xl mb-2">Co-Founder</p>
              <p className="text-lg text-muted-foreground">Producer</p>
            </div>
            <div className="relative group">
              <div className="h-[400px] w-[400px] relative rounded-lg overflow-hidden">
                <Image 
                  src="/krish.png" 
                  alt="Krish Shah" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 overflow-y-auto">
                  <p className="text-white">
                    When I was a freshman in high school, a few friends and I got bored one day and started messing around with GarageBand. This experience transformed my life for the next few years as I continued to make beats and upgrade my sound. Over time, I began selling beats to local artists through Instagram as I got better. I joined my school's "808 club" with many other producers and frequently collaborated with them to create new instrumentals. This love for music was only heightened during the pandemic, when I would spend most of my day on Logic Pro, producing in my bedroom. I've always loved rap and hip-hop, and my influences usually stem from mainly modern-day rappers. In college, I continue pursuing my passion for music by actively making music and reaching out to collaborators. Currently, I'm working on implementing new techniques into my music, trying to evolve and improve day-by-day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chloe Diehl - Left Image */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group justify-self-end">
              <div className="h-[400px] w-[400px] relative rounded-lg overflow-hidden">
                <Image 
                  src="/chloe.png" 
                  alt="Chloe Diehl" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 overflow-y-auto">
                  <p className="text-white">
                    I was raised by two musicians. My mom was a classical pianist and my dad was a lead guitarist in rock bands. Being surrounded by them, I gained a knack for music and playing instruments myself. Initially, I was classically trained on the piano for six years. Then, I ventured into learning how to play the guitar. Playing the guitar, I would study other guitarists and try to replicate their unique style and "twang". One of the guitarists that I idolized was Red Hot Chili Peppers lead guitarist, John Frusciante. Frusciante balanced out gritty strums and solos with gentle reverb riffs throughout his songs. He loved experimenting with pick patterns and dancing between tremolo and distortion pedals. As I continued my journey into guitar, I joined garage bands with unique young artists around the Houston area. In college, I transitioned from being an instrumentalist to working at Rice's student-run radio station, KTRU. KTRU holds a collection of unique upcoming artists and band albums that has been cultivated since the 1970's. I loved the idea of preserving and adding to the rich amount of music discography. Thus, I am a part of the music department, reviewing and reaching out to other artists to broadcast on the station.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2">Chloe Diehl</h3>
              <p className="text-xl mb-2">Co-Founder</p>
              <p className="text-lg text-muted-foreground">Radio Host</p>
            </div>
          </div>
        </div>
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