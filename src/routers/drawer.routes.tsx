import TabRoutes from './tab.routes'
import Profile from '../views/Profile'
import Register from '../views/Register'
import { StackRoutes } from './stack.routes'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'

export default function DrawerRoutes() {
  const { Navigator, Screen } = createDrawerNavigator()
  return (
    <Navigator
      screenOptions={{
        title: '',
        drawerActiveTintColor: '#ffa200',
        drawerInactiveTintColor: '#999',
        drawerActiveBackgroundColor: 'transparent',
      }}
    >
      <Screen
        options={{
          drawerIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          drawerLabel: 'Início',
        }}
        name="menu"
        component={TabRoutes}
      />
      <Screen
        options={{
          drawerIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          drawerLabel: 'Perfil',
        }}
        name="profile"
        component={Profile}
      />
      <Screen
        options={{
          drawerIcon: ({ size, color }) => (
            <AntDesign name="login" size={size} color={color} />
          ),
          drawerLabel: 'Login',
        }}
        name="login"
        component={StackRoutes}
      />
      <Screen
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="login" size={size} color={color} />
          ),
          drawerLabel: 'Cadastro',
        }}
        name="register"
        component={Register}
      />
    </Navigator>
  )
}
