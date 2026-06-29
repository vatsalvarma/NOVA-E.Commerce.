import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './pages/Home';
import { OrderManagement } from './pages/orders/OrderManagement';
import { MainLayout } from './components/layout/MainLayout';
import { Categories, Deals, ComingSoon } from './pages/Placeholders';
import { ProductDetails } from './pages/ProductDetails';

// Dummy Admin Page (to be implemented)
const Admin = () => <div className="flex min-h-screen items-center justify-center bg-gray-50"><h1 className="text-4xl text-gray-900 font-bold">Admin Dashboard</h1></div>;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/new-arrivals" element={<ComingSoon title="New Arrivals" />} />
            <Route path="/best-sellers" element={<ComingSoon title="Best Sellers" />} />
            <Route path="/brands" element={<ComingSoon title="Brands" />} />
            <Route path="/collections" element={<ComingSoon title="Collections" />} />
            <Route path="/wishlist" element={<ComingSoon title="Wishlist" />} />
            <Route path="/coupons" element={<ComingSoon title="Coupons" />} />
            <Route path="/addresses" element={<ComingSoon title="Addresses" />} />
            <Route path="/settings" element={<ComingSoon title="Account Settings" />} />
          </Route>
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </HashRouter>
      <Toaster position="top-right" />
    </QueryClientProvider>
  )
}

export default App;
