
// app/components/MenuPreview.tsx
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Fullscreen, Star } from "lucide-react";
import { Image, ImageKitProvider } from "@imagekit/next";

export default async function MenuPreview() {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: { created_at: "desc" },
    take: 3,
    select: {
      id: true,
      name: true,
      imageUrl: true,
      description: true,
      price: true,
    },
  });
  
  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Signature Dishes</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto px-2">
          A selection of our most popular dishes loved by our customers
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, i) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64 ">
              <ImageKitProvider urlEndpoint="https://ik.imagekit.io/oax2cnzhr">
                <Image
                  src={item?.imageUrl ?? "/fallback-image.jpg"}
                  priority
                  width={1000}
                  height={400}
                  alt="Picture of the menu"
                  className="object-cover  group-hover:scale-105 transition-transform"
                />
              </ImageKitProvider>
            </div>
            <div className="p-6 bg-background">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <span className="font-bold text-primary">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm">4</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/menu">
            View Full Menu <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}