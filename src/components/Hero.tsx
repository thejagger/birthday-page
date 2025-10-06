import {Button} from "./ui/button";
import {Apple, Play} from "lucide-react";

export function Hero() {
  return (
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Simply Split Fairly.
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Track shared expenses with friends, roommates, or travel groups.
              Fair splitting made simple with an intuitive cross-platform app
              that keeps everyone on the same page.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://apps.apple.com/us/app/deun/id6742751703" aria-label="Download on the App Store">
                  <Apple className="h-5 w-5"/>
                  Download on the App Store
                </a>
              </Button>

              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://play.google.com/store/apps/details?id=app.deun.www" aria-label="Get it on Google Play">
                  <Play className="h-5 w-5"/>
                  Get it on Google Play
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}
