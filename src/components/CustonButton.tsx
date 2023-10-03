import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  route?: string
}

export default function CustonButton({ title, route, ...rest }: ButtonProps) {
  const { navigate } = useNavigation()

  const handleLogin = () => {
    navigate(route as never)
  }

  return (
    <TouchableOpacity {...rest} onPress={handleLogin} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: '#ffa200',
    marginTop: 20,
    padding: 10,
    marginHorizontal: 20,
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
