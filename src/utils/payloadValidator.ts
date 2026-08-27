import { SDUIPayload, LayoutBlock } from '../types';

export const validatePayload = (data: unknown): SDUIPayload | null => {
  try {
    if (typeof data !== 'object' || data === null) {
      return null;
    }

    const payload = data as Partial<SDUIPayload>;
    
    if (
      typeof payload.version === 'string' &&
      typeof payload.campaign_id === 'string' &&
      typeof payload.theme === 'object' &&
      Array.isArray(payload.blocks)
    ) {
      return payload as SDUIPayload;
    }
    
    return null;
  } catch (error) {
    console.error('[validatePayload] Validation error:', error);
    return null;
  }
};

export const validateBlock = (block: unknown): LayoutBlock | null => {
  try {
    if (typeof block !== 'object' || block === null) {
      return null;
    }

    const b = block as Partial<LayoutBlock>;
    
    if (
      typeof b.id === 'string' &&
      typeof b.type === 'string' &&
      typeof b.position === 'number'
    ) {
      return b as LayoutBlock;
    }

    return null;
  } catch (error) {
    console.error('[validateBlock] Validation error:', error);
    return null;
  }
};
