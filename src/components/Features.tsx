import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { DollarSign, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Fair Splitting",
    description:
      "Automatically calculate who owes what. No more awkward math or disputes—everyone pays their fair share.",
  },
  {
    icon: Users,
    title: "Group Friendly",
    description:
      "Perfect for friends, couples, roommates, or travel groups. Share expenses seamlessly across your crew.",
  },
  {
    icon: Zap,
    title: "Simple UI",
    description:
      "Clean, intuitive interface that gets out of your way. Add expenses in seconds, settle up with ease.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data stays yours. We prioritize your privacy and security with every transaction you track.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Deun?
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage shared expenses effortlessly
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="relative overflow-hidden">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
