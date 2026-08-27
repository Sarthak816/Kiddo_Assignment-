import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { ProductItem, ActionSchema } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProductCardProps {
  product: ProductItem;
  onAction: (action: ActionSchema) => void;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product, onAction }) => {
  const theme = useTheme();

  return (
    <Pressable 
      style={[styles.container, { backgroundColor: theme.surface, borderRadius: theme.border_radius.md }]} 
      onPress={() => onAction(product.action)}
    >
      <View style={styles.imageContainer}>
        <Image source={typeof product.image_url === 'string' ? { uri: product.image_url } : product.image_url} style={styles.image} resizeMode="cover" />
        {product.badge && (
          <View style={[styles.badge, { backgroundColor: theme.primary }]}>
            <Text style={styles.badgeText}>{product.badge}</Text>
          </View>
        )}
      </View>
      <View style={styles.info}>
        <Text style={[styles.name, { color: theme.text_primary }]} numberOfLines={2}>{product.name}</Text>
        <Text style={[styles.category, { color: theme.text_secondary }]}>{product.category}</Text>
        
        <View style={styles.footer}>
          <View>
            <Text style={[styles.price, { color: theme.text_primary }]}>₹{product.price}</Text>
            {product.original_price && (
              <Text style={[styles.originalPrice, { color: theme.text_secondary }]}>₹{product.original_price}</Text>
            )}
          </View>
          <Pressable 
            style={[styles.addButton, { backgroundColor: theme.primary }]}
            onPress={(e) => {
              e.stopPropagation();
              onAction(product.action);
            }}
          >
            <Text style={styles.addButtonText}>ADD</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#F8F9FA',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: 'Fredoka_700Bold',
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 4,
  },
  category: {
    fontSize: 12,
    fontFamily: 'Nunito_400Regular',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 16,
    fontFamily: 'Fredoka_700Bold',
  },
  originalPrice: {
    fontSize: 12,
    fontFamily: 'Nunito_400Regular',
    textDecorationLine: 'line-through',
  },
  addButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Fredoka_700Bold',
  }
});

export default ProductCard;
