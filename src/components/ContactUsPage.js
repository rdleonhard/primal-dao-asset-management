import React from 'react';
import { Container } from 'react-bootstrap';
import ClientIntakeForm from './ClientIntakeForm';

const ContactUsPage = () => {
    return (
        <Container>
            <h2>Contact Us</h2>
            <p>Please fill out the following form to get in touch with us:</p>
            <ClientIntakeForm />
        </Container>
    );
};

export default ContactUsPage;
