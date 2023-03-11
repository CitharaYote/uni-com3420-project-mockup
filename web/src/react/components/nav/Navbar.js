import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavDropdown from "./NavDropdown";
import NavBlur from "./NavBlur";

const Navbar = (p) => {
  //   const [navOpen, setNavOpen] = useState(false);
  const svgVariants = {
    open: {
      rotate: 0,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      rotate: 180,
      scale: 0.6,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "easeIn",
      },
    },
    initial: {
      rotate: -180,
      scale: 0.6,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={`${p.className} block sm:hidden`}>
      <AnimatePresence>
        {p.navOpen && <NavBlur navOpen={p.navOpen} setNavOpen={p.setNavOpen} />}
      </AnimatePresence>
      <div
        className="z-30 flex flex-row items-center justify-center w-12 h-12 p-2 mr-2 transition bg-gray-200 rounded-full cursor-pointer hover:shadow"
        onClick={() => p.setNavOpen(!p.navOpen)}
      >
        <AnimatePresence mode="wait">
          {!p.navOpen ? (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-8 h-8 bi bi-list"
              viewBox="0 0 16 16"
              variants={svgVariants}
              initial="initial"
              animate="open"
              exit="exit"
              key="open"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </motion.svg>
          ) : (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-8 h-8 bi bi-list"
              viewBox="0 0 16 16"
              variants={svgVariants}
              initial="initial"
              animate="open"
              exit="exit"
              key="closed"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>{p.navOpen && <NavDropdown />}</AnimatePresence>
    </div>
  );
};

export default Navbar;
