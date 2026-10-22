/**
 * Shivam Sales and Furniture - Global Script
 * Handles announcement bar, navigation drawer, modals, floating WhatsApp, and footer.
 */

import { BUSINESS_CONFIG } from './config.js';
import { getGeneralEnquiryUrl, getProductEnquiryUrl, getComboEnquiryUrl, getTelephoneUrl } from './whatsapp.js';
import { PRODUCTS, MARRIAGE_COMBOS } from './products-data.js';

document.addEventListener('DOMContentLoaded', () => {
  initAnnouncementBar();
  initHeaderScroll();
  initMobileDrawer();
  initFloatingWhatsApp();
  initDynamicYear();
  initShowroomSection();
  initGlobalModals();
});

/**
 * Announcement Bar
 */
function initAnnouncementBar() {
  const bar = document.getElementById('announcementBar');
  if (!bar) return;

  const cfg = BUSINESS_CONFIG.announcement;
  if (!cfg || !cfg.enabled || !cfg.text) {
    bar.hidden = true;
    return;
  }

  bar.hidden = false;
  const content = bar.querySelector('.announcement-content');
  if (content) {
    content.innerHTML = `
      ${cfg.badge ? `<span class="announcement-badge">${cfg.badge}</span>` : ''}
      <span class="announcement-text">${cfg.text}</span>
      ${cfg.actionText && cfg.actionLink ? `
        <a href="${cfg.actionLink}" class="announcement-link">
          ${cfg.actionText}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      ` : ''}
    `;
  }
}

/**
 * Sticky Header shadow on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * Accessible Mobile Navigation Drawer
 */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('mobileDrawerClose');
  const backdrop = drawer ? drawer.querySelector('.mobile-drawer-backdrop') : null;
  const links = drawer ? drawer.querySelectorAll('.mobile-nav-link') : [];

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  links.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/**
 * Floating WhatsApp CTA
 */
function initFloatingWhatsApp() {
  const floatingBtn = document.getElementById('floatingWhatsApp');
  if (!floatingBtn) return;

  floatingBtn.href = getGeneralEnquiryUrl();
  floatingBtn.setAttribute('target', '_blank');
  floatingBtn.setAttribute('rel', 'noopener noreferrer');
}

/**
 * Dynamic Footer Copyright Year
 */
function initDynamicYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Showroom Location Section (Configurable - never invented)
 */
function initShowroomSection() {
  const container = document.getElementById('showroomLocationDetails');
  if (!container) return;

  const loc = BUSINESS_CONFIG.location;
  const hours = BUSINESS_CONFIG.hours;

  if (loc && loc.isLocationConfigured && loc.addressLine1) {
    container.innerHTML = `
      <div class="showroom-detail-item">
        <svg class="showroom-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <div>
          <div class="showroom-detail-label">Showroom Address</div>
          <div class="showroom-detail-val">
            ${loc.addressLine1}${loc.addressLine2 ? `<br>${loc.addressLine2}` : ''}
            ${loc.city ? `<br>${loc.city}, ${loc.state} ${loc.pincode}` : ''}
            ${loc.landmark ? `<br><small>Landmark: ${loc.landmark}</small>` : ''}
          </div>
        </div>
      </div>
      <div class="showroom-detail-item">
        <svg class="showroom-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <div>
          <div class="showroom-detail-label">Showroom Hours</div>
          <div class="showroom-detail-val">${hours.timings}</div>
        </div>
      </div>
      <div class="showroom-detail-item">
        <svg class="showroom-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <div>
          <div class="showroom-detail-label">Showroom Phone</div>
          <div class="showroom-detail-val">
            <a href="${getTelephoneUrl()}" style="color:var(--color-walnut); font-weight:600;">${BUSINESS_CONFIG.displayPhone}</a>
          </div>
        </div>
      </div>
    `;
  } else {
    // Graceful unconfigured state
    container.innerHTML = `
      <div class="showroom-unconfigured-notice">
        <strong>Showroom Visit & Inquiries:</strong><br>
        Physical showroom address details are pending confirmation by the store owner.<br>
        Please contact us directly on WhatsApp or phone for directions, personalized showroom consultation, and current showcase availability.
      </div>
      <div class="showroom-detail-item" style="margin-top: 1rem;">
        <svg class="showroom-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <div>
          <div class="showroom-detail-label">Direct Contact Phone</div>
          <div class="showroom-detail-val">
            <a href="${getTelephoneUrl()}" style="color:var(--color-walnut); font-weight:600;">${BUSINESS_CONFIG.displayPhone}</a>
          </div>
        </div>
      </div>
    `;
  }
}

/**
 * Global Modals (Product quick view & Combo items breakdown)
 */
function initGlobalModals() {
  const productModal = document.getElementById('productDetailModal');
  const comboModal = document.getElementById('comboDetailModal');

  // Close buttons
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const dialog = e.target.closest('dialog');
      if (dialog) dialog.close();
    });
  });

  // Light dismiss when clicking backdrop
  [productModal, comboModal].forEach(dialog => {
    if (!dialog) return;
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
      }
    });
  });
}

/**
 * Opens Product Quick View Modal
 * @param {string} productId 
 */
export function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  const modal = document.getElementById('productDetailModal');
  if (!product || !modal) return;

  const titleEl = modal.querySelector('#modalProductTitle');
  const imgEl = modal.querySelector('#modalProductImg');
  const catEl = modal.querySelector('#modalProductCategory');
  const descEl = modal.querySelector('#modalProductDesc');
  const featuresEl = modal.querySelector('#modalProductFeatures');
  const priceEl = modal.querySelector('#modalProductPrice');
  const waBtn = modal.querySelector('#modalProductWaBtn');
  const callBtn = modal.querySelector('#modalProductCallBtn');

  if (titleEl) titleEl.textContent = product.name;
  if (imgEl) {
    imgEl.src = product.image;
    imgEl.alt = product.name;
  }
  if (catEl) catEl.textContent = product.categoryLabel;
  if (descEl) descEl.textContent = product.shortDescription;
  
  if (featuresEl) {
    featuresEl.innerHTML = product.features.map(f => `
      <li style="display:flex; align-items:center; gap:8px; font-size:0.875rem; color:var(--color-charcoal-muted); margin-bottom:6px;">
        <span style="color:var(--color-brass-dark); font-weight:bold;">✓</span> ${f}
      </li>
    `).join('');
  }

  if (priceEl) {
    priceEl.textContent = product.price ? `₹${product.price.toLocaleString('en-IN')}` : 'Contact for price';
  }

  if (waBtn) {
    waBtn.href = getProductEnquiryUrl(product.name, product.categoryLabel);
  }

  if (callBtn) {
    callBtn.href = getTelephoneUrl();
  }

  modal.showModal();
}

/**
 * Opens Marriage Combo Breakdown Modal
 * @param {string} comboId 
 */
export function openComboModal(comboId) {
  const combo = MARRIAGE_COMBOS.find(c => c.id === comboId);
  const modal = document.getElementById('comboDetailModal');
  if (!combo || !modal) return;

  const titleEl = modal.querySelector('#modalComboTitle');
  const imgEl = modal.querySelector('#modalComboImg');
  const badgeEl = modal.querySelector('#modalComboBadge');
  const budgetEl = modal.querySelector('#modalComboBudget');
  const descEl = modal.querySelector('#modalComboDesc');
  const itemsListEl = modal.querySelector('#modalComboItems');
  const customListEl = modal.querySelector('#modalComboCustom');
  const waBtn = modal.querySelector('#modalComboWaBtn');

  if (titleEl) titleEl.textContent = combo.name;
  if (imgEl) {
    imgEl.src = combo.image;
    imgEl.alt = combo.name;
  }
  if (badgeEl) badgeEl.textContent = combo.badge;
  if (budgetEl) budgetEl.textContent = combo.budgetTier;
  if (descEl) descEl.textContent = combo.description;

  if (itemsListEl) {
    itemsListEl.innerHTML = combo.itemsIncluded.map(item => `
      <li style="display:flex; align-items:flex-start; gap:8px; font-size:0.875rem; color:var(--color-charcoal); margin-bottom:8px; line-height:1.4;">
        <span style="color:var(--color-brass-dark); font-weight:bold; margin-top:1px;">✓</span>
        <span>${item}</span>
      </li>
    `).join('');
  }

  if (customListEl && combo.customizationOptions) {
    customListEl.innerHTML = combo.customizationOptions.map(opt => `
      <li style="font-size:0.8125rem; color:var(--color-charcoal-muted); margin-bottom:4px;">
        • ${opt}
      </li>
    `).join('');
  }

  if (waBtn) {
    waBtn.href = getComboEnquiryUrl(combo.name);
  }

  modal.showModal();
}

// Expose modal openers to window for inline onclick handlers if needed
window.openProductModal = openProductModal;
window.openComboModal = openComboModal;
