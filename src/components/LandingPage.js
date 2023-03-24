import React from 'react';
import { Container } from 'react-bootstrap';

const jumbotronStyle = {
    backgroundColor: 'var(--secondary-color)',
    padding: '4rem 2rem',
    borderRadius: '0.3rem',
    marginBottom: '2rem',
    textAlign: 'center',
    color: 'white',
};

const LandingPage = () => {
    return (
        <Container fluid style={jumbotronStyle}>
            <h1>Primal DAO Asset Management</h1>
            <p className="lead">
                We are a registered investment adviser offering various financial services.
            </p>
            <p>
                Please note: This website is for informational purposes only and does not constitute an offer to sell, a solicitation to buy, or a recommendation for any security, nor does it constitute an offer to provide investment advisory or other services.
            </p>
        </Container>
    );
};

export default LandingPage;


