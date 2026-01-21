import { Clock, Leaf, Section, Utensils } from 'lucide-react'
import React from 'react'

const FeatureSection = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-3 gap-20 py-16 bg-secondary/70">
      <div className="flex flex-col justify-center items-center gap-1">
        <Clock className="h-10 w-10 mb-4 text-primary" />
        <h1 className="text-xl font-bold">Open daily</h1>
        <h3>Monday-Sunday: 11am 2pm</h3>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <Utensils className="h-10 w-10 mb-4 text-primary" />
        <h1 className="text-xl font-bold">Diverse menu</h1>
        <h3>50 dishes crafted by our master chief</h3>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <Leaf className="h-10 w-10 mb-4 text-primary" />{" "}
        <h1 className="text-xl font-bold">Fresh Increadients</h1>
        <h3> Locally-sourced, organic produce</h3>
      </div>
    </section>
  );
}

export default FeatureSection
