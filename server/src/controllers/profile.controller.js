const Profile = require("../models/Profile");

/**
 * Create Profile (only once)
 */
exports.createProfile = async (req, res, next) => {
  try {
    const exists = await Profile.findOne();
    if (exists) {
      return res.status(400).json({
        message: "Profile already exists. Use update instead."
      });
    }

    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (err) {
    next(err);
  }
};

/**
 * Update Profile (single profile)
 */
exports.updateProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      {},
      req.body,
      { new: true }
    );

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(profile);
  } catch (err) {
    next(err);
  }
};

/**
 * Read Profile
 */
exports.getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (err) {
    next(err);
  }
};

/**
 * Query projects by skill
 */
exports.getProjectsBySkill = async (req, res, next) => {
  try {
    const { skill } = req.query;

    const profile = await Profile.findOne({
      skills: { $regex: skill, $options: "i" }
    });

    res.json(profile ? profile.projects : []);
  } catch (err) {
    next(err);
  }
};

/**
 * Top skills
 */
exports.getTopSkills = async (req, res, next) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile?.skills || []);
  } catch (err) {
    next(err);
  }
};

/**
 * Search (generic)
 */
exports.search = async (req, res, next) => {
  try {
    const { q } = req.query;

    const profile = await Profile.findOne({
      $or: [
        { skills: { $regex: q, $options: "i" } },
        { name: { $regex: q, $options: "i" } }
      ]
    });

    res.json(profile || {});
  } catch (err) {
    next(err);
  }
};
