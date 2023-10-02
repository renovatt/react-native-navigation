import { StyleSheet, Text } from 'react-native'

export default function Title({ title }: { title: string }) {
  return <Text style={styles.title}>{title}</Text>
}

export const styles = StyleSheet.create({
  title: {
    color: '#ffa200',
    fontSize: 24,
    fontWeight: 'bold',
    borderStyle: 'solid',
    textAlign: 'center',
  },
})
