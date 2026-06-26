"use client";

import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "./Button";
import { submitEnquiry } from "@/app/actions/contact";
import * as Icons from "lucide-react";

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultType = searchParams.get("type") || "general";
  const defaultService = searchParams.get("service") || "";

  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "idle", message: "" });
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitEnquiry(formData);
      if (result.error) {
        setStatus({ state: "error", message: result.error });
      } else {
        setStatus({ state: "success", message: "Your enquiry has been received. We will respond shortly." });
        e.target.reset(); // Reset form
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.state === "success" && (
        <div className="p-4 bg-green-50 text-green-900 rounded-xl border border-green-200 flex items-start gap-3">
          <Icons.CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{status.message}</p>
        </div>
      )}
      {status.state === "error" && (
        <div className="p-4 bg-red-50 text-red-900 rounded-xl border border-red-200 flex items-start gap-3">
          <Icons.AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{status.message}</p>
        </div>
      )}

      {/* Honeypot field for spam prevention */}
      <input type="text" name="bot_field" className="hidden" tabIndex="-1" autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-green-950">Full Name *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-shadow" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-green-950">Email Address *</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-shadow" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-green-950">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-shadow" />
        </div>
        <div className="space-y-2">
          <label htmlFor="organization" className="block text-sm font-medium text-green-950">Organization</label>
          <input type="text" id="organization" name="organization" className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-shadow" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="type" className="block text-sm font-medium text-green-950">Enquiry Type *</label>
          <select id="type" name="type" defaultValue={defaultType} required className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-shadow bg-white appearance-none">
            <option value="request-training">Request training</option>
            <option value="request-consultancy">Request consultancy or research</option>
            <option value="discuss-partnership">Discuss a project partnership</option>
            <option value="invite-event">Invite ARATC to an event</option>
            <option value="media">Media enquiry</option>
            <option value="general">General enquiry</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-medium text-green-950">Related Service (Optional)</label>
          <select id="service" name="service" defaultValue={defaultService} className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-shadow bg-white appearance-none">
            <option value="">None / Not sure</option>
            <option value="sustainable-agriculture">Sustainable Agriculture & Food Security</option>
            <option value="livelihood-skills">Livelihood & Skills Training</option>
            <option value="entrepreneurship">Entrepreneurship Development</option>
            <option value="research-consultancy">Research, M&E & Consultancy</option>
            <option value="private-sector">Private Sector & Market Systems</option>
            <option value="community-development">Environment & Community Development</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-green-950">Message *</label>
        <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-shadow resize-y" placeholder="Please describe your requirements, group size, location, etc."></textarea>
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" id="privacy" name="privacy" required className="mt-1 w-4 h-4 text-green-700 rounded border-green-300 focus:ring-green-700" />
        <label htmlFor="privacy" className="text-sm text-muted">
          I consent to ARATC processing this data to respond to my enquiry in accordance with the <a href="/privacy" className="text-green-700 hover:underline">Privacy Policy</a>.
        </label>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto" disabled={isPending}>
        {isPending ? "Sending Enquiry..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
