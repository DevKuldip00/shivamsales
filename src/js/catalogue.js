/**
 * Shivam Sales and Furniture - Product Catalogue Filter & Search
 * Supports category selection via URL parameter, real-time text search, and empty state.
 */

import { PRODUCTS, CATEGORIES } from './products-data.js';
import { getProductEnquiryUrl } from './whatsapp.js';

let activeCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const paramCat = urlParams.get('category');
  const isAppliancesPage = window.location.pathname.includes('appliances');

  if (isAppliancesPage) {
    activeCategory = 'appliances';
  } else if (paramCat) {
    activeCategory = paramCat;
  }

  setupFilterPills();
  setupSearchInput();
  renderProducts();
});

function setupFilterPills() {
  const filterContainer = document.getElementById('catalogueFilterPills');
  if (!filterContainer) return;

  const pills = filterContainer.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    const cat = pill.getAttribute('data-category');
    if (cat === activeCategory) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }

    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = cat;
      renderProducts();
    });
  });
}

function setupSearchInput() {
  const input = document.getElementById('catalogueSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');

  if (!input) return;

  input.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    if (clearBtn) {
      clearBtn.style.display = searchQuery ? 'block' : 'none';
    }
    renderProducts();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      renderProducts();
      input.focus();
    });
  }
}

function renderProducts() {
  const grid = document.getElementById('catalogueProductsGrid');
  const emptyState = document.getElementById('catalogueEmptyState');
  const countEl = document.getElementById('productsCount');

  if (!grid) return;

  let filtered = PRODUCTS;

  // Filter by category
  if (activeCategory && activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

  // Filter by search text
  if (searchQuery) {
    filtered = filtered.filter(p => {
      const matchName = p.name.toLowerCase().includes(searchQuery);
      const matchCat = p.categoryLabel.toLowerCase().includes(searchQuery);
      const matchDesc = p.shortDescription.toLowerCase().includes(searchQuery);
      const matchFeat = p.features && p.features.some(f => f.toLowerCase().includes(searchQuery));
      return matchName || matchCat || matchDesc || matchFeat;
    });
  }

  // Update counter
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? '' : 's'}`;
  }

  // Handle empty state
  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(prod => {
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
            ${prod.features.slice(0, 3).map(f => `<span class="feature-pill">${f}</span>`).join('')}
          </div>

          <div class="product-card-footer">
            <div class="product-price-row">
              <span class="product-price-label">Price:</span>
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

// Reset filters button handler
window.resetCatalogueFilters = function() {
  activeCategory = 'all';
  searchQuery = '';
  const input = document.getElementById('catalogueSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';

  const filterContainer = document.getElementById('catalogueFilterPills');
  if (filterContainer) {
    const pills = filterContainer.querySelectorAll('.filter-pill');
    pills.forEach(p => {
      if (p.getAttribute('data-category') === 'all') p.classList.add('active');
      else p.classList.remove('active');
    });
  }

  renderProducts();
};
