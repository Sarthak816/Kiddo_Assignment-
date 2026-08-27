import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { QuickLinksRowBlock } from '../types';
import { useTheme } from '../context/ThemeContext';
import { handleAction } from '../registry/ActionDispatcher';

const QuickLinksRow: React.FC<{ block: QuickLinksRowBlock }> = React.memo(({ block }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {block.links.map((link, index) => (
        <Pressable 
          key={link.id || index}
          style={styles.linkItem}
          onPress={() => handleAction(link.action)}
        >
          <View style={[styles.iconContainer, { backgroundColor: theme.surface }]}>
            <Image source={typeof link.icon_url === 'string' ? { uri: link.icon_url } : link.icon_url} style={styles.icon} resizeMode="contain" />
          </View>
          <Text style={[styles.label, { color: theme.text_primary, fontSize: theme.typography.caption.fontSize }]}>
            {link.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  linkItem: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    textAlign: 'center',
  }
});

export default QuickLinksRow;
