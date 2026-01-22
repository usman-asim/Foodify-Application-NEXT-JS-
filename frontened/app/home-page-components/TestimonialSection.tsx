import { Star } from "lucide-react";
import React from "react";

const TestimonialSection = () => {
  const testimonial_data = [
    {
      name: "Sarah Johnson",
      comment:
        "The best dining experience I've had this year! The truffle pasta is to die for.",
      rating: 3,
    },
    {
      name: "Michael Chen",
      comment:
        "Consistently excellent food and service. Our go-to spot for special occasions.",
      rating: 2,
    },
    {
      name: "Michael Chen",
      comment:
        "Consistently excellent food and service. Our go-to spot for special occasions.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      comment:
        "Consistently excellent food and service. Our go-to spot for special occasions.",
      rating: 4,
    },
    {
      name: "Michael Chen",
      comment:
        "Consistently excellent food and service. Our go-to spot for special occasions.",
      rating: 2,
    },
    {
      name: "Michael Chen",
      comment:
        "Consistently excellent food and service. Our go-to spot for special occasions.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold">What our Client Says</h1>
        <p className="text-muted-foreground px-1">
          Don't just take our word for it - hear from our satisfied customers
        </p>
      </div>

      {/* OUTER: center */}
      <div className="mt-10 flex justify-center py-4 ">
        {/* INNER: only show 3 cards width, rest scroll */}
        <div className="flex gap-6 overflow-x-scroll  px-4 py-5">
          {testimonial_data.map((data: any, index: number) => (
            <div
              key={index}
              className="shrink-0 w-72 md:w-[400px]  shadow-lg p-5 rounded-lg bg-secondary/20"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) =>
                  i < data.rating ? (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" />
                  ) : (
                    <Star key={i} className="text-muted-foreground" />
                  ),
                )}
              </div>

              <p className="mb-3">{data.comment}</p>
              <h2 className="font-semibold">{data.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
