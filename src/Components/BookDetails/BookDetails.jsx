import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData()

    const {bookId} = useParams()

    const book = books.find(book => book.bookId == bookId)

    console.log(book)

    return (

        <div>
            <h2>{bookId}</h2>
            <h3>{book.author}</h3>
        </div>
    );
};

export default BookDetails;