import Header from "../components/Header";
import { useState } from "react";
import MainDisplay from "../components/MainDisplay";

const Main = (p) => {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 w-screen py-24">
      <Header className="z-10" userState={{ user, setUser }} />
      <div className="">
        {user ? (
          <MainDisplay className="m-24 bg-white rounded-lg shadow-lg p-8" />
        ) : (
          <div className="flex flex-col items-center justify-center h-full mt-48">
            <h1 className="text-4xl font-bold text-white">
              Please login to continue...
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
