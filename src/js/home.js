/**
 * Shivam Sales and Furniture - Homepage Script
 * Renders Shop by Category, Featured Products, and Featured Marriage Combos.
 */

import { CATEGORIES, PRODUCTS, MARRIAGE_COMBOS } from './products-data.js';
import { getProductEnquiryUrl, getComboEnquiryUrl, getGeneralEnquiryUrl } from './whatsapp.js';
import { openProductModal, openComboModal } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderFeaturedProducts();
  renderFeaturedCombos();
  setupHeroCtas();
});

/**
 * Renders Category Cards
 */
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;

  grid.innerHTML = CATEGORIES.map(cat => `
    <a href="${cat.pageLink}" class="category-card ${cat.isSpecial ? 'special-combo' : ''}" aria-label="Explore ${cat.name}">
      <div class="category-card-media">
        <img src="${cat.image}" alt="${cat.name}" class="category-card-img" loading="lazy" width="400" height="300">
        ${cat.featuredBadge ? `<span class="badge ${cat.isSpecial ? 'badge-popular' : 'badge-brass'} category-card-badge">${cat.featuredBadge}</span>` : ''}
      </div>
      <div class="category-card-content">
        <h3 class="category-card-title">${cat.name}</h3>
        <p class="category-card-desc">${cat.shortDescription}</p>
        <div class="category-card-link-text">
          <span>Explore Collection</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </a>
  `).join('');
}

/**
 * Renders Featured Products
 */
function renderFeaturedProducts() {
  const grid = document.getElementById('featuredProductsGrid');
  if (!grid) return;

  const featured = PRODUCTS.filter(p => p.isFeatured).slice(0, 6);

  grid.innerHTML = featured.map(prod => {
    const waUrl = getProductEnquiryUrl(prod.name, prod.categoryLabel);
    const priceDisplay = prod.price ? `₹${prod.price.toLocaleString('en-IN')}` : 'Contact for price';

    return `
      <article class="product-card" data-product-id="${prod.id}">
        <div class="product-card-media" onclick="window.openProductModal('${prod.id}')" role="button" tabindex="0" aria-label="Quick view ${prod.name}">
          <img src="${prod.image}" alt="${prod.name}" class="product-card-img" loading="lazy" width="400" height="300">
          <div class="product-card-badges">
            <span class="badge badge-demo">Demo Item</span>
            <span class="badge badge-walnut">${prod.availability}</span>
          </div>
        </div>
        <div class="product-card-content">
          <div class="product-card-meta">
            <span class="product-category-tag">${prod.categoryLabel}</span>
            <span class="product-brand-tag">Verified on visit</span>
          </div>
          <h3 class="product-card-title" onclick="window.openProductModal('${prod.id}')">${prod.name}</h3>
          <p class="product-card-desc">${prod.shortDescription}</p>
          
          <div class="product-features-preview">
            ${prod.features.slice(0, 2).map(f => `<span class="feature-pill">${f}</span>`).join('')}
          </div>

          <div class="product-card-footer">
            <div class="product-price-row">
              <span class="product-price-label">Showroom Price:</span>
              <span class="product-price-unverified">${priceDisplay}</span>
            </div>
            <div class="product-actions">
              <button type="button" class="btn btn-outline btn-sm" onclick="window.openProductModal('${prod.id}')" aria-label="View details for ${prod.name}">
                Details
              </button>
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" aria-label="Enquire on WhatsApp about ${prod.name}">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                Enquire
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Renders Featured Marriage Combos (Prominent Section)
 */
function renderFeaturedCombos() {
  const container = document.getElementById('featuredCombosContainer');
  if (!container) return;

  const featured = MARRIAGE_COMBOS.filter(c => c.isFeatured).slice(0, 2);

  container.innerHTML = featured.map(combo => {
    const waUrl = getComboEnquiryUrl(combo.name);
    const itemsPreview = combo.itemsIncluded.slice(0, 4);

    return `
      <article class="combo-card" data-combo-id="${combo.id}">
        <div class="combo-card-media" onclick="window.openComboModal('${combo.id}')" role="button" tabindex="0" aria-label="View combo details for ${combo.name}">
          <img src="${combo.image}" alt="${combo.name}" class="combo-card-img" loading="lazy" width="600" height="375">
          <span class="combo-card-badge">${combo.badge}</span>
        </div>
        <div class="combo-card-content">
          <span class="combo-budget-tag">${combo.budgetTier}</span>
          <h3 class="combo-card-title">${combo.name}</h3>
          <p class="combo-card-tagline">${combo.tagline}</p>

          <div class="combo-items-box">
            <div class="combo-items-header">
              <span>What's Included (${combo.itemsIncluded.length} Items)</span>
              <span class="badge badge-brass" style="font-size:0.65rem;">Customizable</span>
            </div>
            <div class="combo-items-list">
              ${itemsPreview.map(item => `
                <div class="combo-item-row">
                  <span class="combo-item-check">✓</span>
                  <span>${item}</span>
                </div>
              `).join('')}
              ${combo.itemsIncluded.length > 4 ? `
                <div style="font-size:0.75rem; color:var(--color-brass-dark); font-weight:600; margin-top:2px;">
                  + ${combo.itemsIncluded.length - 4} more included items & packaging
                </div>
              ` : ''}
            </div>
          </div>

          <div class="combo-card-footer">
            <div class="combo-price-block">
              <span class="combo-price-status">Contact for package price</span>
              <span class="combo-price-subnote">${combo.priceNote}</span>
            </div>
            <div class="combo-card-actions">
              <button type="button" class="btn btn-outline" onclick="window.openComboModal('${combo.id}')" aria-label="View all items in ${combo.name}">
                View Included Items
              </button>
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" aria-label="Enquire on WhatsApp about ${combo.name}">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Connect Hero CTA buttons
 */
function setupHeroCtas() {
  const waHeroBtn = document.getElementById('heroWaBtn');
  if (waHeroBtn) {
    waHeroBtn.href = getGeneralEnquiryUrl();
  }
}
