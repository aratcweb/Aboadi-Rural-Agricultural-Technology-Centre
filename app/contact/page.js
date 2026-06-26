import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import * as Icons from "lucide-react";
import { Suspense } from "react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with ARATC for training requests, consultancy, research, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* Hero */}
      <section className="bg-green-50 py-16 md:py-24 border-b border-green-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-green-950">Contact Us</h1>
            <p className="text-xl text-muted leading-relaxed">
              Partner with an experienced local organization. Contact us to discuss implementation, training, research or technical support.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Contact Details Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-cream rounded-3xl p-8 border border-green-100 shadow-sm">
                <h2 className="text-xl font-bold text-green-950 mb-6">Office Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Icons.MapPin className="w-5 h-5 text-green-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-950">Location</h3>
                      <p className="text-sm text-muted mt-1 leading-relaxed">
                        Apremdo, Western Region<br />Ghana
                      </p>
                      <p className="text-xs text-gold font-medium mt-1">Exact address pending</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Icons.Phone className="w-5 h-5 text-green-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-950">Phone</h3>
                      <p className="text-sm text-muted mt-1">Pending confirmation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Icons.Mail className="w-5 h-5 text-green-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-950">Email</h3>
                      <p className="text-sm text-muted mt-1">Pending confirmation</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="bg-green-50 rounded-3xl border border-green-100 aspect-square flex flex-col items-center justify-center text-center p-8 text-green-900/50">
                <Icons.Map className="w-12 h-12 mb-3" />
                <p className="font-medium">Map Embed</p>
                <p className="text-xs mt-2">Will be updated once exact address coordinates are supplied.</p>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-green-100 shadow-sm">
                <SectionHeading 
                  title="Send an Enquiry" 
                  subtitle="Fill out the form below and our technical team will get back to you to discuss your requirements."
                  className="mb-10"
                />
                <Suspense fallback={<div className="h-64 flex items-center justify-center text-muted">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
