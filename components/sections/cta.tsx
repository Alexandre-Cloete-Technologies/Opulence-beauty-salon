"use client"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 left-10 w-32 h-32 bg-primary/10 blur-[40px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-violet-500/5 blur-[60px] rounded-full" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center space-y-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-black text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          Ready to Pamper Yourself?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        >
          Treat yourself to the luxury you deserve. Whether it&apos;s a quick polish change or a full spa day, our artists are ready to transform your nails.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
        >
          <Button asChild size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20 active:scale-95 transition-all">
            <Link href="https://www.fresha.com/a/opulence-strand-cape-town-hibernian-tower-beach-road-yqr0r0du">
              Book Your Appointment
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-full bg-background hover:bg-muted text-foreground border-border font-bold text-lg transition-all">
            <Link href="#services">
              View All Services
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
