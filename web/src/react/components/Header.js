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
          className="h-20 ml-4 transition bg-white"
        />
      </div>
      <div className="flex flex-row items-center">
        <AnimatePresence>
          {p.userState.user && (
            <motion.div
              className="flex flex-row items-center justify-center p-2 mr-4 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-row items-center transition bg-gray-200 rounded-full drop-shadow hover:drop-shadow-lg">
                <div className="flex flex-row items-center justify-center w-16 h-16 rounded-full bg-zinc-500">
                  <p className="text-2xl font-bold text-white">T</p>
                </div>

                <div className="flex flex-col items-start mx-8 ">
                  <p className="text-xl font-bold text-gray-700 ">
                    Theo Cruddace
                  </p>
                  <p className="text-sm">Administrator</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="w-16 h-16 mr-4 text-gray-700 transition cursor-pointer bi bi-person-fill hover:scale-105 drop-shadow hover:drop-shadow-lg"
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
