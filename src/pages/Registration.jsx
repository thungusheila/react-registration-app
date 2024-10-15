// src/pages/Registration.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addStudent } from '../redux/studentSlice';
import './Registration.css'; // Import the CSS file

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      studentID: '',
      courseOfStudy: '',
      level: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      studentID: Yup.string().required('Student ID is required'),
      courseOfStudy: Yup.string().required('Course of Study is required'),
      level: Yup.string()
        .matches(/^[1-9][0-9]*$/, 'Level must be a number')
        .required('Level is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addStudent(values));
      alert('Student Registered Successfully!');
      resetForm(); // Reset the form after submission
    },
  });

  return (
    <Box className="registration-container">
      <Typography variant="h4" gutterBottom>
        Student Registration Form
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        {/* Full Name Field */}
        <Box className="form-field">
          <TextField
            fullWidth
            id="fullName"
            name="fullName"
            label="Full Name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
        </Box>

        {/* Student ID Field */}
        <Box className="form-field">
          <TextField
            fullWidth
            id="studentID"
            name="studentID"
            label="Student ID"
            value={formik.values.studentID}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.studentID && Boolean(formik.errors.studentID)}
            helperText={formik.touched.studentID && formik.errors.studentID}
          />
        </Box>

        {/* Course of Study Field */}
        <Box className="form-field">
          <TextField
            fullWidth
            id="courseOfStudy"
            name="courseOfStudy"
            label="Course of Study"
            value={formik.values.courseOfStudy}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.courseOfStudy && Boolean(formik.errors.courseOfStudy)}
            helperText={formik.touched.courseOfStudy && formik.errors.courseOfStudy}
          />
        </Box>

        {/* Level Field */}
        <Box className="form-field">
          <TextField
            fullWidth
            id="level"
            name="level"
            label="Level"
            value={formik.values.level}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.level && Boolean(formik.errors.level)}
            helperText={formik.touched.level && formik.errors.level}
          />
        </Box>

        {/* Button Container */}
        <Box className="button-container">
          {/* Submit Button */}
          <Button color="primary" variant="contained" type="submit">
            Register
          </Button>

         

          {/* "Go Back to Landing Page" Button */}
          <Button
           color="primary" variant="contained"
            onClick={() => navigate('/')}
            className="go-back-button"
          >
            Go Back to Landing Page
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Registration;
