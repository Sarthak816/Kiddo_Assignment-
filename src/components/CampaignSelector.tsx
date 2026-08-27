import React from 'react';
import { ScrollView, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface CampaignSelectorProps {
  campaigns: string[];
  activeCampaign: string;
  onSelect: (id: string) => void;
}

const CAMPAIGN_NAMES: Record<string, string> = {
  'back-to-school-2024': '🎒 Back to School',
  'summer-playhouse-2024': '☀️ Summer Fest',
  'mystery-gift-carnival-2024': '🎪 Mystery Carnival',
  'edge-cases': '⚠️ Edge Cases'
};

const CampaignSelector: React.FC<CampaignSelectorProps> = React.memo(({ campaigns, activeCampaign, onSelect }) => {
  const theme = useTheme();

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {campaigns.map(id => {
        const isActive = id === activeCampaign;
        const displayName = CAMPAIGN_NAMES[id] || id;

        return (
          <Pressable
            key={id}
            style={[
              styles.pill,
              {
                backgroundColor: isActive ? theme.primary : theme.surface,
                borderColor: isActive ? theme.primary : theme.accent
              }
            ]}
            onPress={() => onSelect(id)}
          >
            <Text
              style={[
                styles.text,
                {
                  color: isActive ? '#FFFFFF' : theme.text_primary,
                  fontWeight: isActive ? 'bold' : 'normal'
                }
              ]}
            >
              {displayName}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    maxHeight: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
  },
  text: {
    fontSize: 14,
  }
});

export default CampaignSelector;
