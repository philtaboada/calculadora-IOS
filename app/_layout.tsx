import { View, Text, Platform } from 'react-native'
import { useFonts } from 'expo-font'
import React from 'react'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { globalStyles } from '@/styles/global-styles'
import * as NavigationBar from 'expo-navigation-bar';

const isAndorid = Platform.OS === 'android';

if (isAndorid) {
  NavigationBar.setBackgroundColorAsync('black');
}


const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if (!loaded) return null

  return (
    <View style={globalStyles.background}>
      <Slot />

      <StatusBar style='light' />
    </View>
  )
}

export default RootLayout