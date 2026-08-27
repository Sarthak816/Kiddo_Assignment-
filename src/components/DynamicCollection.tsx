import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { DynamicCollectionBlock, CollectionItemData } from '../types';
import { useTheme } from '../context/ThemeContext';
import CollectionItem from './CollectionItem';
import { handleAction } from '../registry/ActionDispatcher';

interface DynamicCollectionProps {
  block: DynamicCollectionBlock;
}

const DynamicCollection: React.FC<DynamicCollectionProps> = ({ block }) => {
  const theme = useTheme();

  if (!block.items || block.items.length === 0) {
    return null;
  }

  const handleSeeAll = () => {
    if (block.see_all_action) {
      handleAction(block.see_all_action);
    }
  };

  const renderItem = useCallback(({ item }: { item: CollectionItemData }) => (
    <CollectionItem 
      item={item} 
      layout={block.item_layout || 'card'} 
      onAction={handleAction} 
    />
  ), [block.item_layout]);

  const keyExtractor = useCallback((item: CollectionItemData) => `${block.id}-${item.id}`, [block.id]);

  const ItemSeparator = useCallback(() => <View style={{ width: 12 }} />, []);

  return (
    <View style={[styles.container, { backgroundColor: block.background_color || theme.background, paddingVertical: theme.spacing.md }]}>
      <View style={[styles.header, { paddingHorizontal: theme.spacing.md }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.text_primary, fontSize: theme.typography.heading.fontSize, fontWeight: theme.typography.heading.fontWeight as any }]}>
            {block.title}
          </Text>
          {block.subtitle && (
            <Text style={[styles.subtitle, { color: theme.text_secondary, fontSize: theme.typography.subheading.fontSize }]}>
              {block.subtitle}
            </Text>
          )}
        </View>
        {block.see_all_action && (
          <Pressable onPress={handleSeeAll}>
            <Text style={[styles.seeAll, { color: theme.primary, fontSize: theme.typography.body.fontSize }]}>See All</Text>
          </Pressable>
        )}
      </View>
      <FlatList
        data={block.items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={4}
        maxToRenderPerBatch={3}
        windowSize={5}
        nestedScrollEnabled={true}
        decelerationRate="fast"
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={{ paddingHorizontal: theme.spacing.md }}
      />
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
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    marginBottom: 4,
  },
  subtitle: {},
  seeAll: {
    fontWeight: '500',
    paddingLeft: 12,
    paddingBottom: 2,
  },
});

export default React.memo(DynamicCollection);
