/**
 * Shivam Sales and Furniture - Centralized Product and Combo Catalogue
 * 
 * NOTE FOR STORE OWNER:
 * - Update, add or remove items easily in this file.
 * - If a price is known, set price: 45000 (number in INR). If unknown, keep price: null.
 * - When price is null, the site displays "Contact for price".
 * - Brand names and stock specifications can be added when verified.
 */

export const CATEGORIES = [
  {
    id: "marriage-combos",
    name: "Marriage Gift Combos",
    shortDescription: "Curated wedding gift packages combining bedroom sets, sofas, televisions, and essential appliances.",
    image: "/images/cat-combos.jpg",
    featuredBadge: "Showroom Special",
    isSpecial: true,
    pageLink: "combos.html"
  },
  {
    id: "sofas-living",
    name: "Sofas & Living Room",
    shortDescription: "Handcrafted wooden sofas, 3-seaters, sectional sets, and elegant living room centerpieces.",
    image: "/images/cat-sofas.jpg",
    featuredBadge: "Popular",
    isSpecial: false,
    pageLink: "furniture.html?category=sofas-living"
  },
  {
    id: "beds-bedroom",
    name: "Beds & Bedroom",
    shortDescription: "Solid wood king & queen beds, hydraulic storage beds, matching nightstands, and wardrobes.",
    image: "/images/cat-beds.jpg",
    featuredBadge: "Premium Wood",
    isSpecial: false,
    pageLink: "furniture.html?category=beds-bedroom"
  },
  {
    id: "tv-units",
    name: "TV Units & Entertainment",
    shortDescription: "Modern fluted consoles, wall-mounted entertainment centers, and smart television displays.",
    image: "/images/cat-tv-units.jpg",
    featuredBadge: "Modern",
    isSpecial: false,
    pageLink: "furniture.html?category=tv-units"
  },
  {
    id: "appliances",
    name: "Refrigerators & Home Appliances",
    shortDescription: "Double-door refrigerators, direct-cool models, microwaves, and daily household electronics.",
    image: "/images/cat-appliances.jpg",
    featuredBadge: "Appliances",
    isSpecial: false,
    pageLink: "appliances.html"
  },
  {
    id: "other",
    name: "Dining & Household Furniture",
    shortDescription: "Teak dining sets, crockery almirahs, dressing tables, and versatile household furniture.",
    image: "/images/cat-dining.jpg",
    featuredBadge: "Heritage",
    isSpecial: false,
    pageLink: "furniture.html?category=other"
  }
];

export const MARRIAGE_COMBOS = [
  {
    id: "combo-shubh-aarambh",
    name: "Shubh Aarambh Marriage Combo",
    badge: "Most Popular Package",
    budgetTier: "Starter Essential Set (Budget Configurable)",
    tagline: "Thoughtfully balanced starter wedding gift package for fresh beginnings.",
    image: "/images/combo-shubh-aarambh.jpg",
    price: null, // "Contact for package price"
    priceNote: "Customizable based on selected appliances & wood finishes",
    isFeatured: true,
    description: "A coordinated wedding gift combo featuring a double bed with bedside tables, a comfortable 3-seater sofa, a brand-new refrigerator, television, and traditional gift packing.",
    itemsIncluded: [
      "1x Double Bed with Carved Wooden Headboard",
      "2x Matching Wooden Bedside Tables",
      "1x Elegant 3-Seater Fabric Living Sofa",
      "1x Single-Door Refrigerator (Size Options Available)",
      "1x Smart LED Television",
      "1x Solid Wood Center Coffee Table",
      "Coordinated Shagun Gift Packaging & Hamper Boxes"
    ],
    customizationOptions: [
      "Option to upgrade bed to hydraulic lift-up storage",
      "Choice of sofa fabric colours (Beige, Warm Grey, Maroon, Cream)",
      "Selection of appliance capacity to suit family requirements"
    ]
  },
  {
    id: "combo-royal-rajwada",
    name: "Royal Rajwada Vivah Combo",
    badge: "Heritage Teak Grand Package",
    budgetTier: "Royal Heritage Suite (Budget Configurable)",
    tagline: "Lavish hand-carved teak master bedroom set with grand wardrobe, velvet sofa & double-door refrigerator.",
    image: "/images/combo-royal-rajwada.jpg",
    price: null,
    priceNote: "Contact showroom for current package quotes",
    isFeatured: true,
    description: "An opulent wedding celebration package crafted for grand celebrations. Features rich teak wood carvings, matching 3-door wardrobe, full vanity dressing table, velvet living sofa, and large double-door refrigerator.",
    itemsIncluded: [
      "1x Royal Hand-Carved Teak Wood King Bed",
      "1x Grand 3-Door Matching Carved Wooden Wardrobe / Almirah",
      "1x Dedicated Vanity Dressing Table with High-Arc Mirror & Stool",
      "2x Intricately Carved Bedside Nightstands",
      "1x Royal Velvet Living Room Sofa with Carved Teak Frame",
      "1x Frost-Free Double Door Refrigerator",
      "1x Large Smart LED Television",
      "1x Ornate Carved Center Coffee Table",
      "Traditional Shagun Ceremony Gift Boxes & Festive Hampers"
    ],
    customizationOptions: [
      "Available in Antique Walnut Polish or Natural Teak Glow",
      "Customizable wardrobe internal shelf configurations",
      "Appliance model adjustments upon showroom consultation"
    ]
  },
  {
    id: "combo-modern-anand",
    name: "Anand Modern Living Combo",
    badge: "Contemporary City Set",
    budgetTier: "Executive Urban Package (Budget Configurable)",
    tagline: "Clean, contemporary aesthetics tailored for modern homes and compact spaces.",
    image: "/images/combo-modern-anand.jpg",
    price: null,
    priceNote: "Flexible combinations according to room dimensions",
    isFeatured: true,
    description: "Specially designed for modern apartments and young couples. Combines a minimalist walnut finish king bed with an L-shaped sectional sofa, 3-door sliding wardrobe, smart TV, and frost-free refrigerator.",
    itemsIncluded: [
      "1x Contemporary Walnut Finish Bed with Padded Headboard",
      "1x 3-Door Modern Sliding Wardrobe with Hanging & Drawer Space",
      "1x Modern Cream L-Shaped Sectional Living Room Sofa",
      "1x Frost-Free Inverter Refrigerator",
      "1x 43-Inch Smart LED Television",
      "1x Designer Walnut Media Console & Coffee Table",
      "Elegant Contemporary Wedding Gift Hamper Boxes"
    ],
    customizationOptions: [
      "Left-hand or right-hand sectional sofa orientation",
      "Wardrobe mirror door option",
      "Custom appliance sizing available on request"
    ]
  },
  {
    id: "combo-grihashobha-full",
    name: "Grihashobha Complete Home Bridal Combo",
    badge: "Full Home Setup",
    budgetTier: "11-Piece Complete Home Package (Budget Configurable)",
    tagline: "The all-in-one comprehensive solution covering master bedroom, living lounge, dining and kitchen.",
    image: "/images/cat-combos.jpg",
    price: null,
    priceNote: "Comprehensive package pricing upon consultation",
    isFeatured: false,
    description: "The complete bridal home setup designed to furnish a full house in one seamless arrangement. Covers master bedroom suite, living room seating, dining room suite, and primary home appliances.",
    itemsIncluded: [
      "1x Solid Wood King Size Storage Bed with Mattress Support",
      "1x 4-Door Matching Wardrobe with Full-Length Dressing Mirror",
      "1x 5-Seater Living Room Sofa Suite (3+1+1 Setup)",
      "1x 6-Seater Solid Teak Dining Table & Matching Padded Chairs",
      "1x Double-Door Refrigerator (Frost Free)",
      "1x Microwave Oven & Chimney Package",
      "1x 50-Inch Smart LED Television",
      "1x Matching TV Wall Console",
      "2x Bedside Tables & 1x Center Glass-Top Coffee Table",
      "Ceremonial Wedding Gift Packing with Ribbon Hampers"
    ],
    customizationOptions: [
      "Full room layout customization with showroom guidance",
      "Mix-and-match furniture polish and fabric tones",
      "Flexible schedule for showroom delivery coordination"
    ]
  }
];

export const PRODUCTS = [
  {
    id: "prod-sofa-teak-3seater",
    name: "Handcrafted Teak Wood 3-Seater Sofa",
    category: "sofas-living",
    categoryLabel: "Sofas & Living Room",
    image: "/images/prod-teak-sofa.jpg",
    brand: null, // Verified on showroom visit
    price: null, // "Contact for price"
    availability: "Available to Order",
    isFeatured: true,
    isDemo: true,
    shortDescription: "Premium solid teak frame with warm beige textured linen cushions and brass-capped tapered feet.",
    features: [
      "Seasoned solid teak wood frame",
      "High-density ergonomic foam cushions",
      "Brushed brass foot detail",
      "Removable & washable cushion covers"
    ]
  },
  {
    id: "prod-bed-hydraulic-king",
    name: "Solid Sheesham King Bed with Hydraulic Storage",
    category: "beds-bedroom",
    categoryLabel: "Beds & Bedroom",
    image: "/images/prod-hydraulic-bed.jpg",
    brand: null,
    price: null,
    availability: "Available to Order",
    isFeatured: true,
    isDemo: true,
    shortDescription: "Spacious king size bed in natural Sheesham wood with tufted headboard and smooth gas-lift hydraulic storage.",
    features: [
      "Heavy-duty pneumatic gas lifts for effortless opening",
      "Padded tufted headboard in neutral camel tone",
      "Termite-resistant seasoned timber",
      "Dual partition under-bed storage space"
    ]
  },
  {
    id: "prod-sofa-curved-lounge",
    name: "Classic Curved Armrest Teak Living Sofa",
    category: "sofas-living",
    categoryLabel: "Sofas & Living Room",
    image: "/images/cat-sofas.jpg",
    brand: null,
    price: null,
    availability: "In Showroom Display",
    isFeatured: true,
    isDemo: true,
    shortDescription: "Gracefully curved solid wood armrests with premium woven upholstery and matching accent cushions.",
    features: [
      "Graceful arched armrest profile",
      "Polished walnut wood finish",
      "Durable stain-resistant fabric",
      "Pairs with matching 1-seater armchairs"
    ]
  },
  {
    id: "prod-bed-walnut-royal",
    name: "Walnut Finish King Bed with Tufted Headboard",
    category: "beds-bedroom",
    categoryLabel: "Beds & Bedroom",
    image: "/images/cat-beds.jpg",
    brand: null,
    price: null,
    availability: "In Showroom Display",
    isFeatured: true,
    isDemo: true,
    shortDescription: "Master bedroom suite bed featuring deep button-tufted headboard and coordinated dual nightstands.",
    features: [
      "Deep diamond tufted padded backrest",
      "Matching 3-drawer nightstands available",
      "Solid wooden slats foundation",
      "Warm antique brass handle hardware"
    ]
  },
  {
    id: "prod-tv-fluted-console",
    name: "Fluted Panel Walnut TV Entertainment Unit",
    category: "tv-units",
    categoryLabel: "TV Units & Entertainment",
    image: "/images/cat-tv-units.jpg",
    brand: null,
    price: null,
    availability: "In Showroom Display",
    isFeatured: true,
    isDemo: true,
    shortDescription: "Floor-standing low console with vertical fluted slatted accents, brass hardware and back panel support.",
    features: [
      "Concealed wire management channels",
      "Soft-close cabinet doors with brass pulls",
      "Accommodates up to 65-inch screen sizes",
      "Matching fluted wall panel extension"
    ]
  },
  {
    id: "prod-refrigerator-double-door",
    name: "Double-Door Frost-Free Inverter Refrigerator",
    category: "appliances",
    categoryLabel: "Refrigerators & Appliances",
    image: "/images/cat-appliances.jpg",
    brand: null, // Verified on showroom visit
    price: null,
    availability: "Enquire for Brand & Stock",
    isFeatured: true,
    isDemo: true,
    shortDescription: "Energy-efficient frost-free refrigerator in brushed metallic dark steel finish with smart cooling technology.",
    features: [
      "Inverter compressor technology for quiet efficiency",
      "Multi-airflow cooling vents for uniform freshness",
      "Toughened glass adjustable shelves",
      "Available across leading showroom brands"
    ]
  },
  {
    id: "prod-dining-teak-6seater",
    name: "Solid Teak 6-Seater Dining Set & Chairs",
    category: "other",
    categoryLabel: "Dining & Household Furniture",
    image: "/images/cat-dining.jpg",
    brand: null,
    price: null,
    availability: "Available to Order",
    isFeatured: true,
    isDemo: true,
    shortDescription: "Substantial solid teak dining table accompanied by six cushioned oval-back dining chairs with brass feet.",
    features: [
      "100% solid timber construction",
      "Upholstered comfort seat cushions",
      "Heat & water-resistant polish protective coat",
      "Matching glass-front crockery almirah available"
    ]
  },
  {
    id: "prod-living-curated-interior",
    name: "Coordinated Living Room Suite",
    category: "sofas-living",
    categoryLabel: "Sofas & Living Room",
    image: "/images/hero-interior.jpg",
    brand: null,
    price: null,
    availability: "Custom Suite",
    isFeatured: false,
    isDemo: true,
    shortDescription: "Complete coordinated living room collection including 3-seater sofa, accent armchairs, coffee table and wall unit.",
    features: [
      "Harmonious ivory and walnut palette",
      "Tailored upholstery fabrics",
      "Modular arrangement options",
      "Showroom consultation available for custom dimensions"
    ]
  }
];
