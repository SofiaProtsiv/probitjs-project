const express = require('express');
const cors = require('cors');

const port = 3001;
const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());

app.post('/bids', (req, res) => {
  res.json({
    bids: [
      {
        bidId: "1",
        creativeId: "1",
        cpm: 1.50,
        width: 300,
        height: 250,
        currency: 'USD',
        ad: '<div style="width: 300px; height: 250px; background-color: #f2f2f2; border: 1px solid #ccc; padding: 10px;"><h2 style="color: #333; font-family: Arial, sans-serif; font-size: 18px; margin-bottom: 10px;" > Welcome to Our Ad!</h2><p style="color: #666; font-family: Arial, sans-serif; font-size: 14px;">This is an example ad</p><button style="background-color: #4CAF50; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Learn More</button></div> ',
      }

    ]
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
