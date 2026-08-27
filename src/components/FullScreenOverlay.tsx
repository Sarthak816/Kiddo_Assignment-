import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { OverlayConfig } from '../types';

let LottieView: any = null;
try {
  LottieView = require('lottie-react-native').default;
} catch (e) {
  // Lottie not available, will render fallback
}

interface FullScreenOverlayProps {
  config: OverlayConfig | null;
}

const FullScreenOverlay: React.FC<FullScreenOverlayProps> = ({ config }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    if (config?.dismiss_after) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, config.dismiss_after);
      return () => clearTimeout(timer);
    }
  }, [config]);

  if (!config || !visible) {
    return null;
  }

  const opacity = config.opacity !== undefined ? config.opacity : 0.8;

  const renderAnimation = () => {
    if (config.animation_type === 'lottie' && LottieView) {
      try {
        return (
          <LottieView
            source={{ uri: config.animation_url }}
            autoPlay
            loop={config.loop}
            speed={config.speed || 1}
            style={styles.animation}
          />
        );
      } catch (e) {
        return null;
      }
    }

    if (config.animation_type === 'webp' || config.animation_type === 'gif') {
      return (
        <Image
          source={{ uri: config.animation_url }}
          style={styles.animation}
          resizeMode="contain"
        />
      );
    }

    return null;
  };

  return (
    <View 
      style={[styles.container, { opacity }]} 
      pointerEvents="none"
    >
      {renderAnimation()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  animation: {
    width: '100%',
    height: '100%',
  },
});

export default React.memo(FullScreenOverlay);
