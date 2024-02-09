import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ReactNode, useState } from "react";

interface NavbarRootProps {
  children: ReactNode;
}

function NavbarRoot({ children }: NavbarRootProps) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      animate={hidden ? "hidden" : "visible"}
      className="flex fixed z-50 w-full h-16 justify-between items-center px-5 lg:px-10 bg-white dark:bg-slate-950"
    >
      {children}
    </motion.nav>
  );
}

export default NavbarRoot;
