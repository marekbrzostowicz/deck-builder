import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-950">
      <div className="w-1/2 mx-auto h-7/12 flex flex-col gap-6 items-center justify-center bg-gradient-to-tr  from-orange-950 via-yellow-950 to-amber-950 border border-amber-800 rounded-2xl">
        <h1 className="text-slate-300 font-bold text-2xl">Login</h1>
        <input
          type="text"
          placeholder="Enter email ..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="text-slate-950 bg-indigo-300 p-2 rounded-xl border border-indigo-700 w-lg outline-none focus:border-indigo-300 focus:bg-indigo-500 focus:text-slate-950 transition-all font-semibold"
        />
        <input
          type="password"
          placeholder="Enter password ..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="text-slate-950 bg-indigo-300 p-2 rounded-xl border border-indigo-700 w-lg outline-none focus:border-indigo-300 focus:bg-indigo-500 focus:text-slate-950 transition-all font-semibold"
        />
        <button className="bg-indigo-500 border border-indigo-800 py-1 px-4 rounded-xl text-slate-900 hover:bg-indigo-300 transition hover:cursor-pointer">
          Login
        </button>
        <div className="flex gap-2 text-sm self-start pl-32">
          <p className="text-slate-400">Dont have account?</p>
          <button
            className="text-blue-500 hover:cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
