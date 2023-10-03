import { Image, StyleSheet, TextInput, View } from 'react-native'
import CustonButton from '../components/CustonButton'

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require('../../assets/register.png')}
          alt="login-image"
        />
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Senha" />

        <CustonButton title="Enviar" />
        <CustonButton title="Fazer Login" route="Login" />
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  image: {
    objectFit: 'cover',
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  input: {
    padding: 10,
    paddingLeft: 20,
    borderRadius: 8,
    backgroundColor: '#ddd',
    marginTop: 20,
    marginHorizontal: 20,
    width: '100%',
  },
})
