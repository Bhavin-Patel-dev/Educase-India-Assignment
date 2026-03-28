import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { emailRegex, passwordRegex } from "../utils/regex";
import { useUser } from "../context/UserContext";

function Signin() {
  const navigate = useNavigate();
  const { user } = useUser();

  const [form, setform] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignin = () => {
    if (!form.email || !form.password) {
      toast.error("All fields are reruired");
      return;
    }

    if (!emailRegex.test(form.email)) {
      toast.error("Enter a valid email address");
      return;
    }

    if (!passwordRegex.test(form.password)) {
      toast.error(
        "Password must be 8+ chars with uppercase, lowercase, number & special character",
      );
      return;
    }

    if (!user) {
      toast.error("No account found. Please register first.");
      return;
    }

    if (user.email !== form.email) {
      toast.error("Email does not match our records");
      return;
    }

    if (user.password !== form.password) {
      toast.error("Incorrect password");
      return;
    }

    toast.success("Logged in successfully");
    navigate("/account");
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2 mt-4">
        <h1 className="text-2xl font-bold w-[60%]">
          Signin to your PopX account
        </h1>
        <p className="text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      {/* Email Field */}
      <div className="relative  rounded-md px-3 pt-4 pb-2 border border-slate-300">
        <label className="absolute -top-2.5 left-3 bg-[#F7F8F9] px-1 text-xs text-purple-600">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          placeholder="Enter email address"
          className="w-full bg-transparent outline-none text-sm"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      {/* Password Field */}
      <div className="relative rounded-md px-3 pt-4 pb-2 border border-slate-300">
        <label className="absolute -top-2.5 left-3 bg-[#F7F8F9] px-1 text-xs text-purple-600">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="w-full bg-transparent outline-none text-sm"
          onChange={handleChange}
        />
      </div>

      <button
        onClick={handleSignin}
        className="w-full bg-[#CBCBCB] text-white py-3 rounded-md font-semibold cursor-pointer"
      >
        Login
      </button>
    </div>
  );
}

export default Signin;
