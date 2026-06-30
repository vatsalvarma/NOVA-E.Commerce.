"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Grid, Tag, Star, Award, Layers, ShoppingBag, Heart, Ticket, MapPin, User, HeadphonesIcon, Sun, Moon, X } from 'lucide-react';
import { useStore } from '@/store/useStore';
import styles from './Sidebar.module.css';

const menuItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Grid, label: 'Categories' },
  { icon: Tag, label: 'Deals', badge: 'Hot' },
  { icon: Star, label: 'New Arrivals' },
  { icon: Award, label: 'Best Sellers' },
  { icon: Layers, label: 'Brands' },
  { icon: ShoppingBag, label: 'Collections' },
  { icon: ShoppingBag, label: 'My Orders', spacer: true },
  { icon: Heart, label: 'Wishlist' },
  { icon: Ticket, label: 'Coupons' },
  { icon: MapPin, label: 'Addresses' },
  { icon: User, label: 'Account Settings' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme, isSidebarOpen, toggleSidebar } = useStore();

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`} data-lenis-prevent>
      <div className={styles.logo}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <ShoppingBag className={styles.logoIcon} size={28} />
          <h2>NovaShop</h2>
        </div>
        <button className={styles.mobileClose} onClick={toggleSidebar}>
          <X size={24} />
        </button>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item, index) => {
          const itemHref = item.label === 'My Orders' ? '/tracking' : '/';
          const isActive = item.label === 'My Orders' ? pathname === '/tracking' : (item.label === 'Home' && pathname === '/');
          
          return (
          <React.Fragment key={index}>
            {item.spacer && <div className={styles.divider}></div>}
            <Link href={itemHref} className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
              <item.icon size={20} className={styles.navIcon} />
              <span>{item.label}</span>
              {item.badge && <span className="badge">{item.badge}</span>}
            </Link>
          </React.Fragment>
          );
        })}
      </nav>

      <div className={styles.support}>
        <HeadphonesIcon size={24} className={styles.supportIcon} />
        <div>
          <h4>Need Help?</h4>
          <p>24/7 Support Center</p>
        </div>
      </div>

      <button className={styles.themeToggle} onClick={toggleTheme}>
        {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
        <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    </aside>
  );
}
