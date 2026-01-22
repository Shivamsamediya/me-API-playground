const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middlewares/error.middleware");

const profileRoutes = require("./routes/profile.routes");
const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(cors({
    origin:[ 
        "http://localhost:5173",
        "https://me-api-playground-new.vercel.app",
        "https://me-api-playground.vercel.app" 
     ],
    credentials: true,            
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());

app.use("/api/profile", profileRoutes);
app.use("/", healthRoutes);
app.use(errorMiddleware);

module.exports = app;
