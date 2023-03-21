import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Layout } from './Layout/Layout';
import { FormPage } from './pages/FormPage/FormPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export { App };
