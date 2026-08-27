import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface FallbackComponentProps {
  type: string;
  id: string;
}

const FallbackComponent: React.FC<FallbackComponentProps> = React.memo(({ type, id }) => {
  const theme = useTheme();

  if (__DEV__) {
    return (
      <View style={[styles.container, { borderColor: theme.accent }]}>
        <Text style={styles.text}>⚠️ Unknown Block Type: {type}</Text>
        <Text style={styles.subtext}>Block ID: {id}</Text>
      </View>
    );
  }

  return null;
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF9C4',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
  text: {
    color: '#F57F17',
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtext: {
    color: '#F57F17',
    fontSize: 12,
    marginTop: 4,
  }
});

export default FallbackComponent;
