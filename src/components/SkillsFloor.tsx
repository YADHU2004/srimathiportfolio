import { motion } from "framer-motion";
import FloorLabel from "./FloorLabel";

const skillCategories = [
  {
    title: "SOFTWARE TOOLS",
    icon: "⚙",
    skills: ["AutoCAD", "STAAD Pro", "Revit Architecture", "Civil 3D"],
  },
  {
    title: "TECHNICAL SKILLS",
    icon: "📐",
    skills: ["Structural Analysis", "IS Code Book", "Project Planning", "Cost Estimation", "Quantity Surveying"],
  },
  {
    title: "SOFT SKILLS",
    icon: "🤝",
    skills: ["Teamwork", "Communication", "Problem-Solving", "Time Management"],
  },
];

const SkillsFloor = () => {
  return (
    <section id="skills" className="py-24 relative blueprint-grid">
      <div className="container mx-auto px-6">
        <FloorLabel floor="02" title="SKILLS" />
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="steel-card p-6"
            >
              <div className="text-2xl mb-3">{cat.icon}</div>
              <h3 className="font-display text-sm tracking-wider text-primary mb-5">{cat.title}</h3>
              <div className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: catIdx * 0.15 + i * 0.1 }}
                    style={{ transformOrigin: "left" }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-px flex-1 bg-primary/40" />
                    <span className="text-secondary-foreground text-sm font-mono whitespace-nowrap">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsFloor;
