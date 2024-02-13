// server.js
const express = require('express');
const app = express();
const jsonData = require('./test.json');
const properties = jsonData;
const cors = require('cors');


app.use(cors());

// Route to handle pagination requests
app.get('/api/properties', (req, res) => {
    const page = parseInt(req.query.page);
    const pageSize = parseInt(req.query.pageSize);
    
    // Calculate the start and end indexes for the requested page
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    
    // Slice the products array based on the indexes
    const paginatedProperties = properties.slice(startIndex, endIndex);
    
    // Calculate the total number of pages
    const totalPages = Math.ceil(properties.length / pageSize);
    
    // Send the paginated products and total pages as the API response
    res.json({ properties: paginatedProperties, totalPages });
  });
  
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
  

