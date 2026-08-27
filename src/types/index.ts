// === ACTION SCHEMA ===
export type ActionType = 'ADD_TO_CART' | 'DEEP_LINK' | 'APPLY_MYSTERY_GIFT_COUPON' | 'NAVIGATE' | 'SHARE' | 'OPEN_URL';

export interface ActionSchema {
  type: ActionType;
  payload: Record<string, any>;
  analytics?: { event_name: string; params: Record<string, any> };
}

// === SPACING ===
export interface SpacingConfig {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  horizontal?: number;
  vertical?: number;
}

// === THEME ===
export interface ThemeConfig {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  accent: string;
  text_primary: string;
  text_secondary: string;
  cta_background: string;
  cta_text: string;
  border_radius: { sm: number; md: number; lg: number; xl: number };
  spacing: { xs: number; sm: number; md: number; lg: number; xl: number };
  typography: {
    heading: { fontSize: number; fontWeight: string; lineHeight: number };
    subheading: { fontSize: number; fontWeight: string; lineHeight: number };
    body: { fontSize: number; fontWeight: string; lineHeight: number };
    caption: { fontSize: number; fontWeight: string; lineHeight: number };
    cta: { fontSize: number; fontWeight: string; lineHeight: number };
  };
  animation: { duration_fast: number; duration_normal: number; duration_slow: number; easing: string };
}

// === PRODUCT ===
export interface ProductItem {
  id: string;
  name: string;
  price: number;
  original_price?: number;
  discount_percentage?: number;
  image_url: string | any;
  category: string;
  badge?: string;
  in_stock: boolean;
  rating?: number;
  action: ActionSchema;
}

// === COLLECTION ITEM ===
export interface CollectionItemData {
  id: string;
  title: string;
  subtitle?: string;
  image_url: string | any;
  badge?: string;
  action: ActionSchema;
}

// === CATEGORY ITEM ===
export interface CategoryItem {
  id: string;
  icon_url: string | any;
  label: string;
  action: ActionSchema;
}

// === QUICK LINK ITEM ===
export interface QuickLinkItem {
  id: string;
  icon_url: string | any;
  label: string;
  action: ActionSchema;
}

// === LAYOUT BLOCKS ===
export interface LayoutBlock {
  id: string;
  type: string;
  position: number;
  visibility?: 'visible' | 'hidden' | 'conditional';
  padding?: SpacingConfig;
  margin?: SpacingConfig;
  background_color?: string;
  analytics_tag?: string;
}

export interface BannerHeroBlock extends LayoutBlock {
  type: 'BANNER_HERO';
  image_url: string | any;
  title: string;
  subtitle?: string;
  action: ActionSchema;
  aspect_ratio?: number;
  gradient_overlay?: boolean;
}

export interface ProductGrid2x2Block extends LayoutBlock {
  type: 'PRODUCT_GRID_2X2';
  title: string;
  products: ProductItem[];
  columns?: number;
  see_all_action?: ActionSchema;
}

export interface DynamicCollectionBlock extends LayoutBlock {
  type: 'DYNAMIC_COLLECTION';
  title: string;
  subtitle?: string;
  items: CollectionItemData[];
  scroll_direction: 'horizontal';
  item_layout: 'card' | 'compact' | 'wide';
  see_all_action?: ActionSchema;
}

export interface CategoryStripBlock extends LayoutBlock {
  type: 'CATEGORY_STRIP';
  categories: CategoryItem[];
}

export interface CountdownTimerBlock extends LayoutBlock {
  type: 'COUNTDOWN_TIMER';
  end_time: string;
  title: string;
  background_gradient?: { colors: string[]; direction: string };
  action?: ActionSchema;
}

export interface QuickLinksRowBlock extends LayoutBlock {
  type: 'QUICK_LINKS_ROW';
  links: QuickLinkItem[];
}

export interface FullScreenOverlayBlock extends LayoutBlock {
  type: 'FULL_SCREEN_OVERLAY';
  animation_url: string;
  animation_type: 'lottie' | 'webp' | 'gif';
  duration?: number;
  loop: boolean;
  speed?: number;
  opacity?: number;
  pointer_events: 'none';
  dismiss_after?: number;
}

// === OVERLAY CONFIG ===
export interface OverlayConfig {
  animation_url: string;
  animation_type: 'lottie' | 'webp' | 'gif';
  duration?: number;
  loop: boolean;
  speed?: number;
  opacity?: number;
  pointer_events: 'none';
  dismiss_after?: number;
}

// === PAYLOAD ===
export interface PayloadMetadata {
  generated_at: string;
  region: string;
  user_segment: string;
  ab_test_variants: Record<string, string>;
}

export type SDUIBlock = 
  | BannerHeroBlock 
  | ProductGrid2x2Block 
  | DynamicCollectionBlock 
  | CategoryStripBlock 
  | CountdownTimerBlock 
  | QuickLinksRowBlock 
  | FullScreenOverlayBlock 
  | LayoutBlock;

export interface SDUIPayload {
  version: string;
  campaign_id: string;
  campaign_name: string;
  theme: ThemeConfig;
  overlay?: OverlayConfig;
  blocks: SDUIBlock[];
  metadata: PayloadMetadata;
}

export type SDUIBlock = 
  | BannerHeroBlock 
  | ProductGrid2x2Block 
  | DynamicCollectionBlock 
  | CategoryStripBlock 
  | CountdownTimerBlock 
  | QuickLinksRowBlock 
  | FullScreenOverlayBlock 
  | LayoutBlock;

export type ActionHandler = (action: ActionSchema) => void;

export interface CartState {
  items: Record<string, { productId: string; name: string; price: number; quantity: number }>;
  count: number;
  total: number;
  addItem: (productId: string, name: string, price: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  getCount: () => number;
}

export interface CampaignInfo {
  id: string;
  name: string;
}
