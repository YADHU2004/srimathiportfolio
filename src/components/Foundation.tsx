import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";
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
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
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

          {/* Profile image with spotlight glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative group flex-shrink-0"
          >
            {/* Outer radial glow */}
            <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,hsl(199,80%,55%,0.15)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle,hsl(199,80%,55%,0.25)_0%,transparent_70%)] transition-all duration-700" />
            {/* Inner glow ring */}
            <div className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,hsl(199,60%,60%,0.1)_0%,transparent_60%)] group-hover:bg-[radial-gradient(circle,hsl(199,60%,60%,0.18)_0%,transparent_60%)] transition-all duration-700" />
            {/* Floating animation wrapper */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_30px_hsl(199,80%,55%,0.12)] group-hover:shadow-[0_0_45px_hsl(199,80%,55%,0.22)]">
                <img
                  src={profileImg}
                  alt="Srimathi Rajkumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <BuildingOutline />
    </section>
  );
};

export default Foundation;
