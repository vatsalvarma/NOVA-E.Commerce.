import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { RightSidebar } from './RightSidebar';
import { AnimatePresence, motion } from 'framer-motion';

export const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 ml-64 mr-80 flex flex-col h-screen overflow-hidden">
        <Topbar />
        
        <div className="flex-1 overflow-y-auto custom-scrollbar relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      
      <RightSidebar />
    </div>
  );
};
