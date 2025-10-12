export function Hero() {
  return (
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Save the Date
            </h2>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The Average 30 Party
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Two birthdays. Two ages. One statistically perfect average.
            </p>
          </div>
        </div>
      </section>
  );
}
