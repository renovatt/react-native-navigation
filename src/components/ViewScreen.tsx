import { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

type ViewScreenProps = {
  children: ReactNode
}

export default function ViewScreen({ children }: ViewScreenProps) {
  return <View style={styles.container}>{children}</View>
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
})
