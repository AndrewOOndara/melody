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
    <div className="min-h-screen font-montserrat">
      <section className="py-20 px-8 bg-background">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Melody</h1>
          <p className="text-lg text-muted-foreground">
            Melody streamlines music licensing and rights management, making it easier
            for creators and publishers to collaborate.
          </p>
        </div>
      </section>
      
      <section className="py-20 px-8 bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader>
                <div className = "righteous-font">
                  <CardTitle>Tracking Portal</CardTitle>
                </div>
                
                <CardDescription>
                  Monitor your music rights and licensing in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground monserrat-font" >
                  Access comprehensive analytics and tracking tools for your music portfolio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className = "righteous-font">
                  <CardTitle>Submission Tools</CardTitle>
                </div>
                <CardDescription>
                  Streamline your music submission process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Easy-to-use tools for submitting and managing your music catalog.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
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
    </section>
    </div>
  );
}
