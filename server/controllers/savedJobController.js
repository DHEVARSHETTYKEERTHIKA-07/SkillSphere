const SavedJob = require("../models/SavedJob");

// Save a Job
const saveJob = async (req, res) => {
  try {
    const { user, job } = req.body;

    if (!user || !job) {
      return res.status(400).json({
        message: "User and Job are required",
      });
    }

    // Check if already saved
    const existing = await SavedJob.findOne({
      user,
      job,
    });

    if (existing) {
      return res.status(400).json({
        message: "Job already saved",
      });
    }

    const savedJob = await SavedJob.create({
      user,
      job,
    });

    res.status(201).json({
      message: "Job Saved Successfully",
      savedJob,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get all Saved Jobs
const getSavedJobs = async (req, res) => {
  try {
    const savedJobs = await SavedJob.find()
      .populate("job")
      .populate("user", "name email");

    res.status(200).json(savedJobs);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  saveJob,
  getSavedJobs,
};