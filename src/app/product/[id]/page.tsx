"use client";

import React, { useState } from 'react';
import { MessageSquare, Heart, Zap, ChevronRight } from 'lucide-react';
import styles from './page.module.css';

export default function ProductDetail() {
  const [activeThumb, setActiveThumb] = useState(1);
  const [activeSize, setActiveSize] = useState('XL');

  const mainImage = `https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop`;

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <span>Store &gt; Clothes &gt; Dresses &gt; Short dresses</span>
        <span>Dresses by River Island</span>
      </div>

      <div className={styles.grid}>
        {/* LEFT COLUMN */}
        <div className={styles.leftCol}>
          <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
              <img src={mainImage} alt="Dark Short Dress" />
            </div>
            <div className={styles.thumbnails}>
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`${styles.thumb} ${activeThumb === i ? styles.thumbActive : ''}`}
                  onClick={() => setActiveThumb(i)}
                >
                  <img src={mainImage} alt={`Thumb ${i}`} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sellerOtherItems}>
            <h4>Clothes by Ekaterina Polyanskaya</h4>
            <div className={styles.otherItem}>
              <div className={styles.otherItemImg}></div>
              <div className={styles.otherItemInfo}>
                <h5>Jackets and Blazers</h5>
                <p>2 400 ₽</p>
              </div>
            </div>
            <div className={styles.otherItem}>
              <div className={styles.otherItemImg}></div>
              <div className={styles.otherItemInfo}>
                <h5>Hoodie</h5>
                <p>500 ₽</p>
              </div>
            </div>
            <button className={styles.moreItemsBtn}>More items</button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.rightCol}>
          <div className={styles.header}>
            <div className={styles.titleBox}>
              <h1>Dark Short Dress</h1>
              <p>River Island</p>
            </div>
            <div className={styles.headerActions}>
              <button className={styles.actionBtn}><MessageSquare size={16} /> Message</button>
              <button className={styles.actionBtn}><Heart size={16} /> Favorite</button>
            </div>
          </div>

          <div className={styles.specs}>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Condition:</span>
              <span className={styles.tagNew}>New</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Brand:</span>
              <span className={styles.specValue}>River Island</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Color:</span>
              <span className={styles.specValue}>Dark milk</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Category:</span>
              <span className={styles.specValue}>Short dresses</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Material:</span>
              <span className={styles.specValue}>Cotton</span>
            </div>
          </div>

          <div className={styles.description}>
            Cloak, elegant, new, color - a spray of champagne. Pro-in Italy. Marked in size 42. For those who like
            (and can) wear raincoats (high heels, red lipstick, etc.), an excellent new thing for the golden autumn.
          </div>

          <div className={styles.actionBox}>
            <div className={styles.sizes}>
              <span className={styles.sizeLabel}>Size:</span>
              <div className={styles.sizeBtns}>
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button 
                    key={size}
                    className={`${styles.sizeBtn} ${activeSize === size ? styles.sizeBtnActive : ''}`}
                    onClick={() => setActiveSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <span className={styles.sizeTableLink}>Size table</span>
            </div>

            <div className={styles.priceRow}>
              <span className={styles.price}>2 400 ₽</span>
              <span className={styles.oldPrice}>2 899 ₽</span>
              <button className={styles.buyBtn}>Buy dress</button>
              <span className={styles.fastOrderLink}><Zap size={16} /> Fast order</span>
            </div>
          </div>

          <div className={styles.deliveryBox}>
            <div className={styles.deliveryRow}>
              <span style={{color: 'var(--text-dark)'}}>Delivery to <strong>Saint-Petersburg</strong></span>
              <span style={{fontSize: '11px'}}>Select your city and find out about the possible ways of delivery.</span>
            </div>
            <div className={styles.deliveryRow}>
              <div className={styles.deliveryMethod}>Russian Post</div>
              <span>8 to 12 days</span>
              <span className={styles.deliveryPrice}>300 ₽</span>
            </div>
            <div className={styles.deliveryRow}>
              <div className={styles.deliveryMethod}>EMS Express</div>
              <span>2 to 3 days</span>
              <span className={styles.deliveryPrice}>600 ₽</span>
            </div>
          </div>

          <div className={styles.sellerBox}>
            <div className={styles.sellerHeader}>
              <div className={styles.sellerProfile}>
                <div className={styles.sellerAvatar}></div>
                <div>
                  <div className={styles.sellerName}>Ekaterina Polyanskaya <span style={{color:'#2bcbba'}}>👍 12</span> <span style={{color:'#ff7675'}}>👎 3</span></div>
                  <div className={styles.sellerRole}>Seller, Ekaterinburg</div>
                </div>
              </div>
              <div className={styles.sellerButtons}>
                <button className={styles.sellerBtn}>Follow</button>
                <button className={styles.sellerBtn}>Message</button>
              </div>
            </div>
            <div className={styles.sellerStats}>
              <div className={styles.statItem}><span>23</span> items</div>
              <div className={styles.statItem}><span>186</span> followers</div>
              <div className={styles.statItem}><span>12</span> sell</div>
              <div className={styles.statItem}><span>15</span> reviews</div>
              <div style={{color: 'var(--text-muted)'}}>Last visit yesterday at 12:24</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
