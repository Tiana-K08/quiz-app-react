import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Layout from './layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import QuizLayout from './pages/QuizPage/QuizLayout.jsx';
import QuizStep from './pages/QuizPage/QuizStep.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="quiz" element={<QuizLayout />}>
        <Route path=":slug" element={<QuizStep />} />
      </Route>
      <Route path="results" element={<ResultsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
