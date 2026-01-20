"use client";
import { useEffect } from "react";
import Script from "next/script";

// Add this at the top of your file to fix TypeScript "window.instgrm" errors
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export function OurWork() {
  const postUrls = [
    "https://www.instagram.com/p/DR1i7tvDUZN/?img_index=1",
    "https://www.instagram.com/p/DRJiFqYjTmA/?img_index=1", // Use unique URLs here
    "https://www.instagram.com/p/DQ4Y7X2DCXw/?img_index=1",
    "https://www.instagram.com/p/DQgxxHuDaKm/?img_index=1",
    "https://www.instagram.com/p/DTsYQPtjMfx/?img_index=1",
    "https://www.instagram.com/p/DOqErn_jV6Y/?img_index=1",
  ];

  // This ensures the embeds are processed on every mount/navigation
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white/90">
      {/* Strategy "afterInteractive" is standard, but "lazyOnload" can sometimes bypass race conditions */}
      <Script 
        src="https://www.instagram.com/embed.js" 
        strategy="afterInteractive" 
        onLoad={() => window.instgrm?.Embeds.process()} 
      />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Gallery</h2>
          <p className="text-muted-foreground font-medium flex items-center justify-center gap-2">
            Follow us on Instagram <span className="text-primary">@OpulenceStrand</span>
          </p>
        </div>

        {/* Change gap and columns to allow enough space for Instagram's fixed width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {postUrls.map((url, index) => (
            <div key={index} className="flex justify-center w-full min-h-[500px]">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ 
                  background: "#FFF", 
                  border: "0", 
                  borderRadius: "3px", 
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  width: "100%", // Script will replace this with an iframe
                  maxWidth: "540px"
                }}
              >
                {/* This link is required for the script to recognize the post */}
                <div style={{ padding: "16px" }}>
                  <a href={url} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#000" }}>
                    View this post on Instagram
                  </a>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
