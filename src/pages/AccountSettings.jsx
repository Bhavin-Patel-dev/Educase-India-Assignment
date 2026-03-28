import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function AccountSettings() {
  const { user } = useUser();
  const navigate = useNavigate();

  // if no user, redirect to register
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-gray-500">No account found.</p>
        <button
          onClick={() => navigate("/create")}
          className="bg-purple-600 text-white px-6 py-2 rounded-md"
        >
          Create Account
        </button>
      </div>
    );
  }

  return (
    <>
      <div>
        {/* Header */}
        <div className="p-5 h-15 bg-white flex items-center shadow-xs">
          <h1 className="text-lg font-semibold">Account Settings</h1>
        </div>
      </div>

      <div className="flex flex-col">
        {/* User Info */}
        <div className="p-4 flex gap-4">
          <div className="relative w-16 h-16">
            <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 text-2xl font-bold">
              {user.fullName.charAt(0).toUpperCase()}
            </div>
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="font-semibold">{user.fullName}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Extra Details */}
        <div className="p-4 text-xs border-b border-dashed border-slate-300">
          <p className="text-slate-800">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </>
  );
}

export default AccountSettings;
