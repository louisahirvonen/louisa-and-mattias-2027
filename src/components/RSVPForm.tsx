import { useState } from "react";
import { motion } from "framer-motion";
import { isGoogleFormConfigured, submitToGoogleForm } from "@/lib/googleForm";
import { useToast } from "@/hooks/use-toast";
import { Plus, X } from "lucide-react";
import FloralDecoration from "./FloralDecoration";
import { useLanguage } from "@/i18n/LanguageContext";

const RSVPForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState<"accepted" | "declined" | null>(null);
  const [loading, setLoading] = useState(false);
  const [guestNames, setGuestNames] = useState([""]);
  const [form, setForm] = useState({
    email: "",
    attending: null as boolean | null, // nothing selected until the guest chooses
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
      toast({ title: t.rsvp.needName, variant: "destructive" });
      return;
    }

    if (form.attending === null) {
      toast({ title: t.rsvp.chooseAttending, variant: "destructive" });
      return;
    }

    if (!isGoogleFormConfigured()) {
      toast({ title: t.rsvp.notOpen, description: t.rsvp.notOpenDescription, variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      await submitToGoogleForm({
        guestNames: filledNames.join("\n"),
        guestCount: String(filledNames.length),
        email: form.email,
        attending: form.attending ? "Yes" : "No",
        dietaryRestrictions: form.attending ? form.dietary_restrictions : "",
        stationPickup: form.attending ? (form.station_pickup ? "Yes" : "No") : "",
        message: form.message,
      });
    } catch {
      toast({ title: t.rsvp.error, description: t.rsvp.errorDescription, variant: "destructive" });
      return;
    } finally {
      setLoading(false);
    }
    setSubmitted(form.attending ? "accepted" : "declined");
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
            {t.rsvp.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            {t.rsvp.title}
          </h2>
          <div className="section-divider mt-2">
            <FloralDecoration variant="divider" className="w-40" />
          </div>
          <p className="font-body text-base text-muted-foreground mt-4">
            {t.rsvp.deadline}
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-names text-4xl text-foreground mb-4">{t.rsvp.thankYou}</p>
            <p className="font-body text-base text-muted-foreground">
              {submitted === "accepted" ? t.rsvp.recorded : t.rsvp.recordedDecline}
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
                {t.rsvp.guestNames}
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
                      placeholder={i === 0 ? t.rsvp.yourName : t.rsvp.guestName(i + 1)}
                    />
                    {guestNames.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeGuest(i)}
                        aria-label={t.rsvp.removeGuest}
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
                  <Plus size={15} /> {t.rsvp.addGuest}
                </button>
              )}
            </div>

            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-foreground block mb-1.5">
                {t.rsvp.email}
              </label>
              <input
                type="email"
                maxLength={255}
                className={inputClasses}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t.rsvp.emailPlaceholder}
              />
            </div>

            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-foreground block mb-1.5">
                {t.rsvp.attending}
              </label>
              <div className="flex gap-4">
                {[
                  { label: t.rsvp.accept, value: true },
                  { label: t.rsvp.decline, value: false },
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
                    {t.rsvp.dietary}
                  </label>
                  <input
                    type="text"
                    maxLength={500}
                    className={inputClasses}
                    value={form.dietary_restrictions}
                    onChange={(e) => setForm({ ...form, dietary_restrictions: e.target.value })}
                    placeholder={t.rsvp.dietaryPlaceholder}
                  />
                </div>

                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-foreground block mb-1.5">
                    {t.rsvp.pickup}
                  </label>
                  <div className="flex gap-4">
                    {[
                      { label: t.rsvp.pickupYes, value: true },
                      { label: t.rsvp.pickupNo, value: false },
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
                {t.rsvp.message}
              </label>
              <textarea
                maxLength={1000}
                className={`${inputClasses} min-h-[100px] resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.rsvp.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 font-body text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? t.rsvp.sending : t.rsvp.send}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default RSVPForm;
