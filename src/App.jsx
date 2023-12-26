import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/product' element={<Product />} />
					<Route path='/catalog' element={<Products />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
