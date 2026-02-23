import { motion } from "framer-motion";
import FloorLabel from "./FloorLabel";

const AboutFloor = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <FloorLabel floor="01" title="ABOUT" />
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="steel-card p-8"
          >
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-4xl text-primary glow-text">8.85</span>
              <span className="text-muted-foreground font-mono text-sm">CGPA</span>
            </div>
            <h2 className="font-display text-xl text-foreground mb-4 tracking-wide">
              CIVIL ENGINEERING STUDENT
            </h2>
            <p className="text-secondary-foreground leading-relaxed mb-4">
              A dedicated 3rd year Civil Engineering student with a deep passion for
              Structural Design and Sustainable Infrastructure. Committed to applying
              engineering principles to create safe, efficient, and environmentally
              responsible structures.
            </p>
            <p className="text-muted-foreground text-sm font-mono">
              Currently seeking internship opportunities to gain hands-on experience
              in structural design and construction management.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { label: "FOCUS", value: "Structural Design & Analysis" },
              { label: "INTEREST", value: "Sustainable Infrastructure" },
              { label: "GOAL", value: "Industry-Ready Engineer" },
              { label: "STATUS", value: "Open to Internships" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border-l-2 border-primary/30 hover:border-primary transition-colors">
                <span className="font-mono text-xs text-muted-foreground w-20">{item.label}</span>
                <span className="text-foreground">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFloor;
