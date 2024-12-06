import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className="py-5 flex flex-col justify-center items-center">
            <h2 className="text-center text-4xl font-bold p-7">Books</h2>
            <div className="grid grid-cols-3 gap-x-36 gap-y-20">
                {
                    books.map(book => <Book key={book.bookId} book ={book} ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;