// import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const LoginForm = (p) => {
  const [input, setInput] = useState({ username: "", password: "" });
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginErrorText, setLoginErrorText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const validateInput = () => {
    if (input.username === "" || input.password === "") {
      setLoginError(true);
      setLoginErrorText("Please fill in all fields");
      return false;
    } else {
      setLoginError(false);
      setLoginErrorText("");
      return true;
    }
  };

  const handleSubmit = async () => {
    setLoginLoading(true);

    if (!validateInput()) {
      setLoginLoading(false);
      return;
    }

    // if username and password is admin, login
    if (input.username === "admin" && input.password === "admin") {
      p.setUser({ username: "admin" });
      setLoginLoading(false);
      p.setLoginOpen(false);
      return;
    }
  };

  return (
    <div className={`${p.className} flex flex-col items-center`}>
      <form className="flex flex-col items-center justify-center text-gray-700">
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="w-full p-2 m-2 bg-white border-2 border-gray-300 rounded-lg"
          value={input.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-full p-2 m-2 bg-white border-2 border-gray-300 rounded-lg"
          value={input.password}
          onChange={handleChange}
        />
        {loginError && <p className="text-sm text-red-500">{loginErrorText}</p>}
        <button
          className="flex flex-row items-center p-2 m-2 text-white transition rounded-lg shadow bg-sky-700 disabled:opacity-50 hover:bg-opacity-70"
          disabled={loginLoading}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <p className="mx-2">Login</p>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
