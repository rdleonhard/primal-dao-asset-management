import React from 'react';
import { Container } from 'react-bootstrap';
import ClientIntakeForm from './ClientIntakeForm';

const ContactPage = () => {
    return (
        <Container style={{ marginTop: '2rem' }}>
            <h2>Contact Us</h2>
            <p>Please fill out the following form to get in touch with us:</p>
            <ClientIntakeForm />
        </Container>
    );
};

export default ContactPage;
