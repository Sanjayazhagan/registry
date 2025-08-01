
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './Pages/Root'
import HomePage from './Pages/Home/HomePage'
import DetailsPage from './Pages/Details/DetailsPage'
import SearchPage from './Pages/Search/SearchPage'
import { searchLoader } from './Pages/Search/SearchLoader'
import { detailsLoader } from './Pages/Details/DetailsLoader'
import { HomeLoader } from './Pages/Home/HomeLoader'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: HomeLoader
      },
      {
        path: '/packages/:name',
        element: <DetailsPage />,
        loader: detailsLoader,
      },
      {
        path: 'search',
        element: <SearchPage />,
        loader: searchLoader,
      }
    ]
  }
])


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
