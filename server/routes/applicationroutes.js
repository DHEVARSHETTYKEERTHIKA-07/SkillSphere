const express = require("express");

const router = express.Router();

const {
  applyForJob,
  getApplications,
} = require("../controllers/applicationController");

// Apply for a job
router.post("/", applyForJob);

// Get all applications
router.get("/", getApplications);

module.exports = router;