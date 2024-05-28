import mongoose from "mongoose";

// Define the schema for the book
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // Add timestamps to the schema
);

// Create the model for the book
const Book = mongoose.model("Book", bookSchema);

// Export the model as the default export
export default Book;
