import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());

app.use(cors())

// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ["GET","POST","PUT","DELETE"],
//   allowedHeaders: ["Content-Type"],
// }))

// Root route
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to mern stack tutorial");
});

// Book routes
app.use("/books", bookRoute);

// Connect to MongoDB and start server
mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
