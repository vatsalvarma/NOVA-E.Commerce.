import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'PROCESSING' | 'SHIPPED' | 'DELIVERED';
  items: { name: string; quantity: number; price: number }[];
}

const mockOrders: Order[] = [
  {
    id: 'ORD-7392-X9',
    date: '2026-06-28',
    total: 249.98,
    status: 'SHIPPED',
    items: [
      { name: 'The Signature Collection', quantity: 1, price: 129.99 },
      { name: 'Minimalist Wardrobe', quantity: 1, price: 89.99 },
    ]
  },
  {
    id: 'ORD-8110-A2',
    date: '2026-06-25',
    total: 159.99,
    status: 'DELIVERED',
    items: [
      { name: 'Urban Exploration', quantity: 1, price: 159.99 }
    ]
  }
];

const StatusIcon = ({ status }: { status: Order['status'] }) => {
  switch (status) {
    case 'PROCESSING':
      return <Clock className="w-5 h-5 text-yellow-500" />;
    case 'SHIPPED':
      return <Truck className="w-5 h-5 text-blue-500" />;
    case 'DELIVERED':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    default:
      return <Package className="w-5 h-5 text-gray-500" />;
  }
};

export const OrderManagement = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [trackingOrderId, setTrackingOrderId] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setTimeout(() => {
          setOrders(mockOrders);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const getTrackingSteps = (status: Order['status']) => {
    const steps = ['Order Placed', 'Processing', 'Shipped', 'Delivered'];
    let currentStep = 1;
    if (status === 'PROCESSING') currentStep = 2;
    if (status === 'SHIPPED') currentStep = 3;
    if (status === 'DELIVERED') currentStep = 4;
    return { steps, currentStep };
  };

  return (
    <div className="p-8 max-w-5xl mx-auto w-full pb-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
        <p className="text-gray-500">Track and manage your recent purchases.</p>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => {
            const { steps, currentStep } = getTrackingSteps(order.status);
            const isTracking = trackingOrderId === order.id;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={order.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      {order.id}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Placed on {order.date}</p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
                      <StatusIcon status={order.status} />
                      <span className="text-sm font-medium text-gray-900">{order.status}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Total Amount</p>
                      <p className="text-lg font-bold text-gray-900">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Items</h4>
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-100">
                          <Package className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-semibold text-gray-900 text-sm">${item.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button className="px-5 py-2 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200">
                    View Invoice
                  </button>
                  <button 
                    onClick={() => setTrackingOrderId(isTracking ? null : order.id)}
                    className="px-5 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors text-sm font-medium shadow-sm shadow-purple-200"
                  >
                    {isTracking ? 'Close Tracking' : 'Track Order'}
                  </button>
                </div>

                {/* Tracking Timeline */}
                <AnimatePresence initial={false}>
                  {isTracking && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-6">Tracking Details</h4>
                        <div className="flex items-center justify-between relative px-2">
                          {/* Connecting Line */}
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 z-0 rounded-full"></div>
                          
                          {/* Animated Progress Line */}
                          <motion.div 
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-purple-600 z-0 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                          />
                          
                          {/* Steps */}
                          {steps.map((step, idx) => {
                            const isCompleted = idx < currentStep;
                            const isCurrent = idx === currentStep - 1;
                            return (
                              <div key={idx} className="relative z-10 flex flex-col items-center gap-2">
                                <motion.div 
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.2 + (idx * 0.1), type: "spring", stiffness: 300, damping: 20 }}
                                  className={`w-10 h-10 rounded-full flex items-center justify-center border-4 shadow-sm ${
                                    isCompleted ? 'bg-purple-600 border-purple-200 text-white' : 
                                    isCurrent ? 'bg-white border-purple-600 text-purple-600' : 'bg-white border-gray-100 text-gray-300'
                                  }`}
                                >
                                  {isCompleted ? <CheckCircle className="w-5 h-5" /> : <div className="w-2.5 h-2.5 rounded-full bg-current" />}
                                </motion.div>
                                <motion.span 
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 + (idx * 0.1) }}
                                  className={`text-xs font-semibold ${isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-400'}`}
                                >
                                  {step}
                                </motion.span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};
