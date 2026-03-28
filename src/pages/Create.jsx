import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  emailRegex,
  fullNameRegex,
  passwordRegex,
  phoneRegex,
} from "../utils/regex";
import { useUser } from "../context/UserContext";

function Register() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (!form.fullName || !form.phone || !form.email || !form.password) {
      toast.error("Please fill all required fields");
      return;
    }
    if (!fullNameRegex.test(form.fullName)) {
      toast.error("Enter a valid fullname");
      return;
    }

    if (!phoneRegex.test(form.phone)) {
      toast.error("Enter a valid 10-digit phone number");
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

    // Save user's data
    setUser({
      fullName: form.fullName,
      email: form.email,
    });

    toast.success("Account created!");
    navigate("/account");
  };

  const fields = [
    {
      label: "Full Name*",
      name: "fullName",
      type: "text",
      placeholder: "Marry Doe",
    },
    {
      label: "Phone number*",
      name: "phone",
      type: "text",
      placeholder: "Marry Doe",
    },
    {
      label: "Email address*",
      name: "email",
      type: "text",
      placeholder: "Marry Doe",
    },
    {
      label: "Password *",
      name: "password",
      type: "password",
      placeholder: "Marry Doe",
    },
    {
      label: "Company name",
      name: "company",
      type: "text",
      placeholder: "Marry Doe",
    },
  ];

  return (
    <div className="p-6 flex flex-col gap-5">
      <h1 className="text-2xl font-bold mt-4 w-[60%]">
        Create your PopX account
      </h1>

      {fields.map((field) => (
        <div
          key={field.name}
          className="relative border rounded-md px-3 pt-4 pb-2"
        >
          <label className="absolute -top-2.5 left-3 bg-gray-50 px-1 text-xs text-purple-600">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>
      ))}

      {/* Radio */}
      <div className="flex flex-col gap-2">
        <p className="text-sm">Are you an Agency?*</p>
        <div className="flex gap-6">
          {["yes", "no"].map((val) => (
            <label
              key={val}
              className="flex items-center gap-2 text-sm capitalize cursor-pointer"
            >
              <input
                type="radio"
                name="isAgency"
                value={val}
                checked={form.isAgency === val}
                onChange={handleChange}
                className="accent-[#642AF5]"
              />
              {val.charAt(0).toUpperCase() + val.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleRegister}
        className="w-full bg-[#6C25FF] text-white py-3 rounded-md font-semibold mt-4"
      >
        Create Account
      </button>
    </div>
  );
}

export default Register;
