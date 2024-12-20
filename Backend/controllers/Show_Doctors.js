const User = require("../models/User");

const ShowDoctors = async (req, res) => {
  
  try {
 
    const doctorUsers = await User.find({ role: /doctor/i }); // 

  
    res.json(doctorUsers);
  } catch (error) {
   
    console.error("Error fetching doctors:", error);
    res.status(500).json({ error: "Failed to fetch doctors" });
  }
};

module.exports = {
  ShowDoctors, // 
};
