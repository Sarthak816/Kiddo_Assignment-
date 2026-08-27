import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ProductGrid2x2Block } from '../types';
import { useTheme } from '../context/ThemeContext';
import ProductCard from './ProductCard';
import { handleAction } from '../registry/ActionDispatcher';

interface ProductGrid2x2Props {
  block: ProductGrid2x2Block;
}

const ProductGrid2x2: React.FC<ProductGrid2x2Props> = ({ block }) => {
  const theme = useTheme();

  if (!block.products || block.products.length === 0) {
    return null;
  }

  const handleSeeAll = () => {
    if (block.see_all_action) {
      handleAction(block.see_all_action);
    }
  };

  return (
    <View style={[styles.container, { padding: theme.spacing.md, backgroundColor: block.background_color || theme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text_primary, fontSize: theme.typography.heading.fontSize, fontWeight: theme.typography.heading.fontWeight as any }]}>
          {block.title}
        </Text>
        {block.see_all_action && (
          <Pressable onPress={handleSeeAll}>
            <Text style={[styles.seeAll, { color: theme.primary, fontSize: theme.typography.body.fontSize }]}>See All</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.grid}>
        {block.products.slice(0, 4).map((product) => (
          <View key={product.id} style={styles.gridItem}>
            <ProductCard product={product} onAction={handleAction} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {},
  seeAll: {
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  gridItem: {
    width: '50%',
    padding: 4,
  },
});

export default React.memo(ProductGrid2x2);
