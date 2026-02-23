import Navbar from "@/components/Navbar";
import Foundation from "@/components/Foundation";
import AboutFloor from "@/components/AboutFloor";
import SkillsFloor from "@/components/SkillsFloor";
import ProjectsFloor from "@/components/ProjectsFloor";
import InternshipFloor from "@/components/InternshipFloor";
import CertificationsFloor from "@/components/CertificationsFloor";
import ContactTerrace from "@/components/ContactTerrace";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Foundation />
      <AboutFloor />
      <SkillsFloor />
      <ProjectsFloor />
      <InternshipFloor />
      <CertificationsFloor />
      <ContactTerrace />
      <footer className="text-center py-6 border-t border-border">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 SRIMATHI RAJKUMAR — Built with precision
        </p>
      </footer>
    </div>
  );
};

export default Index;
