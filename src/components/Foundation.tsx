import { motion } from "framer-motion";

const BuildingOutline = () => (
  <motion.svg
    viewBox="0 0 400 500"
    className="absolute right-0 bottom-0 w-64 md:w-80 lg:w-96 opacity-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.2 }}
    transition={{ duration: 1 }}
  >
    {/* Main building */}
    <motion.rect
      x="100" y="80" width="200" height="420"
      fill="none"
      stroke="hsl(199, 80%, 55%)"
      strokeWidth="1.5"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      style={{ transformOrigin: "bottom" }}
      transition={{ duration: 2, ease: "easeOut" }}
    />
    {/* Floors */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <motion.line
        key={i}
        x1="100" y1={80 + i * 70} x2="300" y2={80 + i * 70}
        stroke="hsl(199, 80%, 55%)"
        strokeWidth="0.8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.5 + i * 0.15 }}
        style={{ transformOrigin: "left" }}
      />
    ))}
    {/* Windows */}
    {[0, 1, 2, 3, 4].map((row) =>
      [0, 1, 2].map((col) => (
        <motion.rect
          key={`${row}-${col}`}
          x={120 + col * 65}
          y={100 + row * 70}
          width="30"
          height="40"
          fill="none"
          stroke="hsl(199, 80%, 55%)"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.3, delay: 2.5 + (row * 3 + col) * 0.08 }}
        />
      ))
    )}
    {/* Antenna */}
    <motion.line
      x1="200" y1="80" x2="200" y2="30"
      stroke="hsl(199, 80%, 55%)"
      strokeWidth="1"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      style={{ transformOrigin: "bottom" }}
      transition={{ duration: 0.5, delay: 2.2 }}
    />
  </motion.svg>
);

const Foundation = () => {
  return (
    <section id="foundation" className="relative min-h-screen flex items-center blueprint-grid overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          <p className="floor-label mb-4">FOUNDATION</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 glow-text text-foreground">
            SRIMATHI<br />RAJKUMAR
          </h1>
          <p className="text-lg md:text-xl text-primary font-mono mb-3">
            Civil Engineering Student &nbsp;|&nbsp; Structural Design Enthusiast
          </p>
          <p className="text-muted-foreground text-base md:text-lg italic mb-10 max-w-lg">
            "Designing Structures That Stand the Test of Time."
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider hover:shadow-[0_0_25px_hsl(199,80%,55%,0.3)] transition-all duration-300"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-display text-sm tracking-wider hover:bg-primary/10 transition-all duration-300"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </motion.div>
      </div>
      <BuildingOutline />
    </section>
  );
};

export default Foundation;
