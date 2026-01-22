const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  links: [String]
});

const ProfileSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    education: String,
    skills: [String],
    projects: [ProjectSchema],
    work: [String],
    links: {
      github: String,
      linkedin: String,
      portfolio: { type: String, default: "https://www.portfolio.com" }
    }
  },
  { timestamps: true }
);

// Indexing
ProfileSchema.index({ skills: 1 });

module.exports = mongoose.model("Profile", ProfileSchema);
