import { Card } from "./ui/card";
import { Image } from "lucide-react";

const screenshots = [
  { id: 1, title: "Dashboard" },
  { id: 2, title: "Add Expense" },
  { id: 3, title: "Group View" },
  { id: 4, title: "Settlement" },
];

export function Screenshots() {
  return (
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              See Deun in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into the clean, intuitive interface
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((screenshot) => (
                <Card key={screenshot.id} className="overflow-hidden">
                  <div className="flex aspect-[9/16] items-center justify-center bg-muted">
                    <div className="flex flex-col items-center gap-3 text-muted-foreground">
                      <Image className="h-12 w-12" />
                      <p className="text-sm font-medium">{screenshot.title}</p>
                      <p className="text-xs">Screenshot coming soon</p>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>
    </section>
  );
}
