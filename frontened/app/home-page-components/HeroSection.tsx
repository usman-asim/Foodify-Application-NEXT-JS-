import { Button } from "@/components/ui/button";
import { ChevronRight, Image } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative  h-screen ">
      <div className="absolute bg-black/50 h-full w-full">
        <img
          src="\hero-bg.jpg"
          className="h-full w-full object-cover "
          alt=""
        />
      </div>
      <div className="  relative z-20 h-full flex flex-col justify-center pl-2 text-justify-center items-center md:items-start  md:pl-20 text-white ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Aythentic Flavour <br />{" "}
          <span className="text-green-400">Exceptional</span> Dining
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Experience the finest culinary creations made with locally-sourced
          ingredients and passion.
        </p>
        <div className="flex gap-2 ">
          <Link href="/menu">
            {" "}
            <Button size="lg">
              View Menu <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button
            size="lg"
            className="bg-white text-black  hover:bg-black hover:text-white hover:outline-none transform:transition duration-400 ease-in-out"
          >
            Make Reservation{" "}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
