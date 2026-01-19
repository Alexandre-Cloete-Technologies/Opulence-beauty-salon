import { Star } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Regular Client",
      text: "Absolutely the best nail salon in the city. The attention to detail is unmatched, and my gel mani lasted 4 weeks!",
      rating: 5,
    },
    {
      name: "Emily R.",
      role: "New Client",
      text: "The organic pedicure was a dream. The atmosphere is so calming, I almost fell asleep. Highly recommend.",
      rating: 5,
    },
    {
      name: "Jessica M.",
      role: "VIP Member",
      text: "Finally a place that takes hygiene seriously. The autoclave pouches give me such peace of mind. Plus, my nails look fab.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
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
                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                  <Image src={`https://placehold.co/40x40`} alt={t.name} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
