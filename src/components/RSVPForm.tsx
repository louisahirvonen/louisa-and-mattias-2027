import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Plus, X } from "lucide-react";
import FloralDecoration from "./FloralDecoration";

const RSVPForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [guestNames, setGuestNames] = useState([""]);
  const [form, setForm] = useState({
    email: "",
    attending: true,
    dietary_restrictions: "",
    message: "",
    station_pickup: false,
  });

  const addGuest = () => {
    if (guestNames.length < 10) setGuestNames([...guestNames, ""]);
  };

  const removeGuest = (index: number) => {
    if (guestNames.length > 1) {
      setGuestNames(guestNames.filter((_, i) => i !== index));
    }
  };

  const updateGuestName = (index: number, value: string) => {
    const updated = [...guestNames];
    updated[index] = value;
    setGuestNames(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const filledNames = guestNames.map((n) => n.trim()).filter(Boolean);
    if (filledNames.length === 0) {
      toast({ title: "Please enter at least one guest name", variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("rsvp_responses").insert({
      full_name: filledNames[0],
      email: form.email || null,
      attending: form.attending,
      guest_count: filledNames.length,
      guest_names: filledNames,
      dietary_restrictions: form.dietary_restrictions || null,
      message: form.message || null,
      station_pickup: form.station_pickup,
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
    <section id="rsvp" className="relative py-24 px-4 bg-sage-light overflow-hidden">
      <FloralDecoration variant="corner-top-right" className="absolute top-0 right-0 w-32 sm:w-44 opacity-40 pointer-events-none" />
      <FloralDecoration variant="corner-bottom-left" className="absolute bottom-0 left-0 w-28 sm:w-40 opacity-30 pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
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
            <FloralDecoration variant="divider" className="w-40" />
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
            {/* Guest names */}
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-foreground block mb-1.5">
                Guest Names *
              </label>
              <div className="space-y-3">
                {guestNames.map((name, i) => (
                  <div key={i} className="flex gap-2">
                    <input
                      type="text"
                      required
                      maxLength={100}
                      className={inputClasses}
                      value={name}
                      onChange={(e) => updateGuestName(i, e.target.value)}
                      placeholder={i === 0 ? "Your full name" : `Guest ${i + 1} full name`}
                    />
                    {guestNames.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeGuest(i)}
                        className="px-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {guestNames.length < 10 && (
                <button
                  type="button"
                  onClick={addGuest}
                  className="mt-2 flex items-center gap-1.5 font-body text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Plus size={15} /> Add another guest
                </button>
              )}
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
              <>
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

                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-foreground block mb-1.5">
                    Pickup from Västerås Centralstation? *
                  </label>
                  <div className="flex gap-4">
                    {[
                      { label: "Yes, please", value: true },
                      { label: "No, thank you", value: false },
                    ].map((opt) => (
                      <button
                        key={String(opt.value)}
                        type="button"
                        onClick={() => setForm({ ...form, station_pickup: opt.value })}
                        className={`flex-1 py-3 px-4 font-body text-sm tracking-wider border transition-colors ${
                          form.station_pickup === opt.value
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-muted-foreground border-border hover:border-primary/30"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </>
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
