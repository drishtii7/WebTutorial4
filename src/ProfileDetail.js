// src/ProfileDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';

const ProfileDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log('Fetching user details for id:', id);
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
        console.log('Fetched user details:', response.data); // Log the fetched user details to the console
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <Container maxWidth="sm">
      <Card>
        <CardMedia
          component="img"
          alt={user.name}
          height="300"
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
          <Typography variant="body2" color="text.secondary">
            About: {user.about}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Eye Color: {user.eyeColor}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Favorite Fruit: {user.favoriteFruit}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfileDetail;
