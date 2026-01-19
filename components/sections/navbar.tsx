import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/opulence-logo-300x49.png" 
              alt="Opulence Strand Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Price List
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Gallery
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>

          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm px-6">
            <Link href="https://www.fresha.com/a/opulence-strand-cape-town-hibernian-tower-beach-road-yqr0r0du">
              Book Appointment
            </Link>
          </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
