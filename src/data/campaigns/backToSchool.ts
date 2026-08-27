import { SDUIPayload } from '../../types';
import { getProductsForGrid, getProductsForCollection } from '../products';

const backToSchool: SDUIPayload = {
  version: '1.0.0',
  campaign_id: 'back-to-school-2024',
  campaign_name: 'Back to School Mega-Sale',
  theme: {
    primary: '#FFD700',
    secondary: '#0066CC',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    accent: '#FF4500',
    text_primary: '#333333',
    text_secondary: '#666666',
    cta_background: '#0066CC',
    cta_text: '#FFFFFF',
    border_radius: { sm: 4, md: 8, lg: 12, xl: 16 },
    spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
    typography: {
      heading: { fontSize: 24, fontWeight: 'bold', lineHeight: 32 },
      subheading: { fontSize: 18, fontWeight: '600', lineHeight: 24 },
      body: { fontSize: 14, fontWeight: 'normal', lineHeight: 20 },
      caption: { fontSize: 12, fontWeight: 'normal', lineHeight: 16 },
      cta: { fontSize: 16, fontWeight: 'bold', lineHeight: 24 },
    },
    animation: { duration_fast: 150, duration_normal: 300, duration_slow: 500, easing: 'ease-in-out' },
  },
  overlay: {
    animation_url: 'paperAirplane',
    animation_type: 'lottie',
    loop: true,
    pointer_events: 'none',
  },
  blocks: [
    {
      id: 'block-hero-1',
      type: 'BANNER_HERO',
      position: 1,
      image_url: require('../../assets/photos/back_to_school_poster.png'),
      title: 'Back to School Mega-Sale! Up to 60% Off',
      action: { type: 'NAVIGATE', payload: { screen: 'SaleList' } },
      aspect_ratio: 2,
    },
    {
      id: 'block-cat-strip-1',
      type: 'CATEGORY_STRIP',
      position: 2,
      categories: [
        { id: 'cat-bags', icon_url: require('../../assets/photos/spiderman_bag.png'), label: 'School Bags', action: { type: 'NAVIGATE', payload: { category: 'Bags' } } },
        { id: 'cat-lunchboxes', icon_url: require('../../assets/photos/peppa_pig_lunchbox.png'), label: 'Lunchboxes', action: { type: 'NAVIGATE', payload: { category: 'Lunchboxes' } } },
        { id: 'cat-water', icon_url: require('../../assets/photos/water_bottles.png'), label: 'Water Bottles', action: { type: 'NAVIGATE', payload: { category: 'Water' } } },
        { id: 'cat-stat', icon_url: require('../../assets/photos/Girl_Main_Banner.webp'), label: 'Stationery', action: { type: 'NAVIGATE', payload: { category: 'Stationery' } } },
        { id: 'cat-uniform', icon_url: require('../../assets/photos/Books_Main_Banner.webp'), label: 'Uniforms', action: { type: 'NAVIGATE', payload: { category: 'Uniforms' } } },
      ]
    },
    {
      id: 'block-timer-1',
      type: 'COUNTDOWN_TIMER',
      position: 3,
      title: 'Sale Ends In',
      end_time: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'block-dyn-col-1',
      type: 'DYNAMIC_COLLECTION',
      position: 4,
      title: 'Lunchboxes & Bags',
      scroll_direction: 'horizontal',
      item_layout: 'card',
      items: getProductsForCollection('Lunchboxes', 3).concat(getProductsForCollection('Bags', 3)).map(p => ({
        id: p.id,
        title: p.name,
        subtitle: `₹${p.price}`,
        image_url: p.image_url,
        action: p.action
      }))
    },
    {
      id: 'block-grid-1',
      type: 'PRODUCT_GRID_2X2',
      position: 5,
      title: 'Top Picks for School',
      products: getProductsForGrid(4),
      columns: 2
    },
    {
      id: 'block-dyn-col-2',
      type: 'DYNAMIC_COLLECTION',
      position: 6,
      title: 'Snacks Under ₹99',
      scroll_direction: 'horizontal',
      item_layout: 'compact',
      items: getProductsForCollection('Snacks', 6).map(p => ({
        id: p.id,
        title: p.name,
        image_url: p.image_url,
        action: p.action
      }))
    },
    {
      id: 'block-quick-links',
      type: 'QUICK_LINKS_ROW',
      position: 7,
      links: [
        { id: 'ql-offers', icon_url: require('../../assets/photos/41Fr0hXWn6L.jpg'), label: 'Offers', action: { type: 'NAVIGATE', payload: { screen: 'Offers' } } },
        { id: 'ql-new', icon_url: require('../../assets/photos/61nd7NqagVL._SX466.webp'), label: 'New Arrivals', action: { type: 'NAVIGATE', payload: { screen: 'NewArrivals' } } },
        { id: 'ql-trend', icon_url: require('../../assets/photos/OIP.jpg'), label: 'Trending', action: { type: 'NAVIGATE', payload: { screen: 'Trending' } } },
        { id: 'ql-gift', icon_url: require('../../assets/photos/Baby_Gear_Main_Banner.webp'), label: 'Gift Cards', action: { type: 'NAVIGATE', payload: { screen: 'GiftCards' } } },
      ]
    },
    {
      id: 'block-grid-2',
      type: 'PRODUCT_GRID_2X2',
      position: 8,
      title: 'Water Bottles & Sippers',
      products: getProductsForCollection('Lunchboxes', 4), // reusing lunchboxes as water bottles mock
      columns: 2
    },
    {
      id: 'block-hero-2',
      type: 'BANNER_HERO',
      position: 9,
      image_url: require('../../assets/photos/Toys_Main_Banner.webp'),
      title: 'Free Delivery on Orders ₹499+',
      action: { type: 'NAVIGATE', payload: { screen: 'Cart' } },
      aspect_ratio: 2.66,
    },
    {
      id: 'block-unsupported',
      type: 'NEW_COMPONENT_V2',
      position: 10,
      title: 'This should fail gracefully'
    },
  ],
  metadata: {
    generated_at: new Date().toISOString(),
    region: 'IN',
    user_segment: 'parents',
    ab_test_variants: { home_layout: 'variant_a' }
  }
};

export default backToSchool;
