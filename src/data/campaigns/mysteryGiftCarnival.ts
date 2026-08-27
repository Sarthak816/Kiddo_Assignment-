import { SDUIPayload } from '../../types';
import { getProductsForGrid, getProductsForCollection } from '../products';

const mysteryGiftCarnival: SDUIPayload = {
  version: '1.0.0',
  campaign_id: 'mystery-gift-carnival-2024',
  campaign_name: 'Mystery Gift Carnival',
  theme: {
    primary: '#DC143C',
    secondary: '#FFD700',
    background: '#1A1A2E',
    surface: '#292942',
    accent: '#FF00FF',
    text_primary: '#FFFFFF',
    text_secondary: '#CCCCCC',
    cta_background: '#FFD700',
    cta_text: '#000000',
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
    animation_url: 'confettiBurst',
    animation_type: 'lottie',
    loop: false,
    pointer_events: 'none',
  },
  blocks: [
    {
      id: 'mystery-hero-1',
      type: 'BANNER_HERO',
      position: 1,
      image_url: require('../../assets/photos/play_doh.png'),
      title: 'Mystery Gift Carnival! Unwrap the Magic',
      action: { type: 'NAVIGATE', payload: { screen: 'Carnival' } },
      aspect_ratio: 2,
    },
    {
      id: 'mystery-cat-strip',
      type: 'CATEGORY_STRIP',
      position: 2,
      categories: [
        { id: 'cat-myst', icon_url: require('../../assets/photos/mystery_carnival_poster.png'), label: 'Mystery Boxes', action: { type: 'NAVIGATE', payload: { category: 'Mystery' } } },
        { id: 'cat-gift', icon_url: require('../../assets/photos/rc_car.png'), label: 'Gift Sets', action: { type: 'NAVIGATE', payload: { category: 'Gifts' } } },
        { id: 'cat-party', icon_url: require('../../assets/photos/mystery_carnival_poster.png'), label: 'Party Supplies', action: { type: 'NAVIGATE', payload: { category: 'Party' } } },
        { id: 'cat-decor', icon_url: require('../../assets/photos/unicorn_backpack.png'), label: 'Decorations', action: { type: 'NAVIGATE', payload: { category: 'Decor' } } },
        { id: 'cat-costume', icon_url: require('../../assets/photos/party_dress.png'), label: 'Costumes', action: { type: 'NAVIGATE', payload: { category: 'Costumes' } } },
      ]
    },
    {
      id: 'mystery-dyn-col-1',
      type: 'DYNAMIC_COLLECTION',
      position: 3,
      title: 'Mystery Gift Boxes',
      scroll_direction: 'horizontal',
      item_layout: 'card',
      items: [
        { id: 'mb-1', title: 'Silver Box', subtitle: '₹999', image_url: require('../../assets/photos/mystery_carnival_poster.png'), action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { box_id: 'silver' } } },
        { id: 'mb-2', title: 'Gold Box', subtitle: '₹1999', image_url: require('../../assets/photos/mystery_carnival_poster.png'), action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { box_id: 'gold' } } },
        { id: 'mb-3', title: 'Diamond Box', subtitle: '₹2999', image_url: require('../../assets/photos/mystery_carnival_poster.png'), action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { box_id: 'diamond' } } },
      ]
    },
    {
      id: 'mystery-grid-1',
      type: 'PRODUCT_GRID_2X2',
      position: 4,
      title: 'Party Essentials',
      products: getProductsForCollection('Toys', 4),
      columns: 2
    },
    {
      id: 'mystery-timer-1',
      type: 'COUNTDOWN_TIMER',
      position: 5,
      title: 'Carnival Ends In',
      end_time: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'mystery-dyn-col-2',
      type: 'DYNAMIC_COLLECTION',
      position: 6,
      title: 'Gift Sets Under ₹499',
      scroll_direction: 'horizontal',
      item_layout: 'compact',
      items: getProductsForCollection('Snacks', 5).map(p => ({
        id: p.id,
        title: p.name,
        image_url: p.image_url,
        action: p.action
      }))
    },
    {
      id: 'mystery-quick-links',
      type: 'QUICK_LINKS_ROW',
      position: 7,
      links: [
        { id: 'mql-spin', icon_url: require('../../assets/photos/Baby_Gear_Main_Banner.webp'), label: 'Spin to Win', action: { type: 'NAVIGATE', payload: { screen: 'SpinWheel' } } },
        { id: 'mql-rules', icon_url: require('../../assets/photos/Toys_Main_Banner.webp'), label: 'Carnival Rules', action: { type: 'OPEN_URL', payload: { url: 'https://kiddo.com/carnival' } } },
      ]
    },
    {
      id: 'mystery-grid-2',
      type: 'PRODUCT_GRID_2X2',
      position: 8,
      title: 'Costumes & Dress-Up',
      products: getProductsForCollection('Clothing', 4),
      columns: 2
    },
    {
      id: 'mystery-hero-2',
      type: 'BANNER_HERO',
      position: 9,
      image_url: require('../../assets/photos/Boys_Main_Banner.webp'),
      title: 'Apply Mystery Coupon for Extra 20% Off',
      action: { type: 'NAVIGATE', payload: { screen: 'Coupons' } },
      aspect_ratio: 2.66,
    },
  ],
  metadata: {
    generated_at: new Date().toISOString(),
    region: 'IN',
    user_segment: 'premium',
    ab_test_variants: {}
  }
};

export default mysteryGiftCarnival;
