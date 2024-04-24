const express = require('express');
const dotenv = require('dotenv').config()
const { errorHandler } = require('./backend/middleware/errorMiddleware')
const cors = require('cors')
const connectDB = require('./backend/config/db')
const movieRoutes = require('./backend/routes/movieRoutes')
const PORT = process.env.PORT || 3000;

connectDB()

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus:200
}

app.use(cors(corsOptions))

app.use(express.json()); // Middleware to parse JSON bodies


app.use('/api/movies', movieRoutes);

//use error handler middleware
app.use(errorHandler)

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
