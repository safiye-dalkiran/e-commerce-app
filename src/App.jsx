import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage'
import ShopPage from './components/ShopPage';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import Team from './components/Team';

// PageContent Bileşeni
const PageContent = ({ children }) => {
  return (
    <main className="flex flex-col w-full min-h-screen">
      {children}
    </main>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:productId" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />

        </Routes>
      </PageContent>
      <Footer />
    </BrowserRouter>
  );
}

// HomePage Component (Mobile First)

