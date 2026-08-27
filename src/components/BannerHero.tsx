import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { BannerHeroBlock } from '../types';
import { useTheme } from '../context/ThemeContext';
import { handleAction } from '../registry/ActionDispatcher';

interface BannerHeroProps {
  block: BannerHeroBlock;
}

const BannerHero: React.FC<BannerHeroProps> = ({ block }) => {
  const theme = useTheme();

  const handlePress = () => {
    if (block.action) {
      handleAction(block.action);
    }
  };

  const aspectRatio = block.aspect_ratio || 21 / 9;

  return (
    <Pressable onPress={handlePress} style={[styles.container, { paddingHorizontal: theme.spacing.md }]}>
      <View style={[styles.imageWrapper, { borderRadius: theme.border_radius.lg }]}>
        {block.image_url ? (
          <Image source={typeof block.image_url === 'string' ? { uri: block.image_url } : block.image_url} style={styles.image} resizeMode="cover" />
        ) : (
          <View style={[styles.placeholder, { backgroundColor: theme.secondary }]} />
        )}
        
        {block.gradient_overlay !== false && (
          <View style={[styles.overlay, { backgroundColor: 'rgba(0,0,0,0.3)' }]} />
        )}

        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>{block.title}</Text>
          {block.subtitle && (
            <Text style={styles.subtitle} numberOfLines={2}>{block.subtitle}</Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  imageWrapper: {
    height: 180,
    width: '100%',
    overflow: 'hidden',
    shadowColor: '#FF477E',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Fredoka_700Bold',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Nunito_600SemiBold',
    marginTop: 4,
  }
});

export default BannerHero;
