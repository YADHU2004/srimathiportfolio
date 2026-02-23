import { motion } from "framer-motion";
import FloorLabel from "./FloorLabel";

const certifications = [
  {
    title: "Pavement Construction Technology",
    issuer: "NPTEL",
    score: "70%",
  },
  {
    title: "Air Pollution and Control",
    issuer: "NPTEL",
    score: "76%",
  },
];

const achievements = [
  {
    title: '1st Position — "SURVEY 360"',
    event: "PORIYAALAN 5.0",
  },
];

const CertificationsFloor = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <FloorLabel floor="05" title="CERTIFICATIONS & ACHIEVEMENTS" />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="blueprint-stamp"
            >
              <div className="absolute top-2 right-3 font-display text-[10px] text-primary/50 tracking-wider">
                APPROVED
              </div>
              <span className="font-mono text-xs text-muted-foreground">{cert.issuer}</span>
              <h4 className="font-display text-sm text-foreground tracking-wide mt-1 mb-3">
                {cert.title}
              </h4>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-display text-primary glow-text">{cert.score}</span>
                <span className="text-xs text-muted-foreground font-mono">SCORE</span>
              </div>
            </motion.div>
          ))}
          {achievements.map((ach, i) => (
            <motion.div
              key={`ach-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="blueprint-stamp md:col-span-2 text-center"
            >
              <div className="absolute top-2 right-3 font-display text-[10px] text-accent/60 tracking-wider">
                ★ AWARDED
              </div>
              <span className="font-mono text-xs text-muted-foreground">{ach.event}</span>
              <h4 className="font-display text-lg text-accent mt-1">
                {ach.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsFloor;
