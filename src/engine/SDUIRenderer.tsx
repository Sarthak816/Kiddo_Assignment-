import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SDUIPayload } from '../types';
import { ThemeProvider } from '../context/ThemeContext';
import BlockRenderer from './BlockRenderer';
import CartBadge from '../components/CartBadge';

let ListComponent: any;
try {
  ListComponent = require('@shopify/flash-list').FlashList;
} catch {
  ListComponent = require('react-native').FlatList;
}

interface SDUIRendererProps {
  payload: SDUIPayload;
}

const SDUIRenderer: React.FC<SDUIRendererProps> = React.memo(({ payload }) => {
  const validBlocks = payload.blocks.filter(b => b && b.visibility !== 'hidden');
  
  let FullScreenOverlayComponent: any = null;
  try {
    FullScreenOverlayComponent = require('../components/FullScreenOverlay').default || require('../components/FullScreenOverlay');
  } catch(e) {}

  return (
    <ThemeProvider theme={payload.theme}>
      <View style={styles.container}>
        <View style={[styles.header, { backgroundColor: payload.theme.surface }]}>
          <CartBadge />
        </View>
        <ListComponent
          data={validBlocks}
          renderItem={({ item }: { item: any }) => <BlockRenderer block={item} />}
          keyExtractor={(item: any) => `${item.id}_${item.type}`}
          estimatedItemSize={200}
          getItemType={(item: any) => item.type}
          contentContainerStyle={styles.listContent}
        />
        {payload.overlay && FullScreenOverlayComponent && (
          <FullScreenOverlayComponent block={{ type: 'FULL_SCREEN_OVERLAY', id: 'overlay', ...payload.overlay } as any} />
        )}
      </View>
    </ThemeProvider>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  listContent: {
    paddingBottom: 40,
  }
});

export default SDUIRenderer;
