import { ComponentRegistry } from './ComponentRegistry';
import React from 'react';

// Mock components
const MockBanner = () => null;
const MockGrid = () => null;

describe('ComponentRegistry', () => {
  let registry: ComponentRegistry;

  beforeEach(() => {
    registry = new ComponentRegistry();
  });

  it('should register and resolve a component successfully', () => {
    registry.register('BANNER_HERO', MockBanner);
    const resolved = registry.resolveComponent('BANNER_HERO');
    
    expect(resolved).toBe(MockBanner);
  });

  it('should return null for unregistered components (Graceful Degradation)', () => {
    // This directly tests the assignment requirement for Defensive Resilience
    // "If an unsupported structural type is parsed (e.g., 'NEW_COMPONENT_V2'), your renderer must fail gracefully..."
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    
    const resolved = registry.resolveComponent('NEW_COMPONENT_V2');
    
    expect(resolved).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith(
      '[ComponentRegistry] Unknown component type requested:', 
      'NEW_COMPONENT_V2'
    );
    
    consoleSpy.mockRestore();
  });

  it('should correctly build a singleton instance', () => {
    const { componentRegistry } = require('./ComponentRegistry');
    expect(componentRegistry).toBeDefined();
    expect(componentRegistry instanceof ComponentRegistry).toBe(true);
  });
});
