import { useState } from 'react';
import { TextField, PrimaryButton, Panel } from '@fluentui/react';

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

    const handleEmailChange = (event, value) => {
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
            <PrimaryButton onClick={() => setIsOpen(true)}>Sign Up for Our Mailing List</PrimaryButton>
            <Panel
                isOpen={isOpen}
                onDismiss={() => setIsOpen(false)}
                headerText="Sign Up for Our Mailing List"
                closeButtonAriaLabel="Close"
            >
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(event, value) => setName(value)}
                        required
                    />
                    <TextField
                        label="Email"
                        value={email}
                        onChange={handleEmailChange}
                        errorMessage={emailError}
                        required
                    />
                    <PrimaryButton type="submit">Sign Up</PrimaryButton>
                </form>
            </Panel>
        </>
    );
};

export default MailingListSignup;