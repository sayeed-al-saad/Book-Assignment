import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Book = ({book}) => {
    
    const {bookId, bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing, tags} = book;

    return (
       <Link to={`/book/${book.bookId}`}>
        <div className=''>
            <div className="card bg-base-100 w-96 shadow-xl border-2 shadow-sm hover:shadow-md hover:shadow-primary transition-shadow duration-300 hover:bg-slate-900">
        <div className='bg-slate-50 m-4 p-4 rounded-lg'>
        <figure>
    <img className=''
      src={image}
      alt="Shoes" />
  </figure>
        </div>

  <div className="card-body ">
  <div className="card-actions justify-start pt-6">
  <div className="flex gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 badge badge-primary rounded">
                            #{tag}
                        </span>
                    ))}
                </div>
         </div>
    <h2 className="card-title flex flex-col justify-start items-start">
      {bookName}
      <div className="badge badge-primary"> {author}</div>
    </h2>
    <hr className='border-dashed my-2' />
   
        <div className='flex justify-between items-center'>
         <div className="card-actions justify-start">
            <div className="badge badge-outline">{category}</div>
         </div>
        <div>
        <div className='flex justify-center items-center gap-2'>
            <p className='text-lg'>3.0</p>
                    <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 w-5 h-5 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 w-5 h-5 bg-orange-400" defaultChecked />
            <input type="radio" name="rating-2" className="mask mask-star-2 w-5 h-5 rating-half bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 w-5 h-5 rating-hidden bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 w-5 h-5 rating-hidden bg-orange-400" />
            </div>
         </div>
        </div>
        </div>
  </div>
</div>
        </div>
       
       </Link>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        bookId: PropTypes.number.isRequired, // Assuming bookId is a number
    }).isRequired
};


export default Book;