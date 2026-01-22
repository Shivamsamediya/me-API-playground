import { useState, useEffect } from "react";
import { getProfile, updateProfile } from "../api/profileApi";

export default function UpdateProfile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    education: "",
    skills: "",
    projects: "",
    links: { github: "", linkedin: "", portfolio: "" },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true); 
      try {
        const res = await getProfile();
        setProfile(res.data || {
          name: "",
          email: "",
          education: "",
          skills: "",
          projects: "",
          links: { github: "", linkedin: "", portfolio: "" },
        });
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchProfile();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        await updateProfile(profile);
        alert("Profile updated successfully!");
        window.location.href = "/"; 
    } catch (error) {
        console.error("Failed to update profile:", error);
    } finally {
        setLoading(false); 
    }
};

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4">Update Profile</h3>
      {loading ? ( // Show loading state
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="w-full border rounded px-3 py-2"
          />
          <textarea
            placeholder="Education"
            value={profile.education}
            onChange={(e) => setProfile({ ...profile, education: e.target.value })}
            className="w-full border rounded px-3 py-2"
          ></textarea>
          <textarea
            placeholder="Skills (comma-separated)"
            value={profile.skills}
            onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
            className="w-full border rounded px-3 py-2"
          ></textarea>
          <textarea
            placeholder="Projects (comma-separated)"
            value={profile.projects}
            onChange={(e) => setProfile({ ...profile, projects: e.target.value })}
            className="w-full border rounded px-3 py-2"
          ></textarea>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="GitHub Link"
              value={profile.links.github}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  links: { ...profile.links, github: e.target.value },
                })
              }
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="LinkedIn Link"
              value={profile.links.linkedin}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  links: { ...profile.links, linkedin: e.target.value },
                })
              }
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Portfolio Link"
              value={profile.links.portfolio}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  links: { ...profile.links, portfolio: e.target.value },
                })
              }
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update Profile
          </button>
        </form>
      )}
    </div>
  );
}