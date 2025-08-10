import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleUserRegister = () => {
    const sendData = async () => {
      try {
        const response = await fetch(
          "https://localhost:7286/api/auth/register",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              email: email,
              password: password,
            }),
          }
        );
        // const content = await response.json();
        if (response.ok) {
          console.log("OK");
        }
      } catch (error) {
        console.error(error);
      }
    };
    sendData();
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-950">
      <div className="w-1/2 mx-auto h-7/12 flex flex-col gap-6 items-center justify-center bg-gradient-to-tr  from-orange-950 via-yellow-950 to-amber-950 border border-amber-800 rounded-2xl">
        <h1 className="text-slate-300 font-bold text-2xl">Register</h1>
        <input
          type="text"
          placeholder="Enter username ..."
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="text-slate-950 bg-indigo-300 p-2 rounded-xl border border-indigo-700  outline-none focus:border-indigo-300 focus:bg-indigo-500 focus:text-slate-950 transition-all font-semibold w-3/4"
        />
        <input
          type="email"
          placeholder="Enter email ..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="text-slate-950 bg-indigo-300 p-2 rounded-xl border border-indigo-700  outline-none focus:border-indigo-300 focus:bg-indigo-500 focus:text-slate-950 transition-all font-semibold w-3/4"
        />
        <input
          type="password"
          placeholder="Enter password ..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="text-slate-950 bg-indigo-300 p-2 rounded-xl border border-indigo-700 outline-none focus:border-indigo-300 focus:bg-indigo-500 focus:text-slate-950 transition-all font-semibold w-3/4"
        />
        <button
          className="bg-indigo-500 border border-indigo-800 py-1 px-4 rounded-xl text-slate-900 hover:bg-indigo-300 transition hover:cursor-pointer"
          onClick={() => handleUserRegister()}
        >
          Register
        </button>
        <div className="flex gap-2 text-sm self-start pl-32">
          <p className="text-slate-400">Already have account?</p>
          <button
            className="text-blue-500 hover:cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
