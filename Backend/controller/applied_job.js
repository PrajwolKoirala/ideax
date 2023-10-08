const AppliedJob = require("../Model/Applied_jobs");

const applyForJob = async (req, res, next) => {
  try {
    const { school_name, application_date, status } = req.body;
    const { jobId } = req.params; 
    const applied_by = req.user.id; 

    const appliedJob = await AppliedJob.create({
      school_name,
      application_date,
      status,
      job_id: jobId,
      applied_by,
    });

    res.status(201).json(appliedJob);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  applyForJob,
};
