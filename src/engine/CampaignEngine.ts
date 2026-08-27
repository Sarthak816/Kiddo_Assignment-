import { SDUIPayload } from '../types';
import backToSchool from '../data/campaigns/backToSchool';
import summerPlayhouse from '../data/campaigns/summerPlayhouse';
import mysteryGiftCarnival from '../data/campaigns/mysteryGiftCarnival';
import edgeCases from '../data/campaigns/edgeCases';

const campaigns: Record<string, SDUIPayload> = {
  'back-to-school-2024': backToSchool as SDUIPayload,
  'summer-playhouse-2024': summerPlayhouse as SDUIPayload,
  'mystery-gift-carnival-2024': mysteryGiftCarnival as SDUIPayload,
  'edge-cases': edgeCases as SDUIPayload,
};

export const loadCampaign = (campaignId: string): SDUIPayload | null => {
  const data = campaigns[campaignId];
  if (!data) {
    console.warn(`[CampaignEngine] Campaign not found: ${campaignId}`);
    return null;
  }
  return validateAndSanitizePayload(data);
};

export const getAllCampaignIds = (): string[] => {
  return Object.keys(campaigns);
};

export const getDefaultCampaignId = (): string => {
  return 'back-to-school-2024';
};

export const validateAndSanitizePayload = (payload: any): SDUIPayload => {
  if (!payload) {
    throw new Error('Payload is null or undefined');
  }

  // Provide safe defaults for missing fields
  return {
    version: payload.version || '1.0.0',
    campaign_id: payload.campaign_id || 'unknown',
    campaign_name: payload.campaign_name || 'Unknown Campaign',
    theme: payload.theme || {
      primary: '#FF6B35',
      secondary: '#004E98',
      background: '#FFFFFF',
      surface: '#F8F9FA',
      accent: '#FFD166',
      text_primary: '#2B2D42',
      text_secondary: '#8D99AE',
      cta_background: '#EF233C',
      cta_text: '#FFFFFF',
      border_radius: { sm: 4, md: 8, lg: 12, xl: 16 },
      spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
      typography: {
        heading: { fontSize: 24, fontWeight: '700', lineHeight: 32 },
        subheading: { fontSize: 18, fontWeight: '600', lineHeight: 24 },
        body: { fontSize: 14, fontWeight: '400', lineHeight: 20 },
        caption: { fontSize: 12, fontWeight: '400', lineHeight: 16 },
        cta: { fontSize: 16, fontWeight: '600', lineHeight: 24 },
      },
      animation: { duration_fast: 200, duration_normal: 300, duration_slow: 500, easing: 'ease-in-out' },
    },
    overlay: payload.overlay || undefined,
    blocks: Array.isArray(payload.blocks) ? payload.blocks.filter((b: any) => b != null) : [],
    metadata: payload.metadata || {
      generated_at: new Date().toISOString(),
      region: 'IN',
      user_segment: 'all',
      ab_test_variants: {},
    },
  };
};
