// components/ServiceHighlights.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, DollarSign, Users } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "All drivers are verified and rides are tracked in real time for your safety",
  },
  {
    icon: Clock,
    title: "Quick Pickup",
    description: "Average pickup within 5 minutes in most urban areas",
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    description:
      "Transparent pricing with no hidden fees. Know your fare upfront",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Our friendly support team is available anytime you need help",
  },
];

export function ServiceHighlights() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="mxw">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Rida
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the ultimate ride-sharing comfort, safety, and
            reliability
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-2xl bg-card/60 backdrop-blur-sm transition-all group rounded-xl"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-primary/20 group-hover:bg-primary/60 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
