import uosLogo from "../../assets/img/uoslogo.png";
import { motion, AnimatePresence } from "framer-motion";
import LoginModal from "./login/LoginModal";
import { useState } from "react";
import Navbar from "./nav/Navbar";

const Header = (p) => {
  const [loginOpen, setLoginOpen] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div
      className={`${p.className} w-full h-16 sm:h-24 bg-white shadow-lg top-0 left-0 flex flex-row items-center justify-between fixed sm:absolute z-30`}
    >
      <div>
        <img
          src={uosLogo}
          alt="University of Sheffield"
          className="h-12 ml-2 transition bg-white sm:ml-4 sm:h-20"
        />
      </div>
      <div className="flex flex-row items-center">
        <AnimatePresence mode="wait">
          {p.userState.user && !navOpen && (
            <motion.div
              className="flex flex-row items-center justify-center p-2 mr-0 rounded-lg sm:mr-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                p.userState.user
                  ? p.userState.setUser(null)
                  : setLoginOpen(true);
              }}
              key="user"
            >
              <div className="flex flex-row items-center transition bg-gray-200 rounded-full drop-shadow hover:drop-shadow-md sm:hover:drop-shadow-lg">
                <div
                  className="flex flex-row items-center justify-center w-12 h-12 rounded-full cursor-pointer sm:w-16 sm:h-16 bg-zinc-500"
                  onClick={() => {
                    p.userState.user
                      ? p.userState.setUser(null)
                      : setLoginOpen(true);
                  }}
                >
                  <p className="text-2xl font-bold text-white">T</p>
                </div>

                <div className="flex-col items-start hidden mx-8 sm:flex">
                  <p className="text-xl font-bold text-gray-700 ">
                    Theo Cruddace
                  </p>
                  <p className="text-sm">Administrator</p>
                </div>
              </div>
            </motion.div>
          )}
          {!p.userState.user && (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-12 h-12 mr-2 text-gray-700 transition cursor-pointer sm:mr-4 sm:w-16 sm:h-16 bi bi-person-fill hover:scale-105 drop-shadow hover:drop-shadow-lg "
              viewBox="0 0 16 16"
              onClick={() => {
                p.userState.user
                  ? p.userState.setUser(null)
                  : setLoginOpen(true);
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              key="login"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </motion.svg>
          )}
        </AnimatePresence>
        <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
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
