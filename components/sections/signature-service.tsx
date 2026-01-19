import { Check } from "lucide-react";
import Image from "next/image"; 
import Link from "next/link";
import { Button } from "../ui/button";

export function SignatureService() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 w-full aspect-square relative rounded-[100%_100%_16px_16px] overflow-hidden shadow-2xl">
            <Image 
              src="https://placehold.co/600x600" 
              alt="Luxury Gel Extensions" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest uppercase text-primary">
                Signature Service
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Luxury Gel Extensions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get the length you desire with the strength you need. Our sculpting gel extensions are lightweight, durable, and look completely natural. Finished with our premium high-shine top coat.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Custom shape sculpting (Almond, Coffin, Stiletto)",
                "Lasts 3-4 weeks without lifting",
                "Odor-free application",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 h-auto text-lg shadow-lg active:scale-95 transition-all">
              <Link href="https://www.fresha.com/a/opulence-strand-cape-town-hibernian-tower-beach-road-yqr0r0du">
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
