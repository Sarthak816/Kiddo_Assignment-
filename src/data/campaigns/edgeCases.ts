import { SDUIPayload } from '../../types';

const edgeCases: SDUIPayload = {
  version: '1.0.0',
  campaign_id: 'edge-cases-2024',
  campaign_name: 'Edge Cases Test',
  theme: {
    primary: '',
    secondary: 'invalid-color',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    accent: '#FF4500',
    text_primary: '#333333',
    text_secondary: '#666666',
    cta_background: '#0066CC',
    cta_text: '#FFFFFF',
    border_radius: { sm: -4, md: 8, lg: 12, xl: 16 },
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
  blocks: [
    {
      id: 'bad-hero',
      type: 'BANNER_HERO',
      position: 1,
      image_url: '', // missing
      title: '', // empty
      action: { type: 'INVALID_ACTION', payload: {} },
    },
    {
      id: 'bad-grid',
      type: 'PRODUCT_GRID_2X2',
      position: 2,
      title: 'Empty Grid',
      products: [], // empty
    },
    {
      id: 'unknown-block',
      type: 'WIDGET_BETA_V3',
      position: 3,
      some_data: 'test'
    },
    {
      id: 'bad-timer',
      type: 'COUNTDOWN_TIMER',
      position: 4,
      title: 'Past Timer',
      end_time: '2020-01-01T00:00:00Z',
    },
    {
      id: 'null-fields',
      type: 'DYNAMIC_COLLECTION',
      position: 5,
      title: null,
      items: null,
    } as any
  ],
  metadata: {
    generated_at: new Date().toISOString(),
    region: 'IN',
    user_segment: 'testers',
    ab_test_variants: {}
  }
};

export default edgeCases;
