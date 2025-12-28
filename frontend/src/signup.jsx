import { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
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
        <Container style={{ maxWidth: 500, margin: '0 auto' }}>
            <h5 className="mb-3">
                Sign Up for Our Mailing List
            </h5>
            {success && (
                <Alert variant="success" className="mb-3">
                    Thank you! You've been successfully added to our mailing list.
                </Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder=""
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        style={{ backgroundColor: 'white' }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        required
                        style={{ backgroundColor: 'white' }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        isInvalid={!!emailError}
                        required
                        style={{ backgroundColor: 'white' }}
                    />
                    {emailError && (
                        <Form.Control.Feedback type="invalid">
                            {emailError}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-2">
                    Sign Up
                </Button>
            </Form>
        </Container>
    );
};

export default MailingListSignup;