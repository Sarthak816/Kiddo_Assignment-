import { SDUIPayload } from '../../types';
import { getProductsForGrid, getProductsForCollection } from '../products';

const summerPlayhouse: SDUIPayload = {
  version: '1.0.0',
  campaign_id: 'summer-playhouse-2024',
  campaign_name: 'Summer Playhouse Festival',
  theme: {
    primary: '#00BFFF',
    secondary: '#F4A460',
    background: '#FFF8DC',
    surface: '#FFFFFF',
    accent: '#FF4500',
    text_primary: '#333333',
    text_secondary: '#666666',
    cta_background: '#00BFFF',
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
    animation_url: 'waterSplash',
    animation_type: 'webp',
    loop: true,
    pointer_events: 'none',
  },
  blocks: [
    {
      id: 'summer-hero-1',
      type: 'BANNER_HERO',
      position: 1,
      image_url: require('../../assets/photos/summer_adventure_poster.png'),
      title: 'Summer Playhouse Festival! Fun in the Sun',
      action: { type: 'NAVIGATE', payload: { screen: 'SummerSale' } },
      aspect_ratio: 2,
    },
    {
      id: 'summer-cat-strip',
      type: 'CATEGORY_STRIP',
      position: 2,
      categories: [
        { id: 'cat-beach', icon_url: require('../../assets/photos/beach_toys.png'), label: 'Beach Toys', action: { type: 'NAVIGATE', payload: { category: 'Beach' } } },
        { id: 'cat-swim', icon_url: require('../../assets/photos/swim_wear.png'), label: 'Swimwear', action: { type: 'NAVIGATE', payload: { category: 'Swimwear' } } },
        { id: 'cat-sun', icon_url: require('../../assets/photos/baby_sunscreens.png'), label: 'Sunscreen', action: { type: 'NAVIGATE', payload: { category: 'Sunscreen' } } },
        { id: 'cat-pool', icon_url: require('../../assets/photos/floats.png'), label: 'Pool Floats', action: { type: 'NAVIGATE', payload: { category: 'Pool' } } },
        { id: 'cat-outdoor', icon_url: require('../../assets/photos/outdoor_games.png'), label: 'Outdoor Games', action: { type: 'NAVIGATE', payload: { category: 'Outdoor' } } },
      ]
    },
    {
      id: 'summer-dyn-col-1',
      type: 'DYNAMIC_COLLECTION',
      position: 3,
      title: 'Beach & Pool Essentials',
      scroll_direction: 'horizontal',
      item_layout: 'card',
      items: getProductsForCollection('Summer', 6).map(p => ({
        id: p.id,
        title: p.name,
        subtitle: `₹${p.price}`,
        image_url: p.image_url,
        action: p.action
      }))
    },
    {
      id: 'summer-grid-1',
      type: 'PRODUCT_GRID_2X2',
      position: 4,
      title: 'Summer Must-Haves',
      products: getProductsForGrid(4),
      columns: 2
    },
    {
      id: 'summer-timer-1',
      type: 'COUNTDOWN_TIMER',
      position: 5,
      title: 'Festival Ends In',
      end_time: new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'summer-dyn-col-2',
      type: 'DYNAMIC_COLLECTION',
      position: 6,
      title: 'Petting Zoo Tickets & Events',
      scroll_direction: 'horizontal',
      item_layout: 'wide',
      items: [
        { id: 'evt-1', title: 'City Petting Zoo', subtitle: 'Book Now', image_url: require('../../assets/photos/petting_zoo.png'), action: { type: 'NAVIGATE', payload: { screen: 'Event', id: 'evt-1' } } },
        { id: 'evt-2', title: 'Summer Kids Camp', subtitle: 'Register', image_url: require('../../assets/photos/summer_camps.png'), action: { type: 'NAVIGATE', payload: { screen: 'Event', id: 'evt-2' } } },
      ]
    },
    {
      id: 'summer-grid-2',
      type: 'PRODUCT_GRID_2X2',
      position: 7,
      title: 'Cool Summer Clothing',
      products: getProductsForCollection('Clothing', 4),
      columns: 2
    },
    {
      id: 'summer-quick-links',
      type: 'QUICK_LINKS_ROW',
      position: 8,
      links: [
        { id: 'sql-summer', icon_url: require('../../assets/photos/OIP.jpg'), label: 'Summer Shop', action: { type: 'NAVIGATE', payload: { screen: 'SummerShop' } } },
        { id: 'sql-deals', icon_url: require('../../assets/photos/Baby_Gear_Main_Banner.webp'), label: 'Daily Deals', action: { type: 'NAVIGATE', payload: { screen: 'DailyDeals' } } },
      ]
    },
    {
      id: 'summer-hero-2',
      type: 'BANNER_HERO',
      position: 9,
      image_url: require('../../assets/photos/summer_adventure_poster.png'),
      title: 'Summer Clearance Sale',
      action: { type: 'NAVIGATE', payload: { screen: 'Clearance' } },
      aspect_ratio: 2.66,
    },
  ],
  metadata: {
    generated_at: new Date().toISOString(),
    region: 'IN',
    user_segment: 'all',
    ab_test_variants: {}
  }
};

export default summerPlayhouse;
