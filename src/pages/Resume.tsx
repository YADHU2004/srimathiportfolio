import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col items-center py-12 px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8"
      >
        Resume
      </motion.h1>

      {/* PDF Viewer */}
      <div className="w-full max-w-4xl h-[80vh] border border-primary/20 shadow-lg">
        <iframe
          src="/Srimathi Resume.pdf"
          title="Resume"
          className="w-full h-full"
        />
      </div>

      {/* Download Button */}
      <a
        href="/resume.pdf"
        download
        className="mt-8 px-6 py-3 bg-primary text-primary-foreground hover:shadow-[0_0_25px_hsl(199,80%,55%,0.4)] transition-all duration-300"
      >
        Download Resume
      </a>

    </section>
  );
};

export default Resume;