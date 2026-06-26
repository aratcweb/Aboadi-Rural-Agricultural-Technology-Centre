import { Container } from "@/components/Container";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data handling practices for ARATC.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      <section className="bg-green-50 py-16 border-b border-green-100">
        <Container>
          <h1 className="text-4xl font-display font-bold text-green-950">Privacy Policy</h1>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl prose prose-green text-muted">
            <p className="lead font-medium text-green-950 bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
              <strong>Draft Notice:</strong> This privacy policy is currently a draft requiring legal and management review. It does not claim full compliance with any particular legal framework until formally approved.
            </p>

            <h2>Information Collection</h2>
            <p>
              When you submit an enquiry through our contact forms, we collect information such as your name, email address, phone number, organization, and the contents of your message.
            </p>

            <h2>Use of Information</h2>
            <p>
              We use the collected information solely to respond to your training requests, consultancy enquiries, partnership proposals, or general questions. Your data helps us direct your enquiry to the appropriate technical team member.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain contact information only for as long as necessary to address your enquiry and maintain records of our correspondence.
            </p>

            <h2>Media and Photographs</h2>
            <p>
              ARATC is committed to responsible storytelling. Identifiable photographs and beneficiary stories are published only when explicit consent has been confirmed. If you appear in our media gallery and wish to revoke consent, please contact us.
            </p>

            <h2>External Links</h2>
            <p>
              Our website may contain links to partner organizations or external resources. We are not responsible for the privacy practices or content of these external sites.
            </p>

            <h2>Contact Us</h2>
            <p>
              For questions regarding this privacy policy or our data practices, please contact us through the official channels listed on our <a href="/contact">Contact Page</a>.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
