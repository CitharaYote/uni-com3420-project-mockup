import { motion } from "framer-motion";
import { useState } from "react";
import LoginForm from "./LoginForm";
// import iconX from "../../../../assets/img/icons/x-lg.svg";

const LoginModal = (p) => {
  const bgVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const modalVariants = {
    open: { y: 0 },
    closed: { y: "-100%" },
  };

  const transition = {
    type: "spring",
    damping: 20,
    stiffness: 300,
    duration: 0.25,
  };

  return (
    <motion.div
      className={`w-screen h-screen absolute top-0 left-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-50 z-40`}
      variants={bgVariants}
      initial="closed"
      animate={p.loginOpen ? "open" : "closed"}
      exit="closed"
      transition={{
        duration: 0.2,
      }}
    >
      <motion.div
        className="relative bg-white rounded-lg flex flex-col items-center justify-center z-50 p-4"
        variants={modalVariants}
        initial="closed"
        animate={p.loginOpen ? "open" : "closed"}
        exit="closed"
        transition={transition}
      >
        <button
          className="absolute right-0 top-0 px-2 text-black h-8 w-8"
          onClick={() => {
            p.setLoginOpen(false);
          }}
        >
          <p>X</p>
        </button>
        <h1 className="text-2xl text-gray-700 font-bold">Login</h1>
        <hr className="my-4 w-full" />
        <p>imagine you login through the uni system here</p>
        <p>just use username & password `admin` for now</p>
        <LoginForm
          loginOpen={p.loginOpen}
          setLoginOpen={p.setLoginOpen}
          setUser={p.setUser}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;
