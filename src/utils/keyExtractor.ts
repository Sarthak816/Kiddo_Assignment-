import { LayoutBlock, CollectionItemData, ProductItem, CategoryItem, QuickLinkItem } from '../types';

export const blockKeyExtractor = (block: LayoutBlock): string => {
  return `${block.type}_${block.id}_${block.position}`;
};

export const itemKeyExtractor = (item: CollectionItemData | CategoryItem | QuickLinkItem, parentId: string): string => {
  return `${parentId}_${item.id}`;
};

export const productKeyExtractor = (product: ProductItem): string => {
  return product.id;
};
