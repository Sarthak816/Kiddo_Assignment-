import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Image } from 'react-native';
import { CategoryStripBlock, CategoryItem } from '../types';
import { useTheme } from '../context/ThemeContext';
import { handleAction } from '../registry/ActionDispatcher';

interface CategoryStripProps {
  block: CategoryStripBlock;
}

const CategoryStrip: React.FC<CategoryStripProps> = React.memo(({ block }) => {
  const theme = useTheme();

  if (!block.categories || block.categories.length === 0) {
    return null;
  }

  const renderItem = ({ item }: { item: CategoryItem }) => (
    <Pressable 
      style={styles.itemContainer} 
      onPress={() => handleAction(item.action)}
    >
      <View style={[styles.iconWrapper, { backgroundColor: theme.surface, borderColor: theme.secondary }]}>
        <Image source={typeof item.icon_url === 'string' ? { uri: item.icon_url } : item.icon_url} style={styles.icon} resizeMode="contain" />
      </View>
      <Text style={[styles.label, { color: theme.text_primary }]} numberOfLines={2}>
        {item.label}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={block.categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: theme.spacing.md }}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  itemContainer: {
    alignItems: 'center',
    width: 72,
  },
  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 2,
    padding: 12,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Fredoka_600SemiBold',
  },
});

export default CategoryStrip;
