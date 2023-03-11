import { motion } from "framer-motion";

const NavBlur = (p) => {
  // make a blur/darken effect on the background
  return (
    <motion.div
      className={`${p.className} bg-gray-900 bg-opacity-30 backdrop-blur-sm w-screen h-screen fixed top-0 left-0 -z-50 cursor-pointer mt-16 sm:mt-24 overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => {
        p.setNavOpen(false);
      }}
    ></motion.div>
  );
};

export default NavBlur;
