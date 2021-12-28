import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Following from './pages/Following';
import ComingSoon from './pages/ComingSoon';
import { Extrapolation } from 'react-native-reanimated';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './styles/colors';
import { Roboto_100Thin } from '@expo-google-fonts/roboto';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "android" ? 60 : 100,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabBarIconStyle: {
          width: 20,
          height: 20,
        },
        tabBarLabelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          marginTop: 5,
          marginBottom: 5
        },
        tabBarInactiveTintColor: colors.black,
        tabBarActiveTintColor: colors.purple,
      }}
    >
      <Screen name="Following" component={Following} options={{
        tabBarIcon: ({ size, focused }) =>
          <Ionicons
            name="md-heart"
            size={size}
            color={focused ? colors.purple : colors.black}
          />
      }}
      />
      <Screen name="Discover" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused }) =>
          <MaterialCommunityIcons
            name="compass-outline"
            size={size}
            color={focused ? colors.purple : colors.black}
          />
      }}
      />
      <Screen name="Browse" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused }) =>
          <Ionicons
            name="md-browsers"
            size={size}
            color={focused ? colors.purple : colors.black}
          />
      }}
      />
      <Screen name="Esports" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused }) =>
          <MaterialCommunityIcons
            name="trophy-outline"
            size={size}
            color={focused ? colors.purple : colors.black}
          />
      }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
