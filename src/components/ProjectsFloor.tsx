import { motion } from "framer-motion";
import FloorLabel from "./FloorLabel";

const ProjectsFloor = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <FloorLabel floor="03" title="PROJECTS" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Building-shaped project card */}
          <div className="steel-card relative overflow-hidden">
            {/* Roof */}
            <div className="h-2 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
            
            <div className="p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-muted-foreground">PROJECT_001</span>
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs text-primary font-mono">FEATURED</span>
              </div>
              
              <h3 className="font-display text-lg md:text-xl text-foreground tracking-wide mb-4">
                Planning, Analysis &amp; Designing of a G+1 Residential Building
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {["AutoCAD", "STAAD Pro", "Revit"].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-mono border border-primary/30 text-primary"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "End-to-end structural design",
                  "Structural analysis using STAAD Pro",
                  "3D modeling and walkthrough",
                  "Architectural documentation",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-secondary-foreground text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Foundation bars */}
            <div className="flex gap-1 px-4 pb-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 h-1 bg-primary/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsFloor;
