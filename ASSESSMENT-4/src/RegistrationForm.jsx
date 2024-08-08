// src/App.js
import React, { useState } from 'react';

const RegistrationForm = () => {
  const initialState = {
    email: '',
    password: '',
    retypePassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    town: '',
    region: '',
    postcode: '',
    country: 'United Kingdom',
  };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = '';
    switch (name) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'username':
        if (value.length > 4) {
          error = 'Username must be 4 characters or less';
        }
        break;
      default:
        if (!value) {
          error = 'This field is required';
        }
        break;
    }
    return error;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', values);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>USER REGISTRATION</h2>
      <p>Fields marked * are required.</p>

      {Object.keys(initialState).map((key) => (
        <div key={key} style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            {key.charAt(0).toUpperCase() + key.slice(1)} *
            <input
              type={key.includes('password') ? 'password' : 'text'}
              name={key}
              value={values[key]}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                marginLeft: '0',
                marginTop: '5px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
            {errors[key] && <p style={{ color: 'red', marginTop: '5px' }}>{errors[key]}</p>}
          </label>
        </div>
      ))}

      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm