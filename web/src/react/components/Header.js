import uosLogo from "../../assets/img/uoslogo.png";
import { motion, AnimatePresence } from "framer-motion";
import LoginModal from "./login/LoginModal";
import { useState } from "react";

const Header = (p) => {
  const [loginOpen, setLoginOpen] = useState(true);
  return (
    <div
      className={`${p.className} w-full fixed h-24 bg-white shadow-lg top-0 left-0 flex flex-row items-center justify-between`}
    >
      <div>
        <img
          src={uosLogo}
          alt="University of Sheffield"
          className="h-20 transition bg-white ml-4"
        />
      </div>
      <div className="flex flex-row items-center">
        <AnimatePresence>
          {p.userState.user && (
            <motion.div
              className="flex flex-row items-center justify-center rounded-lg p-2 mr-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-700 text-xl font-bold mx-2 text-center">
                {p.userState.user.username}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-fill h-16 w-16 mr-4 cursor-pointer hover:scale-105 transition drop-shadow hover:drop-shadow-lg text-gray-700"
          viewBox="0 0 16 16"
          onClick={() => {
            p.userState.user ? p.userState.setUser(null) : setLoginOpen(true);
          }}
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      </div>
      <AnimatePresence>
        {loginOpen && (
          <LoginModal
            loginOpen={loginOpen}
            setLoginOpen={setLoginOpen}
            setUser={p.userState.setUser}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
