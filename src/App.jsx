import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyToken } from './store/actions/clientActions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCategories } from './store/actions/productActions';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';
import ShoppingCartPage from './pages/ShoppingCartPage';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Blog from './pages/Blog';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Signup from './pages/Signup';
import LoginPage from './pages/LoginPage';
import CreateOrderPage from './pages/CreateOrderPage';
import ProtectedRoute from './components/ProtectedRoute';
import PreviousOrdersPage from './pages/PreviousOrdersPage';

// PageContent Bileşeni
const PageContent = ({ children }) => {
  return (
    <main className="flex flex-col w-full min-h-screen">
      {children}
    </main>
  );
};

// ... other imports ...

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopPage />} />
          <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/order" element={
            <ProtectedRoute>
              <CreateOrderPage />
            </ProtectedRoute>
          } />
          <Route path="/orders" element={
            <ProtectedRoute>
              <PreviousOrdersPage />
            </ProtectedRoute>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </PageContent>
      <Footer />
      <ToastContainer position="bottom-right" theme="colored" />
    </BrowserRouter>
  );
}

// HomePage Component (Mobile First)

