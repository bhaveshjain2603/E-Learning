import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./route/book.route.js";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors(
    {
        origin: "http://localhost:5173",
    }
));
app.use(express.json());

// Routes
app.use("/api", bookRoutes);

dotenv.config();

const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;

// connect to mongoDB
try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}

export default app;