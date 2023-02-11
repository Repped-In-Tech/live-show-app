import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Get In There!</h1>
      <p>If you are a Repped In Tech Admin, click the button below to login!</p>
      <small className="mb-5">If not, what chu doing being nosey?!? </small>
      <Button type="button" size="lg" className="btn-dark" onClick={signIn}>
        Get Started
      </Button>
    </div>
  );
}

export default Signin;
