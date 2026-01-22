import { useState } from "react";
import { createProfile } from "../api/profileApi";

export default function CreateProfile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    education: "",
    skills: "",
    projects: "",
    links: { github: "", linkedin: "", portfolio: "" },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profile.name || !profile.email || !profile.education) {
      alert("Name, Email, and Education are required!");
      return;
    }
    await createProfile(profile);
    alert("Profile created successfully!");
    window.location.href = "/"; 
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4">Create Profile</h3>
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
              setProfile({ ...profile, links: { ...profile.links, github: e.target.value } })
            }
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="LinkedIn Link"
            value={profile.links.linkedin}
            onChange={(e) =>
              setProfile({ ...profile, links: { ...profile.links, linkedin: e.target.value } })
            }
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Portfolio Link"
            value={profile.links.portfolio}
            onChange={(e) =>
              setProfile({ ...profile, links: { ...profile.links, portfolio: e.target.value } })
            }
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
}