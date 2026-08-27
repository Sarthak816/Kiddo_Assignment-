import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { CountdownTimerBlock } from '../types';
import { useTheme } from '../context/ThemeContext';
import { handleAction } from '../registry/ActionDispatcher';

const CountdownTimer: React.FC<{ block: CountdownTimerBlock }> = React.memo(({ block }) => {
  const theme = useTheme();
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const end = new Date(block.end_time).getTime();
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      return Math.max(0, end - now);
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (newTimeLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [block.end_time]);

  const pad = (num: number) => num.toString().padStart(2, '0');

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const isExpired = timeLeft <= 0;

  const renderTimeBox = (value: number, label: string) => (
    <View style={[styles.timeBox, { backgroundColor: theme.surface, borderColor: theme.accent }]}>
      <Text style={[styles.timeText, { color: theme.primary, fontWeight: theme.typography.heading.fontWeight as any }]}>
        {pad(value)}
      </Text>
    </View>
  );

  const content = (
    <View style={[styles.container, { backgroundColor: block.background_gradient?.colors[0] || theme.background }]}>
      <Text style={[styles.title, { color: theme.text_primary, fontSize: theme.typography.subheading.fontSize }]}>
        {block.title}
      </Text>
      {isExpired ? (
        <Text style={[styles.expiredText, { color: theme.primary }]}>Sale Ended</Text>
      ) : (
        <View style={styles.timerContainer}>
          {renderTimeBox(days, 'DD')}
          <Text style={[styles.colon, { color: theme.text_primary }]}>:</Text>
          {renderTimeBox(hours, 'HH')}
          <Text style={[styles.colon, { color: theme.text_primary }]}>:</Text>
          {renderTimeBox(minutes, 'MM')}
          <Text style={[styles.colon, { color: theme.text_primary }]}>:</Text>
          {renderTimeBox(seconds, 'SS')}
        </View>
      )}
    </View>
  );

  if (block.action && !isExpired) {
    return (
      <Pressable onPress={() => handleAction(block.action!)}>
        {content}
      </Pressable>
    );
  }

  return content;
});

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    marginBottom: 12,
    fontWeight: 'bold',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeBox: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
  },
  timeText: {
    fontSize: 18,
  },
  colon: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  expiredText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default CountdownTimer;
