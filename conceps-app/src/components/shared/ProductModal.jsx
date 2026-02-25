import React from 'react';
import './ProductModal.css';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Product Details</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-img-wrap">
          <img src={product.img} alt={product.name} />
          {product.save && <span className="modal-save-badge">SAVE {product.save}%</span>}
          <div className="modal-brand-logo">✓</div>
        </div>

        <div className="modal-body">
          <h4>{product.name}</h4>
          <p className="pdesc">
            Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.
          </p>

          <table className="product-meta-table">
            <tbody>
              <tr>
                <td className="meta-key">Availaility</td>
                <td className="meta-val"><span className="in-stock-badge">In Stock</span></td>
              </tr>
              <tr>
                <td className="meta-key">SKU</td>
                <td className="meta-val">SH-001-BLK-42</td>
              </tr>
              <tr>
                <td className="meta-key">Category</td>
                <td className="meta-val">Sneakers</td>
              </tr>
              <tr>
                <td className="meta-key">Rating</td>
                <td className="meta-val">
                  <span style={{ color: '#f59e0b' }}>
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="meta-key">Mor Info</td>
                <td className="meta-val" style={{ fontSize: 12, color: '#6b7280' }}>10g powder, powder measure & water dispensing bottle (empty)</td>
              </tr>
            </tbody>
          </table>

          <div className="modal-price-row">
            {product.oldPrice && <span className="old">${product.oldPrice.toFixed(2)}</span>}
            <span className="new">${product.price.toFixed(2)}</span>
          </div>

          <button className="btn-add-cart">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
