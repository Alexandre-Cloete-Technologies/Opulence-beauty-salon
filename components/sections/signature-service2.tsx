import { Check } from "lucide-react";
import Image from "next/image"; 
import Link from "next/link";
import { Button } from "../ui/button";

export function SignatureService2() {
  return (
    <section className="py-20 bg-background relative">
        {/* SVG Background Overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/background.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '60vw',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="flex-1 w-full aspect-square relative rounded-[100%_100%_16px_16px] overflow-hidden shadow-2xl">
            <Image 
              src="/images/opulence-beauty-mid-week-promotion.jpg" 
              alt="Gel Queen Combo for Hands & Feet" 
              className="w-full h-full object-cover"
              width={600}
              height={600}  
            />
          </div>

          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest uppercase text-primary">
               ✩ Specials ✩
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Mid-Week Promotion
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
 ONLY APPLICABLE FOR TUESDAY, WEDNESDAY AND THURSDAY

              </p>
            </div>

            <div className="space-y-4">
              {[
                "Gel Soak Off",
                "Full Gel Overlay",
                "One Color only - no art included",
                
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 h-auto text-lg shadow-lg active:scale-95 transition-all">
              <Link href="https://www.fresha.com/a/opulence-strand-cape-town-hibernian-tower-beach-road-yqr0r0du?service=s%3A21766290">
                Book Promotion
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
