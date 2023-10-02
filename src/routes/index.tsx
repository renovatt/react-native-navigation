import React from 'react'
import Home from '../views/Home'
import Profile from '../views/Profile'
import Contact from '../views/Contact'
import { AntDesign } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform } from 'react-native'

export default function Routers() {
  const { Navigator, Screen } = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#ffa200',
          tabBarInactiveTintColor: '#999',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: {
            height: 80,
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            paddingBottom: 10,
          },
        }}
      >
        <Screen
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Screen
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
          name="Perfil"
          component={Profile}
        />
        <Screen
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="contacts" size={size} color={color} />
            ),
          }}
          name="Contato"
          component={Contact}
        />
      </Navigator>
    </NavigationContainer>
  )
}
