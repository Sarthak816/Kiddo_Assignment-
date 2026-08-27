import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ActivityIndicator, ImageBackground, Image, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Fredoka_700Bold, Fredoka_600SemiBold } from '@expo-google-fonts/fredoka';
import { Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import './src/components'; // triggers component registration
import { loadCampaign, getDefaultCampaignId, getAllCampaignIds } from './src/engine/CampaignEngine';
import CampaignSelector from './src/components/CampaignSelector';
import SDUIRenderer from './src/engine/SDUIRenderer';
import { SDUIPayload } from './src/types';

export default function App() {
  const [activeCampaignId, setActiveCampaignId] = useState(getDefaultCampaignId());
  const [payload, setPayload] = useState<SDUIPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  let [fontsLoaded] = useFonts({
    Fredoka_700Bold,
    Fredoka_600SemiBold,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  useEffect(() => {
    try {
      const data = loadCampaign(activeCampaignId);
      if (data) {
        setPayload(data);
        setError(null);
      } else {
        setError(`Failed to load campaign: ${activeCampaignId}`);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Error loading campaign');
      }
    }
  }, [activeCampaignId]);

  if (!fontsLoaded) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FF477E" />
      </View>
    );
  }

  return (
    <View style={styles.webWrapper}>
      <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Official Kiddo Q-Commerce Header */}
      <View style={styles.appHeader}>
        <View style={styles.headerTop}>
          <Image 
            source={require('./src/assets/photos/kiddo_logo.png')} 
            style={styles.logo} 
            resizeMode="contain" 
          />
          <View style={styles.avatarPlaceholder}><Text style={styles.avatarText}>JD</Text></View>
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.headerTitle}>Delivery in 10 mins</Text>
          <Text style={styles.headerSubtitle}>Home - Sector 14, Gurugram</Text>
        </View>
      </View>

      <CampaignSelector 
        campaigns={getAllCampaignIds()}
        activeCampaign={activeCampaignId}
        onSelect={setActiveCampaignId}
      />

      <View style={styles.engineContainer}>
        {error ? (
          <View style={styles.center}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : payload ? (
          <SDUIRenderer payload={payload} />
        ) : (
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#FF477E" />
          </View>
        )}
      </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  webWrapper: {
    flex: 1,
    width: '100%',
    maxWidth: 480, // Matches standard mobile max-width bounds
    alignSelf: 'center',
    marginHorizontal: Platform.OS === 'web' ? 'auto' : 0,
    height: Platform.OS === 'web' ? '100vh' : '100%',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA', // Soft Q-commerce bg
  },
  appHeader: {
    paddingHorizontal: 16,
    paddingTop: 48, // Add padding for status bar if not handled by SafeAreaView
    paddingBottom: 16,
    backgroundColor: '#F7F8FA',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    height: 90,
    width: 240,
    marginLeft: -12, // Pull it slightly left so it aligns with padding if there's transparent space
  },
  locationContainer: {
    marginTop: 4,
  },
  headerTitle: {
    fontFamily: 'Fredoka_700Bold',
    fontSize: 24,
    color: '#2B2D42',
  },
  headerSubtitle: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
    color: '#FF477E', // Primary pink
    marginTop: 2,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFD166',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  avatarText: {
    fontSize: 18,
    fontFamily: 'Fredoka_700Bold',
    color: '#2B2D42',
  },
  engineContainer: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8FA',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    fontFamily: 'Nunito_600SemiBold',
  }
});
