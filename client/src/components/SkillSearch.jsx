import { useState } from "react";
import { searchBySkill } from "../api/profileApi";
import ProjectsList from "./ProjectsList";

export default function SkillSearch() {
  const [skill, setSkill] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false); 

  const search = async () => {
    if (!skill) return;
    setLoading(true); 
    const res = await searchBySkill(skill);
    setProjects(res.data);
    setTimeout(() => setLoading(false), 700); 
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4">
        Search Projects by Skill
      </h3>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring"
          placeholder="e.g. React, Node"
          value={skill}
          onChange={e => setSkill(e.target.value)}
        />
        <button
          onClick={search}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500 text-sm">Fetching results...</p>
      ) : (
        <ProjectsList projects={projects} />
      )}
    </div>
  );
}
