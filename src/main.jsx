import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/EroorPage/ErrorPage';
import Home from './Components/Home/Home';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import BookstoRead from './Components/ToReadBooks/BookstoRead';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../books.json')
      },
  
      {
        path: "/read",
        element: <BookstoRead></BookstoRead>,
        loader: () => fetch('../books.json')
      },
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
