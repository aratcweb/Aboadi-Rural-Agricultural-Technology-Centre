import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import * as Icons from "lucide-react";
import { Suspense } from "react";
import { siteInfo } from "@/content/site";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with ARATC for training requests, consultancy, research, or partnership opportunities.",
  alternates: {
    canonical: "/contact",
  },
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
                  {/* Location */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Icons.MapPin className="w-5 h-5 text-green-850" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-950">Head Office</h3>
                      <p className="text-sm text-muted mt-1 leading-relaxed">
                        {siteInfo.contact.address}
                      </p>
                      <p className="text-xs text-muted mt-2 leading-relaxed">
                        Postal: {siteInfo.contact.postalAddress}
                      </p>
                      <p className="text-xs text-gold font-bold font-mono mt-1">
                        GPS: {siteInfo.contact.gps}
                      </p>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Icons.Phone className="w-5 h-5 text-green-850" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-950">Phone Lines</h3>
                      <ul className="text-sm text-muted mt-1 space-y-1">
                        {siteInfo.contact.phones.map((phone) => (
                          <li key={phone}>
                            <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:underline hover:text-green-700">
                              {phone}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Icons.Mail className="w-5 h-5 text-green-850" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-950">Emails</h3>
                      <ul className="text-sm text-muted mt-1 space-y-1">
                        {siteInfo.contact.emails.map((email) => (
                          <li key={email}>
                            <a href={`mailto:${email}`} className="hover:underline hover:text-green-700 break-all">
                              {email}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>

                  {/* Contact Person */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Icons.User className="w-5 h-5 text-green-850" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-950">Contact Person</h3>
                      <p className="text-sm text-muted mt-1">
                        {siteInfo.contact.contactPerson} (Executive Director)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Head Office Location Card */}
              <div className="bg-green-950 text-white rounded-3xl border border-green-900 p-8 flex flex-col justify-between aspect-square shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-green-900/30 rounded-full blur-xl" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-green-900 flex items-center justify-center mb-6">
                    <Icons.Map className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold !text-white mb-2">Find Our Office</h3>
                  <p className="text-sm text-green-100/80 leading-relaxed mb-4">
                    Our administrative headquarters is located at Apremdo New Market in the Effia-Kwesimintsim Municipal Assembly in the Western Region of Ghana.
                  </p>
                </div>
                <div className="border-t border-green-900 pt-4 mt-auto">
                  <span className="block text-xs uppercase tracking-wider text-green-200/50 mb-1">Ghana Post Digital Address</span>
                  <span className="text-lg font-mono font-bold text-gold">{siteInfo.contact.gps}</span>
                </div>
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
