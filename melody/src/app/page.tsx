import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="min-h-screen">
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
                <CardTitle>Tracking Portal</CardTitle>
                <CardDescription>
                  Monitor your music rights and licensing in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access comprehensive analytics and tracking tools for your music portfolio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Submission Tools</CardTitle>
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
          <h2 className="text-3xl font-bold mb-12 text-center">
            Simplifying the Licensing Process
          </h2>
          
          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Rights Management</h3>
                    <p>Easily manage and track your music rights in one place</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Automated Licensing</h3>
                    <p>Streamline your licensing workflow with automation</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                    <p>Get insights into your music performance and licensing</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
