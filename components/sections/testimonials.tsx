import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Leanne B.",
     
      text: "What an experience! Went for a pedicure and it was absolutely divine and luxurious, I walked out there with brand new feet... not only is the salon beautiful, but the sea view is amazing! The lovely staff are so friendly and you can see they take pride in their work.",
      rating: 5,
    },
    {
      name: "Angelique",
      
      text: "Did a 'Queen combo' with Grace , absolutely amazing. The owner was welcoming and offered mimosa when I arrived :) The view of the ocean, while having my treatment done was the cherry on top.",
      rating: 5,
    },
    {
      name: "Cayleigh D.",
      
      text: "Wow! Such a beautiful place with beautiful people. Primrose was so friendly and fun! She made the experience so memorable. So happy with my nails and nail art!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white/90">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-6"
            >
              <div className="flex gap-1 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="italic text-muted-foreground leading-relaxed">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center gap-4 mt-auto">
               
                <div>
                  <h4 className="font-bold text-foreground leading-tight">
                    {t.name}
                  </h4>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
