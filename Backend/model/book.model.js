import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    description: String,
    price: String,
    category: String,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;