import DrawerRoutes from './drawer.routes'
import { NavigationContainer } from '@react-navigation/native'

export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  )
}
