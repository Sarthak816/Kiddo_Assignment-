import React from 'react';
import { View } from 'react-native';
import { LayoutBlock } from '../types';
import { componentRegistry } from '../registry/ComponentRegistry';
import ErrorBoundary from '../components/ErrorBoundary';
import FallbackComponent from '../components/FallbackComponent';

interface BlockRendererProps {
  block: LayoutBlock;
}

const BlockRenderer: React.FC<BlockRendererProps> = React.memo(({ block }) => {
  const Component = componentRegistry.resolveComponent(block.type);

  if (block.visibility === 'hidden') {
    return null;
  }

  const containerStyle = {
    paddingTop: block.padding?.top ?? block.padding?.vertical ?? 0,
    paddingBottom: block.padding?.bottom ?? block.padding?.vertical ?? 0,
    paddingLeft: block.padding?.left ?? block.padding?.horizontal ?? 0,
    paddingRight: block.padding?.right ?? block.padding?.horizontal ?? 0,
    marginTop: block.margin?.top ?? block.margin?.vertical ?? 0,
    marginBottom: block.margin?.bottom ?? block.margin?.vertical ?? 0,
    marginLeft: block.margin?.left ?? block.margin?.horizontal ?? 0,
    marginRight: block.margin?.right ?? block.margin?.horizontal ?? 0,
    backgroundColor: block.background_color || 'transparent',
  };

  const ResolvedComponent = Component as React.ComponentType<any>;

  return (
    <View style={containerStyle}>
      <ErrorBoundary>
        {Component ? (
          <ResolvedComponent block={block} />
        ) : (
          <FallbackComponent type={block.type} id={block.id} />
        )}
      </ErrorBoundary>
    </View>
  );
});

export default BlockRenderer;
