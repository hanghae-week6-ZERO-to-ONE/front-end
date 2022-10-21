import { Category, Home } from '@mui/icons-material';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Login from '../pages/login/Login';
import MyPage from '../pages/my_page/MyPage';
import Sign from '../pages/sign/sign';
import Upload from '../pages/upload/Upload';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header></Header>}>
          <Route path='' element={<Home />} />
          <Route path='category' element={<Category />} />
          <Route path='detail' element={<Detail />}>
            <Route path=':id' element={<Detail />} />
          </Route>
          <Route path='my_page' element={<MyPage />} />
          <Route path='upload' element={<Upload />} />
          <Route path='sign' element={<Sign />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
