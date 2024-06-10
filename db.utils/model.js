import mongoose from 'mongoose';

// Define the Student Schema
const studentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    mentorId: {
        type: String, // Single string, not an array
        required: false
    },
    previousMentors: {
        type: Array, // Array of strings to store previous mentors
        required: false,
        default: []
       
    }
});

// Define the Student Model
const studentmodel = mongoose.model('student', studentSchema, 'students');

// Define the mentor Schema
const mentorSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    students: {
        type: [String], // Array of strings to store student IDs
        required: false,
        default: []
    }

});

// Define the mentor Model
const mentormodel = mongoose.model('mentor', mentorSchema, 'mentors');

// Export the models
export { studentmodel, mentormodel };
