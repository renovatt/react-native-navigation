import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capsule</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ddd',
  },
  title: {
    color: '#ffa200',
    fontSize: 24,
    fontWeight: 'bold',
    borderStyle: 'solid',
    textAlign: 'center',
  },
})
