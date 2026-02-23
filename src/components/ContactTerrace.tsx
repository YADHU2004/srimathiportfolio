import { motion } from "framer-motion";
import FloorLabel from "./FloorLabel";

const ContactTerrace = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <FloorLabel floor="TERRACE" title="CONTACT" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h3 className="font-display text-2xl text-foreground mb-8 tracking-wide glow-text">
            LET'S BUILD TOGETHER
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { label: "EMAIL", value: "srimathi@email.com", href: "mailto:srimathi@email.com" },
              { label: "PHONE", value: "+91 XXXXX XXXXX", href: "tel:+91" },
              { label: "LINKEDIN", value: "linkedin.com/in/srimathi", href: "https://linkedin.com" },
              { label: "LANGUAGES", value: "Tamil (Native) • English (Fluent)", href: null },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="steel-card p-5 text-left"
              >
                <span className="font-mono text-xs text-muted-foreground">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="block text-primary hover:text-accent transition-colors mt-1 text-sm font-mono"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground mt-1 text-sm">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* City skyline silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full" fill="hsl(199, 80%, 55%)">
          <path d="M0,120 L0,80 L40,80 L40,60 L60,60 L60,40 L80,40 L80,60 L100,60 L100,50 L120,50 L120,70 L140,70 L140,30 L160,30 L160,20 L180,20 L180,30 L200,30 L200,60 L220,60 L220,45 L250,45 L250,35 L270,35 L270,55 L290,55 L290,40 L310,40 L310,25 L330,25 L330,45 L350,45 L350,65 L380,65 L380,50 L400,50 L400,35 L420,35 L420,15 L440,15 L440,35 L460,35 L460,55 L480,55 L480,70 L520,70 L520,45 L540,45 L540,30 L560,30 L560,50 L580,50 L580,65 L620,65 L620,40 L640,40 L640,20 L660,20 L660,40 L680,40 L680,55 L720,55 L720,35 L740,35 L740,50 L760,50 L760,70 L800,70 L800,45 L820,45 L820,25 L840,25 L840,10 L860,10 L860,30 L880,30 L880,50 L900,50 L900,65 L940,65 L940,40 L960,40 L960,55 L980,55 L980,70 L1020,70 L1020,50 L1040,50 L1040,30 L1060,30 L1060,50 L1080,50 L1080,60 L1120,60 L1120,45 L1140,45 L1140,35 L1160,35 L1160,20 L1180,20 L1180,40 L1200,40 L1200,55 L1240,55 L1240,70 L1280,70 L1280,50 L1300,50 L1300,35 L1320,35 L1320,55 L1340,55 L1340,65 L1380,65 L1380,45 L1400,45 L1400,60 L1440,60 L1440,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default ContactTerrace;
