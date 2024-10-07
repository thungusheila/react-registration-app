// src/pages/RegisterList.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the registered students from localStorage
    const studentsData = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(studentsData);
  }, []);

  return (
    <Box sx={{ padding: 3, width: '100%', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Registered Students List
      </Typography>

      <List>
        {students.length > 0 ? (
          students.map((student, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${student.fullName} - ${student.studentID}`}
                secondary={`Course: ${student.courseOfStudy}, Level: ${student.level}`}
              />
            </ListItem>
          ))
        ) : (
          <Typography>No students registered yet</Typography>
        )}
      </List>

      {/* "Go Back to Landing Page" Button */}
      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{ mt: 3, backgroundColor: '#3498db', color: '#fff' }}
      >
        Go Back to Landing Page
      </Button>
    </Box>
  );
};

export default RegisterList;
