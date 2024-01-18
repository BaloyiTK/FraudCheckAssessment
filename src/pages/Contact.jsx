import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Email:</h2>
          <p>info@virtualvisage.com</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Phone:</h2>
          <p>+27 (11) 123-4567</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Address:</h2>
          <p>123 Virtual Street, Digital City</p>
          <p>Virtualland, Johannesburg 2000</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
