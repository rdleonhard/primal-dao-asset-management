import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'YOUR_AIRTABLE_API_KEY' }).base('YOUR_AIRTABLE_BASE_ID');

const ClientIntakeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        base('Clients').create([
            {
                fields: {
                    Name: formData.name,
                    Email: formData.email,
                    Phone: formData.phoneNumber,
                    Message: formData.message,
                },
            },
        ], (err, records) => {
            if (err) {
                console.error(err);
                return;
            }
            alert('Form submitted successfully');
        });

        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="float-end">
                Submit
            </Button>
        </Form>
    );
};

export default ClientIntakeForm;

