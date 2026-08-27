import { componentRegistry } from '../registry/ComponentRegistry';
import BannerHero from './BannerHero';
import ProductGrid2x2 from './ProductGrid2x2';
import DynamicCollection from './DynamicCollection';
import CategoryStrip from './CategoryStrip';
import CountdownTimer from './CountdownTimer';
import QuickLinksRow from './QuickLinksRow';

componentRegistry.registerComponent('BANNER_HERO', BannerHero);
componentRegistry.registerComponent('PRODUCT_GRID_2X2', ProductGrid2x2);
componentRegistry.registerComponent('DYNAMIC_COLLECTION', DynamicCollection);
componentRegistry.registerComponent('CATEGORY_STRIP', CategoryStrip);
componentRegistry.registerComponent('COUNTDOWN_TIMER', CountdownTimer);
componentRegistry.registerComponent('QUICK_LINKS_ROW', QuickLinksRow);

export {
  BannerHero,
  ProductGrid2x2,
  DynamicCollection,
  CategoryStrip,
  CountdownTimer,
  QuickLinksRow
};
