// components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroSection from "@/assets/heroSection.jpg";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mxw sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            >
              Ride With{" "}
              <span className="text-background block sm:inline">Rida</span>
              <br />
              Comfort & Safety
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Book your rides effortlessly with Rida. Enjoy verified drivers,
              real-time tracking, and secure journeys every time you travel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5"
            >
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-muted font-semibold w-full sm:w-auto"
              >
                Book Your Ride <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-background text-muted-foreground hover:bg-background hover:text-foreground w-full sm:w-auto transition-all duration-150"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-6 text-center sm:text-left"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold">15K+</div>
                <div className="text-muted-foreground text-sm sm:text-base">
                  Happy Riders
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">650+</div>
                <div className="text-muted-foreground text-sm sm:text-base">
                  Verified Drivers
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">70+</div>
                <div className="text-muted-foreground text-sm sm:text-base">
                  Cities Covered
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative order-first lg:order-last rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={heroSection}
              alt="Rida Ride Management App Hero"
              className="w-full h-auto max-w-md mx-auto lg:max-w-none rounded-2xl object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
