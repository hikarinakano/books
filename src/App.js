import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from "./components/BookList";

function App () {
    const [books, setBooks] = useState([]);

    const handleCreateBook = (title) => {
        const id = Math.round(Math.random() * 9999);
        const updatedBooks = [
            ...books,
            { id, title },
        ]
        setBooks(updatedBooks);
    }
    
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    }

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title: newTitle};
            }
            return book;
        })
        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreate={handleCreateBook}/>
        </div>
    );
}

export default App;