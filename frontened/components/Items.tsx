"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { Image, ImageKitProvider } from "@imagekit/next";
import { useStore } from "@/store/store";
import Link from "next/link";

export function Menuitem({ item }: { item: any }) {
  const addToCart = useStore((store) => store.addToCart);

  return (
    <Card className="p-0 pb-3  overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0 pb-4">
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/oax2cnzhr">
          <Image
            src={item?.imageUrl ?? "/fallback-image.jpg"}
            width={400}
            height={400}
            alt="Picture of the author"
            className="w-full h-48 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </ImageKitProvider>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-bold">${item.price.toFixed(2)}</span>
        <Link href="/cart"><Button
            onClick={() => addToCart(item)}
          size="sm"
          className="gap-1 cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Add to cart
        </Button></Link>
      </CardFooter>
    </Card>
  );
}
