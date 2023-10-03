import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { Routes } from './src/routers'
import Header from './src/components/Header'

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Header />
      <Routes />
    </>
  )
}
