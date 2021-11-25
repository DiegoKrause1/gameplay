import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn() {


  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        source={IllustrationImg}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          title="Entre com o Discord"
          activeOpacity={0.7}
        />
      </View>
    </View>
  )
}