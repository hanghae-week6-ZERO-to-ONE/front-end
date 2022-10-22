import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import LoginPage from '../pages/login/LoginPage';
import MyPage from '../pages/my_page/MyPage';
import Sign from '../pages/sign/Sign';
import Upload from '../pages/upload/Upload';
import Detail from '../pages/detail/Detail';
import Home from '../pages/home/Home';
import Category from '../pages/category/Category';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route path="" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="detail" element={<Detail />}>
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="my_page" element={<MyPage />} />
          <Route path="upload" element={<Upload />} />
          <Route path="sign" element={<Sign />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
