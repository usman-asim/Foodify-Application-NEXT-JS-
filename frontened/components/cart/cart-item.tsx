import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {  StoreAction as Item, useStore } from "@/store/store";
import { Image, ImageKitProvider } from "@imagekit/next";
import { Minus, Plus, X } from "lucide-react";
// import Image from "next/image";

export function CartItem({ item }: { item: Items }) {
  const removeFromCart = useStore((store) => store.removeFromCart);
  const increaseQuantity = useStore((store) => store.increaseitem);
  const decreaseQuantity = useStore((store) => store.decreaseitem);

  return (
    <div className="flex items-stretch gap-4 border rounded-lg p-4">
      <div className="relative w-24 h-24 flex-shrink-0">
                    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/oax2cnzhr">
      
        <Image
          src={item.imageUrl||" /fallback-image.jpg"}
          alt={item.name}
          fill
          className="object-cover rounded-md"
        />
        </ImageKitProvider >
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-muted-foreground text-sm">
              ${item.price.toFixed(2)}
            </p>
          </div>
          <Button
            onClick={() => removeFromCart(item.id)}
            variant="ghost"
            size="icon"
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => decreaseQuantity(item.id)}
            variant="outline"
            size="icon"
            className="h-8 w-8"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={item.quantity}
            className="w-12 text-center h-8"
            min="1"
            readOnly
          />
          <Button
            onClick={() => increaseQuantity(item.id)}
            variant="outline"
            size="icon"
            className="h-8 w-8"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
