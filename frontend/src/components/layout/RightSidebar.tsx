import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';

export const RightSidebar = () => {
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal > 0 ? 45.00 : 0;
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping
  const total = subtotal > 0 ? subtotal - discount + shipping : 0;

  const mockCartItems = [
    {
      id: 1,
      name: 'Air Max 270 React',
      brand: "Women's Shoes",
      price: 129.99,
      size: '7 US',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: 2,
      name: 'Chanel Chance Eau Tendre EDP',
      brand: "100ml",
      price: 89.99,
      size: '100ml',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: 3,
      name: 'Minimalist Shoulder Bag',
      brand: "Olive Green",
      price: 39.99,
      size: 'One Size',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=200'
    }
  ];

  const displayItems = items.length > 0 ? items : mockCartItems;

  return (
    <aside className="fixed right-0 top-0 h-screen w-80 bg-white border-l border-gray-100 flex flex-col overflow-y-auto custom-scrollbar z-50">
      <div className="p-6 flex items-center justify-between sticky top-0 bg-white z-10">
        <h2 className="text-lg font-bold text-gray-900">My Cart ({displayItems.length})</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="px-6 flex-1">
        <div className="space-y-6">
          {displayItems.map((item) => (
            <div key={item.id} className="flex gap-4 group">
              <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden p-2 flex-shrink-0 border border-gray-100 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                <button className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow flex items-center justify-center text-gray-400 hover:text-red-500">
                  <Heart className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{item.name}</h3>
                  <p className="text-xs text-gray-500">
                    {(item as any).brand || 'Brand'}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {(item as any).size || 'Standard'}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm font-bold text-gray-900">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-full px-2 py-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-500 hover:text-gray-900">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-500 hover:text-gray-900">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-white mt-auto border-t border-gray-100">
        <div className="flex gap-2 mb-6">
          <input 
            type="text" 
            placeholder="Promo Code" 
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-500"
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-purple-700 transition-colors">
            Apply
          </button>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Discount</span>
            <span className="font-semibold text-red-500">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Shipping</span>
            <span className="font-semibold text-green-500">Free</span>
          </div>
          <div className="flex justify-between text-base font-bold pt-3 border-t border-gray-100 mt-2">
            <span className="text-gray-900">Total</span>
            <span className="text-gray-900">${total.toFixed(2)}</span>
          </div>
        </div>

        <button 
          onClick={() => {
            if (displayItems.length > 0) {
              window.location.href = '/orders';
            }
          }}
          className="w-full bg-purple-600 text-white rounded-xl py-3.5 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200"
        >
          Checkout ({displayItems.length})
        </button>
        
        <div className="flex justify-center gap-2 mt-4 opacity-50">
          <div className="w-8 h-5 bg-blue-600 rounded"></div>
          <div className="w-8 h-5 bg-red-500 rounded"></div>
          <div className="w-8 h-5 bg-black rounded"></div>
        </div>
      </div>
    </aside>
  );
};

// Mock Heart icon since it's used inline above
const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
