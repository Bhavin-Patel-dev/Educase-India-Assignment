import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col custom-height justify-end p-6 gap-2">
      <h1 className="font-bold text-2xl">Welcome to PopX</h1>
      <p className="text-slate-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <button
        className="bg-[#6C25FF] text-white p-2 rounded-md font-semibold text-sm mt-2 cursor-pointer"
        onClick={() => navigate("/create")}
      >
        Create Account
      </button>
      <button
        className="bg-[#6C25FF4B] p-2 rounded-md font-semibold text-sm cursor-pointer"
        onClick={() => navigate("/signin")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;
