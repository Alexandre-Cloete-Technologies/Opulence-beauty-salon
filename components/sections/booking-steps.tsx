export function BookingSteps() {
  const steps = [
    {
      number: 1,
      title: "Navigate to Fresha",
      description: "Click on the 'book appointment' button",
    },
    {
      number: 2,
      title: "Follow instructions",
      description: "Pick a date, time and service using the easy on-screen interface",
    },
    {
      number: 3,
      title: "Relax",
      description: "Show up and let us take care of the rest in our serene salon",
    },
  ];

  return (
    <section className="py-20 bg-white/90">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Bookings Made Simple
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row justify-center items-start gap-12 lg:gap-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-border z-0" />

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative z-10 flex-1 flex flex-col items-center text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold border-4 border-background shadow-md">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground max-w-[280px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
