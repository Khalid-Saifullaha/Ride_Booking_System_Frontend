import { Button } from "@/components/ui/button";
import { Smartphone, Download, Star } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[oklch(0.586_0.253_17.585)] via-[oklch(0.514_0.222_16.935)] to-[oklch(0.455_0.188_13.697)] text-[oklch(0.969_0.015_12.422)] overflow-hidden">
      {/* Subtle light overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="mxw relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Make Every Ride <span className="text-white">Smarter</span> with{" "}
              <span className="text-[oklch(0.969_0.015_12.422)]">Rida</span>
            </h2>
            <p className="text-lg text-[oklch(0.967_0.001_286.375)] max-w-lg leading-relaxed">
              Book rides in seconds, track your driver in real time, and travel
              with comfort and confidence. Experience seamless city commuting —
              powered by <strong>Rida</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[oklch(1_0_0)] text-[oklch(0.141_0.005_285.823)] hover:bg-[oklch(0.92_0.004_286.32)] font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Get the App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[oklch(1_0_0)] text-[oklch(1_0_0)] hover:bg-white/10 hover:text-white"
              >
                How It Works
              </Button>
            </div>

            {/* Features / Highlights */}
            <div className="flex flex-wrap items-center gap-6 text-sm mt-4 text-[oklch(0.967_0.001_286.375)]">
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-[oklch(0.969_0.015_12.422)]" />
                <span>Available on iOS & Android</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-[oklch(0.969_0.015_12.422)]" />
                <span>Trusted by 100k+ riders</span>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative w-full h-72 sm:h-80 md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg shadow-[oklch(0.514_0.222_16.935)]/40 border border-[oklch(0.92_0.004_286.32)]/30">
              <img
                src="https://plus.unsplash.com/premium_photo-1759150666091-62a6a01035ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="Rida app preview - showing ride booking and driver tracking interface"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.141_0.005_285.823)]/70 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
