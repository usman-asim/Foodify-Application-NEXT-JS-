import Stripe from "stripe";
import { NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export async function POST(req: NextRequest) {
  const { amount } = await req.json();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, 
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
