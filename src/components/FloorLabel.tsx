import { motion } from "framer-motion";

const FloorLabel = ({ floor, title }: { floor: string; title: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className="blueprint-stamp px-3 py-1">
      <span className="font-display text-xs tracking-[0.3em] text-primary">{floor}</span>
    </div>
    <div className="floor-divider flex-1" />
    <span className="floor-label">{title}</span>
    <div className="floor-divider flex-1" />
  </div>
);

export default FloorLabel;
