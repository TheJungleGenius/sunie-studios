import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  eventType: z.string().min(1, "Please describe your event type"),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

const PACKAGE_LABELS: Record<string, string> = {
  "short-story": "Short Story (Content Creation)",
  "full-story": "Full Story (Content Creation)",
  prologue: "Prologue (Photography)",
  intimate: "Intimate (Photography)",
  wedding: "Wedding (Photography)",
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const packageLabel = useMemo(() => {
    if (typeof window === "undefined") return null;
    const slug = new URLSearchParams(window.location.search).get("package");
    if (!slug) return null;
    return PACKAGE_LABELS[slug] ?? null;
  }, []);

  const form = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: packageLabel ?? "",
      eventDate: "",
      message: "",
    },
  });

  useEffect(() => {
    if (packageLabel) {
      form.setValue("eventType", packageLabel);
    }
  }, [packageLabel, form]);

  const onSubmit = async (data: EnquiryFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      toast.success("Enquiry sent!", {
        description: "Thank you for reaching out. We'll be in touch soon.",
      });
      form.reset();
    } catch (err) {
      console.error("Enquiry error:", err);
      toast.error("Something went wrong", {
        description: "Please try again or reach out via Instagram.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1ED] text-[#2C2A29]">
      <Navigation />
      <main className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <header className="mb-16 md:mb-24">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl lowercase italic font-light tracking-wide mb-4">
            contact
          </h1>
          <p className="text-xs tracking-[0.2em] uppercase max-w-sm text-[#2C2A29]/50 leading-relaxed">
            Let's create something beautiful together.
          </p>
          {packageLabel && (
            <p className="mt-8 text-[10px] tracking-[0.3em] uppercase text-[#2C2A29]/70">
              (Enquiring about: <span className="font-serif text-sm normal-case tracking-normal italic">{packageLabel}</span>)
            </p>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] tracking-widest uppercase text-[#2C2A29]/50">
                          Full Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jane Smith"
                            className="border-0 border-b border-[#2C2A29]/20 rounded-none bg-transparent px-0 py-2 text-sm focus-visible:ring-0 focus-visible:border-[#2C2A29] transition-colors placeholder:text-[#2C2A29]/30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] tracking-widest uppercase text-[#2C2A29]/50">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="jane@example.com"
                            className="border-0 border-b border-[#2C2A29]/20 rounded-none bg-transparent px-0 py-2 text-sm focus-visible:ring-0 focus-visible:border-[#2C2A29] transition-colors placeholder:text-[#2C2A29]/30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] tracking-widest uppercase text-[#2C2A29]/50">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+61 400 000 000"
                            className="border-0 border-b border-[#2C2A29]/20 rounded-none bg-transparent px-0 py-2 text-sm focus-visible:ring-0 focus-visible:border-[#2C2A29] transition-colors placeholder:text-[#2C2A29]/30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] tracking-widest uppercase text-[#2C2A29]/50">
                          Event Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="border-0 border-b border-[#2C2A29]/20 rounded-none bg-transparent px-0 py-2 text-sm focus-visible:ring-0 focus-visible:border-[#2C2A29] transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] tracking-widest uppercase text-[#2C2A29]/50">
                        Event Type *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Wedding, engagement, corporate..."
                          className="border-0 border-b border-[#2C2A29]/20 rounded-none bg-transparent px-0 py-2 text-sm focus-visible:ring-0 focus-visible:border-[#2C2A29] transition-colors placeholder:text-[#2C2A29]/30"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] tracking-widest uppercase text-[#2C2A29]/50">
                        Your Enquiry *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your vision, venue, and any details you'd like us to know..."
                          className="border-0 border-b border-[#2C2A29]/20 rounded-none bg-transparent px-0 py-2 text-sm focus-visible:ring-0 focus-visible:border-[#2C2A29] transition-colors resize-none min-h-[120px] placeholder:text-[#2C2A29]/30"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 px-8 py-3 h-auto border border-[#2C2A29] bg-transparent text-[#2C2A29] text-xs tracking-widest uppercase rounded-none hover:bg-[#2C2A29] hover:text-[#F4F1ED] transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            </Form>
          </div>

          <aside className="md:col-span-4 md:col-start-9 pt-2 space-y-10">
            <div>
              <p className="text-[10px] tracking-widest uppercase mb-4 text-[#2C2A29]/50">
                (Connect)
              </p>
              <div className="space-y-3 font-serif text-2xl italic font-light">
                <a
                  href="https://www.instagram.com/thesuniestudio/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:opacity-50 transition-opacity"
                >
                  instagram
                </a>
                <a
                  href="https://www.tiktok.com/@onthedaysocials"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:opacity-50 transition-opacity"
                >
                  tiktok
                </a>
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-widest uppercase mb-4 text-[#2C2A29]/50">
                (Based In)
              </p>
              <p className="font-serif text-lg italic font-light leading-relaxed">
                Melbourne, Australia
              </p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
