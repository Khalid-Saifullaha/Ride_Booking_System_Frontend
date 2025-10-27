import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Logo from "../Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/features", label: "Features" },
    { path: "/contact", label: "Contact" },
    { path: "/faq", label: "FAQ" },
  ];

  const authLinks = [
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
  ];

  return (
    <footer className="bg-background border-t border-border text-foreground">
      <div className="mxw py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="text-muted-foreground mt-3 mb-6 leading-relaxed">
              Rida is your trusted ride-sharing partner. Safe, affordable, and
              reliable journeys connecting people every day.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+880 1739503580</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>example@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">
              Get Started
            </h3>
            <ul className="space-y-3">
              {authLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* App Download Buttons */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">Download App</p>
              <div className="flex flex-col space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start hover:border-primary/60 hover:text-primary"
                >
                  App Store
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start hover:border-primary/60 hover:text-primary"
                >
                  Google Play
                </Button>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">
              Connect With Us
            </h3>

            {/* Social Links */}
            <div className="flex space-x-3 mb-6">
              <Button
                variant="outline"
                size="icon"
                className="hover:text-primary hover:border-primary/60 transition-colors"
                onClick={() =>
                  window.open("https://www.facebook.com/", "_blank")
                }
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:text-primary hover:border-primary/60 transition-colors"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/khalid-saifullaha/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:text-primary hover:border-primary/60 transition-colors"
                onClick={() => window.open("https://discord.com", "_blank")}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                Subscribe to our newsletter
              </p>
              <div className="flex gap-2">
                <input
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear}{" "}
            <span className="text-primary font-semibold">Rida</span>. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors hover:underline"
            >
              Privacy
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors hover:underline"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
