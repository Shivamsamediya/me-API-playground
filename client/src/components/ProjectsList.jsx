export default function ProjectsList({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <p className="text-gray-500 text-sm">
        No projects found for this skill.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="border rounded p-4 hover:shadow transition"
        >
          <h4 className="font-semibold text-lg">
            {project.title}
          </h4>
          <p className="text-gray-600 text-sm mb-2">
            {project.description}
          </p>

          <div className="flex gap-3 text-sm">
            {project.links?.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                {i === 0 ? "GitHub" : "Live URL"}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
