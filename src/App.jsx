import { Routes, Route } from "react-router-dom";
import AccountSettings from "./pages/AccountSettings";
import Welcome from "./pages/Welcome";
import Signin from "./pages/Signin";
import Create from "./pages/Create";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xs custom-height bg-[#F7F8F9] border border-slate-300">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/create" element={<Create />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
