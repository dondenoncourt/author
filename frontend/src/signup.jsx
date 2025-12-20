import { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import axios from 'axios';

const MailingListSignup = ({ onSuccess }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isValidEmail(email)) {
          try {
            await axios.post('/subscribers', {
              subscriber: {
                first_name: name,
                last_name: lastName,
                email: email,
              },
            });
    
            console.log('Subscriber created successfully');
            setSuccess(true);
            setName('');
            setLastName('');
            setEmail('');
            setEmailError('');
            // Navigate to home page after 4 seconds
            setTimeout(() => {
              if (onSuccess) {
                onSuccess();
              }
            }, 4000);
          } catch (error) {
            console.log('Error creating subscriber:', error);
          }
        } else {
          setEmailError('Please enter a valid email address');
        }
      };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        if (!isValidEmail(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const isValidEmail = (email) => {
        // Regular expression to check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <Box sx={{ maxWidth: 500, mx: 'auto' }}>
            <Typography variant="h5" gutterBottom>
                Sign Up for Our Mailing List
            </Typography>
            {success && (
                <Alert severity="success" sx={{ mb: 2 }}>
                    Thank you! You've been successfully added to our mailing list.
                </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="First Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    fullWidth
                    sx={{
                        '& .MuiInputBase-root': {
                            backgroundColor: 'white',
                        },
                    }}
                />
                <TextField
                    label="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    required
                    fullWidth
                    sx={{
                        '& .MuiInputBase-root': {
                            backgroundColor: 'white',
                        },
                    }}
                />
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    error={!!emailError}
                    helperText={emailError}
                    required
                    fullWidth
                    sx={{
                        '& .MuiInputBase-root': {
                            backgroundColor: 'white',
                        },
                    }}
                />
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Sign Up
                </Button>
            </Box>
        </Box>
    );
};

export default MailingListSignup;