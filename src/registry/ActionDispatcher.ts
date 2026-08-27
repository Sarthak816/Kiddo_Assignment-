import { ActionSchema, ActionHandler } from '../types';
import { useCartStore } from '../store/cartStore';

class ActionDispatcher {
  private registry: Record<string, ActionHandler> = {};
  private static instance: ActionDispatcher;

  private constructor() {
    this.registerDefaultHandlers();
  }

  public static getInstance(): ActionDispatcher {
    if (!ActionDispatcher.instance) {
      ActionDispatcher.instance = new ActionDispatcher();
    }
    return ActionDispatcher.instance;
  }

  public registerAction(type: string, handler: ActionHandler): void {
    this.registry[type] = handler;
  }

  public handleAction(action: ActionSchema): void {
    const handler = this.registry[action.type];
    if (handler) {
      handler(action);
    } else {
      console.warn(`[ActionDispatcher] Unhandled action type: ${action.type}`);
    }
  }

  private registerDefaultHandlers(): void {
    this.registerAction('ADD_TO_CART', (action: ActionSchema) => {
      const { id, name, price } = action.payload;
      const addItem = useCartStore.getState().addItem;
      addItem(id, name, price);
    });

    this.registerAction('DEEP_LINK', (action: ActionSchema) => {
      console.log(`[DEEP_LINK] Navigating to: ${action.payload.url}`);
    });

    this.registerAction('APPLY_MYSTERY_GIFT_COUPON', (action: ActionSchema) => {
      // Use alert or similar in real app
      console.log(`[APPLY_MYSTERY_GIFT_COUPON] Coupon applied! Code: ${action.payload.code}`);
    });

    this.registerAction('NAVIGATE', (action: ActionSchema) => {
      console.log(`[NAVIGATE] Navigating to screen: ${action.payload.screen}`);
    });

    this.registerAction('SHARE', (action: ActionSchema) => {
      console.log(`[SHARE] Sharing content: ${action.payload.text}`);
    });

    this.registerAction('OPEN_URL', (action: ActionSchema) => {
      console.log(`[OPEN_URL] Opening URL: ${action.payload.url}`);
    });
  }
}

export const actionDispatcher = ActionDispatcher.getInstance();
export const handleAction = (action: ActionSchema): void => actionDispatcher.handleAction(action);
