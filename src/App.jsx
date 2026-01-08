import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage'

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
          {/* Diğer route'lar */}
        </Routes>
      </PageContent>
      <Footer />
    </BrowserRouter>
  );
}

// HomePage Component (Mobile First)

