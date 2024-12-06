import { BarChart } from '@mui/x-charts';

const BookstoRead = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center my-5 bg-gray-50 bg-opacity-80'>
            <BarChart
            xAxis={[{ scaleType: 'band', data: ['The Great Gatsby', 'To kill a mocking bird', '1984'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={800}
            height={500}
            />

        </div>
        </div>
    );
};

export default BookstoRead;