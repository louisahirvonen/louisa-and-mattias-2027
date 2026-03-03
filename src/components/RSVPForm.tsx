import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const rsvpSchema = z.object({
  full_name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  attending: z.boolean(),
  guest_count: z.number().min(1).max(10),
  dietary_restrictions: z.string().max(500).optional(),
  message: z.string().max(1000).optional(),
});

const RSVPForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    attending: true,
    guest_count: 1,
    dietary_restrictions: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = rsvpSchema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Please check your information", description: parsed.error.errors[0]?.message, variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("rsvp_responses").insert({
      full_name: form.full_name,
      email: form.email || null,
      attending: form.attending,
      guest_count: form.guest_count,
      dietary_restrictions: form.dietary_restrictions || null,
      message: form.message || null,
    });

    setLoading(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  const inputClasses =
    "w-full px-4 py-3 font-body text-base bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary/40 text-foreground placeholder:text-muted-foreground/40";

  return (
    <section id="rsvp" className="py-24 px-4 bg-sage-light">
      <div className="max-w-xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            We Hope You Can Join Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            RSVP
          </h2>
          <div className="section-divider mt-2">
            <span className="text-taupe text-xs">—</span>
          </div>
          <p className="font-body text-base text-muted-foreground mt-4">
            Kindly respond by June 1st, 2027
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-names text-4xl text-foreground mb-4">Thank You</p>
            <p className="font-body text-base text-muted-foreground">
              Your response has been recorded. We look forward to celebrating with you!
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-foreground block mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                maxLength={100}
                className={inputClasses}
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-foreground block mb-1.5">
                Email
              </label>
              <input
                type="email"
                maxLength={255}
                className={inputClasses}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-foreground block mb-1.5">
                Will you be attending? *
              </label>
              <div className="flex gap-4">
                {[
                  { label: "Joyfully Accept", value: true },
                  { label: "Regretfully Decline", value: false },
                ].map((opt) => (
                  <button
                    key={String(opt.value)}
                    type="button"
                    onClick={() => setForm({ ...form, attending: opt.value })}
                    className={`flex-1 py-3 px-4 font-body text-sm tracking-wider border transition-colors ${
                      form.attending === opt.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-muted-foreground border-border hover:border-primary/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {form.attending && (
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-foreground block mb-1.5">
                  Number of Guests
                </label>
                <select
                  className={inputClasses}
                  value={form.guest_count}
                  onChange={(e) => setForm({ ...form, guest_count: Number(e.target.value) })}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {form.attending && (
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-foreground block mb-1.5">
                  Dietary Restrictions
                </label>
                <input
                  type="text"
                  maxLength={500}
                  className={inputClasses}
                  value={form.dietary_restrictions}
                  onChange={(e) => setForm({ ...form, dietary_restrictions: e.target.value })}
                  placeholder="Any allergies or dietary needs"
                />
              </div>
            )}

            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-foreground block mb-1.5">
                Message for the Couple
              </label>
              <textarea
                maxLength={1000}
                className={`${inputClasses} min-h-[100px] resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Share your well wishes..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 font-body text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send RSVP"}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default RSVPForm;
