import { useState } from "react";
import BookCreate from './components/BookCreate';

function App () {
    const [books, setBooks] = useState([]);
    const handleCreateBook = (title) => {
        console.log('need to add book with:', title)
    }
    return (
        <div>
            <BookCreate onCreate={handleCreateBook}/>
        </div>
    );
}

export default App;