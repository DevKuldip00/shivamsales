/**
 * Shivam Sales and Furniture - Marriage Combos Dedicated Script
 * Renders full marriage gift combos catalogue, item breakdowns, and custom budget enquiry.
 */

import { MARRIAGE_COMBOS } from './products-data.js';
import { getComboEnquiryUrl, getCustomComboEnquiryUrl } from './whatsapp.js';
import { openComboModal } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  renderAllCombos();
  setupCustomEnquiryForm();
});

function renderAllCombos() {
  const container = document.getElementById('combosListContainer');
  if (!container) return;

  container.innerHTML = MARRIAGE_COMBOS.map(combo => {
    const waUrl = getComboEnquiryUrl(combo.name);

    return `
      <article class="combo-card" data-combo-id="${combo.id}">
        <div class="combo-card-media" onclick="window.openComboModal('${combo.id}')" role="button" tabindex="0" aria-label="View combo details for ${combo.name}">
          <img src="${combo.image}" alt="${combo.name}" class="combo-card-img" loading="lazy" width="600" height="375">
          <span class="combo-card-badge">${combo.badge}</span>
        </div>
        <div class="combo-card-content">
          <span class="combo-budget-tag">${combo.budgetTier}</span>
          <h2 class="combo-card-title">${combo.name}</h2>
          <p class="combo-card-tagline">${combo.tagline}</p>

          <div class="combo-items-box">
            <div class="combo-items-header">
              <span>Included Items (${combo.itemsIncluded.length} Items)</span>
              <span class="badge badge-brass" style="font-size:0.65rem;">Configurable</span>
            </div>
            <div class="combo-items-list">
              ${combo.itemsIncluded.map(item => `
                <div class="combo-item-row">
                  <span class="combo-item-check">✓</span>
                  <span>${item}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="combo-card-footer">
            <div class="combo-price-block">
              <span class="combo-price-status">Contact for package price</span>
              <span class="combo-price-subnote">${combo.priceNote}</span>
            </div>
            <div class="combo-card-actions">
              <button type="button" class="btn btn-outline" onclick="window.openComboModal('${combo.id}')" aria-label="View specifications for ${combo.name}">
                Breakdown & Options
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

function setupCustomEnquiryForm() {
  const customBtn = document.getElementById('customBudgetWaBtn');
  const customInput = document.getElementById('customBudgetInput');

  if (customBtn) {
    customBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const note = customInput ? customInput.value.trim() : '';
      const url = getCustomComboEnquiryUrl(note);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }
}
