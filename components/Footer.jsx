import Link from "next/link";
import { Container } from "./Container";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-950 text-green-100 border-t border-green-900 mt-auto">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Intro */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white font-display">ARATC</h3>
            <p className="text-sm text-green-100/80 font-medium">
              Aboadi Rural Agricultural Technology Centre
            </p>
            <p className="text-sm leading-relaxed text-green-100/90 max-w-xs">
              A Ghanaian non-governmental, non-profit organization delivering practical agricultural training, livelihood development, research, and consultancy services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "What We Do", href: "/services" },
                { name: "Projects & Impact", href: "/projects" },
                { name: "Leadership & Team", href: "/leadership" },
                { name: "News & Stories", href: "/news" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              {[
                { name: "Sustainable Agriculture", href: "/services/sustainable-agriculture" },
                { name: "Livelihood Skills", href: "/services/livelihood-skills" },
                { name: "Entrepreneurship", href: "/services/entrepreneurship" },
                { name: "Research & Consultancy", href: "/services/research-consultancy" },
                { name: "Community Development", href: "/services/community-development" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>
                  Apremdo, Western Region<br />
                  Ghana<br />
                  <span className="text-xs text-green-100/70 block mt-1">(Exact address pending confirmation)</span>
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>(Pending confirmation)</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>(Pending confirmation)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-green-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-green-100/70">
          <p>© {currentYear} Aboadi Rural Agricultural Technology Centre (ARATC). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
