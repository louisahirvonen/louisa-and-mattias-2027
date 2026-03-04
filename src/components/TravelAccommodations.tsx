import { motion } from "framer-motion";
import { Train, Car, MapPin, Hotel } from "lucide-react";
import venuePhoto from "@/assets/venue-photo.jpeg";

const accommodations = [
  {
    icon: Hotel,
    title: "Thornfield Manor Guest Rooms",
    description: "A limited number of rooms are available on the estate grounds. Contact us for availability and booking.",
    detail: "From £250/night",
  },
  {
    icon: Hotel,
    title: "The Cotswold Arms Inn",
    description: "A charming country inn just 5 minutes from the venue. We have reserved a block of rooms at a special rate.",
    detail: "Use code ELEANOR&BENEDICT",
  },
  {
    icon: Hotel,
    title: "The Lavender House B&B",
    description: "A lovely bed and breakfast in the nearby village of Chipping Norton with beautiful garden views.",
    detail: "From £120/night",
  },
];

const travelInfo = [
  {
    icon: Train,
    title: "By Public Transport",
    description: "TPickup from the station is available upon request. Please reach out to ",
  },
  {
    icon: Car,
    title: "By Car",
    description: "Thornfield Manor is located just off the A44 between Chipping Norton and Moreton-in-Marsh. Ample parking is available on site.",
  },
  {
    icon: MapPin,
    title: "Address",
    description: "Thornfield Manor, Chipping Norton Road, Cotswolds, Oxfordshire OX7 5YH, England",
  },
];

const TravelAccommodations = () => {
  return (
    <section id="travel" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Getting There
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            Travel & Accommodations
          </h2>
          <div className="section-divider mt-2">
            <span className="text-taupe text-xs">—</span>
          </div>
        </motion.div>

        {/* Venue Photo */}
        <motion.div
          className="mb-12 overflow-hidden rounded-sm border border-border/50 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={venuePhoto}
              alt="Fiholm Manor — the wedding venue"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-3 text-center bg-card">
            <p className="font-display text-sm text-muted-foreground tracking-wider">
              Fiholm Manor · Västerås, Sweden
            </p>
          </div>
        </motion.div>

        {/* Travel */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {travelInfo.map((info, i) => (
            <motion.div
              key={info.title}
              className="text-center p-6 border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <info.icon className="mx-auto text-taupe mb-3" size={24} />
              <h3 className="font-display text-lg text-foreground font-medium mb-2">{info.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{info.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Accommodations */}
        <h3 className="font-display text-2xl text-foreground font-medium text-center mb-8">
          Where to Stay
        </h3>
        <div className="space-y-4">
          {accommodations.map((acc, i) => (
            <motion.div
              key={acc.title}
              className="flex gap-4 p-6 border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <acc.icon className="text-taupe flex-shrink-0 mt-1" size={22} />
              <div>
                <h4 className="font-display text-lg text-foreground font-medium">{acc.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-1">{acc.description}</p>
                <p className="font-body text-sm text-primary">{acc.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelAccommodations;
