import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function OurStory() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div 
          className="relative min-h-[600px] rounded-3xl overflow-hidden bg-cover bg-center flex items-center justify-start p-8 md:p-12 lg:p-16"
          style={{ backgroundImage: "url('https://placehold.co/1440x600')" }}
        >
          <div className="bg-muted/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl max-w-xl space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-bold tracking-widest uppercase text-primary">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Sanctuary of Beauty & Hygiene
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Opulence Strand is the only nail salon in the Helderberg offering a full sea-view experience — where luxury meets tranquillity.
              </p>
              <p>
                Nestled in the iconic Hibernian Towers, we specialise in professional manicures, pedicures, and jelly soaks, using premium products like Bio Sculpture Gemini Nail Polish and Glam Pro Rubber Base Gel to ensure flawless, long-lasting results.
              </p>
              <p>
                Treat yourself to top-tier nail care with a view that soothes the soul.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="#about"
                className="inline-flex items-center gap-2 text-foreground font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors"
              >
                Read More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
