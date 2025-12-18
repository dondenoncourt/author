import { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';

const MailingListSignup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isValidEmail(email)) {
          const response = await fetch('/subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              subscriber: {
                first_name: name,
                email: email,
              },
            }),
          });
    
          if (response.ok) {
            console.log('Subscriber created successfully');
            setIsOpen(false);
          } else {
            console.log('Error creating subscriber');
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
        <>
            <Button variant="contained" onClick={() => setIsOpen(true)}>Sign Up for Our Mailing List</Button>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                maxWidth="sm"
                fullWidth
            >
                <Box component="form" onSubmit={handleSubmit}>
                    <DialogTitle>Sign Up for Our Mailing List</DialogTitle>
                    <DialogContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                                fullWidth
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
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button type="submit" variant="contained">Sign Up</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </>
    );
};

export default MailingListSignup;