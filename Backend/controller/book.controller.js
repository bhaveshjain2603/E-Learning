import Book from "../model/book.model.js";

export const addBook = async(req, res) => {
    try {
        const { name, price, category, title } = req.body;
        const newBook = new Book(req.body);
        const book = await newBook.save();
        res.status(201).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const getBook = async(req, res) => {
    try {
        const books = await Book.find();
        
        if (!books || books.length === 0) {
            return res.status(404).json({ message: "No books found" });
        }
        
        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const updateBook = async (req, res) => {
try {
    const book = await Book.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
    );
    res.status(200).json(book);
} catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Error updating book" });
}
};
  
export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Error deleting book" });
  }
};