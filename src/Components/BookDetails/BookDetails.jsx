import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveBookApplication } from "../Utility/LocalStorage";


const BookDetails = () => {

  

    const books = useLoaderData()

    const {bookId} = useParams()

    const book = books.find(book => book.bookId == bookId)

    console.log(book)

    const handleReadBook = () => {
        saveBookApplication(bookId)
        toast('Book purchased succefully')

    }
    const handlewishBook = () => {
        saveBookApplication(bookId)
        toast('Book Wishlisted succefully')

    }

    return (

        <div className="grid grid-cols-2 justify-between gap-10 h-[500px] p-10 rounded-lg my-6">
            <div className=" h-full w-full flex justify-center ">
                <div className=" bg-slate-200 rounded-lg w-[70%] h-full flex justify-center items-center">
                <img className="w-80 p-10" src={book.image} alt="" />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-5xl font-extrabold">{book.bookName}</h2>
                <p>By: {book.author}</p>
                <hr className="border-dashed" />
                <p>{book.category}</p>
                <hr className="border-dashed" />
                <p>{book.review}</p>
                <div>
                <div>
            <div className="flex gap-4">
                <p>Tags:</p>
                <div className="flex gap-2">
                    {book.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 badge badge-primary rounded">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
                </div>
                    <p></p>
                    <p></p>
                </div>
                <hr className="border-dashed" />
                <p><span className="pr-7">Number of Pages:</span>{book.totalPages}</p>
                <p><span className="pr-7">Publisher:</span>{book.publisher}</p>
                <p><span className="pr-7">Year of Publishing:</span>{book.yearOfPublishing}</p>
                <p><span className="pr-7">Rating:</span>{book.rating}</p>

                <div className="pt-5 flex gap-4">
                    <button onClick={handleReadBook} className="btn btn-outline btn-primary">Read</button>
                    <button onClick={handlewishBook} className="btn">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;