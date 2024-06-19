// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography, Grid, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://express-t4.onrender.com/api/login', {
        username: email,
        password: password,
      });
      if (response.status === 200) {
        navigate('/profile');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <Container maxWidth="xs" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          backgroundColor: '#f0f0f0',
          padding: 3,
          borderRadius: 1,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Avatar sx={{ margin: 1, backgroundColor: (theme) => theme.palette.primary.main }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            size="large"
            style={{ marginTop: '20px' }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
