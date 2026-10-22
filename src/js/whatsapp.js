/**
 * Shivam Sales and Furniture - WhatsApp Integration Helper
 * 
 * Implements standard wa.me format with safe URL encoding and phone fallback.
 * Strictly adheres to verified business contact number: 919023745893.
 */

import { BUSINESS_CONFIG } from './config.js';

/**
 * Builds a valid wa.me URL with safe message encoding
 * @param {string} messageText 
 * @returns {string} Fully qualified wa.me URL
 */
export function buildWhatsAppUrl(messageText) {
  const number = BUSINESS_CONFIG.whatsappNumber; // 919023745893
  const encodedText = encodeURIComponent(messageText.trim());
  return `https://wa.me/${number}?text=${encodedText}`;
}

/**
 * General showroom enquiry link
 * "Hello Shivam Sales and Furniture, I would like to know more about your products and prices."
 */
export function getGeneralEnquiryUrl() {
  const message = `Hello ${BUSINESS_CONFIG.name}, I would like to know more about your products and prices.`;
  return buildWhatsAppUrl(message);
}

/**
 * Specific product enquiry link
 * "Hello Shivam Sales and Furniture, I am interested in [Product Name]. Please share the current price, availability and details."
 * @param {string} productName 
 * @param {string} [category]
 */
export function getProductEnquiryUrl(productName, category = '') {
  const cleanName = productName || 'one of your products';
  const categoryNote = category ? ` (${category})` : '';
  const message = `Hello ${BUSINESS_CONFIG.name}, I am interested in ${cleanName}${categoryNote}. Please share the current price, availability and details.`;
  return buildWhatsAppUrl(message);
}

/**
 * Marriage gift combo enquiry link
 * "Hello Shivam Sales and Furniture, I am interested in the [Combo Name] marriage gift combo. Please share the price and items included."
 * @param {string} comboName 
 */
export function getComboEnquiryUrl(comboName) {
  const cleanName = comboName || 'Marriage Gift Combo';
  const message = `Hello ${BUSINESS_CONFIG.name}, I am interested in the ${cleanName} marriage gift combo. Please share the price and items included.`;
  return buildWhatsAppUrl(message);
}

/**
 * Custom budget / tailored package enquiry link
 * @param {string} customNote 
 */
export function getCustomComboEnquiryUrl(customNote = '') {
  const extra = customNote ? ` My requirement: ${customNote}.` : '';
  const message = `Hello ${BUSINESS_CONFIG.name}, I would like to discuss a customized marriage gift / home furniture package according to our budget.${extra} Please guide us on available options.`;
  return buildWhatsAppUrl(message);
}

/**
 * Fallback telephone direct link
 */
export function getTelephoneUrl() {
  return BUSINESS_CONFIG.phoneTelLink;
}
