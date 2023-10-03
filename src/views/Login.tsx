import CustonButton from '../components/CustonButton'
import { Image, StyleSheet, TextInput, View } from 'react-native'

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require('../../assets/login.png')}
          alt="login-image"
        />
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Senha" />

        <CustonButton title="Enviar" />
        <CustonButton title="Cadastrar" route="register" />
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
