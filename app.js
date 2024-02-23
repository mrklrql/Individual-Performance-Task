const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mongo-test');

// Define Course Schema
const courseSchema = new mongoose.Schema({
    code:String,
    description:String,
    units:Number,
    tags:Array,
});

const Course = mongoose.model('Course', courseSchema);

// Retrieve and Sort Backend Courses
app.get('/backend-courses', async (req, res) => {
  try {
    const courses = await Course.find().sort();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Extract Course Information
app.get('/course-info', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Retrieve BSIS and BSIT Courses
app.get('/bsis-bsit-courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
