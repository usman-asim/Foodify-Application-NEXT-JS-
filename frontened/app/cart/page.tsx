"use client";

import { CartItem } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/store";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const cartItems = useStore((store) => store.cart);

  return (
    <div className="container py-12 px-6 sm:px-8 lg:px-12">
      <div className="mb-8 flex items-center gap-4">
        <Button
          asChild
          variant="ghost"
          className="text-gray-700 hover:text-primary"
        >
          <Link href="/menu" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
            <span className="text-lg font-medium">Back to Menu</span>
          </Link>
        </Button>
      </div>

      {/* <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        Your Cart
      </h1> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <div className="text-center py-16">
              <p className="text-xl font-semibold text-gray-600">
                Your cart is empty
              </p>
              <Button
                asChild
                className="mt-6 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg shadow-md"
              >
                <Link href="/menu">Browse Menu</Link>
              </Button>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="lg:col-span-1 bg-white shadow-lg rounded-lg p-6">
            <CartSummary />
          </div>
        )}
      </div>
    </div>
  );
}
