// src/ProfileList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography, TextField } from '@mui/material';
import axios from 'axios';

const ProfileList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://express-t4.onrender.com/api/users');
        console.log('Fetched users:', response.data); // Log the fetched users to the console
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => 
    (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.firstName && user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.lastName && user.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Container>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid container spacing={4}>
        {filteredUsers.map(user => (
          <Grid item key={user._id} xs={12} sm={6} md={4}>
            <Card>
              <Link to={`/profile/${user._id}`}>
                <CardMedia
                  component="img"
                  alt={user.name}
                  height="140"
                  image={user.picture}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Age: {user.age}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Company: {user.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: {user.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Address: {user.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Phone: {user.phone}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProfileList;
