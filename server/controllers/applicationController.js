const Application = require("../models/Application");

// Apply for a Job
const applyForJob = async (req, res) => {
  try {
    const { user, job } = req.body;

    // Check if all fields are provided
    if (!user || !job) {
      return res.status(400).json({
        message: "User and Job are required",
      });
    }

    // Check if the user has already applied
    const existingApplication = await Application.findOne({
      user,
      job,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job",
      });
    }

    // Create application
    const application = await Application.create({
      user,
      job,
    });

    res.status(201).json({
      message: "Application Submitted Successfully",
      application,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get all applications
const getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("user", "name email")
      .populate("job", "title company location");

    res.status(200).json(applications);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  applyForJob,
  getApplications,
};