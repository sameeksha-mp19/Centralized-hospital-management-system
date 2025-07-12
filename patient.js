// seed/patients.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

dotenv.config();

const seedPatients = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing patients (optional)
    await User.deleteMany({ role: "patient" });

    const hashedPassword = await bcrypt.hash("password123", 10);

    const patients = [
      {
        name: "John Doe",
        email: "john@example.com",
        password: hashedPassword,
        role: "patient",
        age: 30,
        gender: "Male",
        phone: "9876543210",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: hashedPassword,
        role: "patient",
        age: 28,
        gender: "Female",
        phone: "8765432109",
      },
    ];

    await User.insertMany(patients);
    console.log("✅ Patients seeded successfully");

    process.exit();
  } catch (err) {
    console.error("❌ Failed to seed patients:", err);
    process.exit(1);
  }
};

seedPatients();
