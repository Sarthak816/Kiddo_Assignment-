import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { CollectionItemData, ActionSchema } from '../types';
import { useTheme } from '../context/ThemeContext';
import { handleAction } from '../registry/ActionDispatcher';

interface CollectionItemProps {
  item: CollectionItemData;
}

const CollectionItem: React.FC<CollectionItemProps> = React.memo(({ item }) => {
  const theme = useTheme();

  return (
    <Pressable 
      onPress={() => handleAction(item.action)}
      style={[
        styles.container, 
        { 
          backgroundColor: theme.surface,
          borderRadius: theme.border_radius.md,
          shadowColor: '#FF477E',
        }
      ]}
    >
      <View style={[styles.imageWrapper, { borderRadius: theme.border_radius.md }]}>
        <Image source={typeof item.image_url === 'string' ? { uri: item.image_url } : item.image_url} style={styles.image} resizeMode="cover" />
        {item.badge && (
          <View style={[styles.badge, { backgroundColor: theme.accent }]}>
            <Text style={[styles.badgeText, { color: '#fff', fontSize: theme.typography.caption.fontSize }]}>
              {item.badge}
            </Text>
          </View>
        )}
      </View>
      <View style={[styles.textContainer, { padding: theme.spacing.sm }]}>
        <Text 
          numberOfLines={1} 
          style={[styles.title, { color: theme.text_primary, fontFamily: 'Fredoka_600SemiBold', fontSize: theme.typography.body.fontSize }]}
        >
          {item.title}
        </Text>
        {item.subtitle && (
          <Text 
            numberOfLines={1} 
            style={[styles.subtitle, { color: theme.text_secondary, fontFamily: 'Nunito_400Regular', fontSize: theme.typography.caption.fontSize }]}
          >
            {item.subtitle}
          </Text>
        )}
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 140,
    marginRight: 16,
    overflow: 'hidden',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  imageWrapper: {
    width: '100%',
    height: 140,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#F8F9FA'
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
    fontWeight: 'bold',
  },
  textContainer: {
    width: '100%',
  },
  title: {
    marginBottom: 4,
  },
  subtitle: {
  },
});

export default CollectionItem;
