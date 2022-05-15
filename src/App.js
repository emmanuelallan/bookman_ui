import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Book from './pages/book';
import Category from './pages/category';
import Order from './pages/order';
import Register from './pages/register';
import Setting from './pages/setting';
import CreateBook from './pages/createBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<Book />} />
        <Route path="/createBook" element={<CreateBook />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
