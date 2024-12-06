import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../Utility/LocalStorage";
import { useEffect, useState } from "react";


const ListedBooks = () => {

    const books = useLoaderData();

    const [appliedBooks, setAppliedBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredBookApplication();
        if (books.length > 0) {


            // const booksApplied = books.filter(book => storedBookIds.includes(book.id));

            const booksApplied = [];
            for (const bookId of storedBookIds) {
                const book = books.find(book => book.bookId === bookId);
                if (book) {
                    booksApplied.push(book)
                }
                setAppliedBooks(booksApplied)
            }

            // console.log(books, storedBookIds, booksApplied)
        }
    }, [books])
    return (
        <div>
            <div className="bg-gray-600 bg-opacity-10">
                <h2 className="text-center text-5xl p-5 font-extrabold">Books {appliedBooks.length}</h2>
            </div>
            <div>
                <details className="dropdown flex flex-col justify-center items-center py-4">
                    <summary className="btn m-1">Sort By <i></i></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Published Years</a></li>
                    </ul>
                </details>
            </div>
            <div className="flex gap-2">
                <NavLink><a href="">Read Books</a></NavLink>
                <NavLink><a href="">WishList</a></NavLink>
            </div>
            <div className="flex flex-col">
            <div className="flex">
                <div className="bg-slate-50 rounded-lg p-5 ">
                    <img src="" alt="" />
                </div>
                <div>
                    <h3></h3>
                    <p></p>
                    <div className="flex">
                        <p></p>
                        <p></p>
                        <p></p>
                        <div>
                            <i></i>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <i></i>
                            <p></p>
                        </div>
                        <div>
                            <i></i>
                            <p></p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <a href="" className="badge"></a>
                        <a href="" className="badge"></a>
                        <a href="" className="badge"></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ListedBooks;