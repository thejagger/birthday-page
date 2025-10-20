import {SignupDialog} from "./SignupDialog";
import {Button} from "./ui/button";
// @ts-ignore

export function Hero() {
  return (
      <section
          className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-pink-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        {/* Decorative blobs */}
        <span
            className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full bg-pink-300/30 blur-3xl"/>
        <span
            className="pointer-events-none absolute -top-16 -right-10 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl"/>

        {/* Floating balloons */}
        <div className="pointer-events-none absolute left-6 top-10 select-none">
          <span className="text-4xl animate-bounce motion-reduce:animate-none">🎈</span>
        </div>
        <div className="pointer-events-none absolute right-8 top-10 select-none">
          <span className="text-5xl animate-bounce motion-reduce:animate-none">🎉</span>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex items-center gap-4">
              <Button variant="outline" asChild><a href="./average30party.ics" download="average30party.ics">🗓️ Save the Date</a></Button>
              <SignupDialog/>
            </div>


            <h1 className="bg-gradient-to-r from-fuchsia-600 via-rose-500 to-amber-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              The Average 30 Party
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Jakob is turning 29, Tanja is turning 31, so basically we are 30… on
              average. For this special occasion, we are throwing a celebration of
              everything that makes being 30ish awesome.
            </p>

            {/* Event details */}
            <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
              <div
                  className="flex items-center gap-3 rounded-xl border bg-white/70 px-4 py-3 shadow-sm backdrop-blur transition hover:shadow-md dark:border-gray-800 dark:bg-gray-800/60">
                <span className="text-2xl">📅</span>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Date</div>
                  <div className="font-medium">Friday, December 5th</div>
                </div>
              </div>
              <div
                  className="flex items-center gap-3 rounded-xl border bg-white/70 px-4 py-3 shadow-sm backdrop-blur transition hover:shadow-md dark:border-gray-800 dark:bg-gray-800/60">
                <span className="text-2xl">⏰</span>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Time</div>
                  <div className="font-medium">18:00</div>
                </div>
              </div>
              <div
                  className="flex items-center gap-3 rounded-xl border bg-white/70 px-4 py-3 shadow-sm backdrop-blur transition hover:shadow-md dark:border-gray-800 dark:bg-gray-800/60 sm:col-span-2">
                <span className="text-2xl">📍</span>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">Bruno-Marek-Allee 18, 1st floor, party
                    room
                  </div>
                </div>
              </div>
              <div
                  className="flex items-center gap-3 rounded-xl border bg-white/70 px-4 py-3 shadow-sm backdrop-blur transition hover:shadow-md dark:border-gray-800 dark:bg-gray-800/60 sm:col-span-2">
                <span className="text-2xl">👔</span>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Dress code</div>
                  <div className="font-medium">“Average 30 Chic”, interpret as you will.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-2xl text-amber-500">
              <span className="animate-pulse">✨</span>
              <span className="animate-pulse [animation-delay:200ms]">🥳</span>
              <span className="animate-pulse [animation-delay:400ms]">✨</span>
            </div>

            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              We’ve got drinks and snacks covered (but if you’d like, bring your own weird
              favorite — it’s a private party room, after all). Brace yourself for a
              totally adult and appropriate party kicking off already in the afternoon,
              with some surprise games, questionable dance moves, and the best millennial
              bangers we could find.
            </p>

            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Let us know as soon as you can if you will join our celebration (ideally by
              November 21st)
            </p>

            <div className="flex items-center gap-4 text-2xl text-amber-500">
              <span className="animate-pulse">✨</span>
              <span className="animate-pulse [animation-delay:200ms]">🥳</span>
              <span className="animate-pulse [animation-delay:400ms]">✨</span>
            </div>
          </div>
        </div>
      </section>
  );
}
