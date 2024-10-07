// src/pages/Registration.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();

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
    onSubmit: (values) => {
      // Store the new student data in localStorage
      const students = JSON.parse(localStorage.getItem('students')) || [];
      students.push(values);
      localStorage.setItem('students', JSON.stringify(students));
      alert('Student Registered Successfully!');
    },
  });

  return (
    <Box sx={{ padding: 3, width: '100%', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Student Registration Form
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        {/* Full Name Field */}
        <Box sx={{ marginBottom: 2 }}>
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
        <Box sx={{ marginBottom: 2 }}>
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
        <Box sx={{ marginBottom: 2 }}>
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
        <Box sx={{ marginBottom: 2 }}>
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

        {/* Submit Button */}
        <Button color="primary" variant="contained" type="submit">
          Register
        </Button>
      </form>

      {/* "Go Back to Landing Page" Button */}
      <Button
        variant="outlined"
        onClick={() => navigate('/')}
        sx={{ marginTop: 3, backgroundColor: '#3498db', color: '#fff' }}
      >
        Go Back to Landing Page
      </Button>
    </Box>
  );
};

export default Registration;
