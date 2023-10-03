import Login from '../views/Login'
import { createStackNavigator } from '@react-navigation/stack'

export function StackRoutes() {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  )
}
