import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')", backgroundAttachment: "fixed"   }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
      </div>

      <div className="container relative mx-auto h-full px-4 md:px-8 max-w-7xl flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight text-pretty">
            A Luxury Nail Salon 
            <br/>
             <span className="italic text-primary">At Your Fingertips</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-white/90 max-w-xl mx-auto leading-relaxed">
            Exude opulence with magnificent sea views and plush furnishings providing a serene ambiance for pampering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild size="lg" className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg active:scale-95 transition-all">
              <Link href="https://www.fresha.com/a/opulence-strand-cape-town-hibernian-tower-beach-road-yqr0r0du">
                Book Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md font-bold text-lg transition-all">
              <Link href="#services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
