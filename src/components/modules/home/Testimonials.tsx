// components/Testimonials.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Daily Commuter",
    content:
      "Rida makes my daily commute effortless. Drivers are punctual and the app is super easy to use.",
    rating: 5,
  },
  {
    name: "Tanvir Hossain",
    role: "Frequent Traveler",
    content:
      "Amazing service! The real-time tracking and safe rides give me peace of mind every time I book.",
    rating: 5,
  },
  {
    name: "Nabila Karim",
    role: "Student",
    content:
      "Affordable and reliable. I love the quick pickup feature—it saves so much time!",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/5 to-muted/20">
      <div className="mxw">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Hear From Our Riders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of happy riders. Here’s what they have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="bg-card/50 backdrop-blur-md border-0 shadow-md hover:shadow-2xl rounded-xl transition-all group">
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "text-primary fill-primary"
                            : "text-muted/50"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 italic text-center">
                    "{testimonial.content}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
