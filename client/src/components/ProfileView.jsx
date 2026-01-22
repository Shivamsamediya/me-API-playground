import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function ProfileView({ profile }) {
  if (!profile) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">No Profile Found</h2>
        <button
          onClick={() => window.location.href = '/create-profile'}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Create Profile
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-2xl font-semibold">{profile.name}</h2>
      <p className="text-gray-600">{profile.education}</p>

      <div className="mt-4">
        <h3 className="font-medium mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map(skill => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-4 text-sm">
        <a className="text-blue-600 hover:underline flex items-center gap-2" href={profile.links.github}>
          <FaGithub className="text-xl text-black" />
          <span>GitHub</span>
        </a>
        <a className="text-blue-600 hover:underline flex items-center gap-2" href={profile.links.linkedin}>
          <FaLinkedin className="text-xl" />
          <span>LinkedIn</span>
        </a>
        <a className="text-blue-600 hover:underline flex items-center gap-2" href={profile.links.portfolio}>
          <FaGlobe className="text-xl text-black" />
          <span>Portfolio</span>
        </a>
      </div>

      <div className="mt-4 flex gap-4">
        <button
          onClick={() => window.location.href = '/update-profile'}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
