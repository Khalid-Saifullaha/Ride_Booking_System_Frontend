// components/Promotions.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Gift, Car, Zap } from "lucide-react";

const promotions = [
  {
    icon: Gift,
    title: "🎁 First Ride Free",
    description: "Enjoy your very first ride absolutely free — up to 100 BDT!",
    code: "RIDA100",
    color: "text-chart-1 bg-chart-1/10",
  },
  {
    icon: Car,
    title: "🚗 Weekend Joyride",
    description: "Flat 50% off every Saturday & Sunday on all city rides.",
    code: "JOY50",
    color: "text-chart-2 bg-chart-2/10",
  },
  {
    icon: Zap,
    title: "⚡ Flash Discount",
    description: "Grab 30% off on premium rides — for a limited time only!",
    code: "FLASH30",
    color: "text-chart-3 bg-chart-3/10",
  },
];

export function Promotions() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="mxw text-center">
        <h2 className="text-4xl font-bold text-foreground mb-3">
          Ride Smarter, Save More
        </h2>
        <p className="text-lg text-muted-foreground mb-16">
          Exclusive Rida offers designed to make your journeys lighter and
          brighter!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {promotions.map((promo, index) => (
            <Card
              key={index}
              className="group border-2 border-dashed border-muted-foreground/20 hover:border-primary/40 transition-all shadow-sm hover:shadow-xl bg-card/60 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${promo.color} transition-transform group-hover:scale-110`}
                >
                  <promo.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {promo.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {promo.description}
                </p>
                <div className="bg-muted px-4 py-2 rounded-lg font-mono text-sm inline-block">
                  Use Code:{" "}
                  <span className="font-bold text-primary">{promo.code}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white shadow-lg"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Explore More Deals
        </Button>
      </div>
    </section>
  );
}
