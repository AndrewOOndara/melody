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

                <div className="min-h-screen">
                    <section className="py-20 px-8 bg-background">
                        <div className="container">
                            {/* Image Container */}
                            <div className="flex gap-[200px] justify-center">
                                <img src="/Landing_Page_Title.png" alt="Description 2" className="w-[540px] h-[469px]" />
                                <img src="/Landing_Page_Pic.png" alt="Description 1" className="w-[540px] h-[469px]" />
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section>
                <div className="container mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold mb-6 font-Comfortaa">
                        Discover and connect with local artists in your area.
                    </h2>

                    {/* Stats Section */}
                    <div className="flex justify-center gap-16 mt-4">
                        <div className="text-center">
                            <p className="text-4xl font-bold">10k+</p>
                            <p className="text-lg text-muted-foreground">Artists</p>
                        </div>

                        <div className="text-center">
                            <p className="text-4xl font-bold">1k+</p>
                            <p className="text-lg text-muted-foreground">Collabs</p>
                        </div>

                        <div className="text-center">
                            <p className="text-4xl font-bold">100k+</p>
                            <p className="text-lg text-muted-foreground">Streams</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>

                <div className="container mx-auto text-center py-20">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold mb-10">Our Features</h2>

                    {/* Features Section */}
                    <div className="flex justify-center gap-12">
                        {/* Feature 1 */}
                        <div className="">
                            <img src="/Create.png" alt="Feature 1" className="w-[315px]" />
                            <p className="mt-4 text-lg font-semibold">Easy Music Licensing</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="">
                            <img src="/Connect.png" alt="Feature 2" className="w-[279px] h-auto" />
                            <p className="mt-4 text-lg font-semibold">AI-Powered Song Matching</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="">
                            <img src="/Collaborate.png" alt="Feature 3" className="w-[324px] h-auto" />
                            <p className="mt-4 text-lg font-semibold">Direct Artist Collaboration</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="py-20 px-8 ">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="min-h-[400px] flex flex-col">
                            <CardHeader>
                                <div className="righteous-font">
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
                                <div className="righteous-font">
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
                            opts={{ align: "start", loop: true, skipSnaps: false, slidesToScroll: 1 }}
                            plugins={[Autoplay({ delay: 6000, }),]}
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
