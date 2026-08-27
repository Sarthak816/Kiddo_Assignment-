import React from 'react';

class ComponentRegistry {
  private registry: Record<string, React.MemoExoticComponent<any>> = {};
  private static instance: ComponentRegistry;

  private constructor() {}

  public static getInstance(): ComponentRegistry {
    if (!ComponentRegistry.instance) {
      ComponentRegistry.instance = new ComponentRegistry();
    }
    return ComponentRegistry.instance;
  }

  public registerComponent(type: string, component: React.ComponentType<any>): void {
    if (!this.registry[type]) {
      this.registry[type] = React.memo(component);
    }
  }

  public resolveComponent(type: string): React.MemoExoticComponent<any> | null {
    const component = this.registry[type];
    if (!component) {
      console.warn(`[ComponentRegistry] Unknown component type requested: ${type}`);
      return null;
    }
    return component;
  }

  public getRegisteredTypes(): string[] {
    return Object.keys(this.registry);
  }

  public isRegistered(type: string): boolean {
    return !!this.registry[type];
  }
}

export const componentRegistry = ComponentRegistry.getInstance();
