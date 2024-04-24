const express = require('express');
const dotenv = require('dotenv').config()
const { errorHandler } = require('./backend/middleware/errorMiddleware')
const cors = require('cors')
const connectDB = require('./backend/config/db')
const movieRoutes = require('./backend/routes/movieRoutes')
const PORT = process.env.PORT || 3000;

connectDB()

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL
}))

app.use(express.json()); // Middleware to parse JSON bodies


app.use('/api/movies', movieRoutes);

//use error handler middleware
app.use(errorHandler)

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
