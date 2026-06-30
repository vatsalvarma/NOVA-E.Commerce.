"use client";

import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '@/store/useStore';
import styles from './RightSidebar.module.css';
import Image from 'next/image';
import toast from 'react-hot-toast';

export default function RightSidebar() {
  const { cart, cartTotal, cartSubtotal, discount, shipping, updateQuantity, removeFromCart, isCartOpen, toggleCart } = useStore();

  return (
    <>
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart} />
      <aside className={`right-sidebar ${isCartOpen ? 'open' : ''}`} data-lenis-prevent>
        <div className={styles.header}>
          <h3>My Cart ({cart.length})</h3>
          <button className={styles.closeBtn} onClick={toggleCart}><X size={20} /></button>
        </div>

      <div className={styles.cartList}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.itemImage}>
              {/* Using a colored div as placeholder if image fails, but Next Image is preferred */}
              <div style={{ width: '100%', height: '100%', background: '#f0f0f0', borderRadius: '12px' }} />
            </div>
            <div className={styles.itemDetails}>
              <h4>{item.name}</h4>
              <p>{item.category}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>${item.price.toFixed(2)}</span>
                <div className={styles.quantityControl}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                </div>
                <button className={styles.deleteBtn} onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <div className={styles.promoCode}>
          <input type="text" placeholder="Promo Code" />
          <button className="btn-primary" style={{ padding: '8px 16px', borderRadius: '8px' }}>Apply</button>
        </div>

        <div className={styles.summaryRow}>
          <span>Subtotal</span>
          <span>${cartSubtotal.toFixed(2)}</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Discount</span>
          <span className={styles.discountText}>-${discount.toFixed(2)}</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Shipping</span>
          <span className={styles.shippingText}>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className={`${styles.summaryRow} ${styles.totalRow}`}>
          <span>Total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>

        <button className={`btn-primary ${styles.checkoutBtn}`} onClick={() => toast.success('Proceeding to checkout!')}>
          Lock Checkout ({cart.length})
        </button>
        
        <div className={styles.payments}>
          We accept: 
          <span>VISA</span>
          <span>MC</span>
          <span>PayPal</span>
        </div>
      </div>
    </aside>
    </>
  );
}
