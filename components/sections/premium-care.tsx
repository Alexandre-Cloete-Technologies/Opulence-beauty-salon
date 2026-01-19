export function PremiumCare() {
  return (
    <section id="services" className="py-20 bg-background flex justify-center">
      <div className="container px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Premium Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of world-class services designed to pamper you.
            </p>
          </div>

          <div className="w-full h-[800px] rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe 
              src="https://www.fresha.com/book-now/opulence-strand-cape-town-hibernian-tower-beach-road-yqr0r0du?pId=466547" 
              className="w-full h-full border-none"
              title="Fresha Booking Widget"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
