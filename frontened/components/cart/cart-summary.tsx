"use client"; // Important to indicate this is a client component

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useStore } from "@/store/store";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

// Load Stripe with your public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export function CartSummary() {
  const cartItems = useStore((store) => store.cart);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Order Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutForm total={total} />
      </Elements>
    </div>
  );
}
function CheckoutForm({ total }: { total: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [paymentRequestButtonAvailable, setPaymentRequestButtonAvailable] = useState(false);
  const [cardComplete, setCardComplete] = useState(false);
  const [paymentRequest, setPaymentRequest] = useState<any>(null);

  const amountInUsd = Math.floor(total); // Avoid decimal fractions in amount
  const paymentRequestInstance = stripe?.paymentRequest({
    country: "US",
    currency: "usd",
    total: {
      label: "Total",
      amount: amountInUsd * 100, // Amount in cents
    },
    requestPayerName: true,
    requestPayerEmail: true,
  });

  // Initialize paymentRequest only when the stripe object is available
  useEffect(() => {
    if (paymentRequestInstance) {
      setPaymentRequest(paymentRequestInstance);

      // Check if the payment request can be made (supports Apple Pay, Google Pay, etc.)
      paymentRequestInstance.canMakePayment().then((result) => {
        setPaymentRequestButtonAvailable(!!result); // Only show the button if available
      }).catch((error) => {
        console.error("Error checking payment request availability:", error);
        setPaymentRequestButtonAvailable(false);
      });
    }
  }, [paymentRequestInstance]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setProcessing(true);

    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total * 100 }), // Total amount in cents
    });

    const { clientSecret } = await res.json();

    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setProcessing(false);
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (result?.error) {
      console.log(result.error.message);
      setProcessing(false);
    } else if (result?.paymentIntent?.status === "succeeded") {
      console.log("Payment successful!");
      setProcessing(false);
    }
  };

  const handleCardChange = (event: any) => {
    setCardComplete(event.complete); // Update card completion state
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="p-5 border-2 mb-2" onChange={handleCardChange} />

      {/* Only render PaymentRequestButtonElement after canMakePayment() is resolved */}
      {paymentRequestButtonAvailable && paymentRequest && (
        <PaymentRequestButtonElement
          options={{
            paymentRequest: paymentRequest,
            style: {
              paymentRequestButton: {
                theme: "dark", // Optional: Adjust button appearance
                height: "64px",
                type: "default", // Optional: Button style
              },
            },
          }}
        />
      )}

      <Button
        className="w-full"
        disabled={!stripe || processing || !cardComplete} // Disable Pay Now if card is incomplete
      >
        {processing ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  );
}
