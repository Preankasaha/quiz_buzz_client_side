import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { dataLoader } from './Loader/Loader';
import Main from './Main';
import Blog from './components/Blog/Blog';
import { LoaderWithParams } from './Loader/LoaderWithParams';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          loader: dataLoader,
          element: <Home></Home>,

        },

        {

          path: '/topics',
          loader: dataLoader,
          element: <Topics></Topics>

        },
        {

          path: '/quiz/:quizId',
          loader: LoaderWithParams,
          element: <QuizDetails></QuizDetails>
        },
        {

          path: '/statistics',
          loader: dataLoader,
          element: <Statistics></Statistics>

        },
        {

          path: '/blog',
          element: <Blog></Blog>

        },

      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;