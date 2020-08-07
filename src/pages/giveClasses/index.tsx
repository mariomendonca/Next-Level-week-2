import React from 'react'
import { View, ImageBackground, Text } from 'react-native'

import styles from './styles'

import giveclassesBgImage from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function GiveClasses() {
  const {goBack} = useNavigation()

  function handleNavigateBack() {
    goBack()
    //poderia usar direto no onPress, porem se no futuro precisar de mudancas assim fica mais facil
  }

  return (
  <View style={styles.container}>
    <ImageBackground 
      source={giveclassesBgImage} 
      style={styles.content}
      resizeMode="contain"
    >
      <Text style={styles.title}>Quer ser um Proffy?</Text>
      <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web</Text>
    </ImageBackground>

    <RectButton onPress={handleNavigateBack} style={styles.okButton}>
      <Text style={styles.okButtonText}> Tudo bem!</Text>
    </RectButton>
  </View>
)}