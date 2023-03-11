import Header from "../components/Header";
import { useState } from "react";
import MainDisplay from "../components/MainDisplay";

const Main = (p) => {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 w-full pb-24 pt-16 sm:pt-24 overflow-hidden">
      <Header className="" userState={{ user, setUser }} />
      <div className="">
        {user ? (
          <MainDisplay className="p-8 bg-white sm:rounded-lg sm:shadow-lg sm:m-24" />
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
