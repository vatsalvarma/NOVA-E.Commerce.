"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, MapPin, Search } from 'lucide-react';
import styles from './tracking.module.css';

export default function OrderTracking() {
  const steps = [
    { id: 1, title: 'Order Placed', desc: 'We have received your order', icon: Package, date: 'Oct 24, 09:30 AM', completed: true },
    { id: 2, title: 'Processing', desc: 'Your order is being prepared', icon: Package, date: 'Oct 25, 11:15 AM', completed: true },
    { id: 3, title: 'On the Way', desc: 'Out for delivery', icon: Truck, date: 'Oct 26, 08:00 AM', completed: true, current: true },
    { id: 4, title: 'Delivered', desc: 'Order has been delivered', icon: CheckCircle, date: 'Expected Oct 26', completed: false },
  ];

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.header}
      >
        <h1>Live Order Tracking</h1>
        <p>Enter your order ID to track your package in real-time</p>
      </motion.div>

      <motion.div 
        className={styles.searchBox}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Search size={20} className={styles.searchIcon} />
        <input type="text" placeholder="e.g. NS-84729104" defaultValue="NS-84729104" />
        <button className="btn-primary">Track</button>
      </motion.div>

      <div className={styles.trackerWrapper}>
        <div className={styles.mapContainer}>
           <div className={styles.mockMap}>
              {/* Decorative Map Pattern */}
              <motion.div 
                className={styles.pulseDot}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin size={24} fill="var(--primary)" color="white" />
              </motion.div>
           </div>
        </div>

        <div className={styles.timelineContainer}>
          <h3>Order Status</h3>
          <p className={styles.orderId}>Order #NS-84729104</p>
          
          <div className={styles.timeline}>
            {steps.map((step, index) => (
              <motion.div 
                key={step.id} 
                className={`${styles.step} ${step.completed ? styles.completed : ''} ${step.current ? styles.current : ''}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
              >
                <div className={styles.stepIconWrap}>
                  <step.icon size={20} />
                  {index < steps.length - 1 && <div className={styles.line}></div>}
                </div>
                <div className={styles.stepInfo}>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                  <span className={styles.stepDate}>{step.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
