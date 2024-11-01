// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Your secret key from Thirdweb
const THIRDW_WEB_SECRET_KEY = process.env.THIRDWEB_SECRET_KEY;

// Endpoint for login verification
app.post('/api/login', (req, res) => {
  const { signature } = req.body;

  // Verify the signature using Thirdweb API or custom logic
  // You would typically call Thirdweb's API here to verify the signature

  // Example of returning success or failure
  if (signature) {
    // This is where you would check the signature
    res.status(200).json({ success: true, message: 'Login successful!' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid signature.' });
  }
});

// Endpoint for logout
app.post('/api/logout', (req, res) => {
  // Handle logout logic if needed
  res.status(200).json({ success: true, message: 'Logged out successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
