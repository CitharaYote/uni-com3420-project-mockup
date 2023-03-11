const ProfileCard = (p) => {
  return (
    <div className={`${p.className} m-2 bg-gray-200 rounded-lg flex flex-col`}>
      <div
        className="flex flex-row items-center justify-center p-2 mr-0 rounded-t-lg sm:mr-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        key="user"
      >
        <div className="flex flex-row w-full">
          <div className="flex flex-row items-center justify-center w-16 h-16 rounded-full cursor-pointer sm:w-16 sm:h-16 bg-zinc-500">
            <p className="text-2xl font-bold text-white">T</p>
          </div>

          <div className="flex flex-col items-start mx-4">
            <p className="text-xl font-bold text-gray-700 ">Theo Cruddace</p>
            <p className="text-sm">Administrator</p>
          </div>
        </div>
      </div>
      <div>
        <button className="w-full p-2 text-sm font-bold text-white transition rounded-b-lg bg-uospurple hover:bg-opacity-70">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
