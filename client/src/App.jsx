import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getProfile } from "./api/profileApi";
import ProfileView from "./components/ProfileView";
import SkillSearch from "./components/SkillSearch";
import CreateProfile from "./components/CreateProfile";
import UpdateProfile from "./components/UpdateProfile";

export default function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then((res) => setProfile(res.data));
  }, []);

  return (
    <Router>
      <div className="min-h-screen p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Me-API Playground
        </h1>

        <ProfileView profile={profile} />
        <SkillSearch />

        <Routes>
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/search" element={<SkillSearch />} />
        </Routes>
      </div>
    </Router>
  );
}
