import { ProductItem } from '../types';

export const products: ProductItem[] = [
  {
    id: 'prod_001',
    name: 'Peppa Pig Lunchbox',
    price: 399,
    original_price: 599,
    discount_percentage: 33,
    image_url: require('../assets/photos/peppa_pig_lunchbox.png'),
    category: 'Lunchboxes',
    badge: 'BESTSELLER',
    in_stock: true,
    rating: 4.8,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_001', name: 'Peppa Pig Lunchbox', price: 399 }, analytics: { event_name: 'add_to_cart', params: { id: 'prod_001' } } }
  },
  {
    id: 'prod_002',
    name: 'Spider-Man School Bag',
    price: 899,
    original_price: 1299,
    discount_percentage: 30,
    image_url: require('../assets/photos/spiderman_bag.png'),
    category: 'Bags',
    badge: 'NEW',
    in_stock: true,
    rating: 4.9,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_002', name: 'Spider-Man School Bag', price: 899 } }
  },
  {
    id: 'prod_003',
    name: 'Organic Baby Snacks',
    price: 199,
    original_price: 249,
    discount_percentage: 20,
    image_url: require('../assets/photos/organic_baby_food.png'),
    category: 'Snacks',
    in_stock: true,
    rating: 4.5,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_003', name: 'Organic Baby Snacks', price: 199 } }
  },
  {
    id: 'prod_004',
    name: 'Building Blocks Set',
    price: 1299,
    original_price: 1999,
    discount_percentage: 35,
    image_url: require('../assets/photos/block_sets.png'),
    category: 'Toys',
    badge: '50% OFF',
    in_stock: false,
    rating: 4.7,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_004', name: 'Building Blocks Set', price: 1299 } }
  },
  {
    id: 'prod_005',
    name: 'Cotton Baby Romper',
    price: 499,
    original_price: 799,
    discount_percentage: 37,
    image_url: require('../assets/photos/cotton_rompers.png'),
    category: 'Clothing',
    in_stock: true,
    rating: 4.6,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_005', name: 'Cotton Baby Romper', price: 499 } }
  },
  {
    id: 'prod_006',
    name: 'Pampers Premium Diapers',
    price: 1199,
    original_price: 1499,
    discount_percentage: 20,
    image_url: require('../assets/photos/pampers.png'),
    category: 'Diapers',
    badge: 'BESTSELLER',
    in_stock: true,
    rating: 4.9,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_006', name: 'Pampers Premium Diapers', price: 1199 } }
  },
  {
    id: 'prod_007',
    name: 'Sippy Cup Set',
    price: 299,
    original_price: 399,
    discount_percentage: 25,
    image_url: require('../assets/photos/sippy_cup.png'),
    category: 'Feeding',
    in_stock: true,
    rating: 4.4,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_007', name: 'Sippy Cup Set', price: 299 } }
  },
  {
    id: 'prod_008',
    name: 'Johnson Baby Bath',
    price: 349,
    original_price: 399,
    discount_percentage: 12,
    image_url: require('../assets/photos/johnson_bath.png'),
    category: 'Bath',
    in_stock: true,
    rating: 4.8,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_008', name: 'Johnson Baby Bath', price: 349 } }
  },
  {
    id: 'prod_009',
    name: 'Summer Swimwear Kids',
    price: 599,
    original_price: 899,
    discount_percentage: 33,
    image_url: require('../assets/photos/swim_wear.png'),
    category: 'Summer',
    badge: 'NEW',
    in_stock: true,
    rating: 4.7,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_009', name: 'Summer Swimwear Kids', price: 599 } }
  },
  {
    id: 'prod_010',
    name: 'Kids Water Bottle',
    price: 249,
    original_price: 349,
    discount_percentage: 28,
    image_url: require('../assets/photos/water_bottles.png'),
    category: 'Lunchboxes',
    in_stock: true,
    rating: 4.5,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_010', name: 'Kids Water Bottle', price: 249 } }
  },
  {
    id: 'prod_011',
    name: 'Unicorn Backpack',
    price: 999,
    original_price: 1499,
    discount_percentage: 33,
    image_url: require('../assets/photos/unicorn_backpack.png'),
    category: 'Bags',
    badge: 'BESTSELLER',
    in_stock: true,
    rating: 4.9,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_011', name: 'Unicorn Backpack', price: 999 } }
  },
  {
    id: 'prod_012',
    name: 'Fruit Puffs Snack',
    price: 149,
    original_price: 199,
    discount_percentage: 25,
    image_url: require('../assets/photos/fruit_puffs.png'),
    category: 'Snacks',
    in_stock: true,
    rating: 4.3,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_012', name: 'Fruit Puffs Snack', price: 149 } }
  },
  {
    id: 'prod_013',
    name: 'Remote Control Car',
    price: 1499,
    original_price: 2499,
    discount_percentage: 40,
    image_url: require('../assets/photos/rc_car.png'),
    category: 'Toys',
    in_stock: true,
    rating: 4.6,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_013', name: 'Remote Control Car', price: 1499 } }
  },
  {
    id: 'prod_014',
    name: 'Baby Sunscreen',
    price: 449,
    original_price: 599,
    discount_percentage: 25,
    image_url: require('../assets/photos/baby_sunscreens.png'),
    category: 'Summer',
    in_stock: true,
    rating: 4.8,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_014', name: 'Baby Sunscreen', price: 449 } }
  },
  {
    id: 'prod_015',
    name: 'Dinosaur T-Shirt',
    price: 399,
    original_price: 599,
    discount_percentage: 33,
    image_url: require('../assets/photos/dinosaur_tshirt.png'),
    category: 'Clothing',
    in_stock: true,
    rating: 4.5,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_015', name: 'Dinosaur T-Shirt', price: 399 } }
  },
  {
    id: 'prod_016',
    name: 'Huggies Wipes',
    price: 199,
    original_price: 249,
    discount_percentage: 20,
    image_url: require('../assets/photos/huggies_wipes.png'),
    category: 'Diapers',
    in_stock: true,
    rating: 4.7,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_016', name: 'Huggies Wipes', price: 199 } }
  },
  {
    id: 'prod_017',
    name: 'Silicone Bibs',
    price: 349,
    original_price: 499,
    discount_percentage: 30,
    image_url: require('../assets/photos/silicone_bibs.png'),
    category: 'Feeding',
    in_stock: true,
    rating: 4.6,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_017', name: 'Silicone Bibs', price: 349 } }
  },
  {
    id: 'prod_018',
    name: 'Hooded Towel',
    price: 499,
    original_price: 799,
    discount_percentage: 37,
    image_url: require('../assets/photos/hooded_towel.png'),
    category: 'Bath',
    in_stock: true,
    rating: 4.8,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_018', name: 'Hooded Towel', price: 499 } }
  },
  {
    id: 'prod_019',
    name: 'Pool Float Flamingo',
    price: 799,
    original_price: 1199,
    discount_percentage: 33,
    image_url: require('../assets/photos/floats.png'),
    category: 'Summer',
    badge: 'NEW',
    in_stock: true,
    rating: 4.9,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_019', name: 'Pool Float Flamingo', price: 799 } }
  },
  {
    id: 'prod_020',
    name: 'Stainless Steel Bento',
    price: 899,
    original_price: 1299,
    discount_percentage: 30,
    image_url: require('../assets/photos/stainless_bento.png'),
    category: 'Lunchboxes',
    in_stock: true,
    rating: 4.7,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_020', name: 'Stainless Steel Bento', price: 899 } }
  },
  {
    id: 'prod_021',
    name: 'Batman School Bag',
    price: 949,
    original_price: 1399,
    discount_percentage: 32,
    image_url: require('../assets/photos/batman_bag.png'),
    category: 'Bags',
    in_stock: false,
    rating: 4.8,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_021', name: 'Batman School Bag', price: 949 } }
  },
  {
    id: 'prod_022',
    name: 'Yogurt Melts',
    price: 249,
    original_price: 299,
    discount_percentage: 16,
    image_url: require('../assets/photos/yogurt_melts.png'),
    category: 'Snacks',
    in_stock: true,
    rating: 4.5,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_022', name: 'Yogurt Melts', price: 249 } }
  },
  {
    id: 'prod_023',
    name: 'Play-Doh Set',
    price: 599,
    original_price: 899,
    discount_percentage: 33,
    image_url: require('../assets/photos/play_doh.png'),
    category: 'Toys',
    badge: 'BESTSELLER',
    in_stock: true,
    rating: 4.9,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_023', name: 'Play-Doh Set', price: 599 } }
  },
  {
    id: 'prod_024',
    name: 'Party Dress Girl',
    price: 1299,
    original_price: 1999,
    discount_percentage: 35,
    image_url: require('../assets/photos/party_dress.png'),
    category: 'Clothing',
    in_stock: true,
    rating: 4.8,
    action: { type: 'ADD_TO_CART', payload: { id: 'prod_024', name: 'Party Dress Girl', price: 1299 } }
  }
];

export const getProductsByCategory = (category: string): ProductItem[] => {
  return products.filter(p => p.category === category);
};

export const getProductsForGrid = (count: number): ProductItem[] => {
  return products.slice(0, count);
};

export const getProductsForCollection = (category: string, count: number): ProductItem[] => {
  return products.filter(p => p.category === category).slice(0, count);
};
