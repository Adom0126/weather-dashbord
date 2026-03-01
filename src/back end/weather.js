const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY = "YOUR_API_KEY_HERE";

router.get("/weather", async (req, res) => {
  const city = req.query.city;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    res.json(response.data);
  } catch (error) {
    res.status(404).json({ message: "City not found" });
  }
});

module.exports = router;
