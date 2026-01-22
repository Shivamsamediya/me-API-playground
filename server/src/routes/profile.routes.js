const router = require("express").Router();
const ctrl = require("../controllers/profile.controller");
const auth = require("../middlewares/auth.middleware");

router.get("/", ctrl.getProfile);
router.post("/create", ctrl.createProfile);
router.post("/update", ctrl.updateProfile);

//write ops are protected by auth middleware, if we want, we can configure
// router.post("/update", auth, ctrl.updateProfile);

router.get("/projects", ctrl.getProjectsBySkill);
router.get("/skills/top", ctrl.getTopSkills);
router.get("/search", ctrl.search);

module.exports = router;
