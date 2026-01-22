require("dotenv").config();
const connectDB = require("../config/db");
const Profile = require("../models/Profile");

const seed = async () => {
  await connectDB();

  await Profile.deleteMany();

  await Profile.create({
    name: "Shivam Samediya",
    email: "shivamsamediya3@gmail.com",
    education: "B.Tech CSE @ IIIT SONEPAT",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node", "Express", "MongoDB", "mySQL", "RAG", "JWT", "Testing", "REST", "Git", "Docker"],
    projects: [
      {
        title: "SquadSplit",
        description: "Group Expense Platform",
        links: [
          "https://github.com/Shivamsamediya/Squadsplit",
          "https://squadsplit.vercel.app/dashboard"
        ]
      },
      {
        title: "ProctorMate",
        description: "Exam hall Allocation System",
        links: [
          "https://github.com/Shivamsamediya/ProctorMate",
          "https://proctor-mate-frontend.vercel.app/"
        ]
      }
    ],
    work: ["Software Engineer Intern"],
    links: {
      github: "https://github.com/Shivamsamediya",
      linkedin: "https://www.linkedin.com/in/shivam-samediya/",
    }
  });

  console.log("Seeded");
  process.exit();
};

seed();
