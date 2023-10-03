import Home from '../views/Home'
import Contact from '../views/Contact'
import { Platform } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function TabRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator()
  return (
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
        name="Início"
        component={Home}
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
  )
}
