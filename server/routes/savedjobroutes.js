const express = require("express");

const router = express.Router();

const {
  saveJob,
  getSavedJobs,
} = require("../controllers/savedJobController");

// Save a Job
router.post("/", saveJob);

// Get Saved Jobs
router.get("/", getSavedJobs);

module.exports = router;