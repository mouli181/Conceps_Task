import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ProductModal from '../../components/shared/ProductModal';
import { productsData } from '../../data/mockData';
import './StoreGrid.css';

export default function StoreGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('Nike');
  const [activeTime, setActiveTime] = useState('Today');
  const [cartCount] = useState(2);

  return (
    <DashboardLayout>
      {/* Store-specific header */}
      <div className="store-header-bar">
        <div className="store-breadcrumb">
          <span>Home</span>
          <span className="sep">›</span>
          <span>Store Client</span>
          <span className="sep">›</span>
          <span className="active">Search Results - Grid</span>
        </div>
        <div className="store-cart">
          <button className="header-icon-btn">👤</button>
          <button className="header-icon-btn">♥</button>
          <button className="cart-btn header-icon-btn" style={{ position: 'relative' }}>
            🛒
            <span className="cart-badge">{cartCount}</span>
          </button>
          <span style={{ fontSize: 13, fontWeight: 700 }}>$94.56</span>
        </div>
      </div>

      {/* Search bar */}
      <div className="search-bar-row">
        <div className="search-bar-main">
          <span style={{ color: '#9ca3af', fontSize: 14 }}>🔍</span>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search products..."
          />
          {searchQuery && (
            <button className="clear-btn" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>
        <button className="btn-filter">⚡ Filter</button>
      </div>

      {/* Results bar */}
      <div className="results-bar">
        <div>
          1 – 12 over <strong>280</strong> results for <span className="query-highlight">{searchQuery || 'All'}</span>
        </div>
        <div className="results-controls">
          <select className="sort-select">
            <option>Price High to Low</option>
            <option>Price Low to High</option>
            <option>Newest</option>
            <option>Rating</option>
          </select>
          <div className="time-filter-btns">
            {['Week', 'Today', 'Month', 'Month', 'All'].map((t, i) => (
              <button
                key={i}
                className={`time-btn ${activeTime === t && i === 1 ? 'active' : ''}`}
                onClick={() => setActiveTime(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="view-toggle">
            <button className="view-btn active">⊞</button>
            <button className="view-btn">☰</button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {productsData.map(product => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setSelectedProduct(product)}
          >
            {product.save && <span className="save-badge">SAVE {product.save}%</span>}
            <img className="product-img" src={product.img} alt={product.name} />
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-bottom">
                <span className="product-rating">⭐ {product.rating}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {product.oldPrice && <span className="product-old-price">${product.oldPrice}</span>}
                  <span className="product-price">${product.price}</span>
                  <button className="add-btn" onClick={e => e.stopPropagation()}>
                    🛒 Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom pagination */}
      <div className="bottom-row" style={{ padding: '0 24px 24px' }}>
        <div className="per-page-row">
          Show <select><option>10</option><option>20</option><option>50</option></select> Per page
        </div>
        <div className="pagination-controls">
          <button className="page-btn">‹</button>
          {[1, 2, 3, 4, 5].map(p => (
            <button key={p} className={`page-btn ${p === 1 ? 'active' : ''}`}>{p}</button>
          ))}
          <button className="page-btn">›</button>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </DashboardLayout>
  );
}
