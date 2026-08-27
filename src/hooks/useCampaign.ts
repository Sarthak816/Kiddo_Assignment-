import { useState, useCallback, useEffect } from 'react';
import { SDUIPayload } from '../types';

// For now, this is a mock implementation for local data
// In a real application, this would fetch from an API
export const useCampaign = () => {
  const [activeCampaign, setActiveCampaign] = useState<SDUIPayload | null>(null);
  const [availableCampaigns] = useState<string[]>(['default', 'holiday']);

  const loadCampaign = useCallback(async (campaignId: string) => {
    try {
      // Mock fetching
      // const data = await fetch(`/api/campaigns/${campaignId}`).then(r => r.json());
      // setActiveCampaign(data);
      console.log(`[useCampaign] Loading campaign: ${campaignId}`);
    } catch (error) {
      console.error(`[useCampaign] Failed to load campaign ${campaignId}:`, error);
    }
  }, []);

  const switchCampaign = useCallback((campaignId: string) => {
    console.log(`[useCampaign] Switching to campaign: ${campaignId}`);
    // Handle fade transition in real implementation
    loadCampaign(campaignId);
  }, [loadCampaign]);

  return {
    activeCampaign,
    loadCampaign,
    switchCampaign,
    availableCampaigns,
  };
};
