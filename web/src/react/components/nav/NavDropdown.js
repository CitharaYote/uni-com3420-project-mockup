import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

const NavDropdown = (p) => {
  return (
    <motion.div
      className={`${p.className} bg-white w-full fixed top-16 left-0 overflow-hidden`}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.4, type: "tween" }}
    >
      <ProfileCard />

      <div className="mt-4 mb-16">
        <div className="flex flex-row items-center justify-center w-full py-4 space-x-2 text-2xl text-gray-700 transition cursor-pointer hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-unlock"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z" />
          </svg>
          <p>Admin Panel</p>
        </div>
        <div className="flex flex-row items-center justify-center w-full py-4 space-x-2 text-2xl transition cursor-pointer hover:bg-gray-200">
          <p>Dashboard</p>
        </div>
        <div className="flex flex-row items-center justify-center w-full py-4 space-x-2 text-2xl transition cursor-pointer hover:bg-gray-200">
          <p>Link 2</p>
        </div>
        <div className="flex flex-row items-center justify-center w-full py-4 space-x-2 text-2xl transition cursor-pointer hover:bg-gray-200">
          <p>Link 2</p>
        </div>
        <div className="flex flex-row items-center justify-center w-full py-4 space-x-2 text-2xl transition cursor-pointer hover:bg-gray-200">
          <p>Link 2</p>
        </div>
      </div>
    </motion.div>
  );
};

export default NavDropdown;
