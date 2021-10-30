import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  title: string
  onPress: () => void
  style: object
}

export default function Button({ title, onPress, style }: Props) {
  return (
    <TouchableOpacity style={style} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
})
