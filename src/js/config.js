/**
 * Shivam Sales and Furniture - Centralized Business Configuration
 * 
 * IMPORTANT: This file contains all business contact details, showroom settings,
 * announcements, and WhatsApp configuration. The business owner can update
 * these values here without having to edit HTML or component files.
 */

export const BUSINESS_CONFIG = {
  // Business Identification
  name: "Shivam Sales and Furniture",
  shortName: "Shivam Sales",
  tagline: "Everything for Your Home. Thoughtful Gifts for Every New Beginning.",
  
  // WhatsApp & Phone Contact
  // Owner provided WhatsApp contact number: 9023745893
  // Verified Indian international format: 919023745893 (wa.me format)
  countryCode: "91",
  rawPhoneNumber: "9023745893",
  whatsappNumber: "919023745893",
  displayPhone: "+91 90237 45893",
  phoneTelLink: "tel:+919023745893",

  // Announcement Bar Configuration
  // Set enabled to false or leave text empty to auto-hide the announcement bar
  announcement: {
    enabled: true,
    badge: "Wedding Season Special",
    text: "Explore our curated Marriage Gift Combos & Complete Home Furniture Sets.",
    actionText: "View Combos",
    actionLink: "combos.html"
  },

  // Showroom Location Configuration
  // Keep address, city, map link and opening hours configurable. Never invent them.
  // When isLocationConfigured is false, the UI gracefully displays showroom enquiry details.
  location: {
    isLocationConfigured: false, // Set to true once verified address is supplied by owner
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    googleMapsEmbedUrl: "",
    googleMapsDirectionUrl: ""
  },

  // Showroom Timings Configuration
  // Configurable: Set isHoursConfigured to true once confirmed by owner
  hours: {
    isHoursConfigured: false, // Set to true once confirmed
    days: "Monday - Sunday",
    timings: "10:00 AM - 8:30 PM (Timings to be confirmed by owner)",
    note: "Showroom timings will be confirmed upon inquiry."
  },

  // Social & Web Links
  socials: {
    instagram: "", // Leave empty if not yet active
    facebook: "",
    youtube: ""
  },

  // Disclaimers & Notes
  catalogNotice: {
    isDevelopmentMode: true,
    noticeText: "Demo Catalogue: All inventory, prices, brands and custom combo packages are subject to showroom verification and owner customization."
  }
};
