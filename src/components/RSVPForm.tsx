import { useState } from "react";
import { motion } from "framer-motion";
import { isGoogleFormConfigured, submitToGoogleForm } from "@/lib/googleForm";
import { useToast } from "@/hooks/use-toast";
import { Plus, X } from "lucide-react";
import FloralDecoration from "./FloralDecoration";
import { useLanguage } from "@/i18n/LanguageContext";

interface Guest {
  name: string;
  dietary: string;
}

const emptyGuest = (): Guest => ({ name: "", dietary: "" });

const RSVPForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState<"accepted" | "declined" | null>(null);
  const [loading, setLoading] = useState(false);
  const [guests, setGuests] = useState<Guest[]>([emptyGuest()]);
  const [form, setForm] = useState({
    email: "",
    phone: "",
    attending: null as boolean | null, // nothing selected until the guest chooses
    carpool: null as boolean | null, // room in their car for other guests
    carpoolSeats: "",
    carpoolFrom: "",
    message: "",
    station_pickup: false,
  });

  // Phone, dietary needs, pickup and carpooling only matter for guests who are coming
  // (they also show before an answer is picked, so nobody misses them)
  const declining = form.attending === false;

  const addGuest = () => {
    if (guests.length < 10) setGuests([...guests, emptyGuest()]);
  };

  const removeGuest = (index: number) => {
    if (guests.length > 1) setGuests(guests.filter((_, i) => i !== index));
  };

  const updateGuest = (index: number, field: keyof Guest, value: string) => {
    setGuests(guests.map((g, i) => (i === index ? { ...g, [field]: value } : g)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.attending === null) {
      toast({ title: t.rsvp.chooseAttending, variant: "destructive" });
      return;
    }

    const filled = guests
      .map((g) => ({ name: g.name.trim(), dietary: g.dietary.trim() }))
      .filter((g) => g.name);
    if (filled.length === 0) {
      toast({ title: t.rsvp.needName, variant: "destructive" });
      return;
    }

    if (!isGoogleFormConfigured()) {
      toast({ title: t.rsvp.notOpen, description: t.rsvp.notOpenDescription, variant: "destructive" });
      return;
    }

    const carpool =
      declining || form.carpool === null
        ? ""
        : form.carpool
          ? [
              "Yes",
              form.carpoolSeats && `${form.carpoolSeats} seats`,
              form.carpoolFrom.trim() && `from ${form.carpoolFrom.trim()}`,
            ]
              .filter(Boolean)
              .join(", ")
          : "No";

    setLoading(true);
    try {
      // One line per guest, so the Google Form keeps one column per question
      await submitToGoogleForm({
        guestNames: filled.map((g) => g.name).join("\n"),
        guestCount: String(filled.length),
        email: form.email,
        phone: declining ? "" : form.phone.trim(),
        carpool,
        attending: form.attending ? "Yes" : "No",
        dietaryRestrictions: declining
          ? ""
          : filled.filter((g) => g.dietary).map((g) => `${g.name}: ${g.dietary}`).join("\n"),
        stationPickup: declining ? "" : form.station_pickup ? "Yes" : "No",
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

  const labelClasses = "font-body text-xs tracking-[0.15em] uppercase text-foreground block mb-1.5";
  const smallLabelClasses = "font-body text-xs text-muted-foreground block mb-1";
  const inputClasses =
    "w-full px-4 py-3 font-body text-base bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary/40 text-foreground placeholder:text-muted-foreground/60";

  const choiceButton = (selected: boolean) =>
    `flex-1 py-3 px-4 font-body text-sm tracking-wider border transition-colors ${
      selected
        ? "bg-primary text-primary-foreground border-primary"
        : "bg-background text-muted-foreground border-border hover:border-primary/30"
    }`;

  return (
    <section id="rsvp" className="relative py-16 sm:py-20 px-4 bg-sage-light overflow-hidden">
      <FloralDecoration variant="corner-top-right" className="absolute top-0 right-0 w-32 sm:w-44 opacity-40 pointer-events-none" />
      <FloralDecoration variant="corner-bottom-left" className="absolute bottom-0 left-0 w-28 sm:w-40 opacity-30 pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
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
            {/* Coming or not — asked first, since it decides which questions follow */}
            <div>
              <span className={labelClasses}>{t.rsvp.attending}</span>
              <div className="flex gap-4">
                {[
                  { label: t.rsvp.accept, value: true },
                  { label: t.rsvp.decline, value: false },
                ].map((opt) => (
                  <button
                    key={String(opt.value)}
                    type="button"
                    aria-pressed={form.attending === opt.value}
                    onClick={() => setForm({ ...form, attending: opt.value })}
                    className={choiceButton(form.attending === opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* One card per guest */}
            <div>
              <span className={labelClasses}>{t.rsvp.guestNames}</span>
              <div className="space-y-3">
                {guests.map((guest, i) => (
                  <div key={i} className="p-4 border border-border bg-background/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-base text-foreground">{t.rsvp.guestHeading(i + 1)}</span>
                      {guests.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeGuest(i)}
                          aria-label={t.rsvp.removeGuest}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X size={18} />
                        </button>
                      )}
                    </div>
                    <div>
                      <label htmlFor={`guest-${i}-name`} className={smallLabelClasses}>
                        {t.rsvp.fullName} *
                      </label>
                      <input
                        id={`guest-${i}-name`}
                        type="text"
                        required
                        maxLength={100}
                        autoComplete={i === 0 ? "name" : "off"}
                        className={inputClasses}
                        value={guest.name}
                        onChange={(e) => updateGuest(i, "name", e.target.value)}
                        placeholder={i === 0 ? t.rsvp.yourName : t.rsvp.guestName(i + 1)}
                      />
                    </div>
                    {!declining && (
                      <div>
                        <label htmlFor={`guest-${i}-dietary`} className={smallLabelClasses}>
                          {t.rsvp.dietary}
                        </label>
                        <input
                          id={`guest-${i}-dietary`}
                          type="text"
                          maxLength={300}
                          className={inputClasses}
                          value={guest.dietary}
                          onChange={(e) => updateGuest(i, "dietary", e.target.value)}
                          placeholder={t.rsvp.dietaryPlaceholder}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {guests.length < 10 && (
                <button
                  type="button"
                  onClick={addGuest}
                  className="mt-2 flex items-center gap-1.5 font-body text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Plus size={15} /> {t.rsvp.addGuest}
                </button>
              )}
            </div>

            {/* Contact details for the whole party */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="rsvp-email" className={labelClasses}>
                  {t.rsvp.email}
                </label>
                <input
                  id="rsvp-email"
                  type="email"
                  maxLength={255}
                  autoComplete="email"
                  className={inputClasses}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t.rsvp.emailPlaceholder}
                />
              </div>
              {!declining && (
                <div>
                  <label htmlFor="rsvp-phone" className={labelClasses}>
                    {t.rsvp.phone} *
                  </label>
                  <input
                    id="rsvp-phone"
                    type="tel"
                    required
                    maxLength={30}
                    autoComplete="tel"
                    className={inputClasses}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              )}
            </div>

            {!declining && (
              <div>
                <span className={labelClasses}>{t.rsvp.pickup}</span>
                <div className="flex gap-4">
                  {[
                    { label: t.rsvp.pickupYes, value: true },
                    { label: t.rsvp.pickupNo, value: false },
                  ].map((opt) => (
                    <button
                      key={String(opt.value)}
                      type="button"
                      aria-pressed={form.station_pickup === opt.value}
                      onClick={() => setForm({ ...form, station_pickup: opt.value })}
                      className={choiceButton(form.station_pickup === opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!declining && (
              <div>
                <span className={labelClasses}>{t.rsvp.carpool}</span>
                <div className="flex gap-4">
                  {[
                    { label: t.rsvp.carpoolYes, value: true },
                    { label: t.rsvp.carpoolNo, value: false },
                  ].map((opt) => (
                    <button
                      key={String(opt.value)}
                      type="button"
                      aria-pressed={form.carpool === opt.value}
                      onClick={() => setForm({ ...form, carpool: opt.value })}
                      className={choiceButton(form.carpool === opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {form.carpool && (
                  <div className="grid grid-cols-[6rem_1fr] gap-3 mt-3">
                    <div>
                      <label htmlFor="rsvp-seats" className={smallLabelClasses}>
                        {t.rsvp.carpoolSeats}
                      </label>
                      <input
                        id="rsvp-seats"
                        type="number"
                        min={1}
                        max={8}
                        inputMode="numeric"
                        className={inputClasses}
                        value={form.carpoolSeats}
                        onChange={(e) => setForm({ ...form, carpoolSeats: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="rsvp-from" className={smallLabelClasses}>
                        {t.rsvp.carpoolFrom}
                      </label>
                      <input
                        id="rsvp-from"
                        type="text"
                        maxLength={100}
                        className={inputClasses}
                        value={form.carpoolFrom}
                        onChange={(e) => setForm({ ...form, carpoolFrom: e.target.value })}
                        placeholder={t.rsvp.carpoolFromPlaceholder}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            <div>
              <label htmlFor="rsvp-message" className={labelClasses}>
                {t.rsvp.message}
              </label>
              <textarea
                id="rsvp-message"
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
