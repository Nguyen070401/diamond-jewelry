import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import LikePage from './pages/LikePage';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/gio-hang" element={<CartPage />} />
				<Route path="/gio-hang" element={<CartPage />} />
				<Route path="/dang-nhap" element={<LoginPage />} />
				<Route path="/dang-ki" element={<RegisterPage />} />
				<Route path="/lien-he" element={<ContactPage />} />
				<Route path="/yeu-thich" element={<LikePage />} />
				<Route path="/trang-suc" element={<ProductList />} />
				<Route path="/dong-ho" element={<ProductList />} />
				<Route path="/qua-tang" element={<ProductList />} />
				<Route path="/san-pham" element={<Product />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
