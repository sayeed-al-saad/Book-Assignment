import myImage from './image.png';

const Banner = () => {
    return (
        <div className="flex justify-between bg-gray-200 py-20 px-64 rounded-lg">
            <div className='flex flex-col justify-center'>
                <h2 className="text-7xl font-extrabold pb-20 text-black">Books to freshen up <br /> your bookshelf</h2>
                <button className="btn btn-primary w-48 ">View The List</button>
            </div>
            <img src={myImage} alt="" />
        </div>
    );
};

export default Banner;