import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles'

export function SignIn() {
  const [text, setText] = useState('')


  return (
    <View style={styles.container}>
      <Text>DIEGO</Text>
      <TextInput onChangeText={setText} style={styles.input}/>
      <Text>
        {text}
      </Text>
    </View>
  )
}