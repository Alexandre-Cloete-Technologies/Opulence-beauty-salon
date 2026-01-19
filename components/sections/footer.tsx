import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export function Footer() {
  return (
    <footer className="bg-[#1B0D14] text-white py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/opulence-logo-300x49.png" 
                alt="Opulence Strand Logo" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              A luxury nail salon that exudes opulence with magnificent sea views and plush furnishings providing a serene ambiance for pampering.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "IG" },
                { icon: Facebook, label: "FB" },
                { icon: Twitter, label: "TT" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <address className="not-italic">
                  208 Hibernian Towers,<br />
                  Beach Road, Strand, 7140
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>060 486 9308 (WhatsApp)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>nails@opu.beauty (General Enquiries)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>admin@opu.beauty (Management)</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Opening Hours</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Mon - Thu</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2026 Alexandre Cloete Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
