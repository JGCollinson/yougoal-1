const router = require("express").Router();
const GoalController = require("../../controllers/GoalController");

router.route("/")
  .get(GoalController.findAllTeams);

router
  .route("/:teamID")
  .get(GoalController.findPlayersByTeamID);

router
  .route("/team/:teamID")
  .get(GoalController.findTeamByID);
module.exports = router;
