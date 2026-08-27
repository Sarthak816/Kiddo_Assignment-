import { SDUIPayload } from '../../types';
import backToSchool from './backToSchool';
import summerPlayhouse from './summerPlayhouse';
import mysteryGiftCarnival from './mysteryGiftCarnival';
import edgeCases from './edgeCases';

export const campaignMap: Record<string, SDUIPayload> = {
  'back-to-school-2024': backToSchool,
  'summer-playhouse-2024': summerPlayhouse,
  'mystery-gift-carnival-2024': mysteryGiftCarnival,
  'edge-cases-2024': edgeCases,
};

export const getCampaign = (id: string): SDUIPayload | null => {
  return campaignMap[id] || null;
};

export const campaignIds: string[] = Object.keys(campaignMap);

export const defaultCampaignId: string = 'back-to-school-2024';
