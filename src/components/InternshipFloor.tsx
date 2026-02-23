import { motion } from "framer-motion";
import FloorLabel from "./FloorLabel";

const timelineItems = [
  "Prepared construction drawings using AutoCAD",
  "Conducted soil and material testing on-site",
  "Assisted in design modifications and revisions",
  "Gained hands-on field experience in construction management",
];

const InternshipFloor = () => {
  return (
    <section id="internship" className="py-24 relative blueprint-grid">
      <div className="container mx-auto px-6">
        <FloorLabel floor="04" title="INTERNSHIP" />
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="font-display text-lg text-foreground tracking-wide mb-1">
              SIVAPARAMESHWARI
            </h3>
            <p className="text-primary font-mono text-sm mb-1">
              Engineering Construction & Company
            </p>
            <p className="text-muted-foreground text-xs font-mono">
              MAY 2025 — JUNE 2025
            </p>
          </motion.div>

          {/* Vertical structural timeline */}
          <div className="relative pl-8">
            {/* Vertical beam */}
            <motion.div
              className="absolute left-3 top-0 bottom-0 w-px bg-primary/40"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ transformOrigin: "top" }}
            />

            <div className="space-y-6">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                  className="relative"
                >
                  {/* Bolt/node */}
                  <div className="absolute -left-5 top-1 w-3 h-3 border border-primary bg-background rotate-45" />
                  <div className="steel-card p-4">
                    <p className="text-secondary-foreground text-sm">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipFloor;
